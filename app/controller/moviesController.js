
const Movie = require('../model/moviesModel.js');

exports.listAll = function (req, res) {
  Movie.getAll((err, movie) => {
    if (err) {res.send(err);}
    console.log('res', movie);
    res.send(movie);
  });
};

exports.searchMovie = function (req, res) {
  Movie.searchMovie(req.params.partialName, (err, movie) => {
    if (err) {res.send(err);}
    res.json(movie);
  });
};
