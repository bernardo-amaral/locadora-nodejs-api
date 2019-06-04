/* eslint-disable */

exports.seed = function (knex) {
  return knex('users_games').del()
    .then(() => knex('users_games').insert([
      { user_id: 1, game_id: 713 },
      { user_id: 1, game_id: 714 },
      { user_id: 1, game_id: 588 },
      { user_id: 1, game_id: 711 },
      { user_id: 1, game_id: 349 },
      { user_id: 1, game_id: 426 },
      { user_id: 1, game_id: 709 },
    ]));
};
