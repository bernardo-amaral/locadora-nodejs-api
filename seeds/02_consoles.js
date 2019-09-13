/* eslint-disable */

exports.seed = function (knex) {
  return knex('consoles').del()
    .then(() => knex('consoles').insert([
      { console_id: 1, name: 'Atari', brand: 'Atari', release_year: '1994' },
      { console_id: 2, name: 'Nintendo Entertainment System', brand: 'Nintendo', release_year: '1994' },
      { console_id: 3, name: 'Super Nintendo', brand: 'Nintendo', release_year: '1994' },
      { console_id: 4, name: 'Mega Drive', brand: 'Sega', release_year: '1994' },
      { console_id: 5, name: 'Saturn', brand: 'Sega', release_year: '1994' },
      { console_id: 6, name: 'Dreamcast', brand: 'Sega', release_year: '1994' },
      { console_id: 7, name: 'Playstation', brand: 'Sony', release_year: '1994' },
      { console_id: 8, name: 'Playstation 2', brand: 'Sony', release_year: '1994' },
      { console_id: 9, name: 'Playstation 3', brand: 'Sony', release_year: '1994' },
      { console_id: 10, name: 'Playstation 4', brand: 'Sony', release_year: '1994' },
      { console_id: 11, name: 'Nintendo 64', brand: 'Nintendo', release_year: '1994' },
      { console_id: 12, name: 'Nintendo DS', brand: 'Nintendo', release_year: '1994' },
      { console_id: 13, name: 'Nintendo 3DS', brand: 'Nintendo', release_year: '1994' },
      { console_id: 14, name: 'Nintendo Switch', brand: 'Nintendo', release_year: '1994' },
      { console_id: 15, name: 'Master System', brand: 'Sega', release_year: '1994' },
      { console_id: 16, name: 'Nintendo Amiibo', brand: 'Nintendo', release_year: '2014' }
    ]));
};
