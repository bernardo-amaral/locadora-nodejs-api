
const Movie = require('../model/moviesModel.js');

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
}

module.exports = MovieController;
