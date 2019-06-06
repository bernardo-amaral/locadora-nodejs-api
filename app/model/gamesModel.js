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

  static async getAll(result) {
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
    await sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }

  static async getByUserId(userId, result) {
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
    await sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }

  static async getByConsoleId(consoleId, result) {
    const query = {
      text: `SELECT * FROM games
             WHERE console_id = $1
             ORDER BY title`,
      values: [consoleId],
    };
    await sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }

  static async getByUserAndPlatform(userId, consoleId, result) {
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
    await sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }

  static async createUserGame(userId, gameId, result) {
    const query = {
      text: 'INSERT INTO users_games (user_id, game_id) VALUES ($1, $2) RETURNING user_game_id',
      values: [userId, gameId],
    };
    await sql.query(query)
      .then(response => result(null, {
        sucess: (response.rowCount > 0),
        userGameId: response.rows[0].user_game_id,
      }))
      .catch(error => result(error));
  }
}

module.exports = Game;
