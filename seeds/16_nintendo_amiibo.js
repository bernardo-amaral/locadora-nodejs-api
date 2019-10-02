/* eslint-disable */
const tableName = 'games';
exports.seed = knex => populateWithNesGames(knex);

async function populateWithNesGames(knex) {
  await knex.raw('SELECT setval(\'games_game_id_seq\', (SELECT MAX(game_id) from "games"));');
  await knex(tableName).where('console_id', 16).del();
  await knex(tableName).insert([
    {
      title: "Link - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "20/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Link_Smash_char_v2.png'
    },
    {
      title: "Donkey Kong - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "20/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/donkey-kong-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_DK_Smash_char_v2.png'
    },
    {
      title: "Yoshi - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/yoshi-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Yoshi_Smash_char_v2.png'
    },
    {
      title: "Wii Fit Trainer - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/wii-fit-trainer-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_WiiFitTrainer_Smash_char_v2.png'
    },
    {
      title: "Villager - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/villager-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Villager_Smash_char_v2.png'
    },
    {
      title: "Samus - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/samus-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Samus_Smash_char_v2.png'
    },
    {
      title: "Pikachu - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pikachu-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Pikachu_Smash_char_v2.png'
    },
    {
      title: "Peach - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/peach-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Peach_Smash_char_v2.png'
    },
    {
      title: "Marth - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/marth-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Marth_Smash_char_v2.png'
    },
    {
      title: "Kirby - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kirby-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Kirby_Smash_char_v2.png'
    },
    {
      title: "Fox - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/fox-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Fox_Smash_char_v2.png'
    },
    {
      title: "Mario - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Mario_Smash_char_v2.png'
    },
    {
      title: "Zelda - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Dec 2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/zelda-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Zelda_Smash_char_v2.png'
    },
    {
      title: "Pit - Super Smash Bros. series", //ATE AQUI
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Dec 2014",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pit-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Pit_Smash_char_v2.png'
    },
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
