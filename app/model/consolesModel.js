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

  static getByUserId(userId, result) {
    const query = {
      text: `SELECT c.*
             FROM consoles AS c
             LEFT JOIN games AS g ON (g.console_id=c.console_id)
             LEFT JOIN users_games AS ug ON (g.game_id=ug.game_id)
             WHERE ug.user_id=$1
             GROUP BY console_id, name, brand, release_year
             ORDER BY c.name ASC`,
      values: [userId],
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }
}

module.exports = Console;
