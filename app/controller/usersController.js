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

  static authUser(req, res) {
    const user = new User(req.body);
    const token = jwt.sign({ name: user.name, email: user.email }, config.jwtSecret, { expiresIn: '24h' });
    res.json(token);
  }

  static getById(req, res) {
    User.getById(req.params.userId, (err, user) => {
      if (err) { res.send(err); }
      res.json(user);
    });
  }

  static delete(req, res) {
    User.remove(req.params.userId, (err, user) => {
      if (err) { res.send(err); }
      res.json(user);
    });
  }

  static createAUser(req, res) {
    const newUser = new User(req.body);
    if (!newUser.name && !newUser.email && !newUser.password) {
      res.status(400).send({ error: true, message: 'Please provide user required fields' });
    } else {
      newUser.password = crypto.createHash('md5').update(newUser.password).digest('hex');
      User.createUser(newUser, (err, user) => {
        if (err) { res.send(err); }
        res.json(user);
      });
    }
  }
}

module.exports = UserController;
