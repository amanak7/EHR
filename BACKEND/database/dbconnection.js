import pg from "pg";
import env from "dotenv";
// import { Pool } from "pg";
env.config();
export const db = new pg.Client({
  connectionString:'postgresql://postgres:maabappa1@localhost:5432/EHR'
  });