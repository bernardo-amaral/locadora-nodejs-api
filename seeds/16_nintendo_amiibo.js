/* eslint-disable */
const tableName = 'games';
exports.seed = knex => populateWithNesGames(knex);

async function populateWithNesGames(knex) {
  await knex.raw('SELECT setval(\'games_game_id_seq\', (SELECT MAX(game_id) from "games"));');
  await knex(tableName).where('console_id', 16).del();
  await knex(tableName).insert([
    {
      title: "Mario - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "20/03/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-amiibo-super-mario-series/screenshot-gallery/amiibo_Mario_SuperMario_char.png'
    },
    {
      title: "Peach - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "20/03/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/peach-amiibo-super-mario-series/screenshot-gallery/amiibo_Peach_SuperMario_char.png'
    },
    {
      title: "Toad - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "20/03/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/toad-amiibo-super-mario-series/screenshot-gallery/amiibo_Toad_SuperMario_char.png'
    },
    {
      title: "Yoshi - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "20/03/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/yoshi-amiibo-super-mario-series/screenshot-gallery/amiibo_Yoshi_SuperMario_char.png'
    },
    {
      title: "Bowser - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "19/03/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bowser-amiibo-super-mario-series/screenshot-gallery/amiibo_Bowser_SuperMario_char.png'
    },
    {
      title: "Ike - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "28/02/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ike-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ike_Smash_char.png'
    },
    {
      title: "King Dedede - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "28/02/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/king-dedede-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_KingDedede_Smash_char.png'
    },
    {
      title: "Lucario - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/lucario-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Lucario_Smash_char.png'
    },
    {
      title: "Mega Man - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mega-man-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_MegaMan_Smash_char.png'
    },
  ]);
};
