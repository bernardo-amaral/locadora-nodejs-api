/* eslint-disable */

exports.seed = function (knex) {
  return knex('games').del()
    .then(() => knex('games').insert([
      { game_id: 1, title: 'Sunset Riders', developer: 'Konami', genre: 'Run and Gun', console_id: 3, release_year: '1993', cover_picture: '' },
      { game_id: 2, title: 'Nightshade Part 1: The Claws of Sutekh', developer: 'Beam Software', genre: 'Action-Adventure', console_id: 2, release_year: '1992', cover_picture: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Nightshade_%28NES%29_Coverart.png' },
      { game_id: 3, title: 'Startropics II: Zodas Revenge', developer: 'Beam Software', genre: 'Action-Adventure', console_id: 2, release_year: '1992', cover_picture: '' },
      { game_id: 4, title: 'Super Mario World', developer: 'Beam Software', genre: 'Action-Adventure', console_id: 3, release_year: '1992', cover_picture: '' }
    ]));
};
