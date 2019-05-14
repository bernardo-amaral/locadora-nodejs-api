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
      text: `SELECT g.game_id,
                    g.title,
                    g.developer,
                    g.genre,
                    g.release_year,
                    g.cover_picture,
                    g.mode,
                    c.name AS console
             FROM games AS g
             LEFT JOIN consoles AS c ON (c.console_id=g.console_id)
             ORDER BY g.title ASC`,
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }

  static getByUserId(userId, result) {
    const query = {
      text: `SELECT g.game_id,
                    g.title,
                    g.developer,
                    g.genre,
                    g.release_year,
                    g.cover_picture,
                    g.mode,
                    c.name AS console
             FROM games AS g
             LEFT JOIN users_games AS ug ON (ug.game_id=g.game_id)
             LEFT JOIN consoles AS c ON (c.console_id=g.console_id)
             WHERE ug.user_id = $1
             ORDER BY g.title ASC`,
      values: [userId],
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }

  static getByUserAndPlatform(userId, consoleId, result) {
    const query = {
      text: `SELECT g.game_id,
                    g.title,
                    g.developer,
                    g.genre,
                    g.release_year,
                    g.cover_picture,
                    g.mode,
                    c.name AS console
             FROM games AS g
             LEFT JOIN users_games AS ug ON (ug.game_id=g.game_id)
             LEFT JOIN consoles AS c ON (c.console_id=g.console_id)
             WHERE ug.user_id = $1
             AND c.console_id = $2
             ORDER BY g.title ASC`,
      values: [userId, consoleId],
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }
}

module.exports = Game;
