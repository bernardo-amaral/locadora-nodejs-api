/* eslint-disable */

exports.up = function(knex) {
  return knex.schema.createTable('users_games', (table) => {
    table.increments('user_game_id').unsigned().primary();
    table.integer('user_id').unsigned();
    table.integer('game_id').unsigned();
    table.foreign('game_id').references('game_id').inTable('games');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_games');
};
