const { Client } = require('pg');

const connectionString = 'postgres://apiadmin:apipass@localhost:5435/myapi';

const pg = new Client({ connectionString });

pg.connect((err) => {
  if (err) throw err;
});

module.exports = pg;
