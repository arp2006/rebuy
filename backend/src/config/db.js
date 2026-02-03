import { Pool } from "pg";
import { ENV } from "./env.js";

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ReDeal",
  password: ENV.PG_PASS,
  port: 5432,
});

export default db;