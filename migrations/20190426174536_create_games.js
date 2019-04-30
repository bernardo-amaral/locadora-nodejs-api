/* eslint-disable func-names */

exports.up = function (knex) {
  return knex.schema.createTable('games', (table) => {
    table.increments('game_id').unsigned().primary();
    table.string('title').notNull();
    table.string('developer');
    table.string('genre');
    table.string('platform');
    table.string('release_year');
    table.string('cover_picture');
    table.string('mode').defaultTo('Single-player');
    table.unique('title');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('games');
};
