module.exports = function (app) {
  const Users = require('../controller/usersController');
  const Movies = require('../controller/moviesController');

  app.route('/login')
    .get(Users.authUser);

  app.route('/users')
    .get(Users.listAll)
    .post(Users.createAUser);

  app.route('/users/:userId')
    .delete(Users.delete)
    .get(Users.getById);

  app.route('/movies')
    .get(Movies.listAll);

  app.route('/movies/search/:partialName')
    .get(Movies.searchMovie);
};
