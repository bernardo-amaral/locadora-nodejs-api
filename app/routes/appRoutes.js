const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const Users = require('../controller/usersController');
const Movies = require('../controller/moviesController');

const apiRoutes = express.Router();

class Routes {
  constructor(app) {
    apiRoutes.use((request, response, next) => {
      const token = request.body.token || request.query.token || request.headers['x-access-token'];
      if (token) {
        jwt.verify(token, config.jwtSecret, (error, decoded) => {
          if (error) {
            return response.json({ success: false, message: 'Failed to authenticate token.' });
          }
          request.decoded = decoded;
          return next();
        });
      } else {
        return response.status(403).send({
          success: false,
          message: 'No token provided.',
        });
      }
      return false;
    });

    app.route('/login')
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

    app.use('/v1', apiRoutes);
  }
}

module.exports = Routes;
