const mysql = require('mysql');

// local mysql db connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'apiadmin',
  password: 'apipass',
  database: 'myapi',
  port: 3307,
});

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
