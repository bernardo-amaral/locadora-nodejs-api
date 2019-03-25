const sql = require('./database');

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
        result(null, response.rows);
      }
    });
  }

  static getAll(result) {
    sql.query('SELECT * FROM movies WHERE quantity > 0 ORDER BY title ASC', (error, response) => {
      if (error) {
        result(null, error);
      } else {
        result(null, response.rows);
      }
    });
  }

  static rentMovie(movieId, userId, result) {
    sql.query('UPDATE movies SET quantity = (quantity - 1) WHERE movie_id = ? AND quantity > 0', movieId, (error, response) => {
      sql.query('INSERT INTO users_movies SET user_id = ? , movie_id = ?', [userId, movieId], () => {
        result(null, response);
      });
    });
  }

  static returnMovie(movieId, userId, result) {
    sql.query('SELECT id_user_movie FROM users_movies WHERE movie_id = ? AND user_id = ? AND rented = ?', [movieId, userId, 'S'], (_error, rows) => {
      if (rows.length > 0) {
        sql.query('UPDATE movies SET quantity = (quantity + 1) WHERE movie_id = ?', movieId, (error, response) => {
          sql.query('UPDATE users_movies SET rented = ? WHERE movie_id = ? AND user_id = ?', ['N', movieId, userId]);
          result(null, response.rows);
        });
      } else {
        result(null, 'User dont have this movie');
      }
    });
  }
}

module.exports = Movie;
