
const Movie = require('../model/moviesModel');

class MovieController {
  static listAll(req, res) {
    Movie.getAll((err, movie) => {
      if (err) { res.send(err); }
      res.send(movie);
    });
  }

  static searchMovie(req, res) {
    Movie.searchMovie(req.params.partialName, (err, movie) => {
      if (err) { res.send(err); }
      res.json(movie);
    });
  }

  static rentMovie(req, res) {
    Movie.rentMovie(req.params.movieId, (err, movie) => {
      if (err) { res.send(err); }
      res.json(movie);
    });
  }

  static returnMovie(req, res) {
    Movie.returnMovie(req.params.movieId, (err, movie) => {
      if (err) { res.send(err); }
      res.json(movie);
    });
  }
}

module.exports = MovieController;
