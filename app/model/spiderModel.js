const sql = require('./database');

class Spider {
  static getAllByUserId(userId, result) {
    const query = {
      text: 'SELECT * FROM user_spiders_data WHERE user_id = $1 ORDER BY product_price ASC',
      values: [userId],
    };
    sql.query(query)
      .then(response => result(null, response.rows))
      .catch(e => result(e.stack));
  }

  static async getAllTermsByUserId(userId) {
    const query = {
      text: 'SELECT * FROM user_spiders_terms WHERE user_id = $1 ORDER BY user_spider_term_id ASC',
      values: [userId],
    };
    const response = await sql.query(query);
    return response.rows;
  }

  static async deleteAllDataByUserId(userId) {
    const query = {
      text: 'DELETE FROM user_spiders_data WHERE user_id = $1',
      values: [userId],
    };
    const response = await sql.query(query);
    return response.rows;
  }

  static async insertTherms(thermData) {
    const query = {
      text: 'INSERT INTO user_spiders_terms(user_id, value) VALUES($1, $2) RETURNING user_spider_term_id',
      values: [
        thermData.userId,
        thermData.value,
      ],
    };

    try {
      const { rows } = await sql.query(query);
      return rows;
    } catch (e) {
      return e.stack;
    }

    // sql.query(query)
    //   .then(response => ({
    //     sucess: (response.rowCount > 0),
    //     userId: response.rows[0].user_spider_term_id,
    //   }))
    //   .catch(error => error.stack);
  }

  static insertData(spiderData, result) {
    const query = {
      text: `INSERT INTO user_spiders_data
              (user_id, product_title, product_url, product_price, product_shipping, product_image, therm, provider)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
              RETURNING user_spider_data_id`,
      values: [
        1,
        spiderData.product_title,
        spiderData.product_url,
        spiderData.product_price,
        spiderData.product_shipping,
        spiderData.product_image,
        spiderData.search_therm,
        spiderData.product_provider,
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
