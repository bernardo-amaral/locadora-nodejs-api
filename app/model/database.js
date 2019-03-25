const { Client } = require('pg');

const connectionString = 'postgres://apiadmin:apipass@localhost/myapi';

const pg = new Client({ connectionString });

pg.connect((err) => {
  if (err) throw err;
});

module.exports = pg;
