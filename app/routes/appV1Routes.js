const express = require('express');
const Middleware = require('./appMiddleware');
const Users = require('../controller/usersController');
const Movies = require('../controller/moviesController');

const routes = express.Router();

class Routes {
  constructor() {
    const apiRoutes = new Middleware();

    routes.route('/login')
      .post(Users.authUser);

    routes.route('/logout')
      .post(Users.authUser);

    apiRoutes.route('/users')
      .get(Users.listAll)
      .post(Users.createAUser);

    apiRoutes.route('/users/:userId')
      .delete(Users.delete)
      .get(Users.getById);

    apiRoutes.route('/movies')
      .get(Movies.listAll);

    apiRoutes.route('/movies/rent/:movieId')
      .get(Movies.rentMovie);

    apiRoutes.route('/movies/return/:movieId')
      .get(Movies.returnMovie);

    apiRoutes.route('/movies/search/:partialName')
      .get(Movies.searchMovie);

    routes.use('/v1', apiRoutes);
    return routes;
  }
}

module.exports = Routes;
