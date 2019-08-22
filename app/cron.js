/* eslint-disable */
const spiderModel = require('./model/spiderModel');
const MercadoLivreSpider = require('./spiders/MercadoLivreSpider');
const Games4Spider = require('./spiders/Games4Spider');
const mercadoLivreSpider = new MercadoLivreSpider();
const games4Spider = new Games4Spider();

const userId = 1;

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

      games4Spider.getWebsiteContent(termItem.value).then((data) => {
        data.map((spiderItem) => {
          const termData = {
            user_id: userId,
            product_title: spiderItem.title,
            product_url: spiderItem.url,
            product_price: spiderItem.price,
            product_shipping: spiderItem.frete,
            product_image: spiderItem.picture,
            search_therm: termItem.value,
            product_provider: 'games4'
          };
          spiderModel.insertData(termData, (result) => {
            console.log(`New registry created - ${termData.product_title}`);
          });
        });
      });
    });
  });
});
