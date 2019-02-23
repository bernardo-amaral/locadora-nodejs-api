const Users = require('../controller/usersController');
const Movies = require('../controller/moviesController');

const jwt = require('jsonwebtoken');

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

    app.post('/login', (req, res, next) => {
      if (req.body.user === 'luiz' && req.body.pwd === '123') {
        // auth ok
        const id = 1; // esse id viria do banco de dados
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300, // expires in 5min
        });
        res.status(200).send({ auth: true, token });
      }

      res.status(500).send('Login inválido!');
    });
  }
}

module.exports = Routes;
