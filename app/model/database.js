const { Client } = require('pg');

const connectionString = 'postgres://apiadmin:apipass@apidb:5432/myapi';

const pg = new Client({ connectionString });

pg.connect((err) => {
  if (err) throw err;
});

module.exports = pg;
