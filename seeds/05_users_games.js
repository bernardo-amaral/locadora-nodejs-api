/* eslint-disable */

exports.seed = function (knex) {
  return knex('users_games').del()
    .then(() => knex('users_games').insert([
      { user_game_id: 1, user_id: 1, game_id: 713 },
      { user_game_id: 2, user_id: 1, game_id: 714 },
      { user_game_id: 3, user_id: 1, game_id: 588 },
      { user_game_id: 4, user_id: 1, game_id: 711 },
      { user_game_id: 4, user_id: 1, game_id: 349 },
      { user_game_id: 4, user_id: 1, game_id: 426 },
      { user_game_id: 4, user_id: 1, game_id: 709 },
    ]));
};
