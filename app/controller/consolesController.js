const Consoles = require('../model/consolesModel');

class ConsoleController {
  static listAll(request, response) {
    Consoles.getAll((err, consoles) => {
      if (err) { response.send(err); }
      response.send(consoles);
    });
  }

  static getByUserId(request, response) {
    Consoles.getByUserId(request.params.userId, (error, user) => {
      if (error) { response.send(error); }
      response.json(user);
    });
  }
}

module.exports = ConsoleController;
