import express from "express";
import { Pool } from "pg";
import cors from "cors";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import cloudinary from 'cloudinary';
import multer from 'multer';
import fs from 'fs';

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const upload = multer({ dest: 'temp/' });

function auth(req, res, next) {
  const header = req.headers.authorization;
  console.log("AUTH HEADER:", header);
  if (!header) {
    req.user = null;
    return next();
  }
  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("JWT DECODED PAYLOAD:", decoded);
    req.user = decoded;
    next();
  } catch (e) {
    console.log("JWT VERIFY ERROR:", e.message);
    req.user = null;
    next();
  }
}

app.use(auth);

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ReDeal",
  password: "1472",
  port: 5432,
});
db.connect();

cloudinary.v2.config({
  cloud_name: 'dpw1mj4zg',
  api_key: '864543138334274',
  api_secret: 'vTCiWElpI42wvCPj3d_QCyqaKnA',
});

function requireAuth(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: "Login required" });
  }
  next();
}

app.get("/api/info", requireAuth, async (req, res) => {
  try {
    const result = await db.query(
      `
        SELECT ud.name, u.email, u.username
        FROM users u
        JOIN user_data ud
          ON u.id = ud.id
        WHERE u.id = $1;
      `,
      [req.user.sub]
    );
    res.json(result.rows[0]); 
  }
  catch (error) {
    console.error("Error fetching user info: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/me", async (req, res) => {
  if (!req.user) {
    return res.json({ user: null });
  }
  res.json({
    user: {
      id: req.user.sub
    }
  })
});

app.get("/api/categories", async (req, res) => {
  const categories = await db.query('SELECT name FROM categories;');
  res.json(categories.rows);
});

app.post("/api/listings", async (req, res) => {
  const { location, minP, maxP, categories } = req.body;
  const uid = req.user?.sub ?? null;
  // console.log(uid);

  try {
    let conditions = [];
    let params = [];
    if (uid) {
      params.push(uid);
      conditions.push(`seller_id != $${params.length}`);
    }
    if (location) {
      params.push(location);
      conditions.push(`location = $${params.length}`);
    }
    if (minP) {
      params.push(minP);
      conditions.push(`price >= $${params.length}`);
    }
    if (maxP) {
      params.push(maxP);
      conditions.push(`price <= $${params.length}`);
    }
    if (categories && categories.length > 0) {
      params.push(categories);
      conditions.push(`category_id = ANY($${params.length})`);
    }
    const whereClause = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : "";

    const query = `SELECT * FROM items ${whereClause};`;
    const posts = await db.query(query, params);
    res.json(posts.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/search", async (req, res) => {
  const { uid, searchQuery, location, minP, maxP, categories } = req.body;
  try {
    let qText = `SELECT * FROM items WHERE seller_id != $1 AND (title ILIKE '%' || $2 || '%' OR description ILIKE '%' || $2 || '%') `;
    let qParams = [uid, searchQuery];
    let i = 3;
    if (location) {
      qText += `AND location = $${i++} `;
      qParams.push(location);
    }
    if (minP) {
      qText += `AND price >= $${i++} `;
      qParams.push(minP);
    }
    if (maxP) {
      qText += `AND price <= $${i++} `;
      qParams.push(maxP);
    }
    if (categories && categories.length > 0) {
      qText += `AND category_id = ANY($${i++}) `;
      qParams.push(categories);
    }
    qText += ';';
    const posts = await db.query(qText, qParams);
    res.json(posts.rows);
  }
  catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/account-listings", requireAuth, async (req, res) => {
  const uid = req.user.sub;
  try {
    const posts = await db.query('SELECT * FROM items WHERE seller_id = $1;', [uid]);
    res.json(posts.rows);
  }
  catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/archive", requireAuth, async (req, res) => {
  const uid = req.user.sub;
  try {
    const posts = await db.query('SELECT * FROM archive WHERE seller_id = $1;', [uid]);
    res.json(posts.rows);
  }
  catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Internal server error' });

  }
});

app.delete('/api/items/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.sub;
  const client = await db.connect();
  try {
    await client.query('BEGIN');
    const itemRes = await client.query(
      `
      SELECT *
      FROM items
      WHERE id = $1 AND seller_id = $2
      FOR UPDATE
      `,
      [id, userId]
    );
    if (itemRes.rows.length === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: 'Item not found or not authorized' });
    }
    const item = itemRes.rows[0];
    await client.query(
      `
      INSERT INTO archive
      (id, title, description, price, location, category_id, seller_id, created_at, images, removed_at)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,NOW())
      `,
      [
        item.id,
        item.title,
        item.description,
        item.price,
        item.location,
        item.category_id,
        item.seller_id,
        item.created_at,
        item.images
      ]
    );
    await client.query(
      'DELETE FROM items WHERE id = $1',
      [id]
    );
    await client.query('COMMIT');
    res.json({ message: 'Item deleted and archived successfully' });
  }
  catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'Failed to delete item' });
  }
  finally {
    client.release();
  }
});

