-- clean slate
DROP TABLE IF EXISTS messages, conversations, archive, items, user_data, users, categories CASCADE;

-- categories FIRST
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO categories (name) VALUES
  ('Electronics'),
  ('Books'),
  ('Games'),
  ('Furniture'),
  ('Toys'),
  ('Apparel'),
  ('Musical instruments'),
  ('Shoes');

-- users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  region VARCHAR(100)
);

CREATE TABLE user_data (
  id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(50) NOT NULL,
  bio VARCHAR(150)
);

-- items
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  location VARCHAR(100),
  category_id INTEGER REFERENCES categories(id),
  seller_id INTEGER REFERENCES users(id),
  images TEXT[] NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- archive
CREATE TABLE archive (
  id INT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  location VARCHAR(100),
  category_id INTEGER REFERENCES categories(id),
  seller_id INTEGER REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  images TEXT[] NOT NULL,
  removed_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- chat
CREATE TABLE conversations (
  id SERIAL PRIMARY KEY,
  item_id INT NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  user1 INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  user2 INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  CHECK (user1 <> user2),
  UNIQUE (item_id, user1, user2)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  conv_id INT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  msg TEXT NOT NULL CHECK (length(msg) <= 2000),
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_conversations_user1 ON conversations(user1);
CREATE INDEX idx_conversations_user2 ON conversations(user2);
CREATE INDEX idx_messages_conv_id ON messages(conv_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);
