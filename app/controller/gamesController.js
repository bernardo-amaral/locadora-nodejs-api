const Game = require('../model/gamesModel');

class GameController {
  static async listAll(request, response) {
    await Game.getAll((error, game) => {
      if (error) { response.status(500).json({ success: false, error: error.detail }); }
      response.send(game);
    });
  }

  static async getByUserId(request, response) {
    await Game.getByUserId(request.params.userId, (error, user) => {
      if (error) { response.status(500).json({ success: false, error: error.detail }); }
      response.json(user);
    });
  }

  static async getByConsoleId(request, response) {
    await Game.getByConsoleId(request.params.consoleId, (error, consoles) => {
      if (error) { response.status(500).json({ success: false, error: error.detail }); }
      response.json(consoles);
    });
  }

  static async getByUserAndPlatform(request, response) {
    const { userId, consoleId } = request.params;
    await Game.getByUserAndPlatform(userId, consoleId, (error, user) => {
      if (error) { response.status(500).json({ success: false, error: error.detail }); }
      response.json(user);
    });
  }

  static async removeAUserGame(request, response) {
    const { userId, gameId } = request.body;
    if (!userId && !gameId) {
      response.status(400).json({ error: true, message: 'Please provide the required fields "userId" and "gameId"' });
    }
    await Game.removeUserGame(userId, gameId, (error, dbResponse) => {
      if (error) { response.status(500).json({ success: false, error: error.detail }); }
      response.json(dbResponse);
    });
  }

  static async createAUserGame(request, response) {
    const { userId, gameId } = request.body;
    if (!userId && !gameId) {
      response.status(400).json({ error: true, message: 'Please provide the required fields' });
    }
    await Game.createUserGame(userId, gameId, (error, dbResponse) => {
      if (error) { response.status(500).json({ success: false, error: error.detail }); }
      response.json(dbResponse);
    });
  }
}

module.exports = GameController;
