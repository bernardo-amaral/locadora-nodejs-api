/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
const axios = require('axios');
const cheerio = require('cheerio');

const parsedResults = [];

module.exports = class Games4Spider {
  async getWebsiteContent(searchTerm) {
    try {
      searchTerm = searchTerm.toLowerCase().replace(new RegExp('-', 'g'), '+');
      const response = await axios.get(`https://www.games4.com.br/sugestao.partial?t=${searchTerm}&showCorrections=true&showTerms=true&showProducts=true&termsLimit=0&productsLimit=0`);
      const root = cheerio.load(response.data);

      await root('.suggestion-products').map((_i, elem) => {
        const li = root(elem).find('li.suggestion-product');
        const title = li.find('.suggestion-product-name');
        const price = li.find('.suggestion-product-price');
        const img = li.find('img');

        parsedResults.push({
          title: title.text().trim(),
          url: li.attr('data-url'),
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
