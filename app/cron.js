/* eslint-disable no-console */
// const cron = require('node-cron');
const spiderModel = require('./model/spiderModel');
const MercadoLivreSpider = require('./spiders/MercadoLivreSpider');

// cron.schedule('*/1 * * * *', () => {
const mercadoLivreSpider = new MercadoLivreSpider();

const userId = 1;

spiderModel.insertTherms([1, 'Bloodstained switch']);

spiderModel.getAllTermsByUserId(userId, (response) => {
  console.log(response);
  // eslint-disable-next-line array-callback-return
  response.map((termItem) => {
    mercadoLivreSpider.getWebsiteContent(termItem.value).then((data) => {
      const termData = {
        user_id: userId,
        product_title: data.product_title,
        product_url: data.product_url,
        product_price: data.product_price,
        product_shipping: data.product_shipping,
        product_image: data.product_image,
      };
      spiderModel.insertData(termData, (result) => {
        console.log('New registry created', result);
      });
      console.log(response, data, termItem);
    });
  });
});
// });
