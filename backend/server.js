import express from "express";
import pg from "pg";
import cors from "cors";
import bcrypt from "bcrypt";

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "ReDeal",
  password: "1472",
  port: 5432,
});
db.connect();

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
    res.status(200).json({ user: userData });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/register', async (req, res) => {
  // console.log(req.body);
  const { name, email, password, repeatPassword, region } = req.body;
  if(!name || !email || !password || !repeatPassword){
    return res.status(400).json({error: 'Missing required fields'});
  }
  if(password !== repeatPassword){
    return res.status(400).json({error: 'Passwords do not match'});
  }
  try{
    const existing = await db.query('SELECT id FROM users WHERE email = $1', [email]);
    if(existing.rows.length > 0){
      return res.status(409).json({error: 'Email is already registered'});
    }  
    const hashedPass = await bcrypt.hash(password, 10);
    const result = await db.query(
      'INSERT INTO users(name,email,password_hash,region) VALUES($1, $2, $3, $4) RETURNING id, name, email',
      [name, email, hashedPass, region || null]
    );
    const userData = result.rows[0];
    res.status(201).json({user: userData});
  }
  catch(err){
    console.error(err);
    res.status(500).json({error:'Internal server error'});
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});