const { Client } = require('pg');
const util = require('util');
const config = require('../../config');

const connectionString = `postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`;

const pg = new Client({ connectionString });

const debuglog = util.debuglog('API-LOGGER');

debuglog('[INFO] CONNECTION DATABASE');
pg.connect((error) => {
  if (error) {
    debuglog(`[ERROR] DATABASE CONNECTION ERROR: ${JSON.stringify(error)}`);
  }
});

module.exports = pg;
