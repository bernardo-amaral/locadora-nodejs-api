const sql = require('./database');

class Token {
  static storageToken(token, userId, result) {
    this.disableUsersTokens(userId, () => {
      const query = {
        text: 'INSERT INTO tokens (token, user_id) VALUES ($1, $2)',
        values: [token, userId],
      };
      sql.query(query)
        .then(response => result(null, response.rows))
        .catch(e => e.stack);
    });
  }

  static disableUsersTokens(userId, result) {
    const query = {
      text: 'UPDATE tokens SET active = $1 WHERE user_id = $2',
      values: ['N', userId],
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => result(e.stack));
  }

  static checkTokenStatus(token, result) {
    sql.query('SELECT token FROM tokens WHERE active = ? AND token = ?', ['S', token], (error, rows) => {
      if (error) {
        result(error, null);
      } else {
        result(null, (rows.length > 0));
      }
    });
  }
}

module.exports = Token;
