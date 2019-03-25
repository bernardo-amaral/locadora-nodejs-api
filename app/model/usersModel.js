const sql = require('./database');

class User {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }

  static login(user, result) {
    sql.query('SELECT user_id FROM users WHERE email = ? AND password = ?', [user.email, user.password], (error, rows) => {
      if (error) {
        result(error, null);
      } else {
        result(null, (rows.length > 0), JSON.parse(JSON.stringify(rows))[0].user_id);
      }
    });
  }

  static createUser(newUser, result) {
    sql.query('INSERT INTO users SET ?', newUser, (error, response) => {
      if (error) {
        result(error, null);
      } else {
        result(null, response);
      }
    });
  }

  static getById(userId, result) {
    const query = {
      text: 'SELECT * FROM users WHERE user_id = $1 ',
      values: [userId],
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }

  static getAll(result) {
    const query = {
      text: 'SELECT * FROM users ORDER BY user_id ASC',
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => e.stack);
  }

  static delete(id, result) {
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
