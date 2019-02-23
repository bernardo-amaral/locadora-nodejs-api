const sql = require('./database');

class Token {
  static storageToken(token, userId, result) {
    this.disableUsersTokens(userId, () => {
      sql.query('INSERT INTO tokens SET token = ?, user_id = ?', [token, userId], (error, response) => {
        if (error) {
          result(error, null);
        } else {
          result(null, response);
        }
      });
    });
  }

  static disableUsersTokens(userId, result) {
    sql.query('UPDATE tokens SET active = ? WHERE user_id = ?', ['N', userId], (error, response) => {
      if (error) {
        result(error, null);
      } else {
        result(null, response);
      }
    });
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
