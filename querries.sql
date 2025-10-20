DROP TABLE users, items, archive;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  region VARCHAR(100)
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  location VARCHAR(100),
  category_id INTEGER REFERENCES categories(id),
  seller_id INTEGER REFERENCES users(id),
  images TEXT[] NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE archive (
  id INT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  location VARCHAR(100),
  category_id INTEGER REFERENCES categories(id),
  seller_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  removed_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO categories (name) 
VALUES 
  ('Electronics'),
  ('Books'),
  ('Games'),
  ('Furniture'),
  ('Toys'),
  ('Apparel'),
  ('Musical instruments'),
  ('Shoes');


  -- ask jignesh sir --
  CREATE INDEX idx_items_category_id ON items(category_id);
  CREATE INDEX idx_items_seller_id ON items(seller_id);`