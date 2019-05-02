/* eslint-disable */

exports.seed = function (knex) {
  return knex('users_games').del()
    .then(() => knex('users_games').insert([
      { user_game_id: 1, user_id: 1, game_id: 1 },
      { user_game_id: 2, user_id: 1, game_id: 2 }
    ]));
};
