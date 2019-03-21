const mysql = require('mysql');

// local mysql db connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'locadoraadmin',
  password: 'locadorapass',
  database: 'locadora',
  port: 33060
});

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
