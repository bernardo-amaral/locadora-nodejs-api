const sql = require('./db');

class Movie {
  constructor(movie) {
    this.title = movie.title;
    this.director = movie.director;
    this.quantity = movie.quantity;
  }

  static searchMovie(partialTitle, result) {
    sql.query('SELECT * FROM movies WHERE title like ? AND quantity > 0 ORDER BY title ASC', `${partialTitle}%`, (error, response) => {
      if (error) {
        result(error, null);
      } else {
        result(null, response);
      }
    });
  }

  static getAll(result) {
    sql.query('SELECT * FROM movies WHERE quantity > 0 ORDER BY title ASC', (error, response) => {
      if (error) {
        result(null, error);
      } else {
        result(null, response);
      }
    });
  }

  static rentMovie(movieId, result) {
    sql.query('UPDATE movies SET quantity = (quantity - 1) WHERE movie_id = ? AND quantity > 0', movieId, (error, response) => {
      result(null, response);
    });
  }

  static returnMovie(movieId, result) {
    sql.query('UPDATE movies SET quantity = (quantity + 1) WHERE movie_id = ?', movieId, (error, response) => {
      result(null, response);
    });
  }
}

module.exports = Movie;
