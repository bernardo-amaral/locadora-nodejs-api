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
    const query = {
      text: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
      values: [newUser.name, newUser.email, newUser.password],
    };
    sql.query(query)
      .then(response => result(null, (response.rowCount > 0)))
      .catch(e => result(e.stack));
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
