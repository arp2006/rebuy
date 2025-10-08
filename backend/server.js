import express from "express";
import pg from "pg";
import cors from "cors";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "ReDeal",
  password: "1472",
  port: 5432,
});
db.connect();

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Malformed token' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.userId = decoded.userId;
    req.email = decoded.email;
    next();
  });
}

app.get('/api/profile', verifyToken, async (req, res) => {
  try {
    const result = await db.query('SELECT id, name, email FROM users WHERE id = $1', [req.userId]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get("/api/categories", async (req,res) => {
  const categories = await db.query('SELECT name FROM categories');
  res.json(categories.rows);
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
    return res.status(400).json({error: 'Missing required fields'});
  }
  try {
    const existing = await db.query('SELECT id, name, password_hash FROM users WHERE email = $1', [email]);
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
    return res.status(400).json({error: 'Missing required fields'});
  }
  if (password !== repeatPassword) {
    return res.status(400).json({error: 'Passwords do not match'});
  }
  try {
    const existing = await db.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(409).json({error: 'Email is already registered'});
    }  
    const hashedPass = await bcrypt.hash(password, 10);
    const result = await db.query(
      'INSERT INTO users(name,email,password_hash,region) VALUES($1, $2, $3, $4) RETURNING id, name, email',
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
    res.status(500).json({error:'Internal server error'});
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});