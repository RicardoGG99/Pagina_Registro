const Pool = require("pg").Pool;
require("dotenv").config();

const path = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const url = 'postgres://nsfcmnwwuzhlcg:09ca0e893737097d0b6eaeed9598c0593f358ba5f545dd0a67d395d41e2412f8@ec2-54-87-112-29.compute-1.amazonaws.com:5432/dapaa4934s3idn' //heroku addons

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? url : path,
});

module.exports = pool;