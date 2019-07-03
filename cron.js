/* eslint-disable no-console */
// const cron = require('node-cron');

const MercadoLivreSpider = require('./app/spiders/MercadoLivreSpider');

// cron.schedule('*/1 * * * *', () => {
const mercadoLivreSpider = new MercadoLivreSpider();
mercadoLivreSpider.getWebsiteContent('Booldstained-Nintendo-Switch').then((data) => {
  console.log(data);
});
// });
