const { Client } = require('pg');
const config = require('../database');

const connectionString = `postgres://${config.dev.user}:${config.dev.password}@${config.dev.host}:${config.dev.port}/${config.dev.database}`;

const pg = new Client({ connectionString });

pg.connect((err) => {
  if (err) throw err;
});

module.exports = pg;
