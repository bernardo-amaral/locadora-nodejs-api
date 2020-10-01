/* eslint-disable class-methods-use-this */
const crypto = require('crypto');
const sql = require('./database');

class UsersModel {
  constructor({ database }) {
    this.database = database;
    //   this.id = user.id;
    //   this.name = user.name;
    //   this.email = user.email;
    //   this.password = user.password;
  }

  async encryptPassword(password) {
    if (password) {
      const encryptedPassword = await crypto.createHash('md5').update(password).digest('hex');
      return encryptedPassword;
    }
    return password;
  }

  async login(userData) {
    const query = {
      text: 'SELECT user_id, name, email FROM users WHERE email = $1 AND password = $2 LIMIT 1',
      values: [userData.email, userData.password],
    };

    try {
      const { rows, error } = await this.database.query(query);
      if (error) throw new Error('Access denied!');

      return { rows: rows[0], error };
    } catch (error) {
      return error;
    }
  }

  static async createUser(newUser, result) {
    try {
      if (!newUser.email || !newUser.password || !newUser.name) {
        result('Informe os campos [name, email, password].');
      }

      const encryptedPassword = crypto.createHash('md5').update(newUser.password).digest('hex');

      let query = {
        text: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        values: [newUser.name, newUser.email, encryptedPassword],
      };
      if (newUser.userId) {
        query = {
          text: 'INSERT INTO users (user_id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
          values: [newUser.userId, newUser.name, newUser.email, encryptedPassword],
        };
      }
      const checkQuery = {
        text: 'SELECT email FROM users WHERE email = $1',
        values: [newUser.email],
      };
      const responseCheckEmail = await sql.query(checkQuery);

      if (responseCheckEmail.rowCount > 0) {
        result(`Duplicated email. ${newUser.email}`);
      } else {
        const response = await sql.query(query);
        result(null, {
          sucess: (response.rowCount > 0),
          userId: response.rows[0].user_id,
          email: response.rows[0].email,
          name: response.rows[0].name,
        });
      }
    } catch (error) {
      result(error.text);
    }
  }

  static getById(userId, result) {
    const query = {
      text: 'SELECT * FROM users WHERE user_id = $1 ',
      values: [userId],
    };
    sql.query(query)
      .then((response) => result(null, response.rows))
      .catch((e) => e.stack);
  }

  async getAll() {
    try {
      const query = 'SELECT * FROM users ORDER BY user_id ASC';
      const { rows } = await this.database.query({ text: query });
      return rows;
    } catch (error) {
      return error;
    }
  }

  static delete(id, result) {
    const query = {
      text: 'DELETE FROM users WHERE user_id = $1 ',
      values: [id],
    };
    sql.query(query)
      .then((response) => result(null, (response.rowCount > 0)))
      .catch((e) => result(e.stack));
  }
}

module.exports = UsersModel;
