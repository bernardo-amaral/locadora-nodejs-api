/* eslint-disable */
const tableName = 'games';
exports.seed = knex => populateWithNesGames(knex);

async function populateWithNesGames(knex) {
  await knex.raw('SELECT setval(\'games_game_id_seq\', (SELECT MAX(game_id) from "games"));');
  await knex(tableName).where('console_id', 16).del();
  await knex(tableName).insert([
    {
      title: "Link",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "20/11/2014",
      genre: 'Amiibo',
      amiibo_series: "Super Smash Bros. series",
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Link_Smash_char_v2.png'
    },
    {
      title: "Donkey Kong",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "20/11/2014",
      genre: 'Amiibo',
      amiibo_series: "Super Smash Bros. series",
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/donkey-kong-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_DK_Smash_char_v2.png'
    },
    {
      title: "Yoshi",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      amiibo_series: "Super Smash Bros. series",
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/yoshi-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Yoshi_Smash_char_v2.png'
    },
    {
      title: "Wii Fit Trainer",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/wii-fit-trainer-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_WiiFitTrainer_Smash_char_v2.png'
    },
    {
      title: "Villager",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/villager-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Villager_Smash_char_v2.png'
    },
    {
      title: "Samus",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/samus-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Samus_Smash_char_v2.png'
    },
    {
      title: "Pikachu",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pikachu-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Pikachu_Smash_char_v2.png'
    },
    {
      title: "Peach",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/peach-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Peach_Smash_char_v2.png'
    },
    {
      title: "Marth",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/marth-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Marth_Smash_char_v2.png'
    },
    {
      title: "Kirby",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kirby-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Kirby_Smash_char_v2.png'
    },
    {
      title: "Fox",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/fox-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Fox_Smash_char_v2.png'
    },
    {
      title: "Mario",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Mario_Smash_char_v2.png'
    },
    {
      title: "Zelda",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Dec 2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/zelda-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Zelda_Smash_char_v2.png'
    },
    {
      title: "Pit",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Dec 2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pit-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Pit_Smash_char_v2.png'
    },
    {
      title: "Luigi",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Dec 2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/luigi-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Luigi_Smash_char_v2.png'
    },
    {
      title: "Little Mac",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Dec 2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/little-mac-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_LittleMac_Smash_char_v2.png'
    },
    {
      title: "Diddy Kong",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "12/31/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/diddy-kong-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_DiddyKong_Smash_char_v2.png'
    },
    {
      title: "Captain Falcon",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "12/31/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/captain-falcon-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_CaptainFalcon_Smash_char_v2.png'
    },
    {
      title: "Bowser",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "02/27/2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bowser-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Bowser_Smash_char.png'
    },
    {
      title: "Toon Link",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015  ",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/toon-link-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_ToonLink_Smash_char.png'
    },
    {
      title: "Sonic",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/sonic-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Sonic_Smash_char.png'
    },
    {
      title: "Shulk",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/shulk-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Shulk_Smash_char.png'
    },
    {
      title: "Sheik",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/sheik-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Sheik_Smash_char.png'
    },
    {
      title: "Rosalina",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/rosalina-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Rosalina_Smash_char.png'
    },
    {
      title: "Meta Knight",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/meta-knight-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Metaknight_Smash_char.png'
    },
    {
      title: "Mega Man",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mega-man-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_MegaMan_Smash_char.png'
    },
    {
      title: "Lucario",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/lucario-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Lucario_Smash_char.png'
    },
    {
      title: "King Dedede",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "02/28/2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/king-dedede-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_KingDedede_Smash_char.png'
    },
    {
      title: "Ike",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "02/28/2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ike-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ike_Smash_char.png'
    },
    {
      title: "Bowser",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/19/2015",
      amiibo_series: "Super Mario series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bowser-amiibo-super-mario-series/screenshot-gallery/amiibo_Bowser_SuperMario_char.png'
    },
    {
      title: "Yoshi™",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/yoshi-amiibo-super-mario-series/screenshot-gallery/amiibo_Yoshi_SuperMario_char.png'
    },
    {
      title: "Toad",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/toad-amiibo-super-mario-series/screenshot-gallery/amiibo_Toad_SuperMario_char.png'
    },
    {
      title: "Peach™",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/peach-amiibo-super-mario-series/screenshot-gallery/amiibo_Peach_SuperMario_char.png'
    },
    {
      title: "Mario™",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-amiibo-super-mario-series/screenshot-gallery/amiibo_Mario_SuperMario_char.png'
    },
    {
      title: "Luigi™",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/luigi-amiibo-super-mario-series/screenshot-gallery/amiibo_Luigi_SuperMario_char.png'
    },
    {
      title: "Mario™ - Gold Edition",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-gold-edition-amiibo-super-mario-series/screenshot-gallery/amiibo_GoldMario_SuperMario_char.png'
    },
    {
      title: "Wario",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/wario-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Wario_Smash_char.png'
    },
    {
      title: "Mario™ - Silver Edition",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-silver-edition-amiibo-super-mario-series/screenshot-gallery/amiibo_SilverMario_SuperMario_char.png'
    },
    {
      title: "Robin",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/robin-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Robin_Smash_char.png'
    },
    {
      title: "PAC-MAN™",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pac-man-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_PacMan_Smash_char.png'
    },
    {
      title: "Ness",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ness-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ness_Smash_char.png'
    },
    {
      title: "Lucina",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/lucina-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Lucina_Smash_char.png'
    },
    {
      title: "Jigglypuff",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/jigglypuff-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Jigglypuff_Smash_char.png'
    },
    {
      title: "Inkling Squid",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-squid-amiibo-splatoon-series/screenshot-gallery/amiibo_Squid_Splatoon_char.png'
    },
    {
      title: "Inkling Girl",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-girl-amiibo-splatoon-series/screenshot-gallery/amiibo_Girl_Splatoon_char.png'
    },
    {
      title: "Inkling Boy",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-boy-amiibo-splatoon-series/screenshot-gallery/amiibo_Boy_Splatoon_char.png'
    },
    {
      title: "Greninja",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/greninja-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Greninja_Smash_char.png'
    },
    {
      title: "Charizard",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/charizard-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Charizard_Smash_char.png'
    },
    {
      title: "Palutena",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "07/27/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/palutena-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Palutena_Smash_char.png'
    },
    {
      title: "Dark Pit",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "07/31/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/dark-pit-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_DarkPit_Smash_char.png'
    },
    {
      title: "30th Anniversary Mario - Modern Color",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "09/10/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/30th-anniversary-mario-modern-color-amiibo-30th-anniversary-series/figure.png'
    },
    {
      title: "30th Anniversary Mario - Classic Color",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "09/10/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/30th-anniversary-mario-classic-color-amiibo-30th-anniversary-series/figure.png'
    },
    {
      title: "Zero Suit Samus",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "09/11/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/zero-suit-samus-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_ZeroSuitSamus_Smash_char.png'
    },
    {
      title: "Olimar",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "09/11/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/olimar-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Olimar_Smash_char.png'
    },
    {
      title: "Ganondorf",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/11/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ganondorf-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ganondorf_Smash_char.png'
    },
    {
      title: "Bowser Jr.",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/11/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bowser-jr-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_BowserJr_Smash_char.png'
    },
    {
      title: "Dr. Mario",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/11/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/dr-mario-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_DrMario_Smash_char.png'
    },
    {
      title: "Turbo Charge Donkey Kong - Skylanders SuperChargers series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Skylanders SuperChargers series",
      release_year: "09/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/turbo-charge-donkey-kong-amiibo-skylanders-superchargers-series/screenshot-gallery/amiibo_TurboChargeDK_Skylanders_char_v2.png'
    },
    {
      title: "Hammer Slam Bowser - Skylanders SuperChargers series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Skylanders SuperChargers series",
      release_year: "09/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/hammer-slam-bowser-amiibo-skylanders-superchargers-series/screenshot-gallery/amiibo_HammerSlamBowser_Skylanders_char_v2.png'
    },
    {
      title: "Animal Crossing Cards - Series 1",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/24/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/animal-crossing-cards-series-1-amiibo-animal-crossing-series/figure.png'
    },
    {
      title: "Tom Nook (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/tom-nook-amiibo-card-series-1-animal-crossing-series/screenshot-gallery/amiibo_TomNook_Card_AC_char.png'
    },
    {
      title: "Isabelle (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/isabelle-amiibo-card-series-1-animal-crossing-series/screenshot-gallery/amiibo_Isabelle_Card_AC_char.png'
    },
    {
      title: "Digby (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/digby-amiibo-card-series-1-animal-crossing-series/screenshot-gallery/amiibo_Digby_Card_AC_char.png'
    },
    {
      title: "Lottie (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/lottie-amiibo-card-seies-1-animal-crossing-series/screenshot-gallery/amiibo_Lottie_Card_AC_char.png'
    },
    {
      title: "Rosetti (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/resetti-amiibo-card-series-1-animal-crossing-series/screenshot-gallery/amiibo_Resetti_Card_AC_char.png'
    },
    {
      title: "R.O.B.",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/rob-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_rob_smash.png'
    },
    {
      title: "Mr. Game & Watch",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mr-game-and-watch-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_gameandwatch_smash.png'
    },
    {
      title: "Duck Hunt",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/duck-hunt-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_duckhunt_smash.png'
    },
    {
      title: "Chibi-Robo - Chibi-Robo series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Chibi-Robo series",
      release_year: "10/09/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/chibi-robo-amiibo-chibi-robo-series/screenshot-gallery/amiibo_chibirobo.png'
    },
    {
      title: "Pink Yarn Yoshi - Yoshi's Woolly World series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Yoshi's Woolly World series",
      release_year: "10/16/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pink-yarn-yoshi-amiibo-yoshis-woolly-world-series/screenshot-gallery/amiibo_PinkYoshi_Yoshi_char.png'
    },
    {
      title: "Light Blue Yarn Yoshi - Yoshi's Woolly World series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Yoshi's Woolly World series",
      release_year: "10/16/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/light-blue-yarn-yoshi-amiibo-yoshis-woolly-world-series/screenshot-gallery/amiibo_BlueYoshi_Yoshi_char.png'
    },
    {
      title: "Green Yarn Yoshi - Yoshi's Woolly World series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Yoshi's Woolly World series",
      release_year: "10/16/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/green-yarn-yoshi-amiibo-yoshis-woolly-world-series/screenshot-gallery/amiibo_GreenYoshi_Yoshi_char.png'
    },
    {
      title: "Mii Swordfighter",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/01/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mii-swordfighter-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_miiswordfighter_smash.png'
    },
    {
      title: "Mii Gunner",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/01/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mii-gunner-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_miigunner_smash.png'
    },
    {
      title: "Mii Brawler",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/01/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mii-brawler-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_miibrawler_smash.png'
    },
    {
      title: "Tom Nook",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/tom-nook-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_tomnook.png'
    },
    {
      title: "Reese",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/reese-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_reese.png'
    },
    {
      title: "Mewtwo",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mewtwo-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Mewtwo_Smash_char.png'
    },
    {
      title: "Mabel",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mabel-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_mabel.png'
    },
    {
      title: "K.K.",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kk-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_kkslider.png'
    },
    {
      title: "Isabelle - Winter Outfit",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/isabelle-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_isabella.png'
    },
    {
      title: "Digby",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/digby-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_digby.png'
    },
    {
      title: "Cyrus",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/cyrus-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_cyrus.png'
    },
    {
      title: "Mega Yarn Yoshi - Yoshi's Woolly World series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Yoshi's Woolly World series",
      release_year: "11/15/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mega-yarn-yoshi-amiibo-yoshis-woolly-world-series/screenshot-gallery/amiibo_MegaYarnYoshi_Yoshi_char.png'
    },
    {
      title: "Falco",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/falco-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_falco_smash.png'
    },
    {
      title: "Lottie",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/22/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/lottie-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_lottie.png'
    },
    {
      title: "Shovel Knight",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Shovel Knight series",
      release_year: "01/08/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/shovel-knight-amiibo-shovel-knight-series/screenshot-gallery/amiibo_ShovelKnight_ShovelKnight_char.png'
    },
    {
      title: "Reese (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/reese-amiibo-card-series-2-animal-crossing-series/screenshot-gallery/amiibo_Reese_Card_S2_AC.png'
    },
    {
      title: "Kicks (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kicks-amiibo-card-series-2-animal-crossing-series/screenshot-gallery/amiibo_Kicks_Card_S2_AC.png'
    },
    {
      title: "Isabelle (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/isabelle-amiibo-card-series-2-animal-crossing-series/screenshot-gallery/amiibo_Isabelle_Card_S2_AC.png'
    },
    {
      title: "K.K. (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kk-amiibo-card-series-2-animal-crossing-series/screenshot-gallery/amiibo_KK_Card_S2_AC.png'
    },
    {
      title: "Animal Crossing Cards - Series 2 (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/animal-crossing-cards-series-2-amiibo-animal-crossing-series/screenshot-gallery/amiibo_AnimalCrossingCards_Series2_char.png'
    },
    {
      title: "Kicks",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kicks-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Kicks_AnimalCrossing_char.png'
    },
    {
      title: "Celeste",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/celeste-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Celeste_AnimalCrossing_char.png'
    },
    {
      title: "Resetti",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/resetti-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Resetti_AnimalCrossing_char.png'
    },
    {
      title: "Lucas",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/lucas-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Lucas_Smash_char.png'
    },
    {
      title: "Blathers",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/blathers-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Blathers_AC_char.png'
    },
    {
      title: "Mega Man® - Gold Edition",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "02/23/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mega-man-gold-edition-amiibo/screenshot-gallery/amiibo_MegaMan_GoldEdition_char.png'
    },
    {
      title: "Wolf Link",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "",
      release_year: "03/04/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/wolf-link-amiibo/screenshot-gallery/amiibo_WolfLink_Zelda_char.png'
    },
    {
      title: "Animal Crossing Cards - Series 3 (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/animal-crossing-cards-series-3-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Cards_Series3_AC_char.png'
    },
    {
      title: "Shadow Mewtwo",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/shadow-mewtwo-amiibo-card-pokken-tournament/screenshot-gallery/amiibo_ShadowMewtwo_Card_Pokemon.png'
    },
    {
      title: "Timmy & Tommy",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/timmy-and-tommy-amiibo-animal-crossing-series/screenshot-gallery/amiibo_TimmyTommy_AnimalCrossing_char.png'
    },
    {
      title: "Rover",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/rover-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Rover_AnimalCrossing_char.png'
    },
    {
      title: "Kapp'n",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kappn-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Kappn_AnimalCrossing_char.png'
    },
    {
      title: "Ryu",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ryu-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ryu_Smash_char.png'
    },
    {
      title: "Roy",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/roy-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Roy_Smash_char.png'
    },
    {
      title: "R.O.B. Famicom Colors",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/rob-famicom-colors-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_ROB-FC_Smash_char.png'
    },
    {
      title: "Kirby - Kirby series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Kirby series",
      release_year: "06/09/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kirby-amiibo-kirby-series/screenshot-gallery/amiibo_Kirby_Kirby_char.png'
    },
    {
      title: "Waddle Dee - Kirby series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Kirby series",
      release_year: "06/09/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/waddle-dee-amiibo-kirby-series/screenshot-gallery/amiibo_WaddleDee_Kirby_char.png'
    },
    {
      title: "Meta Knight - Kirby series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Kirby series",
      release_year: "06/09/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/meta-knight-amiibo-kirby-series/screenshot-gallery/amiibo_MetaKnight_Kirby_char.png'
    },
    {
      title: "King Dedede - Kirby series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Kirby series",
      release_year: "06/10/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/king-dedede-amiibo-kirby-series/screenshot-gallery/amiibo_KingDedede_Kirby_char.png'
    },
    {
      title: "Isabelle - Summer Outfit",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "06/10/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/isabelle-summer-outfit-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Isabelle-Summer_AnimalCrossing_char.png'
    },
    {
      title: "Animal Crossing Cards - Series 4",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "06/10/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/animal-crossing-cards-series-4-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Cards_Series4_AC_char.png'
    },
    {
      title: "Marie - Splatoon series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "07/08/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/marie-amiibo-splatoon-series/screenshot-gallery/amiibo_Marie_Splatoon_char.png'
    },
    {
      title: "Callie - Splatoon series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "07/08/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/callie-amiibo-splatoon-series/screenshot-gallery/amiibo_Callie_Splatoon_char.png'
    },
    {
      title: "Inkling Squid - Splatoon series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "07/08/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-squid-2-amiibo-splatoon-series/screenshot-gallery/amiibo_Squid2_Splatoon_char.png'
    },
    {
      title: "Inkling Boy - Splatoon series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "07/08/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-boy-2-amiibo-splatoon-series/screenshot-gallery/amiibo_Boy2_Splatoon_char.png'
    },
    {
      title: "Inkling Girl - Splatoon series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "07/08/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-girl-2-amiibo-splatoon-series/screenshot-gallery/amiibo_Girl2_Splatoon_char.png'
    },
    {
      title: "Donkey Kong",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario series",
      release_year: "11/03/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/donkey-kong-amiibo-super-mario-series/screenshot-gallery/amiibo_DK_SuperMario_char.png'
    },
    {
      title: "Diddy Kong",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario series",
      release_year: "11/03/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/diddy-kong-amiibo-super-mario-series/screenshot-gallery/amiibo_DiddyKong_SuperMario_char.png'
    },
    {
      title: "Wario",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario series",
      release_year: "11/04/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/wario-amiibo-super-mario-series/screenshot-gallery/amiibo_Wario_SuperMario_char.png'
    },
    {
      title: "Waluigi",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario series",
      release_year: "11/04/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/waluigi-amiibo-super-mario-series/screenshot-gallery/amiibo_Waluigi_SuperMario_char.png'
    },
    {
      title: "Rosalina",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario series",
      release_year: "11/04/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/rosalina-amiibo-super-mario-series/screenshot-gallery/amiibo_Rosalina_SuperMario_char.png'
    },
    {
      title: "Daisy",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario series",
      release_year: "11/04/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/daisy-amiibo-super-mario-series/screenshot-gallery/amiibo_Daisy_SuperMario_char.png'
    },
    {
      title: "Boo",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario series",
      release_year: "11/04/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/boo-amiibo-super-mario-series/screenshot-gallery/amiibo_Boo_SuperMario_char.png'
    },
    {
      title: "Zelda - The Wind Waker",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "30th anniversary series",
      release_year: "12/02/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/toon-zelda-the-wind-waker-amiibo-30th-anniversary-series/screenshot-gallery/amiibo_Zelda-WW_30thAnniv_char.png'
    },
    {
      title: "Toon Link - The Wind Waker",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "30th anniversary series",
      release_year: "12/02/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/toon-link-the-wind-waker-amiibo-30th-anniversary-series/screenshot-gallery/amiibo_Link-WW_30thAnniv_char.png'
    },
    {
      title: "Link™ - The Legend of Zelda",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "30th anniversary series",
      release_year: "12/02/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-the-legend-of-zelda-amiibo-30th-anniversary-series/screenshot-gallery/amiibo_Link_30thAnniv_char.png'
    },
    {
      title: "Link™ - Ocarina of Time",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "30th anniversary series",
      release_year: "12/02/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-ocarina-of-time-amiibo-30th-anniversary-series/screenshot-gallery/amiibo_Link-OOT_30thAnniv_char.png'
    },
    {
      title: "Animal Crossing: New Leaf - Welcome amiibo series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "12/02/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/animal-crossing-cards-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Cards_Series5_AC_char.png'
    },
    {
      title: "Poochy",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Yoshi's Woolly World series",
      release_year: "02/03/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/poochy-amiibo-yoshis-woolly-world-series/screenshot-gallery/amiibo_Poochy_Yoshi_char.png'
    },
    {
      title: "Bokoblin",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda: Breath of the Wild series",
      release_year: "03/03/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bokoblin-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Bokoblin_Zelda_char.png'
    },
    {
      title: "Zelda™",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda: Breath of the Wild series",
      release_year: "03/03/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/zelda-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Zelda_Zelda_char.png'
    },
    {
      title: "Link™ (Rider)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda: Breath of the Wild series",
      release_year: "03/03/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-rider-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Link-Rider_Zelda_char.png'
    },
    {
      title: "Link™ (Archer)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda: Breath of the Wild series",
      release_year: "03/03/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-archer-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Link-Archer_Zelda_char.png'
    },
    {
      title: "Guardian",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda: Breath of the Wild series",
      release_year: "03/03/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/guardian-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Guardian_Zelda_char.png'
    },
    {
      title: "Mario Sports Superstars (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Mario Sports Superstars series",
      release_year: "03/24/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-sports-superstars-amiibo-series/screenshot-gallery/amiibo_MarioSportsSS_char.png'
    },
    {
      title: "Celica",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Fire Emblem series",
      release_year: "05/19/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/celica-amiibo-fire-emblem-series/screenshot-gallery/amiibo_Celica_FireEmblem_char.png'
    },
    {
      title: "Alm",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Fire Emblem series",
      release_year: "05/19/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/alm-amiibo-fire-emblem-series/screenshot-gallery/amiibo_Alm_FireEmblem_char.png'
    },
    {
      title: "Link - Twilight Princess",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda series",
      release_year: "06/23/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-twilight-princess-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Link-TwilightPrincess_Zelda_char.png'
    },
    {
      title: "Link - Skyward Sword",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda series",
      release_year: "06/23/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-skyward-sword-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Link-SkywardSword_Zelda_char.png'
    },
    {
      title: "Link - Majora's Mask",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda series",
      release_year: "06/23/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-majoras-mask-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Link-MajorasMask_30thAnniv_char.png'
    },
    {
      title: "Inkling Squid",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "07/21/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-squid-3-amiibo-splatoon-series/screenshot-gallery/amiibo_Squid3_Splatoon_char.png'
    },
    {
      title: "Inkling Girl",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "07/21/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-girl-3-amiibo-splatoon-series/screenshot-gallery/amiibo_Girl3_Splatoon_char.png'
    },
    {
      title: "Inkling Boy",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "07/21/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-boy-3-amiibo-splatoon-series/screenshot-gallery/amiibo_Boy3_Splatoon_char.png'
    },
    {
      title: "Corrin - Player 2",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "07/21/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/corrin-player-2-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Corrin-P2_Smash_char.png'
    },
    {
      title: "Corrin",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "07/21/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/corrin-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Corrin_Smash_char.png'
    },
    {
      title: "Cloud - Player 2",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "07/21/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/cloud-player-2-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Cloud-P2_Smash_char.png'
    },
    {
      title: "Cloud",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "07/21/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/cloud-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Cloud_Smash_char.png'
    },
    {
      title: "Bayonetta - Player 2",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "07/21/2017",
      genre: 'Amiibo',
      // description: `Bayonetta is one of the last of the near-extinct Umbra Witches clan. She's a master of the Bullet Arts, can use her hair as a conduit to bring forth Infernal Demons, and ends up embroiled in a battle to save the world.`,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bayonetta-player-2-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Bayonetta-P2_Smash_char.png'
    },
    {
      title: "Bayonetta",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "07/21/2017",
      genre: 'Amiibo',
      // description: `Bayonetta is one of the last of the near-extinct Umbra Witches clan. She's a master of the Bullet Arts, can use her hair as a conduit to bring forth Infernal Demons, and ends up embroiled in a battle to save the world.`,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bayonetta-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Bayonetta_Smash_char.png'
    },
    {
      title: "Pikmin",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Pikmin series",
      release_year: "07/28/2017",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pikmin-amiibo-pikmin-series/screenshot-gallery/amiibo_Pikmin_Pikmin_char.png'
    },
    {
      title: "Metroid",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Metroid series",
      release_year: "09/15/2017",
      genre: 'Amiibo',
      // description: `These mysterious organisms have the power to absorb the energy of any life-form with which they come in contact, and this ability has put them at the center of many a galactic conflict. Nefarious Space Pirates want to use them as a weapon—one powerful enough to conquer the entire galaxy. To combat this threat, the Galactic Federation dispatched a lone bounty hunter, Samus Aran, to eliminate the Metroid™ menace once and for all.`,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/metroid-amiibo-metroid-series/screenshot-gallery/amiibo_Metroid_Metroid_char.png'
    },
    {
      title: "Samus Aran",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Metroid series",
      release_year: "09/15/2017",
      genre: 'Amiibo',
      // description: `Samus Aran, an intergalactic bounty hunter, has fought her way across a variety of planets in the Metroid™ series. Orphaned at an early age, she was taken in and raised by the alien race known as the Chozo. The Power Suit she wears is a product of their technology. Her combat skills combined with her athleticism and Arm Cannon have seen her through countless missions. This amiibo figure shows Samus Aran as she appears in the Metroid™: Samus Returns game and crouched in her classic pose from the Metroid II-Return of Samus™ game's box art.`,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/samus-aran-amiibo-metroid-series/screenshot-gallery/amiibo_SamusAran_Metroid_char.png'
    },
    {
      title: "Goomba",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario serie",
      release_year: "10/06/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/goomba-amiibo-super-mario-series/screenshot-gallery/amiibo_Goomba_SuperMario_char.png'
    },
    {
      title: "Koopa Troopa",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario serie",
      release_year: "10/06/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/koopa-troopa-amiibo-super-mario-series/screenshot-gallery/amiibo_KoopaTroopa_SuperMario_char.png'
    },
    {
      title: "Tiki",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Fire Emblem series",
      release_year: "10/20/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/tiki-amiibo-fire-emblem-series/screenshot-gallery/amiibo_Tiki_FireEmblem_char.png'
    },
    {
      title: "Chrom",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Fire Emblem series",
      release_year: "10/20/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/chrom-amiibo-fire-emblem-series/screenshot-gallery/amiibo_Chrom_FireEmblem_char.png'
    },
    {
      title: "Mario (Wedding Outfit)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario Odyssey series",
      release_year: "10/27/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-wedding-outfit-amiibo-super-mario-odyssey-series/screenshot-gallery/amiibo_Mario_Odyssey_char.png'
    },
    {
      title: "Peach (Wedding Outfit)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario Odyssey series",
      release_year: "10/27/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/peach-wedding-outfit-amiibo-super-mario-odyssey-series/screenshot-gallery/amiibo_Peach_Odyssey_char.png'
    },
    {
      title: "Bowser (Wedding Outfit)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Mario Odyssey series",
      release_year: "10/27/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bowser-wedding-outfit-amiibo-super-mario-odyssey-series/screenshot-gallery/amiibo_Bowser_Odyssey_char.png'
    },
    {
      title: "Urbosa",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda: Breath of the Wild series",
      release_year: "11/10/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/urbosa-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Urbosa_Zelda_char.png'
    },
    {
      title: "Revali",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda: Breath of the Wild series",
      release_year: "11/10/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/revali-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Revali_Zelda_char.png'
    },
    {
      title: "Mipha",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda: Breath of the Wild series",
      release_year: "11/10/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mipha-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Mipha_Zelda_char.png'
    },
    {
      title: "Daruk",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda: Breath of the Wild series",
      release_year: "11/10/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/daruk-amiibo-the-legend-of-zelda-series/screenshot-gallery/amiibo_Daruk_Zelda_char.png'
    },
    {
      title: "Delicious amiibo (Cereal)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "-",
      release_year: "12/11/2017",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/delicious-amiibo/screenshot-gallery/amiibo_SuperMarioCereal_Odyssey_char.png'
    },
    {
      title: "Detective Pikachu",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "-",
      release_year: "03/23/2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/detective-pikachu-amiibo/screenshot-gallery/amiibo_DetectivePikachu_Pikachu_char.png'
    },
    {
      title: "Pearl",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "07/13/2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pearl-amiibo-splatoon-series/screenshot-gallery/amiibo_Pearl_Splatoon_char.png'
    },
    {
      title: "Marina",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "07/13/2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/marina-amiibo-splatoon-series/screenshot-gallery/amiibo_Marina_Splatoon_char.png'
    },
    {
      title: "Solaire of Astora",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "-",
      release_year: "10/19/2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/solaire-of-astora-amiibo-dark-souls-series/screenshot-gallery/amiibo_Solaire_DarkSouls_char.png'
    },
    {
      title: "Wolf",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "-",
      release_year: "12/06/2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/wolf-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Wolf_Smash_char.png'
    },
    {
      title: "Octoling Octopus",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "12/07/2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/octoling-octopus-amiibo-splatoon-series/screenshot-gallery/amiibo_OctolingOctopus_Splatoon_char.png'
    },
    {
      title: "Octoling Girl",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "12/07/2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/octoling-girl-amiibo-splatoon-series/screenshot-gallery/amiibo_OctolingGirl_Splatoon_char.png'
    },
    {
      title: "Octoling Boy",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Splatoon series",
      release_year: "12/07/2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/octoling-boy-amiibo-splatoon-series/screenshot-gallery/amiibo_OctolingBoy_Splatoon_char.png'
    },
    {
      title: "Inkling",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "12/07/2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Inkling_Smash_char.png'
    },
    {
      title: "Ridley",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "12/07/2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ridley-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ridley_Smash_char.png'
    },
    {
      title: "Loot Goblin",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "-",
      release_year: "December 2018",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/loot-goblin-amiibo-diablo-3-series/screenshot-gallery/amiibo_LootGoblin_Diablo3_char.png'
    },
    {
      title: "Piranha Plant",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "02/14/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/piranha-plant-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_PiranhaPlant_Smash_char.png'
    },
    {
      title: "King K. Rool",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "02/14/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/king-k-rool-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_KingKRool_Smash_char.png'
    },
    {
      title: "Ice Climbers",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "02/14/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ice-climbers-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_IceClimbers_Smash_char.png'
    },
    {
      title: "Ken",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "04/11/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ken-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ken_Smash_char.png'
    },
    {
      title: "Young Link",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "04/11/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/young-link-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_YoungLink_Smash_char.png'
    },
    {
      title: "Daisy",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "04/12/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/daisy-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Daisy_Smash_char.png'
    },
    {
      title: "Pokémon Trainer",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "07/26/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pokemon-trainer-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Trainer_Smash_char.png'
    },
    {
      title: "Pichu",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "07/26/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pichu-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Pichu_Smash_char.png'
    },
    {
      title: "Isabelle",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "07/26/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/isabelle-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Isabelle_Smash_char.png'
    },
    {
      title: "Squirtle",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/20/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/squirtle-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Squirtle_Smash_char.png'
    },
    {
      title: "Link",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "The Legend of Zelda: Link's Awakening series",
      release_year: "09/20/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-amiibo-the-legend-of-zelda-links-awakening-series/screenshot-gallery/amiibo_Link_LinksAwakening_char.png'
    },
    {
      title: "Ivysaur",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/20/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ivysaur-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ivysaur_Smash_char.png'
    },
    {
      title: "Snake",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/20/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/snake-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Snake_Smash_char.png'
    },
    {
      title: "Incineroar",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/15/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/incineroar-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Inceneroar_Smash_char.png'
    },
    {
      title: "Chrom",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/15/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/chrom-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Chrom_Smash_char.png'
    },
    {
      title: "Simon",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/15/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/simon-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Simon_Smash_char.png'
    },
    {
      title: "Plague Knight",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Shovel Knight series",
      release_year: "12/31/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/plague-knight-amiibo-shovel-knight-series/screenshot-gallery/amiibo_PlagueKnight_ShovelKnight_char.png'
    },
    {
      title: "King Knight",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Shovel Knight series",
      release_year: "12/31/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/king-knight-amiibo-shovel-knight-series/screenshot-gallery/amiibo_KingKnight_ShovelKnight_char.png'
    },
    {
      title: "Specter Knight",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Shovel Knight series",
      release_year: "12/31/2019",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/specter-knight-amiibo-shovel-knight-series/screenshot-gallery/amiibo_SpecterKnight_ShovelKnight_char.png'
    },
    {
      title: "Richter",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "2020",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/richter-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Richter_Smash_char.png'
    },
    {
      title: "Dark Samus",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "2020",
      genre: 'Amiibo',
      // description: ``,
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/dark-samus-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_DarkSamus_Smash_char.png'
    },
  ]);
  // .returning('*')
  //   .bind(console)
  //   .then(console.log)
  //   .catch(console.error);
};
