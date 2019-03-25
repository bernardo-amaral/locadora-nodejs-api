const sql = require('./database');

class User {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }

  static login(user, result) {
    const query = {
      text: 'SELECT user_id FROM users WHERE email = $1 AND password = $2',
      values: [user.email, user.password],
    };
    sql.query(query)
      .then(response => result(null, (response.rows.length > 0), response.rows[0].user_id))
      .catch(e => result(e.stack));
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
