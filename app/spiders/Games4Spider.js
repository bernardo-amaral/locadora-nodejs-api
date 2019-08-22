/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
const axios = require('axios');
const cheerio = require('cheerio');

const parsedResults = [];

module.exports = class Games4Spider {
  async getWebsiteContent(searchTerm) {
    try {
      const response = await axios.get(`https://www.games4.com.br/pesquisa?t=${searchTerm}`);
      const root = cheerio.load(response.data);

      await root('.wd-browsing-grid-list').map((_i, elem) => {
        const a = root(elem).find('li');
        const price = root(elem).find('.sale-price').find('span');
        const img = root(elem).find('img').find('.nextImg');

        parsedResults.push({
          title: a.text().trim(),
          url: a.attr('href'),
          price: price.text().replace('R$', ' ').trim().replace(' ', '.'),
          frete: '0.00',
          picture: img.attr('src'),
        });
      });
      return await parsedResults;
    } catch (error) {
      console.error(error);
    }
  }
};
