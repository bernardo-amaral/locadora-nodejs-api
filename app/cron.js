/* eslint-disable no-console */
// const cron = require('node-cron');
const spiderModel = require('./app/model/spiderModel');
const MercadoLivreSpider = require('./app/spiders/MercadoLivreSpider');

// cron.schedule('*/1 * * * *', () => {
const mercadoLivreSpider = new MercadoLivreSpider();

const userId = 1;

spiderModel.getAllTermsByUserId(userId, (response) => {
    response.map(termItem, () => {
        mercadoLivreSpider.getWebsiteContent(termItem.value).then((data) => {
            termData = {
                user_id: userId,
                product_title: data.product_title,
                product_url: data.product_url,
                product_price: data.product_price,
                product_shipping: data.product_shipping,
                product_image: data.product_image,
            }
            spiderModel.insertData(termData, (result) => {
                console.log('New registry created')
            });
            console.log(response, data, termItem);
        });
    });
});
// });
