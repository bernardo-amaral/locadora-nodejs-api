const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../model/usersModel');
const TokenVerify = require('../model/tokensModel');
const config = require('../../config');

class UserController {
  static listAll(request, response) {
    User.getAll((err, user) => {
      if (err) { response.send(err); }
      response.send(user);
    });
  }

  static async authUser(request, response) {
    const loginUser = new User(request.body);
    loginUser.password = crypto.createHash('md5').update(loginUser.password).digest('hex');

    await User.login(loginUser, (error, userLogged, userId) => {
      if (error) {
        response.status(500).json({
          success: false,
          error: error.detail,
        });
      }

      if (userLogged) {
        const token = jwt.sign({ name: loginUser.name, email: loginUser.email }, config.jwtSecret, { expiresIn: '24h' });
        TokenVerify.storageToken(token, userId, () => {
          response.status(200).json({
            userId,
            user: loginUser.name,
            token,
          });
        });
      } else {
        response.status(400).json({ error: true, message: 'Access denied!' });
      }
    });
  }

  static logoutUser(request, response) {
    const { userId } = request.body;
    if (!userId) {
      response.status(400).send({ error: true, message: 'Please provide userId' });
    } else {
      TokenVerify.disableUsersTokens(userId, (error) => {
        if (error) { response.send(error); }
        response.json({ message: 'Session closed' });
      });
    }
  }

  static getById(request, response) {
    User.getById(request.params.userId, (error, user) => {
      if (error) { response.send(error); }
      response.json(user);
    });
  }

  static delete(request, response) {
    User.delete(request.params.userId, (error, dbResponse) => {
      if (error) { response.send(error); }
      response.json({ success: dbResponse });
    });
  }

  static createAUser(request, response) {
    const newUser = new User(request.body);
    if (!newUser.name && !newUser.email && !newUser.password) {
      response.status(400).send({ error: true, message: 'Please provide user required fields' });
    } else {
      newUser.password = crypto.createHash('md5').update(newUser.password).digest('hex');
      User.createUser(newUser, (error, dbResponse) => {
        if (error) { response.send(error); }
        response.json(dbResponse);
      });
    }
  }
}

module.exports = UserController;
