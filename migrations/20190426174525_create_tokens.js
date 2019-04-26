/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema.createTable('tokens', (table) => {
    table.string('token').unsigned().primary();
    table.integer('user_id').unsigned();
    table.string('active', 1).notNull().defaultTo('S');
    table.foreign('user_id').references('user_id').inTable('users');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tokens');
};
