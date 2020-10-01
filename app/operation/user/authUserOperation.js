/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
const jwt = require('jsonwebtoken');

class AuthUserOperation {
  constructor({ usersModel, tokensModel, config }) {
    this.config = config;
    this.usersModel = usersModel;
    this.tokensModel = tokensModel;
  }

  async execute(body) {
    const userData = body;
    userData.password = await this.usersModel.encryptPassword(userData.password);

    const { rows, error } = await this.usersModel.login(userData);
    if (error) throw new Error('Access denied');

    const token = await jwt.sign({ name: rows.name, email: rows.email }, this.config.jwtSecret, { expiresIn: '24h' });

    if (token) await this.tokensModel.insertToken(token, rows.user_id);

    return rows;
  }
}

module.exports = AuthUserOperation;
