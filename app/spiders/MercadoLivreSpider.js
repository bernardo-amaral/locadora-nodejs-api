/* eslint-disable no-console */
const cheerio = require('cheerio');
const request = require('request');

module.exports = class MercadoLivreSpider {
  constructor() {
    this.siteData = [];
  }

  async fetchData(searchTerm) {
    await request({ uri: `https://lista.mercadolivre.com.br/${searchTerm}` }, (error, response, body) => {
      const root = cheerio.load(body);

      root('.results-item').each((i, elem) => {
        const a = root(elem).find('a');
        const price = root(elem).find('.price__container');
        const frete = root(elem).find('.item__shipping');
        const img = root(elem).find('img');

        this.siteData.push({
          title: a.text().trim(),
          url: a.attr('href'),
          price: price.text().replace('R$', ' ').trim().replace(' ', '.'),
          frete: frete.text().trim(),
          picture: img.attr('src'),
        });
      });
      return this.siteData;
    });
  }
};
