const jwt = require('jsonwebtoken');
const User = require('../model/usersModel.js');

class UserController {
  static listAll(request, response) {
    User.getAll((err, user) => {
      if (err) { response.send(err); }
      response.send(user);
    });
  }

  static authUser(request, response) {
    const token = jwt.sign({ foo: 'bar' }, 'shhhhh', { expiresIn: '24h' });
    response.json({ token });
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
      User.createUser(newUser, (error, user) => {
        if (error) { response.send(error); }
        response.json(user);
      });
    }
  }
}

module.exports = UserController;
