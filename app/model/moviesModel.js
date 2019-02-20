const sql = require('./db.js');

class Movie {
  constructor(movie) {
    this.title = movie.title;
    this.director = movie.director;
    this.quantity = movie.quantity;
  }

  static searchMovie(partialTitle, result) {
    sql.query('SELECT * FROM movies WHERE title like ? AND quantity > 0 ORDER BY title ASC', `${partialTitle}%`, (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }

  static getAll(result) {
    sql.query('SELECT * FROM movies WHERE quantity > 0 ORDER BY title ASC', (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  static rentMovie(movieId, result) {
    sql.query('UPDATE FROM movies SET quantity = (quantity - 1) WHERE movie_id = ? AND quantity > 0', (err, res) => {
      result(null, res);
    });
  }

  static returnMovie(movieId, result) {
    sql.query('UPDATE FROM movies SET quantity = (quantity + 1) WHERE movie_id = ?', (err, res) => {
      result(null, res);
    });
  }
}

module.exports = Movie;
