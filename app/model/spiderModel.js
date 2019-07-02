// const sql = require('./database');
const MercadoLivreSpider = require('../spiders/MercadoLivreSpider');

class Spider {
  static getAllByUserId(userId, result) {
    result(null, userId);
  }
}

module.exports = Spider;
