const Spider = require('../model/spiderModel');

class SpiderController {
  static async listAllByUserId(request, response) {
    await Spider.getAllByUserId(request.params.userId, (error, userId) => {
      if (error) { response.status(500).json({ success: false, error: error.detail }); }
      response.json({ userId });
    });
  }
}

module.exports = SpiderController;
