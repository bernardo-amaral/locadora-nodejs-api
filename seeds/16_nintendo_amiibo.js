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
      amiibo_series: "Super Smash Bros. series",
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/link-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Link_Smash_char_v2.png'
    },
    {
      title: "Donkey Kong - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "20/11/2014",
      genre: 'Amiibo',
      amiibo_series: "Super Smash Bros. series",
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/donkey-kong-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_DK_Smash_char_v2.png'
    },
    {
      title: "Yoshi - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      genre: 'Amiibo',
      amiibo_series: "Super Smash Bros. series",
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/yoshi-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Yoshi_Smash_char_v2.png'
    },
    {
      title: "Wii Fit Trainer - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/wii-fit-trainer-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_WiiFitTrainer_Smash_char_v2.png'
    },
    {
      title: "Villager - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/villager-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Villager_Smash_char_v2.png'
    },
    {
      title: "Samus - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/samus-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Samus_Smash_char_v2.png'
    },
    {
      title: "Pikachu - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pikachu-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Pikachu_Smash_char_v2.png'
    },
    {
      title: "Peach - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/peach-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Peach_Smash_char_v2.png'
    },
    {
      title: "Marth - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/marth-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Marth_Smash_char_v2.png'
    },
    {
      title: "Kirby - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kirby-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Kirby_Smash_char_v2.png'
    },
    {
      title: "Fox - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/fox-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Fox_Smash_char_v2.png'
    },
    {
      title: "Mario - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "21/11/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Mario_Smash_char_v2.png'
    },
    {
      title: "Zelda - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Dec 2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/zelda-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Zelda_Smash_char_v2.png'
    },
    {
      title: "Pit - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Dec 2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pit-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Pit_Smash_char_v2.png'
    },
    {
      title: "Luigi - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Dec 2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/luigi-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Luigi_Smash_char_v2.png'
    },
    {
      title: "Little Mac - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Dec 2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/little-mac-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_LittleMac_Smash_char_v2.png'
    },
    {
      title: "Diddy Kong - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "12/31/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/diddy-kong-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_DiddyKong_Smash_char_v2.png'
    },
    {
      title: "Captain Falcon - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "12/31/2014",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/captain-falcon-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_CaptainFalcon_Smash_char_v2.png'
    },
    {
      title: "Bowser - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "02/27/2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bowser-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Bowser_Smash_char.png'
    },
    {
      title: "Toon Link - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015  ",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/toon-link-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_ToonLink_Smash_char.png'
    },
    {
      title: "Sonic - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/sonic-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Sonic_Smash_char.png'
    },
    {
      title: "Shulk - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/shulk-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Shulk_Smash_char.png'
    },
    {
      title: "Sheik - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/sheik-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Sheik_Smash_char.png'
    },
    {
      title: "Rosalina - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/rosalina-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Rosalina_Smash_char.png'
    },
    {
      title: "Meta Knight - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/meta-knight-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Metaknight_Smash_char.png'
    },
    {
      title: "Mega Man - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mega-man-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_MegaMan_Smash_char.png'
    },
    {
      title: "Lucario - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "Feb 2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/lucario-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Lucario_Smash_char.png'
    },
    {
      title: "King Dedede - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "02/28/2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/king-dedede-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_KingDedede_Smash_char.png'
    },
    {
      title: "Ike - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "02/28/2015",
      amiibo_series: "Super Smash Bros. series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ike-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ike_Smash_char.png'
    },
    {
      title: "Bowser - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/19/2015",
      amiibo_series: "Super Mario series",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bowser-amiibo-super-mario-series/screenshot-gallery/amiibo_Bowser_SuperMario_char.png'
    },
    {
      title: "Yoshi™ - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/yoshi-amiibo-super-mario-series/screenshot-gallery/amiibo_Yoshi_SuperMario_char.png'
    },
    {
      title: "Toad - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/toad-amiibo-super-mario-series/screenshot-gallery/amiibo_Toad_SuperMario_char.png'
    },
    {
      title: "Peach™ - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/peach-amiibo-super-mario-series/screenshot-gallery/amiibo_Peach_SuperMario_char.png'
    },
    {
      title: "Mario™ - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-amiibo-super-mario-series/screenshot-gallery/amiibo_Mario_SuperMario_char.png'
    },
    {
      title: "Luigi™ - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/luigi-amiibo-super-mario-series/screenshot-gallery/amiibo_Luigi_SuperMario_char.png'
    },
    {
      title: "Mario™ - Gold Edition - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "03/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-gold-edition-amiibo-super-mario-series/screenshot-gallery/amiibo_GoldMario_SuperMario_char.png'
    },
    {
      title: "Wario - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/wario-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Wario_Smash_char.png'
    },
    {
      title: "Mario™ - Silver Edition - Super Mario series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mario-silver-edition-amiibo-super-mario-series/screenshot-gallery/amiibo_SilverMario_SuperMario_char.png'
    },
    {
      title: "Robin - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/robin-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Robin_Smash_char.png'
    },
    {
      title: "PAC-MAN™ - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/pac-man-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_PacMan_Smash_char.png'
    },
    {
      title: "Ness - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ness-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ness_Smash_char.png'
    },
    {
      title: "Lucina - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/lucina-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Lucina_Smash_char.png'
    },
    {
      title: "Jigglypuff - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/jigglypuff-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Jigglypuff_Smash_char.png'
    },
    {
      title: "Inkling Squid - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-squid-amiibo-splatoon-series/screenshot-gallery/amiibo_Squid_Splatoon_char.png'
    },
    {
      title: "Inkling Girl - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-girl-amiibo-splatoon-series/screenshot-gallery/amiibo_Girl_Splatoon_char.png'
    },
    {
      title: "Inkling Boy - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/inkling-boy-amiibo-splatoon-series/screenshot-gallery/amiibo_Boy_Splatoon_char.png'
    },
    {
      title: "Greninja - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/greninja-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Greninja_Smash_char.png'
    },
    {
      title: "Charizard - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "05/29/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/charizard-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Charizard_Smash_char.png'
    },
    {
      title: "Palutena - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "07/27/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/palutena-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Palutena_Smash_char.png'
    },
    {
      title: "Dark Pit - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "07/31/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/dark-pit-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_DarkPit_Smash_char.png'
    },
    {
      title: "30th Anniversary Mario - Modern Color - 30th anniversary series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "09/10/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/30th-anniversary-mario-modern-color-amiibo-30th-anniversary-series/figure.png'
    },
    {
      title: "30th Anniversary Mario - Classic Color - 30th anniversary series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "09/10/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/30th-anniversary-mario-classic-color-amiibo-30th-anniversary-series/figure.png'
    },
    {
      title: "Zero Suit Samus - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "09/11/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/zero-suit-samus-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_ZeroSuitSamus_Smash_char.png'
    },
    {
      title: "Olimar - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "09/11/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/olimar-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Olimar_Smash_char.png'
    },
    {
      title: "Ganondorf - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/11/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ganondorf-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ganondorf_Smash_char.png'
    },
    {
      title: "Bowser Jr. - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/11/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/bowser-jr-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_BowserJr_Smash_char.png'
    },
    {
      title: "Dr. Mario - Super Smash Bros. series",
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
      title: "Animal Crossing Cards - Series 1 - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/24/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/animal-crossing-cards-series-1-amiibo-animal-crossing-series/figure.png'
    },
    {
      title: "Tom Nook - Animal Crossing series (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/tom-nook-amiibo-card-series-1-animal-crossing-series/screenshot-gallery/amiibo_TomNook_Card_AC_char.png'
    },
    {
      title: "Isabelle - Animal Crossing series (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/isabelle-amiibo-card-series-1-animal-crossing-series/screenshot-gallery/amiibo_Isabelle_Card_AC_char.png'
    },
    {
      title: "Digby - Animal Crossing series (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/digby-amiibo-card-series-1-animal-crossing-series/screenshot-gallery/amiibo_Digby_Card_AC_char.png'
    },
    {
      title: "Lottie - Animal Crossing series (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/lottie-amiibo-card-seies-1-animal-crossing-series/screenshot-gallery/amiibo_Lottie_Card_AC_char.png'
    },
    {
      title: "Rosetti - Animal Crossing series (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/resetti-amiibo-card-series-1-animal-crossing-series/screenshot-gallery/amiibo_Resetti_Card_AC_char.png'
    },
    {
      title: "R.O.B. - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/rob-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_rob_smash.png'
    },
    {
      title: "Mr. Game & Watch - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "09/25/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mr-game-and-watch-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_gameandwatch_smash.png'
    },
    {
      title: "Duck Hunt - Super Smash Bros. series",
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
      title: "Mii Swordfighter - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/01/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mii-swordfighter-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_miiswordfighter_smash.png'
    },
    {
      title: "Mii Gunner - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/01/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mii-gunner-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_miigunner_smash.png'
    },
    {
      title: "Mii Brawler - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/01/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mii-brawler-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_miibrawler_smash.png'
    },
    {
      title: "Tom Nook - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/tom-nook-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_tomnook.png'
    },
    {
      title: "Reese - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/reese-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_reese.png'
    },
    {
      title: "Mewtwo - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mewtwo-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Mewtwo_Smash_char.png'
    },
    {
      title: "Mabel - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/mabel-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_mabel.png'
    },
    {
      title: "K.K. - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kk-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_kkslider.png'
    },
    {
      title: "Isabelle - Winter Outfit - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/isabelle-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_isabella.png'
    },
    {
      title: "Digby - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "11/13/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/digby-amiibo-animal-crossing-series/screenshot-gallery/amiibo_char_digby.png'
    },
    {
      title: "Cyrus - Animal Crossing series",
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
      title: "Falco - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "11/20/2015",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/falco-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_falco_smash.png'
    },
    {
      title: "Lottie - Animal Crossing series",
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
      title: "Reese - Animal Crossing series (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/reese-amiibo-card-series-2-animal-crossing-series/screenshot-gallery/amiibo_Reese_Card_S2_AC.png'
    },
    {
      title: "Kicks - Animal Crossing series (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kicks-amiibo-card-series-2-animal-crossing-series/screenshot-gallery/amiibo_Kicks_Card_S2_AC.png'
    },
    {
      title: "Isabelle - Animal Crossing series (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/isabelle-amiibo-card-series-2-animal-crossing-series/screenshot-gallery/amiibo_Isabelle_Card_S2_AC.png'
    },
    {
      title: "K.K. - Animal Crossing series (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kk-amiibo-card-series-2-animal-crossing-series/screenshot-gallery/amiibo_KK_Card_S2_AC.png'
    },
    {
      title: "Animal Crossing Cards - Series 2 - Animal Crossing series (Card)",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/animal-crossing-cards-series-2-amiibo-animal-crossing-series/screenshot-gallery/amiibo_AnimalCrossingCards_Series2_char.png'
    },
    {
      title: "Kicks - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kicks-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Kicks_AnimalCrossing_char.png'
    },
    {
      title: "Celeste - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/celeste-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Celeste_AnimalCrossing_char.png'
    },
    {
      title: "Resetti - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/resetti-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Resetti_AnimalCrossing_char.png'
    },
    {
      title: "Lucas - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/lucas-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Lucas_Smash_char.png'
    },
    {
      title: "Blathers - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "01/22/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/blathers-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Blathers_AC_char.png'
    },
    {
      title: "Mega Man® - Gold Edition - Super Smash Bros. series",
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
      title: "Animal Crossing Cards - Series 3 - Animal Crossing series (Card)",
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
      title: "Timmy & Tommy - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/timmy-and-tommy-amiibo-animal-crossing-series/screenshot-gallery/amiibo_TimmyTommy_AnimalCrossing_char.png'
    },
    {
      title: "Rover - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/rover-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Rover_AnimalCrossing_char.png'
    },
    {
      title: "Kapp'n - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/kappn-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Kappn_AnimalCrossing_char.png'
    },
    {
      title: "Ryu - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/ryu-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Ryu_Smash_char.png'
    },
    {
      title: "Roy - Super Smash Bros. series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Super Smash Bros. series",
      release_year: "03/18/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/roy-amiibo-super-smash-bros-series/screenshot-gallery/amiibo_Roy_Smash_char.png'
    },
    {
      title: "R.O.B. Famicom Colors - Super Smash Bros. series",
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
      title: "Isabelle - Summer Outfit - Animal Crossing series",
      developer: "Nintendo",
      publisher: "Nintendo",
      amiibo_series: "Animal Crossing series",
      release_year: "06/10/2016",
      genre: 'Amiibo',
      console_id: 16,
      cover_picture: 'https://www.nintendo.com/content/dam/noa/en_US/amiibo/isabelle-summer-outfit-amiibo-animal-crossing-series/screenshot-gallery/amiibo_Isabelle-Summer_AnimalCrossing_char.png'
    },
    {
      title: "Animal Crossing Cards - Series 4 - Animal Crossing series",
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


  ]);
  // .returning('*')
  //   .bind(console)
  //   .then(console.log)
  //   .catch(console.error);
};