/* eslint-disable */

exports.up = function (knex) {
  return knex.schema.createTable('games', (table) => {
    table.increments('game_id').unsigned().primary();
    table.string('title').notNull();
    table.string('developer');
    table.string('publisher');
    table.string('genre');
    table.integer('console_id').unsigned();
    table.string('release_year');
    table.string('amiibo_series').nullable();
    table.string('cover_picture');
    table.string('mode').defaultTo('Single-player');
    // table.unique(['title', 'console_id']);
    table.foreign('console_id').onDelete('CASCADE').references('console_id').inTable('consoles');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('games');
};
