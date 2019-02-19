
const User = require('../model/usersModel.js');

exports.list_all = function (req, res) {
  User.getAll((err, user) => {
    console.log('controller');
    if (err) {res.send(err);}
    console.log('res', user);
    res.send(user);
  });
};

exports.get_by_id = function (req, res) {
  User.getById(req.params.userId, (err, user) => {
    if (err) {res.send(err);}
    res.json(user);
  });
};

exports.delete = function (req, res) {
  User.remove(req.params.userId, (err, user) => {
    if (err) {res.send(err);}
    res.json(user);
  });
};

exports.create_a_user = function (req, res) {
  const newUser = new User(req.body);
  console.log(newUser);
  if (!newUser.name && !newUser.email && !newUser.password) {
    res.status(400).send({ error: true, message: 'Please provide user required fields' });
  } else {
    User.createUser(newUser, (err, user) => {
      if (err) {res.send(err);}
      res.json(user);
    });
  }
};
