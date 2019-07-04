/* eslint-disable no-console */
const sql = require('./database');
// const MercadoLivreSpider = require('../spiders/MercadoLivreSpider');

class Spider {
  static getAllByUserId(userId, result) {
    const query = {
      text: 'SELECT * FROM user_spiders_data WHERE user_id = $1 ORDER BY user_id ASC',
      values: [userId],
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => result(e.stack));
  }

  static insertData(spiderData, result) {
    const query = {
      text: `INSERT INTO user_spiders_data
              (user_id, product_title, product_url, product_price, product_shipping, product_image)
              VALUES ($1, $2, $3, $4, $5, $6)
              RETURNING user_spider_data_id`,
      values: [
        spiderData.user_id,
        spiderData.product_title,
        spiderData.product_url,
        spiderData.product_price,
        spiderData.product_shipping,
        spiderData.product_image,
      ],
    };
    sql.query(query)
      .then((response) => {
        result(null, {
          sucess: (response.rowCount > 0),
          userId: response.rows[0].user_spider_data_id,
        });
      })
      .catch(e => result(e.stack));
  }
}

module.exports = Spider;
