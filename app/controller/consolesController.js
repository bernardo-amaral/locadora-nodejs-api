const Consoles = require('../model/consolesModel');

class ConsoleController {
  static listAll(request, response) {
    Consoles.getAll((err, consoles) => {
      if (err) { response.send(err); }
      response.send(consoles);
    });
  }
}

module.exports = ConsoleController;
