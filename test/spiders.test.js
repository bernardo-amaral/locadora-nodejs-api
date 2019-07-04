/* eslint-disable */
const { assert } = require('chai');
const SpiderModel = require('../app/model/spiderModel');

describe('Check the Spiders', () => {
  it('Insert new registry', (done) => {
    const testData = {
      user_id: 1,
      product_title: 'Product from tests',
      product_url: 'http://www.google.com',
      product_price: '100.00',
      product_shipping: '10.00',
      product_image: 'http://www.google.com/image.jpg',
    };
    SpiderModel.insertData(testData, (error, userId) => {
      if (error) {
        done(error);
      } else {
        done();
      }
    });
  });
});
