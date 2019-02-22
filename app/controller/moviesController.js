
const Movie = require('../model/moviesModel.js');

class MovieController {
  static listAll(request, response) {
    Movie.getAll((err, movie) => {
      if (err) { response.send(err); }
      response.send(movie);
    });
  }

  static searchMovie(request, response) {
    Movie.searchMovie(request.params.partialName, (err, movie) => {
      if (err) { response.send(err); }
      response.json(movie);
    });
  }

  static rentMovie(request, response) {
    Movie.rentMovie(request.params.movieId, (err, movie) => {
      if (err) { response.send(err); }
      response.json(movie);
    });
  }

  static returnMovie(request, response) {
    Movie.returnMovie(request.params.movieId, (err, movie) => {
      if (err) { response.send(err); }
      response.json(movie);
    });
  }
}

module.exports = MovieController;
