/* eslint-disable */

exports.seed = function (knex) {
  return knex('games').del()
    .then(() => knex('games').insert([
      { game_id: 713, title: 'Sunset Riders', developer: 'Konami', genre: 'Run and Gun', console_id: 3, release_year: '1993', cover_picture: '' },
      { game_id: 714, title: 'Super Mario World', developer: 'Beam Software', genre: 'Action-Adventure', console_id: 3, release_year: '1992', cover_picture: '' }
    ]));
};
