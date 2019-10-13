const crypto = require('crypto');
const sql = require('./database');

class User {
  constructor(user) {
    this.userId = user.userId;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }

  static encryptPassword(password) {
    if (password) {
      return crypto.createHash('md5').update(password).digest('hex');
    }
    return password;
  }

  static async login(user, result) {
    const query = {
      text: 'SELECT user_id, name, email FROM users WHERE email = $1 AND password = $2',
      values: [user.email, user.password],
    };

    if (!user.email || !user.password) {
      result('Informe os campos [email, password].');
    }

    try {
      const response = await sql.query(query);
      if (!response.rowCount) {
        throw new Error('Access denied!');
      } else {
        result(null, {
          userLogged: true,
          userId: response.rows[0].user_id,
          name: response.rows[0].name,
          email: response.rows[0].email,
        });
      }
    } catch (error) {
      result(error.text);
    }
  }

  static createUser(newUser, result) {
    let query = {
      text: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      values: [newUser.name, newUser.email, newUser.password],
    };
    if (newUser.userId) {
      query = {
        text: 'INSERT INTO users (user_id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [newUser.userId, newUser.name, newUser.email, newUser.password],
      };
    }
    sql.query(query)
      .then((response) => result(null, {
        sucess: (response.rowCount > 0),
        userId: response.rows[0].user_id,
        email: response.rows[0].email,
        name: response.rows[0].name,
      }))
      .catch((e) => result(null, e.stack));
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

  static getAll(result) {
    const query = {
      text: 'SELECT * FROM users ORDER BY user_id ASC',
    };
    sql.query(query)
      .then((response) => result(null, response.rows))
      .catch((e) => e.stack);
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

module.exports = User;
