const sql = require('./db.js');

class Movie {
  constructor(movie) {
    this.movie = movie.name;
    this.director = movie.director;
    this.quantity = movie.quantity;
  }

  static searchMovie(partialName, result) {
    sql.query('SELECT * FROM movies WHERE name like ? AND quantity > 0 ORDER BY name ASC', `${partialName}%`, (err, res) => {
      if (err) {
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }

  static getAll(result) {
    sql.query('SELECT * FROM movies WHERE quantity > 0 ORDER BY movie_id ASC', (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }
}

module.exports = Movie;
