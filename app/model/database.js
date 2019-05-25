const { Client } = require('pg');
const config = require('../../config');

const connectionString = `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`;

const pg = new Client({ connectionString });

pg.connect((err) => {
  if (err) throw err;
});

module.exports = pg;
