/* eslint-disable class-methods-use-this */
const sql = require('./database');

class TokensModel {
  constructor({ database }) {
    this.database = database;
  }

  async insertToken(token, userId) {
    const query = {
      text: 'INSERT INTO tokens (token, user_id) VALUES ($1, $2)',
      values: [token, userId],
    };
    try {
      const disabledTokens = await this.disableUsersTokens(userId);
      if (disabledTokens) {
        const response = await sql.query(query);
        return response;
      }
      return false;
    } catch (error) {
      throw new Error(error.text);
    }
  }

  async disableUsersTokens(userId) {
    try {
      const query = {
        text: 'UPDATE tokens SET active = $1 WHERE user_id = $2',
        values: ['N', userId],
      };
      const response = await sql.query(query);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async checkTokenStatus(token, result) {
    const query = {
      text: 'SELECT token FROM tokens WHERE active = $1 AND token = $2',
      values: ['S', token],
    };
    await sql.query(query)
      .then((response) => result(null, {
        sucess: (response.rowCount > 0),
      }))
      .catch((error) => result(error));
  }
}

module.exports = TokensModel;
