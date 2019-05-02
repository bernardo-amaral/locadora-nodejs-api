const Game = require('../model/gamesModel');

class GameController {
  static listAll(request, response) {
    Game.getAll((err, game) => {
      if (err) { response.send(err); }
      response.send(game);
    });
  }

  static getByUserId(request, response) {
    Game.getByUserId(request.params.userId, (error, user) => {
      if (error) { response.send(error); }
      response.json(user);
    });
  }
}

module.exports = GameController;
