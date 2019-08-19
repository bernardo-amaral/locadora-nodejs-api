/* eslint-disable */
const spiderModel = require('./model/spiderModel');
const MercadoLivreSpider = require('./spiders/MercadoLivreSpider');
const mercadoLivreSpider = new MercadoLivreSpider();

const userId = 1;

// const responseTherm = spiderModel.insertTherms({ userId, value: 'CTR switch' });
// console.log(responseTherm);
spiderModel.getAllTermsByUserId(userId).then((userTherms) => {
  userTherms.map((termItem) => {
    spiderModel.deleteAllDataByUserId(userId).then((result) => {
      mercadoLivreSpider.getWebsiteContent(termItem.value).then((data) => {
        data.map((spiderItem) => {
          const termData = {
            user_id: userId,
            product_title: spiderItem.title,
            product_url: spiderItem.url,
            product_price: spiderItem.price,
            product_shipping: spiderItem.frete,
            product_image: spiderItem.picture,
            search_therm: termItem.value,
            product_provider: 'mercadolivre'
          };
          spiderModel.insertData(termData, (result) => {
            console.log(`New registry created - ${termData.product_title}`);
          });
        });

      });
    });
  });
});
