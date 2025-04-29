require('dotenv').config();
const { Pool } = require('pg');
console.log("connecting to sql");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  },
});
console.log("connected to supabase sql")

module.exports = pool;