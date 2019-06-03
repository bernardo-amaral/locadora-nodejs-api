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

  static getByConsoleId(request, response) {
    Game.getByConsoleId(request.params.consoleId, (error, consoles) => {
      if (error) { response.send(error); }
      response.json(consoles);
    });
  }

  static getByUserAndPlatform(request, response) {
    Game.getByUserAndPlatform(request.params.userId, request.params.consoleId, (error, user) => {
      if (error) { response.send(error); }
      response.json(user);
    });
  }

  static createAUserGame(request, response) {
    if (!request.params.userId && !request.params.gameId) {
      response.status(400).send({ error: true, message: 'Please provide the required fields' });
    } else {
      Game.createUserGame(request.params.userId, request.params.gameId, (error, dbResponse) => {
        if (error) { response.send(error); }
        response.json(dbResponse);
      });
    }
  }
}

module.exports = GameController;
