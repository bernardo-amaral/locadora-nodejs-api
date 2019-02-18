
var User = require('../model/usersModel.js');

exports.list_all = function (req, res) {
  User.getAll(function (err, user) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', user);
    res.send(user);
  });
};

exports.get_by_id = function (req, res) {
  User.getById(req.params.userId, function (err, user) {
    if (err) 
      res.send(err);
    res.json(user);
  });
};
