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

  static async checkTokenStatus(token, result) {
    const query = {
      text: 'SELECT token FROM tokens WHERE active = $1 AND token = $2',
      values: ['S', token],
    };
    await sql.query(query)
      .then(response => result(null, {
        sucess: (response.rowCount > 0),
      }))
      .catch(error => result(error));
  }
}

module.exports = Token;
