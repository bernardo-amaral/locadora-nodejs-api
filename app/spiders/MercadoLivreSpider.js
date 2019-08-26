/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
const axios = require('axios');
const cheerio = require('cheerio');

const parsedResults = [];

module.exports = class MercadoLivreSpider {
  async getWebsiteContent(searchTerm) {
    try {
      const options = {
        headers: { 'viewport-width': '1366' },
      };

      const response = await axios.get(`https://lista.mercadolivre.com.br/${searchTerm}`, options);
      const root = cheerio.load(response.data);

      await root('.results-item').map((_i, elem) => {
        const a = root(elem).find('a');
        const price = a.find('.item-price');
        const frete = a.find('.free-shipping');
        const img = root(elem).find('img');

        parsedResults.push({
          title: a.find('.main-title').text().trim(),
          url: a.attr('href'),
          price: price.text().replace('R$', ' ').trim().replace(' ', '.'),
          frete: frete.text().trim(),
          picture: img.attr('data-src'),
        });
      });
      return await parsedResults;
    } catch (error) {
      console.error(error);
    }
  }
}
