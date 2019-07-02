/* eslint-disable */

exports.up = function (knex) {
  return knex.schema.createTable('user_spider_data', (table) => {
    table.increments('user_spider_data_id').unsigned().primary();
    table.integer('user_id').notNull();
    table.string('product_title').notNull();
    table.string('product_url').notNull();
    table.string('product_price').notNull();
    table.string('product_frete');
    table.string('product_image');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user_spider_data');
};
