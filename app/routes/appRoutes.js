module.exports = function(app) {
  var Users = require('../controller/usersController');

  app.route('/users')
    .get(Users.list_all);
   
   app.route('/users/:userId')
    .get(Users.get_by_id);
};