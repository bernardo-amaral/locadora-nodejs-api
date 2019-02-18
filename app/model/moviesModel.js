var sql = require('./db.js');

var Movie = function (movie) {
    this.movie = movie.name;
    this.director = movie.director;
    this.quantity = movie.quantity;
};

Movie.searchMovie = function searchMovie(partialName, result) {
    sql.query("SELECT * FROM movies WHERE name like ? AND quantity > 0 ORDER BY name ASC", `${partialName}%`, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);

        }
    });
};
Movie.getAll = function getAll(result) {
    sql.query("SELECT * FROM movies WHERE quantity > 0 ORDER BY id ASC", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Movie;