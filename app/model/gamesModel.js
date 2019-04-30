const sql = require('./database');

class Game {
  constructor(game) {
    this.title = game.title;
    this.developer = game.developer;
    this.genre = game.genre;
    this.platform = game.platform;
    this.releaseYear = game.releaseYear;
    this.coverPicture = game.coverPicture;
  }

  static getAll(result) {
    const query = {
      text: 'SELECT * FROM games ORDER BY title ASC',
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }
}

module.exports = Game;
