/* eslint-disable */

exports.up = function (knex) {
  return knex.schema.createTable('user_spiders_terms', (table) => {
    table.increments('user_spider_term_id').unsigned().primary();
    table.integer('user_id').notNull();
    table.string('value').notNull();
    table.foreign('user_id').onDelete('CASCADE').references('user_id').inTable('users');
    table.unique(['user_id', 'value']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user_spiders_terms');
};
