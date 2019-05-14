
/* eslint-disable */

exports.up = function (knex) {
  return knex.schema.createTable('consoles', (table) => {
    table.increments('console_id').unsigned().primary();
    table.string('name').notNull();
    table.string('brand').notNull();
    table.string('release_year');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('consoles');
};
