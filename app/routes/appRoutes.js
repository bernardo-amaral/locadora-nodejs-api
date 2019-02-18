module.exports = function(app) {
  var Users = require('../controller/usersController');
  var Movies = require('../controller/moviesController');

  app.route('/users')
    .get(Users.list_all)
    .post(Users.create_a_user);
   
   app.route('/users/:userId')
    .delete(Users.delete)
    .get(Users.get_by_id);

    app.route('/movies')
    .get(Movies.listAll);    

    app.route('/movies/search/:partialName')
    .get(Movies.searchMovie);      
};