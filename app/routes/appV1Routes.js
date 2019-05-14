const express = require('express');
const Middleware = require('./appMiddleware');
const Default = require('../controller/defaultController');
const Users = require('../controller/usersController');
const Games = require('../controller/gamesController');
const Consoles = require('../controller/consolesController');

const routes = express.Router();

class Routes {
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

    apiRoutes.route('/user/games/:userId/:consoleId')
      .get(Games.getByUserAndPlatform);

    apiRoutes.route('/user/games/:userId')
      .get(Games.getByUserId);

    apiRoutes.route('/users/:userId')
      .delete(Users.delete)
      .get(Users.getById);

    apiRoutes.route('/games')
      .get(Games.listAll);

    apiRoutes.route('/consoles')
      .get(Consoles.listAll);

    routes.use('/v1', apiRoutes);
    return routes;
  }
}

module.exports = Routes;
