const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../model/usersModel');
const config = require('../config');

class UserController {
  static listAll(req, res) {
    User.getAll((err, user) => {
      if (err) { res.send(err); }
      res.send(user);
    });
  }

  static authUser(request, response) {
    const loginUser = new User(request.body);

    User.login(loginUser, (error, userLogged) => {
      if (userLogged) {
        const token = jwt.sign({ name: loginUser.name, email: loginUser.email }, config.jwtSecret, { expiresIn: '24h' });
        response.json({ user: loginUser.name, token });
      } else {
        response.status(400).send({ error: true, message: 'Access denied!' });
      }
    });
  }

  static getById(request, response) {
    User.getById(request.params.userId, (error, user) => {
      if (error) { response.send(error); }
      response.json(user);
    });
  }

  static delete(request, response) {
    User.remove(request.params.userId, (error, user) => {
      if (error) { response.send(error); }
      response.json(user);
    });
  }

  static createAUser(request, response) {
    const newUser = new User(request.body);
    if (!newUser.name && !newUser.email && !newUser.password) {
      response.status(400).send({ error: true, message: 'Please provide user required fields' });
    } else {
      newUser.password = crypto.createHash('md5').update(newUser.password).digest('hex');
      User.createUser(newUser, (error, user) => {
        if (error) {
          response.send(error);
        }
        response.json(user);
      });
    }
  }
}

module.exports = UserController;
