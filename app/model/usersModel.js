const sql = require('./database');

class User {
  constructor(user) {
    this.userId = user.userId;
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
    let query = {
      text: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING user_id',
      values: [newUser.name, newUser.email, newUser.password],
    };
    if (newUser.userId) {
      query = {
        text: 'INSERT INTO users (user_id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING user_id',
        values: [newUser.userId, newUser.name, newUser.email, newUser.password],
      };
    }
    sql.query(query)
      .then(response => result(null, {
        sucess: (response.rowCount > 0),
        userId: response.rows[0].user_id,
      }))
      .catch(e => result(null, e.stack));
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
    const query = {
      text: 'DELETE FROM users WHERE user_id = $1 ',
      values: [id],
    };
    sql.query(query)
      .then(response => result(null, (response.rowCount > 0)))
      .catch(e => result(e.stack));
  }
}

module.exports = User;
