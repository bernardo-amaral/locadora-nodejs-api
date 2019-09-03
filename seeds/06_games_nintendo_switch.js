/* eslint-disable */
const tableName = 'games';
exports.seed = knex => populateWithNintendoSwitchGames(knex);

async function populateWithNintendoSwitchGames(knex) {
  await knex.raw('SELECT setval(\'games_game_id_seq\', (SELECT MAX(game_id) from "games"));');
  await knex(tableName).where('console_id', 14).del();
  await knex(tableName).insert([
    {
      title: "Mario Kart 8",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "-",
      genre: '-',
      console_id: 14,
      cover_picture: ''
    },
    {
      title: "The Legend of Zelda: Breath of the Wild",
      developer: "Nintendo Entertainment Planning & Development",
      publisher: "Nintendo",
      release_year: "3 de março de 2017",
      genre: 'Ação-aventura',
      console_id: 14,
      cover_picture: 'https://upload.wikimedia.org/wikipedia/pt/6/67/Zelda_-_Breath_of_the_Wild.png'
    },
    {
      title: "Ultra Street Fighter II: The Final Challengers",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "-",
      genre: '-',
      console_id: 14,
      cover_picture: 'https://upload.wikimedia.org/wikipedia/en/3/34/Ultra_street_fighter_II_art.jpg'
    },
    {
      title: "Splatoon 2",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "-",
      genre: '-',
      console_id: 14,
      cover_picture: ''
    },
    {
      title: "Pokémon Let's Go: Pikachu",
      developer: "Nintendo",
      publisher: "Nintendo",
      release_year: "-",
      genre: '-',
      console_id: 14,
      cover_picture: ''
    },
    {
      title: "Crash Bandicoot N. Sane Trilogy",
      developer: "-",
      publisher: "-",
      release_year: "-",
      genre: '-',
      console_id: 14,
      cover_picture: 'https://upload.wikimedia.org/wikipedia/pt/d/de/Crash_Bandicoot_N._Sane_Trilogy_cover_art.jpg'
    },
    {
      title: "Dragon Ball FighterZ",
      developer: "Arc System Works",
      publisher: "Bandai Namco Entertainment",
      release_year: "26 de Janeiro de 2018",
      genre: 'Luta',
      console_id: 14,
      cover_picture: ''
    },
    {
      title: "Bloodstained: Ritual of the Night",
      developer: "ArtPlay",
      publisher: "505 Games",
      release_year: "25 June 2019",
      genre: 'Metroidvania',
      console_id: 14,
      cover_picture: 'https://upload.wikimedia.org/wikipedia/en/7/74/Bloodstained_cover_art.jpg'
    },
    {
      title: "ToeJam & Earl: Back in the Groove",
      developer: "-",
      publisher: "Limited Run Games",
      release_year: "-",
      genre: '-',
      console_id: 14,
      cover_picture: ''
    },
  ]);
};