app.get('/api/items/:id', async (req, res) => {
  try {
    const result = await db.query(
      `
      SELECT
        i.id, i.title, i.description, i.price, i.location, i.images, i.created_at,
        ud.id   AS seller_id, ud.name AS seller_name
        FROM items i
        JOIN user_data ud ON i.seller_id = ud.id
        WHERE i.id = $1;
      `,
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(result.rows[0]);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/items/:id/edit', requireAuth, async (req, res) => {
  try {
    const result = await db.query(
      `
      SELECT *
      FROM items
      WHERE id = $1 AND seller_id = $2;
      `,
      [req.params.id, req.user.sub]
    );
    if (result.rows.length === 0) {
      return res.status(403).json({ error: 'Not authorized' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.patch('/api/items/:id', requireAuth, async (req, res) => {
  const { title, description, price, location, category_id, images } = req.body;
  try {
    const result = await db.query(
      `
      UPDATE items
      SET
        title       = COALESCE($1, title),
        description = COALESCE($2, description),
        price       = COALESCE($3, price),
        location    = COALESCE($4, location),
        category_id = COALESCE($5, category_id),
        images      = COALESCE($6, images)
      WHERE id = $7 AND seller_id = $8
      RETURNING id;
      `,
      [
        title, description, price, location, category_id, images,
        req.params.id, req.user.sub
      ]
    );
    if (result.rowCount === 0) {
      return res.status(403).json({ error: 'Not authorized or item not found' });
    }
    res.json({ message: 'Post updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/upload-images', upload.array('images', 5), async (req, res) => {
  try {
    const uploadedUrls = [];
    for (const file of req.files) {
      const result = await cloudinary.v2.uploader.upload(file.path, {
        folder: 'marketplace_items',
        use_filename: true,
      });
      uploadedUrls.push(result.secure_url);
      fs.unlinkSync(file.path);
    }
    res.status(200).json({ imageUrls: uploadedUrls });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Image upload failed' });
  }
});

app.post('/api/create', requireAuth, async (req, res) => {
  try {
    const { title, desc, price, location, category, imageUrls } = req.body;
    const uid = req.user.sub;
    if (Number(uid) !== req.user.sub) {
      return res.status(403).json({ error: "Forbidden" });
    }
    if (!title || !desc || !price || !location || !category || !Array.isArray(imageUrls) || imageUrls.length === 0) {
      return res.status(400).json({ error: "Missing required fields or no images uploaded" });
    }
    const getCategory = await db.query('SELECT id FROM categories WHERE name = $1;', [category]);
    if (getCategory.rows.length === 0) {
      return res.status(400).json({ error: "Category not found" });
    }
    const category_id = getCategory.rows[0].id;
    await db.query(
      'INSERT INTO items(title, description, price, location, category_id, seller_id, images) VALUES($1, $2, $3, $4, $5, $6, $7);',
      [title, desc, price, location, category_id, uid, imageUrls]
    );
    res.status(201).json({ message: "Listing created successfully" });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create listing" });
  }
});

app.get('/api/details', requireAuth, async (req, res) => {
  try {
    const result = await db.query(`
      SELECT username, name, bio, email 
      FROM user_data ud JOIN users u
      ON ud.id = u.id
      WHERE ud.id=$1;
      `, [req.user.sub]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ error: 'User not found' });
    res.json(result.rows[0]);
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.patch('/api/changedetails', requireAuth, async (req, res) => {
  const { name, username, bio } = req.body;
  if (!username && !name && !bio) {
    return res.status(400).json({ error: 'Nothing to update' });
  }
  const id = req.user.sub;
  const clean = (v) => (typeof v === 'string' && v.trim() !== '' ? v.trim() : null);

  const newUsername = clean(username);
  const newName = clean(name);
  const newBio = clean(bio);

  if (!newUsername && !newName && !newBio) {
    return res.status(400).json({ error: 'Nothing to update' });
  }

  const client = await db.connect();
  try {
    await client.query('BEGIN');
    if (newUsername) {
      await client.query(
        'UPDATE users SET username = $1 WHERE id = $2;',
        [newUsername, id]
      );
    }
    if (newName || newBio) {
      await client.query(
        `
        UPDATE user_data
        SET
          name = COALESCE($1, name),
          bio  = COALESCE($2, bio)
        WHERE id = $3;
        `,
        [newName, newBio, id]
      );
    }
    await client.query('COMMIT');
    res.json({ message: 'Profile updated successfully.' });
  }
  catch (err) {
    await client.query('ROLLBACK');
    if (err.code === '23505') {
      return res.status(409).json({ error: 'Username already taken.' });
    }
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
  finally {
    client.release();
  }
});

app.patch('/api/changepassword', requireAuth, async (req, res) => {
  const { oldPass, newPass, confPass } = req.body;
  if (!oldPass || !newPass || !confPass) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  if (newPass !== confPass) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }
  if (oldPass === newPass) {
    return res.status(400).json({
      error: 'New password must be different from old password.'
    });
  }
  try {
    const result = await db.query(
      'SELECT password_hash FROM users WHERE id = $1;',
      [req.user.sub]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }
    const passwordMatch = await bcrypt.compare(
      oldPass,
      result.rows[0].password_hash
    );
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Old password is incorrect.' });
    }
    const hashedPass = await bcrypt.hash(newPass, 10);

    await db.query(
      'UPDATE users SET password_hash = $1 WHERE id = $2;',
      [hashedPass, req.user.sub]
    );
    res.json({ message: 'Password updated successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    let existing = await db.query('SELECT id, password_hash FROM users WHERE email = $1;', [email]);
    if (existing.rows.length === 0) {
      existing = await db.query('SELECT id, password_hash FROM users WHERE username = $1;', [email]);
      if (existing.rows.length === 0)
        return res.status(404).json({ error: 'Account with given email/usrname does not exist' });
    }
    const user = existing.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const userData = { id: user.id };
    // const userData = { id: user.id };
    const token = jwt.sign(
      { sub: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ user: userData, token });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/register', async (req, res) => {
  const { name, username, email, password, repeatPassword, region } = req.body;

  if (!name || !username || !email || !password || !repeatPassword) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (password !== repeatPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }
  const client = await db.connect();
  try {
    await client.query('BEGIN');
    const existing = await client.query(
      'SELECT id FROM users WHERE email = $1;',
      [email]
    );

    if (existing.rows.length > 0) {
      await client.query('ROLLBACK');
      return res.status(409).json({ error: 'Email is already registered' });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const result = await client.query(
      'INSERT INTO users(username, email, password_hash, region) VALUES($1, $2, $3, $4) RETURNING id;',
      [username, email, hashedPass, region || null]
    );
    await client.query(
      'INSERT INTO user_data (id, name) VALUES($1, $2);',
      [result.rows[0].id, name]
    );
    await client.query('COMMIT');
    const token = jwt.sign(
      { sub: result.rows[0].id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.status(201).json({
      user: { id: result.rows[0].id },
      token
    });
  }
  catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
  finally {
    client.release();
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});