const express = require('express');
const Middleware = require('./appMiddleware');
const Games = require('../controller/gamesController');
const Consoles = require('../controller/consolesController');
const Spiders = require('../controller/spiderController');

const routes = express.Router();

class AppRoutes {
  constructor() {
    const apiRoutes = new Middleware();

    apiRoutes.route('/user/games/:userId/:consoleId')
      .get(Games.getByUserAndPlatform);

    apiRoutes.route('/user/games/:userId')
      .get(Games.getByUserId);

    apiRoutes.route('/games')
      .get(Games.listAll)
      .post(Games.createAUserGame)
      .delete(Games.removeAUserGame);

    apiRoutes.route('/user/games/remove')
      .post(Games.removeAUserGame);

    apiRoutes.route('/user/consoles/:userId')
      .get(Consoles.getByUserId);

    apiRoutes.route('/consoles/games/:consoleId')
      .get(Games.getByConsoleId);

    apiRoutes.route('/products/:userId')
      .get(Spiders.listAllByUserId);

    apiRoutes.route('/therms/:userId')
      .put(Spiders.addThermsByUserId)
      .post(Spiders.addThermsByUserId)
      .get(Spiders.listAllThermsByUserId)
      .delete(Spiders.deleteThermByUserId);

    apiRoutes.route('/consoles')
      .get(Consoles.listAll);

    routes.use('/v1', apiRoutes);
    return routes;
  }
}

module.exports = AppRoutes;
