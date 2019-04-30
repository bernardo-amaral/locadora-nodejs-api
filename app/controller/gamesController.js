const Game = require('../model/gamesModel');

class GameController {
  static listAll(request, response) {
    Game.getAll((err, game) => {
      if (err) { response.send(err); }
      response.send(game);
    });
  }
}

module.exports = GameController;
