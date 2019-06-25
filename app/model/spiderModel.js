// const sql = require('./database');
const AmazonSpider = require('../spiders/AmazonSpider');

class Spider {
  static getAllByUserId(userId, result) {
    const amazon = new AmazonSpider();
    result(null, userId);
  }
}

module.exports = Spider;
