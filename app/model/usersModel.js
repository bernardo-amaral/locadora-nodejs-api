const sql = require('./db.js');

class User {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }

  static createUser(newUser, result) {
    sql.query('INSERT INTO users set ?', newUser, (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res.insertId);
      }
    });
  }

  static getById(userId, result) {
    sql.query('SELECT * FROM users WHERE user_id = ? ', userId, (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }

  static getAll(result) {
    sql.query('SELECT * FROM users ORDER BY user_id ASC', (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  static remove(id, result) {
    sql.query('DELETE FROM users WHERE user_id = ?', [id], (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
}

module.exports = User;
