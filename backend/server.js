import express from "express";
import pg from "pg";
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

const db = new pg.Client({
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

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    // No token—set user to fallback user 8
    req.userId = 8;
    return next();
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    // Malformed token—set user to fallback user 8
    req.userId = 8;
    return next();
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        // Token expired—set fallback user 8
        req.userId = 8;
        next();
      } else {
        return res.status(403).json({ error: 'Invalid token' });
      }
    } else {
      req.userId = decoded.userId;
      req.email = decoded.email;
      next();
    }
  });
}

app.get('/api/profile', verifyToken, async (req, res) => {
  try {
    const result = await db.query('SELECT id, name, email FROM users WHERE id = $1;', [req.userId]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/api/categories", async (req, res) => {
  const categories = await db.query('SELECT name FROM categories;');
  res.json(categories.rows);
});

app.post("/api/listings", async (req, res) => {
  const { uid } = req.body;
  try {
    const posts = await db.query('SELECT * FROM items WHERE seller_id != $1;', [uid]);
    res.json(posts.rows);
  }
  catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/account-listings", async (req, res) => {
  const { uid } = req.body;
  try {
    const posts = await db.query('SELECT * FROM items WHERE seller_id = $1;', [uid]);
    res.json(posts.rows);
  }
  catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/archive", async (req, res) => {
  const { uid } = req.body;
  try {
    const posts = await db.query('SELECT * FROM archive WHERE seller_id = $1;', [uid]);
    res.json(posts.rows);
  }
  catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/deletelisting", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'Missing item id' });
  }
  try {
    await db.query('BEGIN;');
    await db.query(`
      INSERT INTO archive (id, title, description, price, location, category_id, seller_id, images, created_at, removed_at)
      SELECT id, title, description, price, location, category_id, seller_id, images, created_at, NOW()
      FROM items
      WHERE id = $1;
    `, [id]);
    await db.query('DELETE FROM items WHERE id = $1;', [id]);
    await db.query('COMMIT;');
    res.status(200).json({ message: 'Item successfully archived and deleted' });
  }
  catch (err) {
    await db.query('ROLLBACK;');
    console.error(err);
    res.status(500).json({ error: 'Failed to delete and archive item' });
  }
});

app.post("/api/info", async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: "Missing 'id' in request body" });
  }
  try {
    const post = await db.query('SELECT * FROM items JOIN users ON items.seller_id = users.id WHERE items.id = $1;', [id]);
    if (post.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post.rows[0]);
  }
  catch (error) {
    console.error('Error fetching listings:', error);
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

app.post('/api/create', async (req, res) => {
  try {
    const { title, desc, price, location, category, uid, imageUrls } = req.body;
    if (!title || !desc || !price || !location || !category || !uid || !Array.isArray(imageUrls) || imageUrls.length === 0) {
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

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const existing = await db.query('SELECT id, name, password_hash FROM users WHERE email = $1;', [email]);
    if (existing.rows.length === 0) {
      return res.status(404).json({ error: 'Account with given email does not exist' });
    }
    const user = existing.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const userData = { id: user.id, name: user.name, email: email };
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ user: userData, token });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/register', async (req, res) => {
  const { name, email, password, repeatPassword, region } = req.body;
  if (!name || !email || !password || !repeatPassword) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (password !== repeatPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }
  try {
    const existing = await db.query('SELECT id FROM users WHERE email = $1;', [email]);
    if (existing.rows.length > 0) {
      return res.status(409).json({ error: 'Email is already registered' });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const result = await db.query(
      'INSERT INTO users(name,email,password_hash,region) VALUES($1, $2, $3, $4) RETURNING id, name, email;',
      [name, email, hashedPass, region || null]
    );
    const userData = result.rows[0];
    const token = jwt.sign({ userId: userData.id, email: userData.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(201).json({ user: userData, token });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});