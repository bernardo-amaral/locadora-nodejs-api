const sql = require('./db');

class User {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }

  static login(user, result) {
    sql.query('SELECT * FROM users WHERE email = ? AND password = ?', [user.email, user.password], (error, rows) => {
      if (error) {
        result(error, null);
      }
      result(null, (rows.length > 0));
    });
  }

  static createUser(newUser, result) {
    sql.query('INSERT INTO users set ?', newUser, (error, response) => {
      if (error) {
        result(error, null);
      } else {
        result(null, response.insertId);
      }
    });
  }

  static getById(userId, result) {
    sql.query('SELECT * FROM users WHERE user_id = ? ', userId, (error, response) => {
      if (error) {
        result(error, null);
      } else {
        result(null, response);
      }
    });
  }

  static getAll(result) {
    sql.query('SELECT * FROM users ORDER BY user_id ASC', (error, response) => {
      if (error) {
        result(null, error);
      } else {
        result(null, response);
      }
    });
  }

  static remove(id, result) {
    sql.query('DELETE FROM users WHERE user_id = ?', [id], (error, response) => {
      if (error) {
        result(null, error);
      } else {
        result(null, response);
      }
    });
  }
}

module.exports = User;
