const sql = require('./database');

class Console {
  constructor(consoles) {
    this.name = consoles.name;
    this.brand = consoles.brand;
    this.releaseYear = consoles.releaseYear;
  }

  static getAll(result) {
    const query = {
      text: `SELECT *
             FROM consoles AS c
             ORDER BY c.name ASC`,
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }
}

module.exports = Console;
