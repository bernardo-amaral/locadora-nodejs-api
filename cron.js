const cron = require('node-cron');

const MercadoLivreSpider = require('./app/spiders/MercadoLivreSpider');

// cron.schedule('*/1 * * * *', () => {
  const mercadoLivreSpider = new MercadoLivreSpider();
  console.log(mercadoLivreSpider.fetchData('crash-team-racer-switch'));
// });
