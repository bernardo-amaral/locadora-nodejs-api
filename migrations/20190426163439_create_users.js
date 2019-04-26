/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id').unsigned().primary();
    table.string('name').notNull();
    table.string('email').notNull();
    table.string('password').notNull();
    table.unique('email');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
