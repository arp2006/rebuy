import { Pool } from "pg";

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ReDeal",
  password: "1472",
  port: 5432,
});

export default db;