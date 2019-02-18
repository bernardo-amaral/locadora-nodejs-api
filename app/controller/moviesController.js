
var Movie = require('../model/moviesModel.js');

exports.listAll = function(req, res) {
    Movie.getAll(function(err, movie) {
    console.log('movies controller')
    if (err)
      res.send(err);
    console.log('res', movie);
    res.send(movie);
  });
};

exports.searchMovie = function (req, res) {
  Movie.searchMovie(req.params.partialName, function(err, movie) {
    if (err) 
      res.send(err);
    res.json(movie);
  });
};
