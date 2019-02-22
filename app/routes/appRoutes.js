const Users = require('../controller/usersController');
const Movies = require('../controller/moviesController');

class Routes {
  constructor(app) {
    app.route('/login')
      .post(Users.authUser);

    app.route('/users')
      .get(Users.listAll)
      .post(Users.createAUser);

    app.route('/users/:userId')
      .delete(Users.delete)
      .get(Users.getById);

    app.route('/movies')
      .get(Movies.listAll);

    app.route('/movies/rent/:movieId')
      .get(Movies.rentMovie);

    app.route('/movies/return/:movieId')
      .get(Movies.returnMovie);

    app.route('/movies/search/:partialName')
      .get(Movies.searchMovie);
  }
}

module.exports = Routes;
