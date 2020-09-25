const express = require('express');
const Middleware = require('./appMiddleware');
const Default = require('../controller/defaultController');
const Users = require('../controller/usersController');

const routes = express.Router();

class UserRoutes {
  constructor() {
    const apiRoutes = new Middleware();

    routes.route('/')
      .get(Default.main);

    routes.route('/login')
      .post(Users.authUser);

    apiRoutes.route('/logout')
      .post(Users.logoutUser);

    apiRoutes.route('/users')
      .get(Users.listAll)
      .post(Users.createAUser);

    apiRoutes.route('/users/:userId')
      .delete(Users.delete)
      .get(Users.getById);

    routes.use('/v1', apiRoutes);
    return routes;
  }
}

module.exports = UserRoutes;
