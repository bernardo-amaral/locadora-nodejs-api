/* eslint-disable */

exports.up = function(knex) {
  return knex.schema.createTable('users_games', (table) => {
    table.increments('user_game_id').unsigned().primary();
    table.integer('user_id').unsigned();
    table.integer('game_id').unsigned();
    table.foreign('user_id').onDelete('CASCADE').references('user_id').inTable('users');
    table.foreign('game_id').onDelete('CASCADE').references('game_id').inTable('games');
    table.unique(['user_id', 'game_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_games');
};
