const Spider = require('../model/spiderModel');

class SpiderController {
  static async listAllByUserId(request, response) {
    await Spider.getAllByUserId(request.params.userId, (error, spiderData) => {
      if (error) { response.status(500).json({ success: false, error: error.detail }); }
      response.json(spiderData);
    });
  }
}

module.exports = SpiderController;
