/* eslint-disable */
const tableName = 'games';
exports.seed = knex => populateWithNesGames(knex);

async function populateWithNesGames(knex) {
    await knex.raw('SELECT setval(\'games_game_id_seq\', (SELECT MAX(game_id) from "games"));');
    await knex(tableName).where('console_id', 3).del();
    await knex(tableName).insert([
      {
          title: "3 Ninjas Kick Back",
          developer: "Malibu Interactive",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "3rd Super Robot Wars",
          developer: "Banpresto",
          publisher: "Banpresto",
          release_year: "July 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "3×3 Eyes Jūma hōkan",
          developer: "System Supply N-Tech",
          publisher: "Banpresto",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "3×3 Eyes Seima kōrin-den",
          developer: "Nova Games",
          publisher: "Yutaka",
          release_year: "July 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "4 Nin Shōgi",
          developer: "Planning Office Wada",
          publisher: "Planning Office Wada",
          release_year: "July 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "4th Super Robot Wars",
          developer: "Banpresto",
          publisher: "Banpresto",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The 7th Saga\n•ElnardJP",
          developer: "Produce",
          publisher: "Gameplan21 (JP)\nEnix (NA)",
          release_year: "April 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "90 Minutes European Prime Goal\n•J.League Soccer Prime Goal 3JP",
          developer: "Namco",
          publisher: "Namco (JP)\nOcean Software (EU)",
          release_year: "August 4, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "A.S.P. Air Strike Patrol\n•Desert FighterEU\n•Desert Fighter: Suna no Arashi SakusenJP",
          developer: "SETA",
          publisher: "SETA (JP/NA)\nSystem 3 (EU)",
          release_year: "September 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "AIII S.V.: Let's Take the A-Train 3 Super Version",
          developer: "Pack-In-Video",
          publisher: "Artdink",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "AAAHH!!! Real Monsters",
          developer: "Realtime Associates",
          publisher: "Viacom New Media",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ABC Monday Night Football\n•ABC Mande Naito FuttoboruJP",
          developer: "Data East / Kuusoukagaku",
          publisher: "Data East",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Accele Brid",
          developer: "Tomy",
          publisher: "Tomy",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ACME Animation Factory",
          developer: "Probe Software",
          publisher: "Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Acrobat Mission",
          developer: "Micronics",
          publisher: "Techiku",
          release_year: "September 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Action Pachio",
          developer: "Coconuts Japan",
          publisher: "Coconuts Japan",
          release_year: "April 9, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ActRaiser",
          developer: "Quintet",
          publisher: "Enix",
          release_year: "December 16, 1990",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ActRaiser 2\n•ActRaiser 2: Chinmoku e no SeisenJP",
          developer: "Quintet",
          publisher: "Enix",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Addams Family",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "October 23, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Addams Family: Pugsley's Scavenger Hunt",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Addams Family Values",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Adventures of Batman & Robin",
          developer: "Konami",
          publisher: "Konami",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Adventures of Dr. Franken",
          developer: "MotiveTime",
          publisher: "DTMC (NA)\nElite Systems (EU)",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Adventures of Mighty Max",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Adventures of Rocky and Bullwinkle and Friends",
          developer: "Imagineering",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Adventures of Tintin: Prisoners of the Sun",
          developer: "Herge",
          publisher: "Infogrames",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Adventures of Yogi Bear\n•Yogi Bear's Cartoon CapersEU",
          developer: "Empire Software",
          publisher: "Cybersoft",
          release_year: "January 3, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Aero Fighters\n•Sonic WingsJP",
          developer: "Video System",
          publisher: "Video System (JP)\nMC O'River (NA)",
          release_year: "July 30, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Aero the Acro-Bat",
          developer: "Iguana Entertainment",
          publisher: "Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Aero the Acro-Bat 2",
          developer: "Iguana Entertainment",
          publisher: "Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Aerobiz\n•Air Management: Ōzora ni KakeruJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "April 5, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Aerobiz Supersonic\n•Air Management II: Kōkū Ō wo MezaseJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "April 2, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Aim for the Ace!",
          developer: "Nippon Telenet",
          publisher: "Nippon Telenet",
          release_year: "December 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Air Cavalry",
          developer: "Synergistic Software",
          publisher: "Cybersoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Al Unser Jr.'s Road to the Top",
          developer: "Radical Entertainment",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Albert Odyssey",
          developer: "Sunsoft",
          publisher: "Sunsoft",
          release_year: "March 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Albert Odyssey 2",
          developer: "Sunsoft",
          publisher: "Sunsoft",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Alcahest",
          developer: "HAL Laboratory",
          publisher: "Square",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Alice's Paint Adventure",
          developer: "SAS Sakata",
          publisher: "Epoch Co.",
          release_year: "September 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Alien 3",
          developer: "Probe Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "May 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Alien vs Predator\n•Aliens vs PredatorJP",
          developer: "Jorudan",
          publisher: "Activision",
          release_year: "January 8, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Amazing Spider-Man: Lethal Foes",
          developer: "Agenda",
          publisher: "Epoch Co.",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "America Ōdan Ultra Quiz",
          developer: "Genki",
          publisher: "Tomy",
          release_year: "November 20, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "American Battle Dome",
          developer: "Betop",
          publisher: "Tsukuda Original",
          release_year: "December 8, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "American Gladiators",
          developer: "Imagitec Design",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "An American Tail: Fievel Goes West\n•Amerika Monogatari 2/Faiberu nishi e IkuJP",
          developer: "Shimada Kikaku",
          publisher: "Hudson Soft",
          release_year: "July 1, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ancient Magic: Bazoo! Mahou Sekai",
          developer: "Hot-B",
          publisher: "Hot-B",
          release_year: "July 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Andre Agassi Tennis",
          developer: "Radiance Software",
          publisher: "TecMagik",
          release_year: "March 31, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Angelique",
          developer: "Ruby Party",
          publisher: "Koei, NEC",
          release_year: "September 23, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Angelique Voice Fantasy",
          developer: "Ruby Party",
          publisher: "Koei, NEC",
          release_year: "March 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Animaniacs",
          developer: "Konami",
          publisher: "Konami",
          release_year: "March 7, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Appleseed: Oracle of Prometheus",
          developer: "Visit",
          publisher: "Visit",
          release_year: "August 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Arabian Nights: Spirit of the Desert King",
          developer: "Pandora Box",
          publisher: "Takara",
          release_year: "June 14, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Araiguma Rascal",
          developer: "J-Force",
          publisher: "Masaya",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Arcade's Greatest Hits: The Atari Collection 1",
          developer: "Digital Eclipse Software",
          publisher: "Midway Games",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Arcana\n•Card MasterJP",
          developer: "HAL Laboratory",
          publisher: "HAL Laboratory",
          release_year: "March 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Arcus Spirits",
          developer: "Wolf Team",
          publisher: "Sammy Studios",
          release_year: "October 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ardy Lightfoot\n•Arudi RaitofuttoJP",
          developer: "ASCII Entertainment",
          publisher: "Titus Software",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Aretha the Super Famicom",
          developer: "Japan Art Media",
          publisher: "Yanoman",
          release_year: "November 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Aretha II: Ariel no Fushigi na Tabi",
          developer: "Japan Art Media",
          publisher: "Yanoman",
          release_year: "December 2, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Arkanoid: Doh It Again",
          developer: "Taito",
          publisher: "Taito (JP)\nNintendo (NA/EU)",
          release_year: "January 15, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Armored Police Metal Jack",
          developer: "Atlus",
          publisher: "Atlus",
          release_year: "July 31, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Art of Fighting\n•Ryuuko no KenJP",
          developer: "Monolith Corporation",
          publisher: "Takara",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Asahi Shinbun Rensai: Katou Ichi-Ni-San Shougi: Shingiryuu",
          developer: "Varie",
          publisher: "Varie",
          release_year: "September 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Asameshimae Nyanko",
          developer: "J-Force",
          publisher: "Zamuse",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ashita no Joe",
          developer: "Wave Corp",
          publisher: "K Amusement Leasing",
          release_year: "November 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Asterix",
          developer: "Infogrames",
          publisher: "Infogrames",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Asterix & Obelix",
          developer: "Infogrames",
          publisher: "Infogrames",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Atlas, The",
          developer: "Artdink",
          publisher: "Pack-In-Video",
          release_year: "March 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Axelay †",
          developer: "Konami",
          publisher: "Konami",
          release_year: "September 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "B.O.B.\n•Space Funky B.O.B.JP",
          developer: "Gray Matter",
          publisher: "Electronic Arts",
          release_year: "1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bahamut Lagoon",
          developer: "Square",
          publisher: "Square",
          release_year: "February 9, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bakukyuu Renpatsu!! Super B-Daman",
          developer: "Amble",
          publisher: "Hudson Soft",
          release_year: "December 19, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bakumatsu Kourinden Oni",
          developer: "Pandora Box",
          publisher: "Banpresto",
          release_year: "February 2, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bakuto Dochers",
          developer: "Genki",
          publisher: "Bullet Proof Software",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ball Bullet Gun: Survival Game Simulation",
          developer: "Betop",
          publisher: "I'MAX",
          release_year: "December 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ballz 3D\n•3 Jigen Kakuto: BallzJP",
          developer: "PF Magic",
          publisher: "Accolade",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Barbarossa",
          developer: "SystemSoft Alpha",
          publisher: "Sammy",
          release_year: "November 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Barbie: Super Model",
          developer: "Software Creations",
          publisher: "Hi Tech Expressions",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Barkley Shut Up and Jam!\n•Barkley's Power DunkJP",
          developer: "Accolade",
          publisher: "Accolade",
          release_year: "September 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bass Masters Classic",
          developer: "Malibu Games",
          publisher: "Malibu Games",
          release_year: "July 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bass Masters Classic: Pro Edition",
          developer: "Black Pearl Software",
          publisher: "Black Pearl Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bassin's Black Bass with Hank Parker\n•Super Black Bass 2JP",
          developer: "Starfish",
          publisher: "Hot-B",
          release_year: "September 23, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bastard!!: Ankoku no Hakai-shin",
          publisher: "Cobra Team",
          release_year: "January 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Batman Forever",
          developer: "Probe Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Batman Returns",
          developer: "Konami",
          publisher: "Konami",
          release_year: "February 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Blaze",
          developer: "Aicom",
          publisher: "American Sammy",
          release_year: "May 1, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Cars",
          developer: "Malibu Interactive",
          publisher: "Namco",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Clash\n•Space BazookaJP",
          developer: "Intelligent Systems",
          publisher: "Nintendo",
          release_year: "June 21, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Commander: Hachibushuu Shura no Heihou",
          developer: "Arc System Works",
          publisher: "Banpresto",
          release_year: "December 29, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Cross",
          developer: "A-Max",
          publisher: "Imagineer",
          release_year: "December 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Dodge Ball",
          developer: "Banpresto",
          publisher: "Banpresto",
          release_year: "July 20, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Dodge Ball II",
          developer: "Nova Games",
          publisher: "Banpresto",
          release_year: "July 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Grand Prix",
          developer: "KID",
          publisher: "Hudson Soft",
          release_year: "March 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Jockey",
          developer: "Nova Games",
          publisher: "Virgin Interactive",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Master: Kyuukyoku no Senshitachi",
          developer: "System Vision",
          publisher: "Toshiba",
          release_year: "November 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Pinball",
          developer: "Banpresto",
          publisher: "Banpresto",
          release_year: "February 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Racers",
          developer: "Banpresto",
          publisher: "Banpresto",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Robot Retsuden",
          developer: "Winkysoft",
          publisher: "Banpresto",
          release_year: "September 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Soccer: Field no Hasha",
          developer: "Pandora Box",
          publisher: "Banpresto",
          release_year: "December 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Soccer 2",
          developer: "Pandora Box",
          publisher: "Banpresto",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Submarine",
          developer: "Office Koukan",
          publisher: "Pack-In-Video",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battletoads & Double Dragon",
          developer: "Rare",
          publisher: "Tradewest",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battletoads in Battlemaniacs",
          developer: "Rare",
          publisher: "Tradewest",
          release_year: "January 7, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Tycoon: Flash Hiders SFX",
          developer: "Right Stuff",
          publisher: "Right Stuff",
          release_year: "May 19, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Battle Zeque Den",
          developer: "Arsys Software",
          publisher: "Asmik Ace Entertainment",
          release_year: "July 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bazooka Blitzkrieg\n•DestructiveJP",
          developer: "Tose",
          publisher: "Bandai",
          release_year: "August 27, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Beavis and Butt-head",
          developer: "Realtime Associates",
          publisher: "Viacom New Media",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bébé's Kids",
          developer: "Radical Entertainment",
          publisher: "Motown Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Beethoven: The Ultimate Canine Caper\n•Beethoven's 2ndEU",
          developer: "Riedel Software Productions",
          publisher: "Hi Tech Expressions",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Benkei Gaiden: Suna no Shou",
          developer: "Sunsoft",
          publisher: "Sunsoft",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Best of the Best: Championship Karate\n•Super Kick BoxingJP",
          developer: "Loriciel",
          publisher: "Electro Brain",
          release_year: "March 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Big Sky Trooper",
          developer: "LucasArts",
          publisher: "JVC",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Best Shot Pro Golf",
          developer: "KID",
          publisher: "ASCII",
          release_year: "June 14, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Big Ichigeki! Pachi-Slot Daikouryaku",
          developer: "Syscom",
          publisher: "Ask Koudansha",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Big Ichigeki! Pachi-Slot Daikouryaku 2",
          developer: "Syscom",
          publisher: "Ask Koudansha",
          release_year: "July 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bike Daisuki! Hashiriya Kon: Rider's Spirits",
          developer: "Genki",
          publisher: "Masaya",
          release_year: "September 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Biker Mice from Mars",
          developer: "Konami",
          publisher: "Konami",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bill Laimbeer's Combat Basketball",
          developer: "Hewson Consultants",
          publisher: "Hudson Soft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bill Walsh College Football",
          developer: "Visual Concepts",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bing Bing! Bingo",
          developer: "Copya Systems",
          publisher: "KSS",
          release_year: "December 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "BioMetal",
          developer: "Athena",
          publisher: "Activision",
          release_year: "March 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bishoujo Janshi Suchie-Pai",
          developer: "DCE",
          publisher: "Jaleco",
          release_year: "July 30, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bishoujo Senshi Sailor Moon: Another Story",
          developer: "Arc System Works/TNS",
          publisher: "Angel",
          release_year: "September 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bishoujo Senshi Sailor Moon: Sailor Stars Fuwa Fuwa Panic 2",
          publisher: "Bandai",
          release_year: "September 27, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bishoujo Senshi Sailor Moon R",
          developer: "Arc System Works",
          publisher: "Bandai",
          release_year: "December 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bishoujo Senshi Sailormoon S: Jougai Rantou!? Shuyaku Soudatsusen",
          developer: "Arc System Works",
          publisher: "Angel",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bishoujo Senshi Sailor Moon S: Kondo ha Puzzle de Oshiokiyo!",
          developer: "Tom Create",
          publisher: "Bandai",
          release_year: "July 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bishoujo Senshi Sailor Moon S: Kurukkurin",
          developer: "Tom Create",
          publisher: "Bandai",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bishoujo Senshi Sailor Moon SuperS: Fuwa Fuwa Panic",
          developer: "Tom Create",
          publisher: "Bandai",
          release_year: "December 8, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bishoujo Senshi Sailor Moon SuperS - Zenin Sanka!! Shuyaku Soudatsusen",
          developer: "Angel",
          publisher: "Bandai",
          release_year: "March 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bisyoujyo Wrestlinger's History: Beauty Girl Wrestling",
          developer: "Nihon Soft System",
          publisher: "KSS",
          release_year: "March 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Blackthorne\n•BlackhawkEU",
          developer: "Blizzard Entertainment",
          publisher: "Interplay Entertainment",
          release_year: "August 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "BlaZeon: The Bio-Cyborg Challenge",
          developer: "AI",
          publisher: "Atlus",
          release_year: "July 24, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Block Kuzushi",
          developer: "OeRSTED",
          publisher: "Planning Office Wada",
          release_year: "November 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Blue Crystal Rod, The",
          developer: "Game Studio",
          publisher: "Namco",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Blue Legend Shoot!",
          developer: "Affect",
          publisher: "KSS",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Blues Brothers",
          developer: "Titus Software",
          publisher: "Titus Software",
          release_year: "March 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bomberman B-Daman",
          developer: "A.I.",
          publisher: "Hudson Soft",
          release_year: "December 20, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Boogerman: A Pick and Flick Adventure",
          developer: "Interplay Entertainment",
          publisher: "Interplay Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bounty Sword",
          developer: "ITL",
          publisher: "Pioneer LDC",
          release_year: "September 8, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Boxing Legends of the Ring\n•Chavez IIMX\n•Final KnockoutJP",
          developer: "Sculptured Software",
          publisher: "Electro Brain",
          release_year: "November 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Brain Lord",
          developer: "Produce",
          publisher: "Enix",
          release_year: "January 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Brainies",
          developer: "Titus Software",
          publisher: "Titus Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bram Stoker's Dracula",
          developer: "Psygnosis",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Brandish",
          developer: "Koei",
          publisher: "Koei",
          release_year: "June 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Brandish 2: The Planet Buster",
          developer: "Koei",
          publisher: "Koei",
          release_year: "August 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Brandish 2 Expert",
          developer: "Koei",
          publisher: "Koei",
          release_year: "March 15, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Brawl Brothers †\n•Brawl Brothers: Rival Turf! 2EU\n•Rushing Beat Ran: Fukusei ToshiJP",
          developer: "Jaleco",
          publisher: "Jaleco",
          release_year: "December 22, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "BreakThru!",
          developer: "Artech Digital Entertainment",
          publisher: "Spectrum Holobyte",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Breath of Fire",
          developer: "Capcom",
          publisher: "Capcom (JP)\nSquare (NA)",
          release_year: "April 3, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Breath of Fire II",
          developer: "Capcom",
          publisher: "Capcom (JP/NA)\nLaguna GmbH (EU)",
          release_year: "December 2, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Brett Hull Hockey",
          developer: "Radical Entertainment",
          publisher: "Accolade",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Brett Hull Hockey '95",
          developer: "Radical Entertainment",
          publisher: "Accolade",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bronkie the Bronchiasaurus",
          developer: "WaveQuest",
          publisher: "Raya Systems",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Brunswick World: Tournament of Champions",
          developer: "Tiertex Design Studios",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Brutal: Paws of Fury\n•Brutal: Animal BurandenJP",
          developer: "Eurocom",
          publisher: "GameTek",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bubsy in Claws Encounters of the Furred Kind\n•Yamaneko Bubsy no DaiboukenJP",
          developer: "Accolade",
          publisher: "Accolade",
          release_year: "June 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bubsy II",
          developer: "Accolade",
          publisher: "Accolade",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bugs Bunny Rabbit Rampage\n•Bakkusu Banī Hachamecha DaibōkenJP",
          developer: "Viacom New Media",
          publisher: "Sunsoft",
          release_year: "June 24, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bulls vs. Blazers and the NBA Playoffs\n•NBA Pro Basketball: Bulls vs BlazersJP",
          developer: "Electronic Arts",
          publisher: "EA Sports",
          release_year: "February 26, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Burai: Hachigyoku no Yuushi Densetsu",
          developer: "Pandora Box",
          publisher: "IGS",
          release_year: "January 14, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bushi Seiryuuden: Futari no Yuusha",
          developer: "Game Freak",
          publisher: "T&E Soft",
          release_year: "January 17, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Bust-a-Move\n•Puzzle BobbleEU",
          developer: "Taito",
          publisher: "Taito",
          release_year: "January 13, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cacoma Knight in Bizyland\n•Cacoma KnightJP",
          developer: "SETA",
          publisher: "SETA",
          release_year: "November 21, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cal Ripken Jr. Baseball",
          developer: "Mindscape",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "California Games 2",
          developer: "Silicon Sorcery",
          publisher: "DTMC",
          release_year: "March 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cannon Fodder",
          developer: "Sensible Software",
          publisher: "Virgin Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Capcom's MVP Football",
          developer: "Equilibrium",
          publisher: "Capcom",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Capcom's Soccer Shootout \n•Soccer ShootoutEU\n•J. League Excite Stage '94JP",
          developer: "A-Max",
          publisher: "Epoch Co. (JP)\nCapcom (NA/EU)",
          release_year: "May 1, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Captain America and The Avengers",
          developer: "Mindscape",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Captain Commando",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Captain Novolin",
          developer: "Sculptured Software",
          publisher: "Raya Systems",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Captain Tsubasa III: Koutei no Chousen",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "July 17, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Captain Tsubasa IV: Pro no Rival Tachi",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "April 3, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Captain Tsubasa V: Hasha no Shōgō Campione",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "December 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Captain Tsubasa J: The Way to World Youth",
          developer: "BEC",
          publisher: "Bandai",
          release_year: "November 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Caravan Shooting Collection",
          developer: "Hudson Soft",
          publisher: "Hudson Soft",
          release_year: "July 7, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Carrier Aces",
          developer: "Synergistic Software",
          publisher: "Cybersoft",
          release_year: "July 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Casper",
          developer: "Imagineering",
          publisher: "Natsume",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Casper (Japanese game)",
          developer: "Natsume",
          publisher: "KSS",
          release_year: "March 14, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Castlevania: Dracula X\n•Castlevania: Vampire's KissEU\n•Akumajō Dracula XXJP",
          developer: "Konami",
          publisher: "Konami",
          release_year: "July 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "CB Chara Wars: Ushinawareta Gag",
          developer: "Almanic",
          publisher: "Banpresto",
          release_year: "August 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Champions World Class Soccer",
          developer: "Park Place Productions",
          publisher: "Acclaim Entertainment",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Championship Pool\n•Super BilliardJP",
          developer: "Bitmasters",
          publisher: "Mindscape",
          release_year: "June 24, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Championship Soccer '94\n•Sensible Soccer: International EditionEU",
          developer: "Sensible Software",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chaos Seed",
          developer: "Neverland",
          publisher: "Taito",
          release_year: "March 15, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Chessmaster",
          developer: "Mindscape",
          publisher: "Mindscape",
          release_year: "February 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chester Cheetah: Too Cool to Fool",
          developer: "Kaneko",
          publisher: "Kaneko",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chester Cheetah: Wild Wild Quest",
          developer: "Kaneko",
          publisher: "Kaneko",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chibi Maruko-chan: Harikiri 365-Nichi no Maki",
          developer: "SAS Sakata",
          publisher: "Epoch Co., Ltd.",
          release_year: "December 13, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chibi Maruko-chan: Mezase! Minami no Island!!",
          developer: "Konami",
          publisher: "Konami",
          release_year: "December 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chinhai",
          developer: "Pixel",
          publisher: "Banpresto",
          release_year: "September 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chō Aniki: Bakuretsu Rantouden",
          developer: "Bits Laboratory",
          publisher: "NCS",
          release_year: "September 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chō Genjin 2",
          developer: "A.I. Company Ltd.",
          publisher: "Hudson Soft",
          release_year: "July 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chō Mahou Tairiku WOZZ",
          developer: "Red Company",
          publisher: "Bullet Proof Software",
          release_year: "August 4, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Choplifter III",
          developer: "Beam Software",
          publisher: "Extreme Entertainment Group",
          release_year: "September 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Choujikuu Yousai Macross: Scrambled Valkyrie",
          developer: "Winkysoft",
          publisher: "Zamuse",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chrono Trigger",
          developer: "Square",
          publisher: "Square",
          release_year: "March 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Chuck Rock",
          developer: "Core Design",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Civilization",
          developer: "Microprose",
          publisher: "Koei",
          release_year: "October 7, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Classic Road",
          developer: "Opera House",
          publisher: "Victor Interactive Software",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Classic Road II",
          developer: "Opera House",
          publisher: "Victor Interactive Software",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ClayFighter",
          developer: "Visual Concepts",
          publisher: "Interplay Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ClayFighter: Tournament Edition",
          developer: "Visual Concepts",
          publisher: "Interplay Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ClayFighter 2: Judgment Clay",
          developer: "Interplay Entertainment",
          publisher: "Interplay Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Claymates",
          developer: "Visual Concepts",
          publisher: "Interplay Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cliffhanger",
          developer: "Malibu Interactive",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Clock Tower",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "September 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ClockWorks",
          developer: "Axes Art Amuse",
          publisher: "Tokuma Shoten",
          release_year: "December 8, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Clue",
          developer: "Sculptured Software",
          publisher: "Parker Brothers",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "College Football USA '97: The Road to New Orleans",
          developer: "Black Pearl Software",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "College Slam",
          developer: "Iguana Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Columns",
          developer: "Marigul Management",
          publisher: "Media Factory",
          release_year: "August 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Combatribes",
          developer: "Technōs Japan",
          publisher: "American Technōs",
          release_year: "1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Computer Nouryoku Kaiseki: Ultra Baken",
          developer: "Culture Brain",
          publisher: "Culture Brain",
          release_year: "May 26, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Congo's Caper †\n•Tatakae Genshijin 2: Rookie no BoukenJP",
          developer: "Data East",
          publisher: "Data East",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Contra III: The Alien Wars †\n•Super Probotector: Alien RebelsEU\n•Contra SpiritsJP",
          developer: "Konami",
          publisher: "Konami",
          release_year: "February 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Conveni Wars Barcode Battler Senki: Super Senshi Shutsugeki Seyo!",
          developer: "SAS Sakata",
          publisher: "Epoch Co.",
          release_year: "May 14, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cool Spot",
          developer: "Virgin Interactive",
          publisher: "Virgin Interactive",
          release_year: "December 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cool World",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Coron Land",
          developer: "Aroma",
          publisher: "Yumedia",
          release_year: "August 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cosmo Gang the Puzzle",
          developer: "Namco",
          publisher: "Namco",
          release_year: "February 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cosmo Gang the Video",
          developer: "Namco",
          publisher: "Namco",
          release_year: "October 29, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cosmo Police Galivan II: Arrow of Justice",
          developer: "Cream",
          publisher: "Nichibutsu",
          release_year: "June 11, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Crayon Shin-chan: Arashi wo yobu Enji",
          developer: "Sun L",
          publisher: "Bandai",
          release_year: "July 30, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Crayon Shin-chan 2: Daimaou no Gyakushuu",
          developer: "Sun L",
          publisher: "Bandai",
          release_year: "May 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Crayon Shin-chan: Osagusu Dobon",
          developer: "AIM",
          publisher: "Bandai",
          release_year: "September 27, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Crystal Beans From Dungeon Explorer",
          developer: "Birthday",
          publisher: "Hudson Soft",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cu-On-Pa",
          developer: "T&E Soft",
          publisher: "T&E Soft",
          release_year: "December 20, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cutthroat Island",
          developer: "Software Creations (UK)",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cyber Knight",
          developer: "Advance Communication Company",
          publisher: "Tonkin House",
          release_year: "October 30, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cyber Knight II: Chikyū Teikoku no Yabō",
          developer: "Group SNE",
          publisher: "Tonkin House",
          release_year: "August 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cyber Spin\n•Shinseiki GPX: Cyber FormulaJP",
          developer: "Takara",
          publisher: "Takara",
          release_year: "March 19, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cybernator\n•Assault Suits ValkenJP",
          developer: "Masaya",
          publisher: "Masaya (JP)\nKonami (NA)\nPalcom Software (EU)",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Cyborg 009",
          developer: "Bec",
          publisher: "Bandai",
          release_year: "February 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Daffy Duck: The Marvin Missions",
          developer: "ICOM Simulations",
          publisher: "Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Daibakushou Jinsei Gekijou",
          developer: "Taito",
          publisher: "Taito",
          release_year: "December 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Daibakushou Jinsei Gekijou: Dokidoki Seishun",
          developer: "Taito",
          publisher: "Taito",
          release_year: "July 30, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Daibakushou Jinsei Gekijou: Ooedo Nikki",
          developer: "Taito",
          publisher: "Taito",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Daibakushou Jinsei Gekijou: Zukkoke Salary Man Hen",
          developer: "Taito",
          publisher: "Taito",
          release_year: "December 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Daikaijū Monogatari",
          developer: "Birthday",
          publisher: "Hudson Soft",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Daikaijū Monogatari 2",
          developer: "AIM",
          publisher: "Hudson Soft",
          release_year: "August 2, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Daisenryaku Expert",
          developer: "SystemSoft Alpha",
          publisher: "ASCII",
          release_year: "September 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Daisenryaku Expert WWII: War in Europe",
          developer: "SystemSoft Alpha",
          publisher: "ASCII",
          release_year: "August 30, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Darius Twin",
          developer: "Taito",
          publisher: "Taito",
          release_year: "March 29, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dark Half",
          developer: "West One",
          publisher: "Enix",
          release_year: "May 31, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dark Kingdom",
          developer: "Telenet Japan",
          publisher: "Telenet Japan",
          release_year: "April 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dark Law: Meaning of Death",
          developer: "SAS Sakata",
          publisher: "ASCII",
          release_year: "March 28, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Date Kimiko no Virtual Tennis",
          developer: "Jorudan",
          publisher: "Yanoman",
          release_year: "May 13, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "David Crane's Amazing Tennis",
          developer: "David Crane",
          publisher: "Absolute Entertainment",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Daze Before Christmas",
          developer: "Funcom",
          publisher: "Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Deae Tonosama Appare Ichiban",
          developer: "Sunsoft",
          publisher: "Sunsoft",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dear Boys",
          developer: "Kan's",
          publisher: "Yutaka",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Death and Return of Superman",
          developer: "Blizzard Entertainment",
          publisher: "Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Death Brade",
          developer: "I'Max",
          publisher: "I'Max",
          release_year: "July 16, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dekitate High School",
          developer: "C-Lab",
          publisher: "Bullet Proof Software",
          release_year: "July 7, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Demolition Man",
          developer: "Virgin Interactive",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Demon's Crest\n•Demon's Blazon Makaimura Monshō-henJP",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "October 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dennis the Menace\n•DennisEU",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Der Langrisser",
          developer: "NCS",
          publisher: "NCS",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Derby Jockey: Kishu Ou heno Michi",
          developer: "Graphic Research",
          publisher: "Asmik Ace Entertainment",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Derby Jockey 2",
          developer: "Graphic Research",
          publisher: "Asmik Ace Entertainment",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Derby Stallion II",
          developer: "ASCII",
          publisher: "ASCII",
          release_year: "February 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Derby Stallion III",
          developer: "ASCII",
          publisher: "ASCII",
          release_year: "January 20, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Derby Stallion '96",
          developer: "ASCII",
          publisher: "ASCII",
          release_year: "March 15, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Derby Stallion '98",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "September 1, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Desert Strike: Return to the Gulf",
          developer: "Visual Concepts",
          publisher: "Electronic Arts",
          release_year: "March 26, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dezaemon: Kaite Tsukutte Asoberu",
          developer: "Athena",
          publisher: "Athena",
          release_year: "September 20, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "D-Force\n•Dimensional ForceJP",
          developer: "Asmik Ace Entertainment",
          publisher: "Asmik Ace Entertainment",
          release_year: "December 10, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dharma Doujou",
          developer: "Metro",
          publisher: "Den'Z",
          release_year: "February 10, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dig & Spike Volleyball\n•Volleyball TwinJP",
          developer: "Tose",
          publisher: "Hudson Soft",
          release_year: "November 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "DinoCity\n•Dino Wars: Kyouryuu Oukoku heno DaiboukenJP",
          developer: "Irem",
          publisher: "Irem",
          release_year: "July 17, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dino Dini's Soccer",
          developer: "Eurocom",
          publisher: "Virgin Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dirt Racer",
          developer: "MotiveTime",
          publisher: "Elite Systems",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dirt Trax FX",
          developer: "Sculptured Software",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Disney's Aladdin",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Disney's Beauty and the Beast\n•Bijo to YajuuJP",
          developer: "Probe Software",
          publisher: "Hudson Soft",
          release_year: "July 8, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Disney's Bonkers",
          publisher: "Capcom",
          release_year: "January 3, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Disney's Pinocchio",
          developer: "Virgin Interactive",
          publisher: "Disney Interactive",
          release_year: "December 20, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dokapon 3-2-1: Arashi wo Yobu Yujo",
          developer: "Asmik Ace Entertainment",
          publisher: "Asmik Ace Entertainment",
          release_year: "December 2, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dokapon Gaiden: Honoo no Audition",
          developer: "Earthly Soft",
          publisher: "Asmik Ace Entertainment",
          release_year: "December 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dōkyūsei 2",
          developer: "ELF Corporation",
          publisher: "Banpresto",
          release_year: "December 1, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dolucky's A-League Soccer",
          developer: "Zoom",
          publisher: "Imagineer",
          release_year: "July 8, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dolucky no Kusayakiu",
          developer: "Zoom",
          publisher: "Technos",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dolucky no Puzzle Tour '94",
          developer: "Zoom",
          publisher: "Imagineer",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Donald Duck no Mahō no Bōshi",
          developer: "SAS Sakata",
          publisher: "Epoch Co.",
          release_year: "August 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Donkey Kong Country †\n•Super Donkey KongJP",
          developer: "Rare",
          publisher: "Nintendo",
          release_year: "November 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Donkey Kong Country 2: Diddy's Kong Quest †\n•Super Donkey Kong 2: Dixie & DiddyJP",
          developer: "Rare",
          publisher: "Nintendo",
          release_year: "November 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Donkey Kong Country 3: Dixie Kong's Double Trouble! †\n•Super Donkey Kong 3: Nazo no Krems ShimaJP",
          developer: "Rare",
          publisher: "Nintendo",
          release_year: "November 23, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Doom",
          developer: "Sculptured Software",
          publisher: "Williams Entertainment",
          release_year: "March 1, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Doom Troopers",
          developer: "Adrenalin Interactive",
          publisher: "Playmates Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Doomsday Warrior\n•Taiketsu!! Brass NumbersJP",
          developer: "Telenet",
          publisher: "Renovation Products",
          release_year: "November 20, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Doraemon: Nobita to Yousei no Kuni",
          developer: "SAS Sakata",
          publisher: "Epoch Co.",
          release_year: "February 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Doraemon 2: Nobita no Toys Land Daibouken",
          developer: "SAS Sakata",
          publisher: "Epoch Co.",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Doraemon 3: Nobita to Toki no Hougyoku",
          developer: "AIM",
          publisher: "Epoch Co.",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Doraemon 4: Nobita to Tsuki no Oukoku",
          developer: "Agenda",
          publisher: "Epoch Co.",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "DoReMi Fantasy: Milon no Dokidoki Daibouken",
          developer: "Hudson Soft",
          publisher: "Hudson Soft",
          release_year: "March 22, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dossun! Ganseki Battle",
          developer: "I'Max",
          publisher: "I'Max",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Double Dragon V: The Shadow Falls",
          developer: "Leland Interactive Media",
          publisher: "Tradewest",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Down the World: Mervil's Ambition",
          developer: "ASCII",
          publisher: "ASCII",
          release_year: "September 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Downtown Nekketsu Baseball Monogatari: Baseball de Shoufuda! Kunio-kun",
          developer: "Technōs Japan",
          publisher: "Technōs Japan",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dr. Mario",
          publisher: "Nintendo",
          release_year: "June 1, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon: The Bruce Lee Story",
          developer: "Virgin Interactive",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Ball Z: Hyper Dimension",
          developer: "Tose",
          publisher: "Bandai",
          release_year: "December 31, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Ball Z: Legend of the Super Saiyan",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "January 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Ball Z: Super Butōden",
          developer: "Tose",
          publisher: "Bandai",
          release_year: "March 20, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Ball Z: Super Butōden 2",
          developer: "Tose",
          publisher: "Bandai",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Ball Z: Super Butōden 3 †\n•Dragon Ball Z: ChomutujeonKR",
          developer: "Tose",
          publisher: "Bandai",
          release_year: "September 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Ball Z: Super Gokuden Totsugeki Hen",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "March 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Ball Z: Super Gokuden Kakusei Hen",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "September 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Knight 4",
          developer: "ELF Corporation",
          publisher: "Banpresto",
          release_year: "December 27, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Quest I & II",
          developer: "Chunsoft",
          publisher: "Enix",
          release_year: "December 18, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Quest III: Soshite Densetsu e...",
          developer: "Heartbeat",
          publisher: "Enix",
          release_year: "December 6, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Quest V: Tenkū no Hanayome",
          developer: "Chunsoft",
          publisher: "Enix",
          release_year: "September 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Quest VI: Maboroshi no Daichi",
          developer: "Heartbeat",
          publisher: "Enix",
          release_year: "December 9, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Slayer: Eiyuu Densetsu",
          developer: "Falcom",
          publisher: "Epoch Co.",
          release_year: "February 14, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon Slayer: Eiyuu Densetsu II",
          developer: "Falcom",
          publisher: "Epoch Co.",
          release_year: "June 4, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon View\n•Super DrakkhenJP",
          developer: "Kemco",
          publisher: "Kemco",
          release_year: "August 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon's Earth",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "January 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dragon's Lair\n•Dragon's MagicJP",
          developer: "MotiveTime",
          publisher: "Konami (JP)\nData East (NA)\nElite Systems (EU)",
          release_year: "June 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Drakkhen",
          developer: "Kemco",
          publisher: "Kemco (JP/EU)\nSeika Corporation (NA)",
          release_year: "May 24, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dream Basketball: Dunk & Hoop",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dream TV",
          developer: "Triffix",
          publisher: "Triffix",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dual Orb",
          developer: "I'Max",
          publisher: "I'Max",
          release_year: "April 16, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dual Orb II",
          developer: "I'Max",
          publisher: "I'Max",
          release_year: "December 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Duel: Test Drive II",
          developer: "Distinctive Software",
          publisher: "Accolade",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dungeon Master",
          developer: "Software Heaven / FTL Games",
          publisher: "JVC",
          release_year: "December 20, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "DunQuest: Majin Fuuin no Densetsu",
          developer: "Technōs Japan",
          publisher: "Technōs Japan",
          release_year: "July 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dynamaite: The Las Vegas",
          developer: "Micro Factory",
          publisher: "Virgin Interactive",
          release_year: "April 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Dynamic Stadium",
          developer: "Electronics Application",
          publisher: "Sammy Corporation",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "E.V.O.: Search for Eden\n•46 Okunen Monogatari: Harukanaru Eden eJP",
          developer: "Almanic",
          publisher: "Enix",
          release_year: "December 19, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "EarthBound\n•Mother 2JP",
          developer: "HAL Laboratory/Ape, Inc.",
          publisher: "Nintendo",
          release_year: "August 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Earth Light",
          developer: "Hudson Soft",
          publisher: "Hudson Soft",
          release_year: "July 24, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Earth Light: Luna Strike",
          developer: "Hudson Soft",
          publisher: "Hudson Soft",
          release_year: "July 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Earthworm Jim",
          developer: "Shiny Entertainment",
          publisher: "Playmates Interactive",
          release_year: "June 23, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Earthworm Jim 2",
          developer: "Shiny Entertainment",
          publisher: "Playmates Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Edo no Kiba",
          developer: "Riot",
          publisher: "Micro World",
          release_year: "March 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Eek! The Cat",
          developer: "CTA Developments",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Elfaria",
          developer: "Red Company",
          publisher: "Hudson Soft",
          release_year: "January 3, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Elfaria 2: The Quest of the Meld",
          developer: "Red Company",
          publisher: "Hudson Soft",
          release_year: "June 9, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Elite Soccer\n•World Cup StrikerEU, JP",
          developer: "Rage Software, Elite Systems",
          publisher: "Coconuts Japan (JP)\nGameTek (NA)\nElite Systems (EU)",
          release_year: "June 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Emerald Dragon",
          developer: "Alfa System",
          publisher: "MediaWorks",
          release_year: "July 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "EMIT Vol. 1",
          developer: "Koei",
          publisher: "Koei",
          release_year: "March 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "EMIT Vol. 2",
          developer: "Koei",
          publisher: "Koei",
          release_year: "March 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "EMIT Vol. 3",
          developer: "Koei",
          publisher: "Koei",
          release_year: "March 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Emmitt Smith Football",
          developer: "Bitmasters",
          publisher: "JVC",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Energy Breaker",
          developer: "Neverland",
          publisher: "Taito",
          release_year: "July 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Equinox\n•Solstice IIJP",
          developer: "Software Creations",
          publisher: "Sony Imagesoft",
          release_year: "November 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Esparks: Ijikuu Kara no Raihousha",
          publisher: "Tomy",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ESPN Baseball Tonight",
          developer: "Park Place Productions",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ESPN National Hockey Night",
          developer: "Sony Imagesoft",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ESPN Speed World",
          developer: "Sony Imagesoft",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "ESPN Sunday Night NFL",
          developer: "Absolute Entertainment",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Eternal Filena",
          publisher: "Tokuma Shoten",
          release_year: "February 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Exertainment Mountain Bike Rally / Speed Racer",
          developer: "Radical Entertainment",
          publisher: "Life Fitness Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Extra Innings\n•Hakunetsu Pro Yakyuu: Ganba LeagueJP",
          developer: "Sony Imagesoft",
          publisher: "Sony Imagesoft",
          release_year: "August 9, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Eye of the Beholder",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "F-1 Grand Prix",
          developer: "Video System",
          publisher: "Video System",
          release_year: "April 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "F-1 Grand Prix Part II",
          developer: "Video System",
          publisher: "Video System",
          release_year: "February 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "F-1 Grand Prix Part III",
          developer: "Video System",
          publisher: "Video System",
          release_year: "April 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "F-Zero †",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "November 21, 1990",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "F1 Pole Position\n•Human Grand PrixJP",
          developer: "Human Entertainment",
          publisher: "Ubisoft",
          release_year: "November 20, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "F1 Pole Position 2\n•Human Grand Prix IIJP",
          developer: "Human Entertainment",
          publisher: "Ubisoft",
          release_year: "December 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "F1 ROC: Race of Champions\n•Exhaust HeatEU",
          developer: "SETA",
          publisher: "SETA",
          release_year: "February 21, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "F1 ROC II: Race of Champions\n•Exhaust Heat II: F-1 Driver no KisekiJP",
          developer: "SETA",
          publisher: "SETA",
          release_year: "March 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "F1 World Championship Edition",
          developer: "Domark",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Faceball 2000",
          developer: "Xanth Software",
          publisher: "Bulletproof Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Famicom Bunko: Hajimari no Mori",
          developer: "Pax Softonica",
          publisher: "Nintendo",
          release_year: "July 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Famicom Tantei Club Part II: Ushiro ni Tatsu Shōjo",
          developer: "Nintendo R&D1",
          publisher: "Nintendo",
          release_year: "April 1, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Family Dog",
          developer: "Imagineering",
          publisher: "Malibu Games",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Family Feud",
          developer: "Imagineering",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Farland Story: Yottsu no Fuuin",
          developer: "Technical Group Laboratory",
          publisher: "Banpresto",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Farland Story 2: Dance of Destruction",
          developer: "Technical Group Laboratory",
          publisher: "Banpresto",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fatal Fury: King of Fighters\n•Garō Densetsu Shukumei no TatakaiJP",
          developer: "Nova Co., Ltd",
          publisher: "Takara",
          release_year: "November 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fatal Fury 2\n•Garō Densetsu Tsū Aratanaru TatakaiJP",
          developer: "Nova Co., Ltd",
          publisher: "Takara",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fatal Fury Special\n•Garō Densetsu SupersharuJP",
          developer: "Takara",
          publisher: "Takara",
          release_year: "July 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Feda: The Emblem of Justice",
          developer: "Max Entertainment",
          publisher: "Yanoman",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "FIFA International Soccer",
          developer: "Extended Play Productions",
          publisher: "EA Sports",
          release_year: "June 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "FIFA Soccer 96",
          developer: "Extended Play Productions / Probe Entertainment",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "FIFA 97: Gold Edition",
          developer: "Electronic Arts",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "FIFA: Road to World Cup 98",
          developer: "Electronic Arts",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fighter's History †",
          developer: "Data East",
          publisher: "Data East",
          release_year: "May 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fighter's History: Mizoguchi Kiki Ippatsu!!",
          developer: "Data East",
          publisher: "Data East",
          release_year: "February 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Final Fantasy II\n•Final Fantasy IVJP",
          developer: "Square",
          publisher: "Square",
          release_year: "July 19, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Final Fantasy III\n•Final Fantasy VIJP",
          developer: "Square",
          publisher: "Square",
          release_year: "April 2, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Final Fantasy V",
          developer: "Square",
          publisher: "Square",
          release_year: "December 6, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Final Fantasy Mystic Quest\n•Mystic Quest LegendEU\n•Final Fantasy USA: Mystic QuestJP",
          developer: "Square",
          publisher: "Square",
          release_year: "September 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Final Fight †",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "December 21, 1990",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Final Fight 2",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "May 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Final Fight 3",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Final Fight Guy",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "March 20, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Final Set Tennis",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "August 12, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Final Stretch",
          developer: "Genki",
          publisher: "LOZC G. Amusements",
          release_year: "November 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fire Emblem: Monshō no Nazo",
          developer: "Intelligent Systems",
          publisher: "Nintendo",
          release_year: "January 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fire Emblem: Seisen no Keifu",
          developer: "Intelligent Systems",
          publisher: "Nintendo",
          release_year: "May 14, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fire Emblem: Thracia 776",
          developer: "Intelligent Systems",
          publisher: "Nintendo",
          release_year: "September 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fire Pro Joshi: All Star Dream Slam",
          publisher: "Human Entertainment",
          release_year: "July 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Firemen",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "September 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Firepower 2000\n•Super SWIVEU",
          developer: "Sales Curve Interactive",
          publisher: "Sunsoft",
          release_year: "November 13, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Firestriker\n•Holy StrikerJP",
          developer: "Axes Art Amuse",
          publisher: "DTMC",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "First Samurai",
          developer: "Kemco",
          publisher: "Kemco",
          release_year: "July 2, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "First Queen",
          publisher: "Culture Brain",
          release_year: "March 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fishing Koushien",
          developer: "A-Wave",
          publisher: "King Records",
          release_year: "May 31, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Flashback: The Quest for Identity\n•FlashbackEU",
          developer: "Delphine Software International",
          publisher: "U.S. Gold",
          release_year: "December 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Flintstones",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Flintstones: The Treasure of Sierra Madrock",
          developer: "Taito/Sol Corporation",
          publisher: "Taito",
          release_year: "August 12, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Flying Hero: Bugyuru no Daibouken",
          developer: "Sting Entertainment",
          publisher: "SOFEL",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Football Fury\n•Ultimate FootballJP",
          developer: "American Sammy",
          publisher: "American Sammy",
          release_year: "July 24, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Foreman For Real",
          developer: "Software Creations",
          publisher: "Acclaim Entertainment",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fortune Quest: Dice wo Korogase",
          developer: "Natsume",
          publisher: "Zamuse",
          release_year: "April 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Frank Thomas' Big Hurt Baseball",
          developer: "Iguana Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "December 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Frantic Flea",
          developer: "Haus Teknikka",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Frogger",
          developer: "Morning Star Multimedia",
          publisher: "Majesco Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "From TV Animation Slam Dunk: Dream Team Shueisha Limited",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "June 20, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "From TV Animation Slam Dunk: SD Heat Up!!",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "From TV Animation Slam Dunk 2: IH Yosen Kanzenhan!!",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "From TV Animation Slam Dunk: Yonkyo Taiketsu!!",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "March 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Front Mission",
          developer: "G-Craft",
          publisher: "Square",
          release_year: "February 23, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Front Mission Series: Gun Hazard",
          developer: "Omiya Soft",
          publisher: "Square",
          release_year: "February 23, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Full Throttle: All-American Racing\n•Full PowerJP",
          developer: "Gremlin Interactive",
          publisher: "GameTek",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fun 'n Games",
          developer: "Leland Interactive Media",
          publisher: "Tradewest",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Funaki Masakatsu no Hybrid Wrestler: Tōgi Denshō",
          publisher: "Technōs Japan",
          release_year: "October 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fune Tarou",
          publisher: "Pack-In-Video",
          release_year: "August 1, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Furuta Atsuya no Simulation Pro Yakyuu 2",
          developer: "Hect",
          publisher: "Hect",
          release_year: "August 24, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Fushigi no Dungeon 2: Furai no Shiren",
          developer: "Chun Soft",
          publisher: "Chun Soft",
          release_year: "December 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "G-O-D: Mezame yoto Yobu Koe ga Kikoe",
          developer: "Infinity",
          publisher: "Imagineer",
          release_year: "December 20, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gaia Saver",
          developer: "Arc System Works",
          publisher: "Banpresto",
          release_year: "January 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gakkou de atta Kowai Hanashi",
          developer: "Pandora Box",
          publisher: "Banpresto",
          release_year: "August 4, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Galaxy Robo",
          developer: "Copya Systems",
          publisher: "Imagineer",
          release_year: "March 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Galaxy Wars",
          developer: "C-Lab",
          publisher: "Imagineer",
          release_year: "January 13, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gambler Jikochuushinha: Mahjong Kouisen",
          developer: "Bits Laboratory",
          publisher: "Palsoft",
          release_year: "September 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gambler Jikochuushinha 2: Dorapon Quest",
          developer: "Bits Laboratory",
          publisher: "Pack-In-Video",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gambling Hourouki",
          publisher: "VAP",
          release_year: "March 22, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Game no Tatsujin",
          developer: "Affect",
          publisher: "Sunsoft",
          release_year: "August 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Game no Tetsujin: The Shanghai",
          publisher: "Sunsoft",
          release_year: "October 13, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gamera: Gyaosu Gekimetsu Sakusen",
          developer: "Axes Art Amuse",
          publisher: "Sammy Corporation",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gan Gan Ganchan",
          developer: "Team Mental Care",
          publisher: "Magifact",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ganbare Daiku no Gensan",
          publisher: "Irem",
          release_year: "December 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ganbare Goemon 2: Kiteretsu Shōgun Magginesu",
          developer: "Konami",
          publisher: "Konami",
          release_year: "December 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ganbare Goemon 3: Shishijūrokubē no Karakuri Manji Gatame",
          developer: "Konami",
          publisher: "Konami",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ganbare Goemon Kirakira Dōchū: Boku ga Dancer ni Natta Wake",
          developer: "Konami",
          publisher: "Konami",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ganpuru: Gunman's Proof",
          developer: "Lenar",
          publisher: "ASCII Entertainment",
          release_year: "January 31, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ganso Pachi-Slot Nippon'ichi",
          publisher: "Coconuts Japan",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ganso Pachinko Ou",
          publisher: "Coconuts Japan",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gdleen",
          developer: "Jorudan",
          publisher: "SETA Corporation",
          release_year: "May 28, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gegege no Kitarou: Fukkatsu! Tenma Daiou",
          developer: "Bec",
          publisher: "Bandai",
          release_year: "February 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gegege no Kitarou: Youkai Donjaara",
          developer: "Tom Create",
          publisher: "Bandai",
          release_year: "July 19, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gekisou Sentai Carranger: Zenkai! Racer Senshi",
          developer: "Natsume",
          publisher: "Bandai",
          release_year: "August 23, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gekitotsu Dangan Jidōsha Kessen: Battle Mobile",
          developer: "System Sacom",
          publisher: "System Sacom",
          release_year: "June 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gekitou Burning Pro Wrestling",
          developer: "Ukiyotei",
          publisher: "Bullet Proof Software",
          release_year: "October 6, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gemfire\n•Super Royal BloodJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "October 22, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Genghis Khan II: Clan of the Gray Wolf\n•Super Aoki Ookami to Shiroki Meshika: Genchou HishiJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "March 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Genjū Ryodan",
          developer: "Crea-Tech",
          publisher: "Axela",
          release_year: "June 1, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Genocide 2",
          developer: "Bits Studios",
          publisher: "Kemco",
          release_year: "August 5, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "George Foreman's KO Boxing",
          developer: "Beam Software",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Getsumen no Anubis",
          developer: "Access",
          publisher: "Imagineer",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ghost Chaser Densei",
          developer: "Winkysoft",
          publisher: "Banpresto",
          release_year: "September 23, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ghost Sweeper Mikami: Joreishi ha Nice Body",
          developer: "Natsume",
          publisher: "Banalex",
          release_year: "September 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ghoul Patrol",
          developer: "LucasArts",
          publisher: "JVC",
          release_year: "May 26, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ginga Eiyuu Densetsu: Senjutsu Simulation",
          developer: "Advance Communication Company",
          publisher: "Tokuma Shoten",
          release_year: "September 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ginga Sengoku Gun'yūden Rai",
          publisher: "Angel",
          release_year: "March 8, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gintama Oyakata no Jissen Pachinko Hisshouhou",
          publisher: "Sammy Corporation",
          release_year: "February 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gionbana",
          publisher: "Nichibutsu",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Go Go Ackman",
          developer: "Aspect",
          publisher: "Banpresto",
          release_year: "December 23, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Go Go Ackman 2",
          developer: "Aspect",
          publisher: "Banpresto",
          release_year: "July 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Go Go Ackman 3",
          developer: "Aspect",
          publisher: "Banpresto",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Go! Go! Dodge League",
          developer: "Now Production/Mebio Software",
          publisher: "Pack-In-Video",
          release_year: "September 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Goal!\n•Super Goal!EU\n•Super Cup SoccerJP",
          developer: "Tose",
          publisher: "Jaleco",
          release_year: "April 24, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gods",
          developer: "Bitmap Brothers",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Godzilla: Kaijuu Daikessen",
          developer: "Alfa System",
          publisher: "Toho",
          release_year: "December 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gokinjo Bōkentai",
          developer: "ITL",
          publisher: "Pioneer LDC",
          release_year: "May 24, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gokujo Parodius! ～Kako no Eiko o Motomete～",
          developer: "Konami",
          publisher: "Konami",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gon",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "November 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Goof Troop\n•Goofy to Max: Kaizoku Shima no DaiboukenJP",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "July 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "GP-1",
          developer: "Atlus",
          publisher: "Atlus",
          release_year: "June 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "GP-1: Part II\n•GP-1 Rapid StreamJP",
          developer: "Atlus",
          publisher: "Atlus",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gradius III",
          developer: "Konami",
          publisher: "Konami",
          release_year: "December 21, 1990",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Granhistoria: Genshi Sekaiki",
          developer: "J-Force",
          publisher: "Banpresto",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Great Battle II: Last Fighter Twin",
          publisher: "Banpresto",
          release_year: "March 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Great Battle III, The",
          developer: "Sun L",
          publisher: "Banpresto",
          release_year: "March 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Great Battle IV, The",
          developer: "Sun L",
          publisher: "Banpresto",
          release_year: "December 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Great Battle V, The",
          developer: "Sun L",
          publisher: "Banpresto",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Great Battle Gaiden 2: Matsuri da Wasshoi",
          publisher: "Banpresto",
          release_year: "January 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Great Circus Mystery Starring Mickey & Minnie\n•Mickey to Minnie: Magical Adventure 2JP",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "November 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Great Waldo Search",
          developer: "Radiance Software",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "GT Racing",
          developer: "Imagineer",
          publisher: "Imagineer",
          release_year: "March 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "GunForce",
          developer: "Bits Studios",
          publisher: "Irem",
          release_year: "November 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Gurume Sentai Barayarō",
          developer: "Winds",
          publisher: "Virgin Interactive",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Habu Meijin no Omoshiro Shōgi",
          developer: "Access",
          publisher: "Tomy",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hagane: The Final Conflict",
          developer: "Red Entertainment",
          publisher: "Hudson Soft",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Haisei Mahjong Ryouga",
          publisher: "ASCII",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hakunetsu Pro Yakyuu '93: Ganba League",
          developer: "Sting Entertainment",
          publisher: "Epic/Sony Records",
          release_year: "December 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hakunetsu Pro Yakyuu '94: Ganba League 3",
          publisher: "Epic/Sony Records",
          release_year: "December 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hal's Hole in One Golf\n•Jumbo Ozaki no Hole In OneJP",
          developer: "HAL Laboratory",
          publisher: "HAL Laboratory",
          release_year: "February 23, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hamelin no Violin Tamaki",
          publisher: "Enix",
          release_year: "September 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "HammerLock Wrestling\n•Tenryuu Genichiro no Pro Wrestling RevolutionJP",
          developer: "Jaleco",
          publisher: "Jaleco",
          release_year: "September 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hana no Keiji: Kumo no Kanata ni",
          developer: "TOSE",
          publisher: "Yojigen",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hanafuda",
          publisher: "Imagineer",
          release_year: "September 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hanafuda Ou",
          developer: "Electronics Application",
          publisher: "Coconuts Japan",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hanjuku Hero: Aa, Sekaiyo Hanjukunare...!",
          developer: "Square",
          publisher: "Square",
          release_year: "December 12, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hanna Barbera's Turbo Toons",
          developer: "Empire Interactive",
          publisher: "Entertainment International UK",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Haō Taikei Ryū Knight",
          developer: "Japan Art Media",
          publisher: "Bandai",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hardball III",
          developer: "Accolade",
          publisher: "Accolade",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Harley's Humongous Adventure\n•Kagakusha Harley no Haran BanjouJP",
          developer: "Visual Concepts",
          publisher: "Hi Tech Expressions",
          release_year: "October 28, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Harukanaru Augusta",
          developer: "T&E Soft",
          publisher: "T&E Soft",
          release_year: "April 5, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Harukanaru Augusta 2: Masters",
          developer: "T&E Soft",
          publisher: "T&E Soft",
          release_year: "September 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Harukanaru Augusta 3: Masters New",
          developer: "T&E Soft",
          publisher: "T&E Soft",
          release_year: "December 8, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Harvest Moon\n•Bokujou MonogatariJP",
          developer: "Pack-In-Video",
          publisher: "Natsume",
          release_year: "August 9, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hashire Hebereke",
          developer: "Sunsoft",
          publisher: "Sunsoft",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hat Trick Hero 2",
          developer: "Neverland",
          publisher: "Taito",
          release_year: "July 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hatayama Hatch no Pro Yakyuu News! Jitsumei Han",
          developer: "Agenda",
          publisher: "Epoch Co.",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hayashi Kaihou Kudan no Igo Oodou",
          publisher: "ASK",
          release_year: "March 22, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hayazashi Nidan Morita Shogi",
          developer: "Random House",
          publisher: "SETA Corporation",
          release_year: "June 18, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hayazashi Nidan Morita Shogi 2",
          developer: "Random House",
          publisher: "SETA Corporation",
          release_year: "May 26, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Head-On Soccer\n•Fever Pitch SoccerEU",
          developer: "U.S. Gold",
          publisher: "U.S. Gold",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hebereke no Oishii Puzzle: ha Irimasen ka",
          publisher: "Sunsoft",
          release_year: "August 31, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hebereke's Popoitto\n•Popoitto HeberekeJP",
          developer: "Sunsoft",
          publisher: "Sunsoft",
          release_year: "July 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hebereke's Popoon",
          developer: "Sunsoft",
          publisher: "Sunsoft",
          release_year: "December 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Heian Fuuunden",
          developer: "Natsume",
          publisher: "KSS",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Heisei Gunjin Shougi",
          publisher: "Carrozzeria",
          release_year: "January 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Heisei Inu Monogatari Bow: Pop'n Smash!!",
          publisher: "Takara",
          release_year: "April 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Heisei Shin Oni Ga Shima (Part 1)",
          publisher: "Nintendo",
          release_year: "May 23, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Heisei Shin Oni Ga Shima (Part 2)",
          publisher: "Nintendo",
          release_year: "May 23, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Heiwa Pachinko World",
          developer: "Office Koukan",
          publisher: "Shouei",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Heiwa Pachinko World 2",
          publisher: "Shouei",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Heiwa Pachinko World 3",
          publisher: "Shouei",
          release_year: "April 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Heiwa Parlor! Mini 8: Pachinko Jikki Simulation Game",
          publisher: "Nippon Telenet",
          release_year: "January 30, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hercules no Eikō III",
          developer: "Data East",
          publisher: "Data East",
          release_year: "April 24, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hercules no Eikō IV",
          developer: "Data East",
          publisher: "Data East",
          release_year: "October 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hero Senki: Project Olympus",
          developer: "Winkysoft",
          publisher: "Banpresto",
          release_year: "November 20, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Higashio Osamu Kanshuu Super Pro Yakyuu Stadium",
          developer: "C-Lab",
          publisher: "Tokuma Shoten",
          release_year: "September 30, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hiōden: Mamono-tachi tono Chikai",
          developer: "Wolf Team",
          publisher: "Wolf Team",
          release_year: "February 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hiryuu no Ken S: Hyper Version",
          developer: "Culture Brain",
          publisher: "Culture Brain",
          release_year: "December 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hissatsu Pachinko Collection",
          publisher: "Sunsoft",
          release_year: "October 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hissatsu Pachinko Collection 2",
          publisher: "Sunsoft",
          release_year: "March 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hissatsu Pachinko Collection 3",
          publisher: "Sunsoft",
          release_year: "November 2, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hissatsu Pachinko Collection 4",
          publisher: "Sunsoft",
          release_year: "August 30, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hisshou 777 Fighter: Pachi-Slot Ryuuguu Densetsu",
          developer: "Jorudan",
          publisher: "VAP",
          release_year: "January 14, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hisshou 777 Fighter II: Pachi-Slot Maruhi Jouhou",
          developer: "Jorudan",
          publisher: "VAP",
          release_year: "August 19, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hisshou 777 Fighter III: Kokuryuu Ou no Fukkatsu",
          developer: "Jorudan",
          publisher: "VAP",
          release_year: "September 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hisshou Pachi-Slot Fun",
          publisher: "Pow",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hit the Ice",
          developer: "Taito",
          publisher: "Taito",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hokuto no Ken 5",
          developer: "Shouei",
          publisher: "Toei Animation",
          release_year: "July 10, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hokuto no Ken 6",
          developer: "Shouei",
          publisher: "Toei Animation",
          release_year: "November 20, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hokuto no Ken 7",
          developer: "Shouei",
          publisher: "Toei Animation",
          release_year: "December 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Holy Umbrella: Dondera no Mubo",
          developer: "Earthly Soft",
          publisher: "Naxat Soft",
          release_year: "September 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Home Alone",
          developer: "Imagineering",
          publisher: "THQ",
          release_year: "August 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Home Alone 2: Lost in New York",
          developer: "Imagineering",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Home Improvement: Power Tool Pursuit!",
          developer: "Imagineering",
          publisher: "Absolute Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Honkaku Mahjong: Tetsuman",
          developer: "Syscom",
          publisher: "Naxat Soft",
          release_year: "September 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Honkaku Mahjong: Tetsuman II",
          developer: "Khaos",
          publisher: "Naxat Soft",
          release_year: "October 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Honkaku Shougi: Fuuunji Ryuuou",
          developer: "Aisystem Tokyo",
          publisher: "Virgin Interactive",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Honkakuha Igo: Gosei",
          developer: "Aisystem Tokyo",
          publisher: "Taito",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Honke Sankyo Fever: Jikkyou Simulation",
          developer: "Vistec",
          publisher: "Den'Z",
          release_year: "June 10, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Honke Sankyo Fever: Jikkyou Simulation 2",
          developer: "Vistec",
          publisher: "Boss Communications",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Honke Sankyo Fever: Jikkyou Simulation 3",
          developer: "Vistec",
          publisher: "Boss Communications",
          release_year: "August 30, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Honō no Dōkyūji: Dodge Danpei",
          publisher: "Sunsoft",
          release_year: "July 31, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hook",
          developer: "Ukiyotei",
          publisher: "Sony Imagesoft",
          release_year: "July 17, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Horai Gakuen no Bouken!",
          developer: "Dynamite",
          publisher: "J-Wing",
          release_year: "April 19, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Houkago in Beppin Jogakuin",
          developer: "Access",
          publisher: "Imagineer",
          release_year: "February 3, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Human Baseball",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "August 6, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Human Grand Prix III: F1 Triple Battle",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "September 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Human Grand Prix IV: F1 Dream Battle",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "August 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Humans",
          developer: "Imagitec Design",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hungry Dinosaurs\n•Harapeko BakkaJP",
          developer: "Magical Company",
          publisher: "Sunsoft",
          release_year: "1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Hunt for Red October",
          developer: "Riedel Software Productions",
          publisher: "Hi Tech Expressions",
          release_year: "October 1, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hurricanes",
          developer: "Probe Entertainment",
          publisher: "U.S. Gold",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hyper Battle Game: Zen Nihon GT Senshuken",
          developer: "C.P. Brain",
          publisher: "Banpresto",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hyper Iria",
          developer: "TamTam",
          publisher: "Banpresto",
          release_year: "October 13, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hyper V-Ball",
          developer: "Video System",
          publisher: "MC O'RiverNA, Video SystemJP",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Hyper Zone\n•HaipāZōnJP",
          developer: "HAL Laboratory",
          publisher: "HAL Laboratory",
          release_year: "August 31, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Idea no Hi",
          developer: "Office Koukan",
          publisher: "Shouei",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Ignition Factor\n•Fire FightingJP",
          developer: "Jaleco",
          publisher: "Jaleco",
          release_year: "November 1, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Igo Club",
          publisher: "Hect",
          release_year: "January 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ihatovo Monogatari",
          developer: "Hect",
          publisher: "Hect",
          release_year: "March 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Illusion of Gaia\n•Illusion of TimeEU\n•Gaia GensōkiJP",
          developer: "Quintet",
          publisher: "Enix (JP)\nNintendo (NA/EU)",
          release_year: "November 27, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Illvanian no Shiro",
          publisher: "Nippon Clary Business",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Imperium\n•Kidou Soukou DionJP",
          developer: "Vic Tokai",
          publisher: "Vic Tokai",
          release_year: "December 14, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Inazuma Serve da!! Super Beach Volley",
          publisher: "Virgin Interactive",
          release_year: "August 4, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Incantation",
          developer: "Titus Software",
          publisher: "Titus Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Incredible Crash Dummies\n•Incredible Crash Dummies, The: Slick Bouya no DaichousenJP",
          developer: "Gray Matter",
          publisher: "LJN",
          release_year: "September 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Incredible Hulk",
          developer: "Probe Entertainment",
          publisher: "U.S. Gold",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Indiana Jones' Greatest Adventures",
          developer: "Factor 5",
          publisher: "JVC / LucasArts",
          release_year: "October 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Inindo: Way of the Ninja\n•Super Inindo: Datou NobunagaJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "March 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Inspector Gadget",
          developer: "AIM",
          publisher: "Hudson Soft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "International Superstar Soccer\n•Jikkyou World Soccer: Perfect ElevenJP",
          developer: "Konami",
          publisher: "Konami",
          release_year: "November 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "International Superstar Soccer Deluxe\n•Jikkyou World Soccer 2: Fighting ElevenJP",
          developer: "Konami",
          publisher: "Konami",
          release_year: "September 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "International Tennis Tour",
          developer: "Loriciel",
          publisher: "Taito",
          release_year: "March 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ippatsu Gyakuten: Keiba Keirin Kyōtei",
          developer: "Electronics Application",
          publisher: "Pow",
          release_year: "April 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Irem Skins Game\n•The Irem Major TitleEU",
          developer: "Irem",
          publisher: "Irem",
          release_year: "December 4, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Iron Commando: Koutetsu no Senshi",
          developer: "Arcade Zone",
          publisher: "Poppo",
          release_year: "February 10, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Isozuri: Ritou Hen",
          publisher: "Pack-In-Video",
          release_year: "January 19, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Itadaki Street 2: Neon Sign wa Bara Iro ni",
          developer: "Tomcat System",
          publisher: "Enix",
          release_year: "February 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Itchy & Scratchy Game",
          developer: "Bits Studios",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Itoi Shigesato no Bass Tsuri No. 1",
          developer: "HAL Laboratory, Inc.",
          publisher: "Nintendo",
          release_year: "February 21, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Itou Haka Rokudan no Shougi Doujou",
          publisher: "ASK",
          release_year: "February 4, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Izzy's Quest for the Olympic Rings",
          developer: "Alexandria",
          publisher: "U.S. Gold",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "J.League '96 Dream Stadium",
          developer: "A.I.",
          publisher: "Hudson Soft",
          release_year: "June 1, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "J.League Excite Stage '95",
          developer: "A-Max",
          publisher: "Epoch",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "J.League Excite Stage '96",
          developer: "A-Max",
          publisher: "Epoch",
          release_year: "April 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "J.League Soccer Prime Goal",
          developer: "Namco",
          publisher: "Namco",
          release_year: "August 6, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "J.League Soccer Prime Goal 2",
          publisher: "Namco",
          release_year: "August 5, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "J.League Super Soccer '95 Jikkyō Stadium",
          developer: "A.I.",
          publisher: "Hudson Soft",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "J.R.R. Tolkien's The Lord of the Rings, Vol. I",
          developer: "Interplay Entertainment",
          publisher: "Interplay Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jack Nicklaus Golf",
          developer: "Leland Interactive Media",
          publisher: "Tradewest",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jaki Crush",
          developer: "Compile",
          publisher: "Naxat Soft",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jaleco Rally: Big Run: The Supreme 4WD Challenge",
          publisher: "Jaleco",
          release_year: "March 20, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "James Bond Jr.",
          developer: "Gray Matter",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "James Pond 3: Operation Starfish",
          developer: "Millennium Interactive",
          publisher: "Electronic Arts",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jammes",
          developer: "Mighty Craft",
          publisher: "Carrozzeria",
          release_year: "February 10, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jammit",
          developer: "GTE Interactive Media",
          publisher: "GTE Interactive Media",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Janyuuki Gokuu Randa",
          publisher: "Virgin Interactive",
          release_year: "January 13, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "JB The Super Bass",
          developer: "Gaps",
          publisher: "Naxat Soft",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jelly Boy",
          developer: "Probe Entertainment",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jeopardy!",
          developer: "Imagineering",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jeopardy! Deluxe Edition",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jeopardy! Sports Edition",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Jetsons: Invasion of the Planet Pirates\n•Yōkai Buster: Ruka no DaibōkenJP",
          developer: "Sting Entertainment",
          publisher: "Kadokawa Shoten (JP)\nTaito (NA)",
          release_year: "June 9, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jikkyō Keiba Simulation: Stable Star",
          developer: "KCEO",
          publisher: "Konami",
          release_year: "March 22, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jikkyō Oshaberi Parodius",
          developer: "KCEO",
          publisher: "Konami",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jikkyō Power Pro Wrestling '96: Max Voltage",
          developer: "Diamond Head",
          publisher: "Konami",
          release_year: "September 13, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jikkyou Powerful Pro Yakyuu: Basic Han '98",
          developer: "Diamond Head",
          publisher: "Konami",
          release_year: "March 19, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jikkyou Powerful Pro Yakyuu '94",
          publisher: "Konami",
          release_year: "March 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jikkyou Powerful Pro Yakyuu '96 Kaimaku Han",
          developer: "Diamond Head",
          publisher: "Konami",
          release_year: "July 19, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jikkyou Powerful Pro Yakyuu 2",
          publisher: "Konami",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jikkyou Powerful Pro Yakyuu 3",
          developer: "Diamond Head",
          publisher: "Konami",
          release_year: "February 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jikkyou Powerful Pro Yakyuu 3 '97 Haru",
          developer: "Diamond Head",
          publisher: "Konami",
          release_year: "March 20, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jim Lee's WildC.A.T.S: Covert Action Teams",
          developer: "Beam Software",
          publisher: "Playmates Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jim Power: The Lost Dimension in 3-D",
          developer: "Loriciel",
          publisher: "Electro Brain",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jimmy Connors Pro Tennis Tour",
          developer: "Blue Byte",
          publisher: "Ubisoft",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jimmy Houston's Bass Tournament U.S.A.\n•Jissen! Bass Fishing Hisshouhou in USAJP",
          developer: "American Sammy",
          publisher: "American Sammy",
          release_year: "1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jirou Akagawa: Majotachi no Nemuri",
          developer: "Minato Giken",
          publisher: "Pack-In-Video",
          release_year: "November 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jissen Kyōtei",
          developer: "Aisystem Tokyo",
          publisher: "Imagineer",
          release_year: "June 23, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jissen Pachi-Slot Hisshouhou",
          publisher: "Sammy Corporation",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jissen Pachi-Slot Hisshouhou! 2",
          publisher: "Sammy Corporation",
          release_year: "September 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jissen Pachi-Slot Hisshouhou! Classic",
          publisher: "Sammy Corporation",
          release_year: "July 7, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jissen Pachi-Slot Hisshouhou! Twin",
          publisher: "Sammy Corporation",
          release_year: "March 15, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jissen Pachi-Slot Hisshouhou! Twin Vol. 2",
          developer: "TOSE",
          publisher: "Sammy Corporation",
          release_year: "September 12, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jissen Pachi-Slot Hisshouhou! Yamasa Densetsu",
          publisher: "Sammy Corporation",
          release_year: "April 5, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jissen Pachinko Hisshouhou! 2",
          publisher: "Sammy Corporation",
          release_year: "March 8, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jissen! Mahjong Shinan",
          developer: "Syscom",
          publisher: "ASK",
          release_year: "January 13, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Joe & Mac\n•Joe & Mac: Caveman NinjaEU\n•Joe & Mac: Tatakae GenshijinJP",
          developer: "Data East",
          publisher: "Data East (JP/NA)\nElite Systems (EU)",
          release_year: "December 6, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Joe & Mac 2: Lost in the Tropics\n•Joe & Mac 3: Lost in the TropicsEU\n•Tatakae Genshijin 3: Shuyaku wa Yappari Joe & MacJP",
          developer: "Data East",
          publisher: "Data East (JP/NA)\nElite Systems (EU)",
          release_year: "February 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "John Madden Football\n•Pro FootballJP",
          developer: "Park Place Productions",
          publisher: "EA Sports",
          release_year: "January 17, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "John Madden Football '93\n•Pro Football '93JP",
          developer: "EA Canada",
          publisher: "EA Sports",
          release_year: "February 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "JoJo no Kimyou na Bouken",
          developer: "Winkysoft",
          publisher: "Cobra Team",
          release_year: "March 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Joushou Mahjong Tenpai",
          developer: "Game Arts",
          publisher: "Enix",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "JRA PAT",
          developer: "NTT",
          publisher: "NTT",
          release_year: "1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "JRA PAT: Wide Baken Taiyou",
          developer: "NTT",
          publisher: "NTT",
          release_year: "1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Judge Dredd",
          developer: "Probe Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jumpin' Derby",
          developer: "KID",
          publisher: "Naxat Soft",
          release_year: "April 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Jungle Book",
          developer: "Eurocom",
          publisher: "Virgin Interactive",
          release_year: "July 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jungle no Ōja Tar-chan: Sekai Manyū Dai Kakutō no Maki",
          developer: "Kuusou Kagaku",
          publisher: "Bandai",
          release_year: "September 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jungle Strike",
          developer: "Gremlin Interactive",
          publisher: "Electronic Arts",
          release_year: "September 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jungle Wars 2: Kodai Mahō Atimos no Nazo",
          developer: "Atelier Double",
          publisher: "Pony Canyon",
          release_year: "March 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jurassic Park",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "June 24, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jurassic Park 2: The Chaos Continues",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Justice League Task Force",
          developer: "Blizzard Entertainment",
          publisher: "Acclaim Entertainment / Sunsoft",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Jyutei Senki",
          developer: "Tam Tam",
          publisher: "Enix",
          release_year: "August 27, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "JWP Joshi Pro Wrestling: Pure Wrestle Queens",
          publisher: "Jaleco",
          release_year: "December 23, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ka-Blooey\n•BombuzalJP",
          developer: "Kemco",
          publisher: "Kemco",
          release_year: "December 1, 1990",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kabuki-chou Reach Mahjong: Toupuusen",
          developer: "Studio Softmov",
          publisher: "Pony Canyon",
          release_year: "July 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kabuki Rocks",
          developer: "Red Company",
          publisher: "Atlus",
          release_year: "March 4, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kachō Kōsaku Shima: Super Business Adventure",
          developer: "Tom Create",
          publisher: "Yutaka",
          release_year: "September 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kakinoki Shougi",
          developer: "SAS Sakata",
          publisher: "ASCII",
          release_year: "September 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kamaitachi no Yoru",
          publisher: "Chunsoft",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kamen Rider",
          developer: "Sun L",
          publisher: "Bandai",
          release_year: "November 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kamen Rider SD: Shutsugeki!! Rider Machine",
          publisher: "Yutaka",
          release_year: "July 9, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kat's Run: Zen-Nippon K Car Senshuken",
          developer: "Atlus",
          publisher: "Atlus",
          release_year: "July 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Katou Ichi-Ni-San Kudan Shougi Club",
          developer: "Hect",
          publisher: "Hect",
          release_year: "May 16, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kawa no Nushi Tsuri 2",
          publisher: "Pack-In-Video",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kawasaki Caribbean Challenge",
          developer: "Park Place Productions",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kawasaki Superbike Challenge",
          developer: "Domark",
          publisher: "Time Warner Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Keeper",
          developer: "Fupac",
          publisher: "Bullet Proof Software",
          release_year: "July 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Keiba Eight Special",
          developer: "C-Lab",
          publisher: "Misawa",
          release_year: "December 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Keiba Eight Special 2",
          developer: "C-Lab",
          publisher: "Imagineer",
          release_year: "September 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Keiba Yosou Baken Renkinjutsu",
          publisher: "KSS",
          release_year: "May 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ken Griffey Jr. Presents Major League Baseball",
          developer: "Software Creations",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ken Griffey Jr.'s Winning Run",
          developer: "Rare",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kendo Rage\n•Makeruna! MakendouJP",
          developer: "SETA",
          publisher: "SETA",
          release_year: "January 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kenyuu Densetsu Yaiba",
          developer: "Atelier Double",
          publisher: "Banpresto",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kero Kero Keroppi no Bōken Nikki: Nemureru Mori no Keroleen",
          publisher: "Character Soft",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kessen! Dokapon Okukoku IV: Densetsu no Yuusha Tachi",
          publisher: "Asmik Ace Entertainment",
          release_year: "December 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kevin Keegan's Player Manager\n•K.H. Rummenigge's Player ManagerGER",
          developer: "Anco",
          publisher: "Imagineer",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kick Off\n•Super Kick OffJP",
          developer: "Anco",
          publisher: "Imagineer",
          release_year: "December 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kick Off 3: European Challenge",
          developer: "Anco",
          publisher: "Vic Tokai",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kid Klown in Crazy Chase",
          developer: "Kemco",
          publisher: "Kemco",
          release_year: "October 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kidou Butouden G-Gundam",
          developer: "Pandora Box",
          publisher: "Bandai",
          release_year: "December 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kidou Senshi Gundam: Cross Dimension 0079",
          publisher: "Bandai",
          release_year: "February 10, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kidou Senshi Gundam F91: Formula Senki 0122",
          developer: "Nova Games",
          publisher: "Bandai",
          release_year: "July 6, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kidou Senshi V Gundam",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "March 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kidou Senshi Z Gundam: Away to the NewType",
          publisher: "Bandai",
          release_year: "March 1, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kidō Keisatsu Patlabor",
          developer: "Interbec",
          publisher: "Bec",
          release_year: "April 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kikuni Masahiko no Jantoushi Dora Ou",
          developer: "C-Lab",
          publisher: "Planning Office Wada",
          release_year: "February 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kikuni Masahiko no Jantoushi Dora Ou 2",
          publisher: "Planning Office Wada",
          release_year: "December 3, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Killer Instinct",
          developer: "Rare",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kindai Mahjong Special",
          developer: "Outback",
          publisher: "Imagineer",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "King Arthur & the Knights of Justice",
          developer: "Manley & Associates",
          publisher: "Enix",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "King Arthur's World\n•Royal ConquestJP",
          developer: "Argonaut Games",
          publisher: "Jaleco",
          release_year: "November 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The King of Dragons",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "March 4, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "King of the Monsters",
          developer: "Genki",
          publisher: "Takara",
          release_year: "July 31, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "King of the Monsters 2",
          developer: "Now Production/Winds",
          publisher: "Takara",
          release_year: "December 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The King of Rally",
          developer: "KAZe",
          publisher: "Meldac",
          release_year: "December 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kingyo Chuuihou! Tobidase Game Gakuen",
          publisher: "Jaleco",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kinnikuman: Dirty Challenger",
          publisher: "Yutaka",
          release_year: "August 21, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kirby no Kirakira Kizzu",
          developer: "HAL Laboratory",
          publisher: "Nintendo",
          release_year: "June 25, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kirby Super Star\n•Kirby's Fun PakEU\n•Hoshi no Kirby Super DeluxeJP",
          developer: "HAL Laboratory",
          publisher: "Nintendo",
          release_year: "March 21, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kirby's Avalanche\n•Kirby's Ghost TrapEU",
          developer: "Compile/HAL Laboratory",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kirby's Dream Course\n•Kirby BowlJP",
          developer: "HAL Laboratory",
          publisher: "Nintendo",
          release_year: "September 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kirby's Dream Land 3\n•Hoshi no Kirby 3JP",
          developer: "HAL Laboratory",
          publisher: "Nintendo",
          release_year: "March 27, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kishin Douji Zenki: Batoru Raiden",
          developer: "CAProduction",
          publisher: "Hudson Soft",
          release_year: "August 4, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kishin Douji Zenki: Denei Raibu",
          developer: "Now Production",
          publisher: "Hudson Soft",
          release_year: "November 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kishin Douji Zenki: Tenchi Meidou",
          publisher: "Hudson Soft",
          release_year: "February 23, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kishin Korinden Oni",
          developer: "Pandora's Box",
          publisher: "Banpresto",
          release_year: "August 5, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kiteretsu Daihyakka: Chōjikū Sugoroku",
          developer: "Video System",
          publisher: "Video System",
          release_year: "January 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Knights of the Round",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "June 10, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Konpeki no Kantai",
          developer: "Access",
          publisher: "Angel",
          release_year: "November 2, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kouryaku Casino Bar",
          developer: "Nichibutsu",
          publisher: "Nichibutsu",
          release_year: "July 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kōryū Densetsu Villgust",
          developer: "Winkysoft",
          publisher: "Bandai",
          release_year: "May 23, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kōryū no Mimi",
          developer: "VAP",
          publisher: "VAP",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Koushien 2",
          developer: "Affect",
          publisher: "K Amusement Leasing",
          release_year: "June 26, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Koushien 3",
          developer: "Magical Company",
          publisher: "Magical Company",
          release_year: "July 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Koushien 4",
          developer: "Magical Company",
          publisher: "Magical Company",
          release_year: "July 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kousoku Shikou: Shougi Ou",
          developer: "Access",
          publisher: "Imagineer",
          release_year: "March 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Koutetsu no Kishi",
          developer: "Dual",
          publisher: "Asmik Ace Entertainment, Inc",
          release_year: "February 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Koutetsu no Kishi 2: Sabaku no Rommel Shougun",
          developer: "Dual",
          publisher: "Asmik Ace Entertainment, Inc",
          release_year: "January 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Koutetsu no Kishi 3: Gekitotsu Europe Sensen",
          developer: "Dual",
          publisher: "Asmik Ace Entertainment, Inc",
          release_year: "January 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Krusty's Super Fun House\n•Krusty WorldJP",
          developer: "Audiogenic",
          publisher: "Acclaim Entertainment",
          release_year: "January 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kunio no Oden",
          publisher: "Technos Japan",
          release_year: "May 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kunio-kun no Dodgeball da yo Zen'in Shūgō!!",
          developer: "Technos Japan",
          publisher: "Technos Japan",
          release_year: "August 6, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kunio-kun no Dodge Ball: Zenin Shuugou! Tournament Special",
          developer: "Technos Japan",
          publisher: "Technos Japan",
          release_year: "August 6, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kuusou Kagaku Sekai Gulliver Boy",
          developer: "Amble",
          publisher: "Bandai",
          release_year: "June 27, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kyle Petty's No Fear Racing\n•Circuit USAJP",
          developer: "Leland Interactive Media",
          publisher: "Williams Entertainment",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kyouraku Sanyou Maruhon Parlor! Parlor!",
          publisher: "Nippon Telenet",
          release_year: "March 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kyouraku Sanyou Maruhon Parlor! Parlor! 2",
          publisher: "Nippon Telenet",
          release_year: "August 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kyouraku Sanyou Maruhon Parlor! Parlor! 3",
          publisher: "Nippon Telenet",
          release_year: "January 19, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kyouraku Sanyou Maruhon Parlor! Parlor! IV CR",
          publisher: "Nippon Telenet",
          release_year: "December 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kyouraku Sanyou Maruhon Parlor! Parlor! 5",
          publisher: "Nippon Telenet",
          release_year: "March 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Kyuuyaku Megami Tensei",
          developer: "Opera House",
          publisher: "Atlus",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lady Stalker: Challenge from the Past",
          developer: "Climax Entertainment",
          publisher: "Taito",
          release_year: "April 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lagoon\n•RagūnJP",
          developer: "Kemco",
          publisher: "Seika Corporation NA, Kemco EU/JP",
          release_year: "December 12, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lamborghini American Challenge",
          developer: "Titus Software",
          publisher: "Titus Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Laplace no Ma",
          publisher: "Vic Tokai",
          release_year: "July 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Laser Birdie: Get in the Hole",
          developer: "Richo",
          publisher: "Richo",
          release_year: "January 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Last Action Hero",
          developer: "Bits Studios",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Last Battle",
          developer: "Atelier Double",
          publisher: "Techiku",
          release_year: "December 2, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Last Bible III",
          developer: "Multimedia Intelligence Transfer",
          publisher: "Atlus",
          release_year: "March 4, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Lawnmower Man\n•Virtual WarsJP",
          developer: "Sales Curve Interactive",
          publisher: "THQ",
          release_year: "January 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Leading Company",
          developer: "Koei",
          publisher: "Koei",
          release_year: "February 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Leading Jockey",
          publisher: "Carrozzeria",
          release_year: "September 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Leading Jockey 2",
          publisher: "Carrozzeria",
          release_year: "November 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Legend",
          developer: "Arcade Zone",
          publisher: "Seika Corporation",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Legend of the Mystical Ninja\n•Ganbare Goemon: Yukihime Kyuushutsu EmakiJP",
          developer: "Konami",
          publisher: "Konami",
          release_year: "July 17, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Legend of Zelda: A Link to the Past †\n•The Legend of Zelda: Triforce of the GodsJP",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "November 21, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lemmings",
          developer: "Psygnosis",
          publisher: "Sunsoft",
          release_year: "December 18, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lemmings 2: The Tribes",
          developer: "Psygnosis",
          publisher: "Psygnosis",
          release_year: "August 12, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lennus II: Fuuin no Shito",
          developer: "Copya System",
          publisher: "Asmik Ace Entertainment",
          release_year: "July 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lester the Unlikely\n•Odekake Lester: Lelele no LeJP",
          developer: "Visual Concepts",
          publisher: "DTMC",
          release_year: "September 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lethal Enforcers",
          developer: "Konami",
          publisher: "Konami",
          release_year: "March 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lethal Weapon",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Liberty or Death\n•Dokuritsu Sensou: Liberty or DeathJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Libble Rabble",
          developer: "Namco",
          publisher: "Namco",
          release_year: "September 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Light Fantasy",
          developer: "Advance Communication Company",
          publisher: "Tonkin House",
          release_year: "July 3, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Light Fantasy II",
          publisher: "Tonkin House",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Lion King",
          developer: "Westwood Studios",
          publisher: "Virgin Interactive",
          release_year: "December 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Little Magic",
          publisher: "Altron",
          release_year: "December 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Little Master: Nijiiro no Maseki",
          developer: "Tokuma Shoten",
          publisher: "Tokuma Shoten",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Live A Live",
          developer: "Square",
          publisher: "Square",
          release_year: "September 2, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lock On\n•Super Air DiverEU",
          developer: "Copya System",
          publisher: "Vic Tokai",
          release_year: "July 16, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lode Runner Twin: Justy to Liberty no Daibouken",
          publisher: "T&E Soft",
          release_year: "July 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lodoss Tou Senki: Record of Lodoss War",
          developer: "Thinking Rabbit",
          publisher: "Kadokawa Shoten",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Logos Panic",
          developer: "Kan's",
          publisher: "Yutaka",
          release_year: "November 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Looney Tunes B-Ball\n•Looney Tunes BasketballEU",
          developer: "Sculptured Software",
          publisher: "Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lord Monarch",
          developer: "AIM",
          publisher: "Epoch Co.",
          release_year: "October 9, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Lost Vikings\n•Viking no DaimeiwakuJP",
          developer: "Silicon & Synapse",
          publisher: "Interplay Entertainment",
          release_year: "October 8, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Lost Vikings 2",
          developer: "Blizzard Entertainment",
          publisher: "Interplay Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Love Quest",
          developer: "C-Lab",
          publisher: "Tokuma Shoten",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lucky Luke",
          developer: "Infogrames",
          publisher: "Infogrames",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lufia & the Fortress of Doom\n•Estpolis DenkiJP",
          developer: "Neverland",
          publisher: "Taito",
          release_year: "June 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lufia II: Rise of the Sinistrals\n•LufiaEU\n•Estpolis Denki IIJP",
          developer: "Neverland",
          publisher: "Natsume",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Lupin III: Densetsu no Hihō o Oe!",
          developer: "SAS Sakata",
          publisher: "Epoch Co.",
          release_year: "December 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "M.A.C.S. Basic Rifle Marksmanship",
          developer: "Sculptured Software",
          publisher: "Unreleased",
          release_year: "1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Madden NFL '94\n•NFL Pro Football '94JP",
          developer: "Visual Concepts",
          publisher: "Electronic Arts",
          release_year: "December 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Madden NFL '95",
          developer: "Visual Concepts",
          publisher: "Electronic Arts",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Madden NFL '96",
          developer: "Tiburon Entertainment",
          publisher: "Electronic Arts",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Madden NFL 97",
          developer: "Tiburon Entertainment",
          publisher: "Electronic Arts",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Madden NFL 98",
          developer: "Electronic Arts",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Madō Monogatari: Hanamaru Daiyōchienji",
          developer: "Compile",
          publisher: "Compile",
          release_year: "January 12, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Magic Boy",
          developer: "Empire Software",
          publisher: "JVC",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Magic Knight Rayearth",
          developer: "Pandora Box",
          publisher: "Tomy",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Magic Sword",
          developer: "Minakuchi Engineering",
          publisher: "Capcom",
          release_year: "December 31, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Magical Drop",
          developer: "Data East",
          publisher: "Data East",
          release_year: "October 20, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Magical Drop 2",
          developer: "Data East",
          publisher: "Data East",
          release_year: "September 20, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Magical Quest Starring Mickey Mouse\n•Mickey no Magical AdventureJP",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "November 20, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Magical Pop'n",
          developer: "Polestar",
          publisher: "Pack-in-Video",
          release_year: "March 10, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Magical Taruruuto-kun: Magic Adventure",
          developer: "Game Freak",
          publisher: "Bandai",
          release_year: "March 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Magna Braban: Henreki no Yuusha",
          developer: "Lenar",
          publisher: "ASK",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mahjong Club",
          developer: "Natsu System",
          publisher: "Hect",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mahjong Gokuu Tenjiku",
          developer: "Chat Noir",
          publisher: "Chat Noir",
          release_year: "August 19, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mahjong Hanjouki",
          publisher: "Nichibutsu",
          release_year: "July 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mahjong Sengoku Monogatari",
          developer: "Khaos",
          publisher: "Yojigen",
          release_year: "September 23, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mahjong Taikai II",
          publisher: "Koei",
          release_year: "September 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mahjong Touhaiden, The",
          developer: "Khaos",
          publisher: "Video System",
          release_year: "April 16, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mahou Poi Poi Poitto!",
          developer: "Metro",
          publisher: "Takara",
          release_year: "August 5, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mahōjin Guru Guru",
          developer: "Tam Tam",
          publisher: "Enix",
          release_year: "April 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mahoujin Guru Guru 2",
          publisher: "Enix",
          release_year: "April 12, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Majin Tensei",
          developer: "Atlus",
          publisher: "Atlus",
          release_year: "January 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Majin Tensei II: Spiral Nemesis",
          developer: "Atlus",
          publisher: "Atlus",
          release_year: "February 19, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Majuu Ou",
          publisher: "KSS",
          release_year: "August 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Maka Maka",
          developer: "Office Koukan",
          publisher: "Sigma Enterprises",
          release_year: "April 24, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Makeruna! Makendō 2: Kimero Youkai Souri",
          developer: "Success",
          publisher: "Datam Polystar",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Manchester United Championship Soccer\n•Lothar Matthäus Super SoccerGER",
          developer: "Krisalis Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Marchen Adventure Cotton 100%",
          developer: "Success",
          publisher: "Datam Polystar",
          release_year: "April 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mario & Wario",
          publisher: "Nintendo",
          release_year: "August 27, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mario is Missing!",
          developer: "The Software Toolworks",
          publisher: "The Software Toolworks",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mario no Super Picross",
          publisher: "Nintendo",
          release_year: "September 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mario Paint",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "July 14, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mario's Early Years! Fun with Letters",
          developer: "The Software Toolworks",
          publisher: "The Software Toolworks",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mario's Early Years! Fun with Numbers",
          developer: "The Software Toolworks",
          publisher: "The Software Toolworks",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mario's Early Years! Preschool Fun",
          developer: "The Software Toolworks",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mario's Time Machine",
          developer: "The Software Toolworks",
          publisher: "The Software Toolworks",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mark Davis' The Fishing Master\n•Oomono Black Bass Fishing: Jinzouko HenJP",
          developer: "Natsume",
          publisher: "Natsume",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Marko's Magic Football",
          developer: "Domark",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Marmalade Boy",
          developer: "Kuusou Kagaku",
          publisher: "Bandai",
          release_year: "April 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Marvel Super Heroes: War of the Gems\n•Māvuru Supā Hīrōzu: Wō obu za JemuJP",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "October 18, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Marvelous: Mōhitotsu no Takarajima",
          developer: "Nintendo R&D2",
          publisher: "Nintendo",
          release_year: "October 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mary Shelley's Frankenstein",
          developer: "Bits Studios",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Mask",
          developer: "Black Pearl Software",
          publisher: "Black Pearl Software",
          release_year: "December 27, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Maten Densetsu: Senritsu no Ooparts",
          developer: "Thinking Rabbit",
          publisher: "Takara",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Math Blaster: Episode 1",
          developer: "Western Technologies",
          publisher: "Davidson & Associates",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Matsukata Hiroki no Super Trawling",
          developer: "Atelier Double",
          publisher: "Tonkin House",
          release_year: "August 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Matsumura Kunihiro Den: Saikyō no Rekishi o Nurikaero!",
          developer: "Office Koukan",
          publisher: "Shouei",
          release_year: "August 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Maui Mallard in Cold Shadow\n•Donald in Maui MallardEU",
          developer: "Eurocom Entertainment Software",
          publisher: "Nintendo",
          release_year: "December 20, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mazinger Z",
          developer: "Winkysoft",
          publisher: "Bandai",
          release_year: "June 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mecarobot Golf\n•Serizawa Nobuo no Birdie TryJP",
          developer: "Toho",
          publisher: "Toho",
          release_year: "December 4, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "MechWarrior\n•BattleTechJP",
          developer: "Beam Software",
          publisher: "Activision",
          release_year: "February 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "MechWarrior 3050\n•BattleTech 3050JP",
          developer: "Tiburon Entertainment",
          publisher: "Activision",
          release_year: "February 23, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mega Lo Mania\n•Mega-Lo-Mania: Jikū DaisenryakuJP",
          developer: "Sensible Software",
          publisher: "Virgin Interactive",
          release_year: "1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mega Man 7\n•Rockman 7: Shukumei no Taiketsu!JP",
          developer: "Capcom",
          publisher: "Capcom (JP/NA)\nLaguna GmbH (EU)",
          release_year: "March 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mega Man Soccer\n•Rockman's SoccerJP",
          developer: "Sun L",
          publisher: "Capcom",
          release_year: "February 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mega Man X †\n•Rockman XJP",
          developer: "Capcom",
          publisher: "JP/NA|Capcom|EU|Nintendo}",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mega Man X2\n•Rockman X2JP",
          developer: "Capcom",
          publisher: "Capcom (JP/NA)\nLaguna GmbH (EU)",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mega Man X3 †\n•Rockman X3JP",
          developer: "Minakuchi Engineering",
          publisher: "Capcom (JP/NA)\nLaguna GmbH (EU)",
          release_year: "December 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Melfand Stories",
          developer: "Sting",
          publisher: "ASCII",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Metal Combat: Falcon's Revenge",
          developer: "Intelligent Systems",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Metal Marines\n•MilitiaJP",
          developer: "Namco",
          publisher: "Namco (JP/NA)\nMindscape (EU)",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Metal Max 2",
          developer: "Crea-Tech / Data East",
          publisher: "Data East",
          release_year: "March 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Metal Max Returns",
          developer: "Crea-Tech / Data East",
          publisher: "Data East",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Metal Morph",
          developer: "Origin Systems",
          publisher: "FCI",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Metal Slader Glory: Director's Cut",
          developer: "HAL Laboratory",
          publisher: "Nintendo",
          release_year: "November 29, 2000",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Metal Warriors",
          developer: "LucasArts",
          publisher: "Konami",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Michael Andretti's Indy Car Challenge",
          developer: "Genki",
          publisher: "Bulletproof Software",
          release_year: "January 20, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Michael Jordan: Chaos in the Windy City",
          developer: "Electronic Arts",
          publisher: "Electronic Arts",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mickey Mania: The Timeless Adventures of Mickey Mouse",
          developer: "Traveller's Tales",
          publisher: "Sony Imagesoft",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mickey no Tokyo Disneyland Daibōken",
          developer: "Graphic Research",
          publisher: "Tomy",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mickey to Donald: Magical Adventure 3",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "December 8, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mickey's Ultimate Challenge",
          developer: "Designer Software",
          publisher: "Hi Tech Expressions",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Micro Machines",
          developer: "Codemasters",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Micro Machines 2: Turbo Tournament",
          developer: "Codemasters",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Might and Magic II: Gates to Another World\n•Might and Magic: Book IIJP",
          developer: "New World Computing",
          publisher: "Elite Systems",
          release_year: "January 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Might and Magic III: Isles of Terra",
          developer: "Iguana Entertainment",
          publisher: "FCI",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mighty Morphin Power Rangers",
          developer: "Natsume",
          publisher: "Bandai",
          release_year: "November 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mighty Morphin Power Rangers: The Movie",
          developer: "Natsume",
          publisher: "Bandai",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mighty Morphin Power Rangers: The Fighting Edition",
          developer: "Natsume",
          publisher: "Bandai",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Milandra",
          developer: "Tomcat System",
          publisher: "ASCII Entertainment",
          release_year: "January 31, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mini Yonku Let's & Go!!: Power WGP 2",
          developer: "Jupiter",
          publisher: "Nintendo",
          release_year: "December 4, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mini Yonku Shining Scorpion: Let's & Go!!",
          developer: "KID",
          publisher: "ASCII",
          release_year: "December 20, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Miracle Casino Paradise",
          publisher: "Carrozzeria",
          release_year: "January 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Miracle Girls",
          developer: "Now Production",
          publisher: "Takara",
          release_year: "October 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Miracle Piano",
          developer: "The Software Toolworks",
          publisher: "The Software Toolworks",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Miyaji Shachou no Pachinko Fan: Shouri Sengen 2",
          publisher: "Planning Office Wada",
          release_year: "April 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mizuki Shigeru no Youkai Hyakkiyakou",
          publisher: "KSS",
          release_year: "December 20, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "MLBPA Baseball\n•Fighting BaseballJP",
          developer: "Visual Concepts",
          publisher: "EA Sports",
          release_year: "August 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mohawk & Headphone Jack",
          developer: "Black Pearl Software",
          publisher: "Black Pearl SoftwareNA, THQEU",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Momotarou Dentetsu Happy",
          developer: "Make",
          publisher: "Hudson Soft",
          release_year: "December 6, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Monopoly",
          developer: "Sculptured Software",
          publisher: "Parker Brothers",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Monopoly (Japanese game)",
          developer: "Tomy",
          publisher: "Tomy",
          release_year: "March 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Monopoly 2",
          developer: "Tonka",
          publisher: "Tomy",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Monstania",
          developer: "Bits Laboratory",
          publisher: "Pack-In-Video",
          release_year: "September 27, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Monster Maker III: Hikari no Majutsushi",
          publisher: "SOFEL",
          release_year: "December 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Monster Maker Kids: Ousama ni Naritai",
          publisher: "SOFEL",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mortal Kombat",
          developer: "Sculptured Software",
          publisher: "Acclaim Entertainment",
          release_year: "December 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mortal Kombat II",
          developer: "Sculptured Software",
          publisher: "Acclaim Entertainment",
          release_year: "November 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mortal Kombat 3",
          developer: "Sculptured Software",
          publisher: "Williams Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mōryō Senki MADARA 2",
          developer: "Konami",
          publisher: "Konami",
          release_year: "July 16, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Motoko-chan no Wonder Kitchen",
          developer: "Nintendo",
          publisher: "Ajinomoto",
          release_year: "September 1, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Motteke Oh! Dorobou",
          publisher: "Data East",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mountain Bike Rally\n•Cannondale Cup",
          developer: "Radical Entertainment",
          publisher: "Life Fitness Entertainment, American Softworks",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mr. Do!",
          developer: "C-Lab",
          publisher: "Black Pearl Software",
          release_year: "June 23, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mr. Nutz",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "October 7, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ms. Pac-Man",
          developer: "Digital Eclipse Software",
          publisher: "Williams Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mujintou Monogatari",
          developer: "Open Sesame",
          publisher: "KSS",
          release_year: "January 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Multi Play Volleyball",
          developer: "Mebio Software",
          publisher: "Pack-In-Video",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Musya\n•Gōsō Jinrai Densetsu MusyaJP",
          developer: "Jorudan",
          publisher: "SETA",
          release_year: "April 21, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mystery Circle",
          developer: "Sammy Studios",
          publisher: "K Amusement Leasing",
          release_year: "December 4, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Mystic Ark",
          developer: "Produce",
          publisher: "Enix",
          release_year: "July 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nage Libre: Seijaku no Suishin",
          publisher: "Varie",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nakajima Satoru F-1 Hero '94",
          publisher: "Varie",
          release_year: "September 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nakano Koichi Kanshuu: Keirin-Ou",
          developer: "C-Lab",
          publisher: "Coconuts Japan",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Naki no Ryū: Mahjong Hishō-den",
          publisher: "IGS",
          release_year: "December 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Namco Open",
          developer: "TOSE",
          publisher: "Namco",
          release_year: "January 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nankoku Shōnen Papuwa-kun",
          developer: "Daft",
          publisher: "Enix",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Naruhodo! The World",
          publisher: "Tomy",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Natsuki Crisis Battle",
          developer: "TOSE",
          publisher: "Angle",
          release_year: "April 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Natsume Championship Wrestling",
          developer: "Natsume",
          publisher: "Natsume",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NBA All-Star Challenge",
          developer: "Beam Software",
          publisher: "LJN",
          release_year: "May 21, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NBA Give 'n Go\n•NBA Jikkyou Basket: Winning DunkJP",
          developer: "Konami",
          publisher: "Konami",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NBA Hangtime",
          developer: "Funcom",
          publisher: "Midway Games",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NBA Jam",
          developer: "Iguana Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "April 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NBA Jam Tournament Edition †",
          developer: "Iguana Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NBA Live 95",
          developer: "Electronic Arts",
          publisher: "EA Sports",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NBA Live 96",
          developer: "Electronic Arts",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NBA Live 97",
          developer: "Electronic Arts",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NBA Live 98",
          developer: "EA Sports / Tiertex",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NBA Showdown\n•NBA Pro Basketball '94: Bulls vs SunsJP",
          developer: "Electronic Arts",
          publisher: "EA Sports",
          release_year: "December 3, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NCAA Basketball\n•World League BasketballEU\n•Super Dunk ShotJP",
          developer: "Sculptured Software",
          publisher: "HAL Laboratory / Nintendo",
          release_year: "June 19, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NCAA Final Four Basketball",
          developer: "Bitmasters",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NCAA Football",
          developer: "The Software Toolworks",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nekketsu Tairiku Burning Heroes",
          developer: "J-Force",
          publisher: "Enix",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Neugier: Umi to Kaze no Kodō",
          developer: "Wolf Team",
          publisher: "Telenet Japan",
          release_year: "March 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "New Yatterman: Nandai Kandai Yajirobee",
          developer: "Tom Create",
          publisher: "Yutaka",
          release_year: "March 22, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "New Mobile Report Gundam Wing: Endless Duel",
          publisher: "Bandai",
          release_year: "March 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Newman/Haas IndyCar featuring Nigel Mansell\n•Nigel Mansell Indy CarJP",
          developer: "Gremlin Interactive",
          publisher: "Acclaim Entertainment",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NFL Football",
          developer: "Park Place Productions",
          publisher: "Konami",
          release_year: "September 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NFL Quarterback Club",
          developer: "Iguana Entertainment",
          publisher: "LJN",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NFL Quarterback Club 96",
          developer: "Iguana Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NHL '94\n•NHL Pro Hockey '94JP",
          developer: "Electronic Arts",
          publisher: "EA Sports",
          release_year: "April 8, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NHL 95",
          developer: "Visual Concepts / High Score Productions",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NHL 96",
          developer: "High Score Productions / Tiburon Entertainment",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NHL 97",
          developer: "Black Pearl Software",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NHL 98",
          developer: "THQ",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NHL Stanley Cup\n•Super HockeyEU",
          developer: "Sculptured Software",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "NHLPA Hockey '93",
          developer: "Electronic Arts",
          publisher: "EA Sports",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nice de Shot",
          developer: "Magical Company",
          publisher: "ASK",
          release_year: "April 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nichibutsu Arcade Classics",
          developer: "Syscom",
          publisher: "Nichibutsu",
          release_year: "May 26, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nichibutsu Arcade Classics 2: Heiankyo Alien",
          developer: "Syscom",
          publisher: "Nichibutsu",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nichibutsu Collection 1",
          publisher: "Nichibutsu",
          release_year: "November 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nichibutsu Collection 2",
          publisher: "Nichibutsu",
          release_year: "December 27, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nickelodeon Guts",
          developer: "Viacom New Media",
          publisher: "Viacom New Media",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nigel Mansell's World Championship Racing\n•Nigel Mansell's World ChampionshipEU\n•Nigel Mansell's F-1 ChallengeJP",
          developer: "Gremlin Interactive",
          publisher: "GameTek",
          release_year: "March 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ninja Gaiden Trilogy\n•Ninja Ryuukenden TomoeJP",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "August 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ninja Warriors\n•Ninja Warriors: The New GenerationEU\n•The Ninja Warriors AgainJP",
          developer: "Natsume",
          publisher: "Taito",
          release_year: "January 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nintama Rantarō",
          publisher: "Culture Brain",
          release_year: "July 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nintama Rantarō: Ninjutsu Gakuen Puzzle Taikai no Dan",
          publisher: "Culture Brain",
          release_year: "June 28, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nintama Rantarō 2",
          publisher: "Culture Brain",
          release_year: "March 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nintama Rantarō 3",
          publisher: "Culture Brain",
          release_year: "February 28, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nintama Rantarō Special",
          publisher: "Culture Brain",
          release_year: "August 9, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nishijin Pachinko Monogatari",
          publisher: "KSS",
          release_year: "June 23, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nishijin Pachinko Monogatari 2",
          developer: "Soft Machine",
          publisher: "KSS",
          release_year: "June 28, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nishijin Pachinko Monogatari 3",
          developer: "Soft Machine",
          publisher: "KSS",
          release_year: "December 20, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "No Escape",
          developer: "Bits Studios",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nobunaga Kouki",
          publisher: "Yanoman",
          release_year: "January 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nobunaga no Yabou: Haouden",
          publisher: "Koei",
          release_year: "December 9, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nobunaga no Yabou: Tenshouki",
          publisher: "Koei",
          release_year: "January 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nobunaga's Ambition\n•Nobunaga no Yabō: ZenkokubanJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "August 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nobunaga's Ambition: Lord of Darkness\n•Nobunaga no Yabō: Bushō FūunrokuJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "December 21, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nomark Baku Haitou: Shijou Saikyou no Jakushi Tatsu",
          publisher: "Angel",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nolan Ryan's Baseball\n•Super StadiumJP",
          developer: "Romstar",
          publisher: "Romstar",
          release_year: "July 2, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nontan to Issho: Kurukuru Puzzle",
          developer: "Game Freak",
          publisher: "Victor Interactive Software",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Nosferatu",
          developer: "SETA",
          publisher: "SETA",
          release_year: "October 7, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Numbers Paradise",
          developer: "ISCO",
          publisher: "Acclaim Japan",
          release_year: "August 30, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Obitus",
          developer: "Psygnosis",
          publisher: "Bulletproof Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ochan no Oekaki Logic",
          developer: "Game Studio",
          publisher: "Sunsoft",
          release_year: "December 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Oda Nobunaga: Haou no Gundan",
          developer: "TOSE",
          publisher: "Angel",
          release_year: "February 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Oekaki Logic",
          publisher: "Sekaibunka Publishing",
          release_year: "June 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Oekaki Logic 2",
          publisher: "Sekaibunka Publishing",
          release_year: "November 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ogre Battle: The March of the Black Queen\n•Densetsu no Ogre BattleJP",
          developer: "Quest",
          publisher: "Enix",
          release_year: "March 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Olympic Summer Games",
          developer: "Black Pearl Software / Tiertex",
          publisher: "U.S. Gold",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Okamoto Ayako to Match Play Golf",
          developer: "C.P. Brain",
          publisher: "Tsukuda Original",
          release_year: "December 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Olivia's Mystery",
          publisher: "Altron",
          release_year: "February 4, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "On the Ball\n•CameltryJP",
          developer: "Taito",
          publisher: "Taito",
          release_year: "June 26, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ongaku Tsukūru: Kanadeeru",
          developer: "Success",
          publisher: "ASCII",
          release_year: "April 12, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Onita Atsushi FMW",
          developer: "Marionette",
          publisher: "Pony Canyon",
          release_year: "August 6, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Onizuka Katsuya Super Virtual Boxing",
          developer: "Sting Entertainment",
          publisher: "SOFEL",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Operation Europe: Path to Victory 1939-1945\n•Europa SensenJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "January 16, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Operation Logic Bomb\n•Ikari no YousaiJP",
          developer: "Jaleco",
          publisher: "Jaleco",
          release_year: "April 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Operation Thunderbolt",
          developer: "Aisystem Tokyo",
          publisher: "Taito",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Oraga Land Shusai: Best Farmer Shuukaku-Sai",
          developer: "Graphic Research",
          publisher: "Vic Tokai",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Oscar",
          developer: "Flair Software",
          publisher: "Titus Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ossu!! Karatebu",
          developer: "Culture Brain",
          publisher: "Culture Brain",
          release_year: "August 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Othello World",
          developer: "Dice",
          publisher: "Tsukuda Original",
          release_year: "April 5, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Otoboke Ninja Colosseum",
          developer: "Mint",
          publisher: "Intec",
          release_year: "February 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Otogirisou",
          developer: "Chunsoft",
          publisher: "Chunsoft",
          release_year: "March 7, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Out of This World\n•Another WorldEU\n•Outer WorldJP",
          developer: "Delphine Software International",
          publisher: "Interplay Entertainment",
          release_year: "November 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Out to Lunch",
          developer: "Mindscape",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Outlander",
          developer: "Mindscape",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ōzumō Spirit",
          publisher: "Takara",
          release_year: "December 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "P.T.O.: Pacific Theater of Operations\n•Teitoku no KetsudanJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "P.T.O. II: Pacific Theater of Operations\n•Teitoku no Ketsudan IIJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "February 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pac-Attack",
          developer: "Namco",
          publisher: "Namco",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pac-In-Time",
          developer: "Kalisto Entertainment",
          publisher: "Namco",
          release_year: "January 3, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pac-Man 2: The New Adventures\n•Hello! Pac-ManJP",
          developer: "Namco",
          publisher: "Namco (JP/NA)\nNintendo (EU)",
          release_year: "August 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachi-Slot Kanzen Kouryaku: Universal Shindai Nyuuka Volume 1",
          publisher: "Syscom",
          release_year: "March 7, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachi-Slot Kenkyuu",
          publisher: "Magical Company",
          release_year: "July 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachi-Slot Land",
          developer: "I.S.C.",
          publisher: "Carrozzeria",
          release_year: "February 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachi-Slot Love Story",
          publisher: "Coconuts Japan",
          release_year: "November 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachi-Slot Monogatari: Paru Kougyou Special",
          developer: "KAZe",
          publisher: "KSS",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachi-Slot Monogatari: Universal Special",
          developer: "KAZe",
          publisher: "KSS",
          release_year: "July 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachi-Slot Shoubushi",
          developer: "Nihon Bussan",
          publisher: "Nihon Bussan",
          release_year: "December 23, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachinko Challenger",
          publisher: "Carozzeria",
          release_year: "July 7, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachinko Fan: Shouri Sengen",
          publisher: "Planning Office Wada",
          release_year: "October 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachinko Hi Hisshouhou",
          developer: "Jorudan",
          publisher: "VAP",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachinko Monogatari: Pachi-Slot mo Aru deyo!!",
          developer: "KAZe",
          publisher: "KSS",
          release_year: "May 28, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachinko Monogatari 2: Nagoya Shachihoko no Teiou",
          developer: "KAZe",
          publisher: "KSS",
          release_year: "January 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachinko Renchan Tengoku: Super CR Special",
          developer: "Jorudan",
          publisher: "VAP",
          release_year: "May 26, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachinko Tetsujin: Shichiban Shoubu",
          developer: "Graphic Research",
          publisher: "Daikoku",
          release_year: "July 7, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachinko Wars",
          developer: "OeRSTED",
          publisher: "Coconuts Japan",
          release_year: "July 17, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachinko Wars II",
          developer: "OeRSTED",
          publisher: "Coconuts Japan",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachiokun Special",
          developer: "Marioette",
          publisher: "Coconuts Japan",
          release_year: "December 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachiokun Special 2",
          developer: "Marioette",
          publisher: "Coconuts Japan",
          release_year: "May 20, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pachiokun Special 3",
          developer: "Marioette",
          publisher: "Coconuts Japan",
          release_year: "December 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Packy and Marlon",
          developer: "Wave Quest",
          publisher: "Raya Systems",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Pagemaster",
          developer: "Probe Entertainment",
          publisher: "Fox Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Paladin's Quest\n•Lennus: Kodai Kikai no KiokuJP",
          developer: "Asmik Ace Entertainment",
          publisher: "Enix",
          release_year: "November 13, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Panic in Nakayoshi World",
          developer: "Tom Create",
          publisher: "Bandai",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Paperboy 2",
          developer: "Tengen",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Parlor! Mini: Pachinko Jikki Simulation Game",
          publisher: "Nippon Telenet",
          release_year: "April 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Parlor! Mini 2: Pachinko Jikki Simulation Game",
          publisher: "Nippon Telent",
          release_year: "June 28, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Parlor! Mini 3: Pachinko Jikki Simulation Game",
          publisher: "Nippon Telent",
          release_year: "September 27, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Parlor! Mini 4: Pachinko Jikki Simulation Game",
          publisher: "Nippon Telent",
          release_year: "November 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Parlor! Mini 5: Pachinko Jikki Simulation Game",
          publisher: "Nippon Telent",
          release_year: "March 28, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Parlor! Mini 6: Pachinko Jikki Simulation Game",
          publisher: "Nippon Telent",
          release_year: "May 30, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Parlor! Mini 7: Pachinko Jikki Simulation Game",
          publisher: "Nippon Telent",
          release_year: "August 29, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Parodius: Non-Sense Fantasy\n•Parodiusu Da! Shinwa kara OwaraiJP",
          developer: "Konami",
          publisher: "Konami",
          release_year: "July 3, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Peace Keepers\n•Rushing Beat SyuraJP",
          developer: "Jaleco",
          publisher: "Jaleco",
          release_year: "March 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pebble Beach no Hatou New: Tournament Edition",
          developer: "T&E Soft",
          publisher: "T&E Soft",
          release_year: "September 13, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "PGA European Tour",
          developer: "Electronic Arts",
          publisher: "Black Pearl Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "PGA Tour 96",
          developer: "Electronic Arts",
          publisher: "Black Pearl Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "PGA Tour Golf",
          developer: "Polygames",
          publisher: "EA Sports",
          release_year: "July 3, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Phalanx\n•Phalanx: The Enforce Fighter A-144JP",
          developer: "Kemco",
          publisher: "Kemco",
          release_year: "August 7, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Phantom 2040",
          developer: "Viacom New Media",
          publisher: "Viacom New Media",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Picross NP Vol. 1",
          publisher: "Jupiter",
          release_year: "April 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Picross NP Vol. 2",
          publisher: "Jupiter",
          release_year: "June 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Picross NP Vol. 3",
          publisher: "Jupiter",
          release_year: "August 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Picross NP Vol. 4",
          publisher: "Jupiter",
          release_year: "October 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Picross NP Vol. 5",
          publisher: "Jupiter",
          release_year: "December 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Picross NP Vol. 6",
          publisher: "Jupiter",
          release_year: "February 1, 2000",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Picross NP Vol. 7",
          publisher: "Jupiter",
          release_year: "April 1, 2000",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Picross NP Vol. 8",
          publisher: "Jupiter",
          release_year: "June 1, 2000",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pieces\n•Jigsaw PartyJP",
          developer: "Hori Electric",
          publisher: "Atlus",
          release_year: "July 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pikiinya!",
          developer: "Crea-Tech",
          publisher: "ASCII",
          release_year: "January 31, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pilotwings",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "December 21, 1990",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pinball Dreams\n•Pinball PinballJP",
          developer: "Spidersoft",
          publisher: "GameTek EU/NA, Coconuts Japan JP",
          release_year: "August 5, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pinball Fantasies",
          developer: "Spidersoft",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pink Goes to Hollywood\n•Pink PantherJP",
          developer: "Manley & Associates",
          publisher: "TecMagik",
          release_year: "April 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pipe Dream",
          developer: "TOSE",
          publisher: "Bullet Proof Software",
          release_year: "August 7, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pirates of Dark Water",
          developer: "Sunsoft",
          publisher: "Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pitfall: The Mayan Adventure\n•Pitfall: Maya no DaiboukenJP",
          developer: "Redline Games",
          publisher: "Activision",
          release_year: "July 14, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pit-Fighter",
          developer: "THQ",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Plok",
          developer: "Software Creations",
          publisher: "Tradewest",
          release_year: "December 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pocky & Rocky\n•KiKi KaiKai: Nazo no Kuro MantleJP",
          developer: "Natsume",
          publisher: "Natsume",
          release_year: "December 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pocky & Rocky 2\n•KiKi KaiKai: TsukiyozoushiJP",
          developer: "Natsume",
          publisher: "Natsume NA/JP, Ocean Software EU",
          release_year: "June 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Poko-Nyan! Henpokorin Adventure",
          publisher: "Toho",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pop'n TwinBee",
          developer: "Konami",
          publisher: "Palcom EU, Konami JP",
          release_year: "March 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pop'n TwinBee: Rainbow Bell Adventures",
          developer: "Konami",
          publisher: "Konami (JP)\nPalcom Software (EU)",
          release_year: "January 7, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Popeye: Ijiwaru Majo Sea Hag no Maki",
          developer: "Technos Japan",
          publisher: "Technos Japan",
          release_year: "August 12, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Popful Mail",
          developer: "Falcom",
          publisher: "Falcom",
          release_year: "June 10, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Populous",
          developer: "Bullfrog Productions",
          publisher: "Acclaim Entertainment",
          release_year: "December 16, 1990",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Populous II: Trials of the Olympian Gods",
          developer: "Bullfrog Productions",
          publisher: "Imagineer",
          release_year: "January 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Porky Pig's Haunted Holiday",
          developer: "Phoenix Interactive Entertainment",
          publisher: "Acclaim Entertainment / Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Power Drive",
          developer: "U.S. Gold",
          publisher: "Rage Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Power Instinct\n•Gouketsuji IchizokuJP",
          developer: "Atlus",
          publisher: "Atlus",
          release_year: "October 14, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Power Lode Runner",
          developer: "Atelier Double",
          publisher: "Nintendo",
          release_year: "January 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Power Moves\n•Power AthleteJP",
          developer: "Kaneko",
          publisher: "Kaneko",
          release_year: "November 27, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Power of the Hired",
          developer: "NCS",
          publisher: "NCS",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Power Piggs of the Dark Age",
          developer: "Radical Entertainment",
          publisher: "Titus Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Power Rangers Zeo: Battle Racers",
          developer: "Natsume",
          publisher: "Bandai",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Power Soukoban",
          developer: "Atelier Double",
          publisher: "Nintendo",
          release_year: "June 25, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Powermonger\n•Powermonger: Mashou no BouryakuJP",
          developer: "Bullfrog Productions",
          publisher: "Imagineer",
          release_year: "1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Prehistorik Man\n•P-ManJP",
          developer: "Titus Software",
          publisher: "Titus Software",
          release_year: "June 23, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Primal Rage",
          developer: "Bitmasters",
          publisher: "Time Warner Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Prince of Persia",
          developer: "Arsys Software",
          publisher: "Masaya (JP)\nKonami (NA/EU)",
          release_year: "July 3, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Prince of Persia 2: The Shadow and the Flame",
          developer: "Titus Software",
          publisher: "Titus Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Princess Maker: Legend of Another World",
          developer: "Gainax",
          publisher: "Takara",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Princess Minerva",
          developer: "Atelier Double",
          publisher: "Vic Tokai",
          release_year: "June 23, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pro Kishi Jinsei Simulation: Shōgi no Hanamichi",
          developer: "Access",
          publisher: "Atlus",
          release_year: "February 16, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pro Mahjong Kiwame",
          publisher: "Athena",
          release_year: "June 11, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pro Mahjong Kiwame II",
          publisher: "Athena",
          release_year: "July 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pro Mahjong Kiwame III",
          publisher: "Athena",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pro Mahjong Tsuwamono",
          publisher: "Culture Brain",
          release_year: "April 18, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pro Mahjong Tsuwamono: Renka Han",
          publisher: "Culture Brain",
          release_year: "March 28, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pro Quarterback",
          developer: "Leland Interactive Media",
          publisher: "Tradewest",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pro Sport Hockey\n•USA Ice HockeyJP",
          developer: "Tose",
          publisher: "Jaleco",
          release_year: "March 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pro Yakyū Nettō: Puzzle Stadium",
          publisher: "Coconuts Japan",
          release_year: "April 25, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pro Yakyū Star",
          developer: "Culture Brain",
          publisher: "Culture Brain",
          release_year: "January 17, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Psycho Dream",
          developer: "Riot",
          publisher: "Telent Japan",
          release_year: "December 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Pushover",
          developer: "Red Rat Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Putty Squad",
          developer: "System 3",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Puzzle'n Desu!",
          developer: "Nichibutsu",
          publisher: "Nichibutsu",
          release_year: "April 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Q*bert 3",
          developer: "Realtime Associates",
          publisher: "NTVIC",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Race Drivin'",
          developer: "Imagineering",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Radical Rex",
          developer: "Laser Beam Entertainment",
          publisher: "Activision",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Raiden Trad\n•Raiden DensetsuJP",
          developer: "Seibu Kaihatsu/Toei Company/Micronics",
          publisher: "Electro Brain",
          release_year: "November 29, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rampart",
          developer: "Bitmasters",
          publisher: "Electronic Arts",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ranma ½: Akaneko-dan teki Hihou",
          publisher: "Toho",
          release_year: "October 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ranma ½: Chougi Rambuhen",
          developer: "Atelier Double",
          publisher: "Shogakukan",
          release_year: "April 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ranma ½: Hard Battle\n•Ranma ½EU\n•Ranma Nibun-no-Ichi: Bakuretsu RantōhenJP",
          developer: "Atelier Double",
          publisher: "DTMC",
          release_year: "December 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ranma ½: Ougi Jaanken",
          developer: "Atelier Double",
          publisher: "Shogakukan",
          release_year: "July 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rap Jam: Volume One",
          developer: "Motown Software",
          publisher: "64WD Creation",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Realm",
          developer: "Titus Software",
          publisher: "Titus Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Red Riding Hood Chacha",
          developer: "Landwarf",
          publisher: "TOMY",
          release_year: "August 9, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Redline F-1 Racer\n•Aguri Suzuki F-1 Super DrivingEU\n•Suzuki Aguri no F-1 Super DrivingJP",
          developer: "Absolute Entertainment",
          publisher: "Absolute Entertainment",
          release_year: "July 14, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rejoice: Aretha Ōkoku no Kanata",
          developer: "Japan Art Media",
          publisher: "Yanoman",
          release_year: "April 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Relief Pitcher",
          developer: "Tengen",
          publisher: "Left Field Productions",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Ren & Stimpy Show: Buckaroo$!",
          developer: "Imagineering",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Ren & Stimpy Show: Fire Dogs",
          developer: "Argonaut Games",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Ren & Stimpy Show: Time Warp",
          developer: "Sculptured Software",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Ren & Stimpy Show: Veediots!",
          developer: "Gray Matter",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rendering Ranger: R2",
          developer: "Rainbow Arts",
          publisher: "Virgin Interactive",
          release_year: "November 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Res Arcana: Diana Ray: Uranai no Meikyuu",
          developer: "Marionette",
          publisher: "Coconuts Japan",
          release_year: "April 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Revolution X",
          developer: "Software Creations",
          publisher: "Acclaim Entertainment",
          release_year: "March 1, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rex Ronan: Experimental Surgeon",
          developer: "Sculptured Software",
          publisher: "Raya Systems",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Riddick Bowe Boxing\n•ChavezMX\n•Ridikku Bou BokushinguJP",
          developer: "Malibu Interactive",
          publisher: "Extreme Entertainment Group",
          release_year: "November 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ring ni Kakero",
          developer: "Earthly Soft",
          publisher: "Masaya",
          release_year: "June 1, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rise of the Phoenix\n•KouryuukiJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "April 6, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rise of the Robots",
          developer: "Mirage / T&E Soft",
          publisher: "Acclaim Entertainment",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rival Turf!\n•Rushing BeatJP",
          developer: "Jaleco",
          publisher: "Jaleco",
          release_year: "March 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Road Riot 4WD",
          developer: "Equilibrium",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Road Runner's Death Valley Rally\n•Looney Tunes: Road RunnerEU\n•Road Runner vs. Wile E. CoyoteJP",
          developer: "ICOM Simulations",
          publisher: "Sunsoft",
          release_year: "December 22, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "RoboCop 3",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "RoboCop Versus The Terminator",
          developer: "Interplay",
          publisher: "Virgin Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Robotrek\n•Slap StickJP",
          developer: "Quintet",
          publisher: "Enix",
          release_year: "July 8, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rock n' Roll Racing",
          developer: "Silicon & Synapse",
          publisher: "Interplay Entertainment",
          release_year: "January 3, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Rocketeer",
          developer: "NovaLogic",
          publisher: "IGS",
          release_year: "February 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rockman & Forte",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "April 24, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rocko's Modern Life: Spunky's Dangerous Day",
          developer: "Viacom New Media",
          publisher: "Viacom New Media",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rocky Rodent\n•Nitropunks: MightheadsJP",
          developer: "Irem",
          publisher: "Irem",
          release_year: "July 30, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Roger Clemens' MVP Baseball\n•MVP BaseballJP",
          developer: "Sculptured Software",
          publisher: "LJN",
          release_year: "August 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rokudenashi Blues: Taiketsu! Tokyo Shitennou",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "April 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Romance of the Three Kingdoms II\n•Super Sangokushi IIJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "September 15, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Romance of the Three Kingdoms III: Dragon of Destiny\n•Sangokushi IIIJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "November 8, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Romance of the Three Kingdoms IV: Wall of Fire\n•Sangokushi IVJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "December 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Romancing SaGa",
          developer: "Square",
          publisher: "Square",
          release_year: "January 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Romancing SaGa 2 †",
          developer: "Square",
          publisher: "Square",
          release_year: "December 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Romancing SaGa 3",
          developer: "Square",
          publisher: "Square",
          release_year: "November 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "RPG Tsukūru: Super Dante",
          developer: "Kuusou Kagaku",
          publisher: "ASCII",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "RPG Tsukūru 2",
          developer: "Kuusou Kagaku",
          publisher: "ASCII",
          release_year: "January 31, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "RPM Racing",
          developer: "Silicon & Synapse",
          publisher: "Interplay Entertainment",
          release_year: "March 19, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "R-Type III: The Third Lightning\n•Āru Taipu Surī: Za Sādo RaitoninguJP",
          developer: "Tamtex",
          publisher: "Irem (JP/EU)\nJaleco (NA)",
          release_year: "December 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Rudra no Hihō",
          developer: "Square",
          publisher: "Square",
          release_year: "April 5, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ruin Arm",
          developer: "TOSE",
          publisher: "Bandai",
          release_year: "June 23, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Run Saber",
          developer: "Hori Electric",
          publisher: "Atlus",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ryuukihei Dan Danzarubu",
          developer: "Pandora Box",
          publisher: "Yutaka",
          release_year: "April 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ryuuko no Ken 2",
          developer: "Monolith Corporation",
          publisher: "Saurus",
          release_year: "December 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Saibara Rieko no Mahjong Hourouki",
          developer: "Natsume",
          publisher: "Taito",
          release_year: "February 10, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Saikousoku Shikou Shougi Mahjong",
          publisher: "Varie",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Saikyō: Takada Nobuhiko",
          developer: "Dual",
          publisher: "Hudson Soft",
          release_year: "December 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sailor Moon\n•Bishoujo Senshi Sailor MoonJP",
          publisher: "Bandai",
          release_year: "August 27, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sakurai Shouichi no Jankiryuu: Mahjong Hisshouhou",
          developer: "J-Force",
          publisher: "Sammy Studios",
          release_year: "September 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SameGame",
          developer: "Hudson Soft",
          publisher: "Hudson Soft",
          release_year: "March 1, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SameGame + Tengai Makyou Zero Jikei",
          developer: "Hudson Soft",
          publisher: "Hudson Soft",
          release_year: "March 1, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Samurai Shodown\n•Samurai SpiritsJP",
          developer: "Takara",
          publisher: "Takara",
          release_year: "September 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sangokushi Eiketsuden",
          publisher: "Koei",
          release_year: "December 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sangokushi Seishi: Tenbu Spirits",
          developer: "Wolf Team",
          publisher: "Wolf Team",
          release_year: "June 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sankyo Fever! Fever!",
          publisher: "Nippon Telenet",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sanrio Shanghai",
          developer: "SAS Sakata",
          publisher: "Character Soft",
          release_year: "August 31, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sanrio World Smash Ball!",
          developer: "Tomcat System",
          publisher: "Character Soft",
          release_year: "July 16, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sansara Naga 2",
          publisher: "Victor Interactive Software",
          release_year: "July 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Saturday Night Slam Masters\n•Muscle BomberJP",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "March 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Scooby-Doo Mystery",
          developer: "Argonaut Software",
          publisher: "Acclaim Entertainment / Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD F-1 Grand Prix",
          developer: "Video System",
          publisher: "Video System",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD Gundam G Next",
          developer: "Japan Art Media",
          publisher: "Bandai",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD Gundam Gaiden: Knight Gundam Monogatari: Ooinaru Isan",
          developer: "TOSE",
          publisher: "Angel",
          release_year: "December 21, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD Gundam Gaiden 2: Entaku no Kishi",
          developer: "TOSE",
          publisher: "Yutaka",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD Gundam GX",
          developer: "Bec",
          publisher: "Bandai",
          release_year: "May 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD Gundam Power Formation Puzzle",
          developer: "Tom Create",
          publisher: "Bandai",
          release_year: "January 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD Gundam X",
          developer: "Bec",
          publisher: "Yutaka",
          release_year: "September 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD Hiryuu no Ken",
          publisher: "Culture Brain",
          release_year: "June 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD Kidou Senshi Gundam: V Sakusen Shidou",
          developer: "TOSE",
          publisher: "Angel",
          release_year: "September 12, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD Kidou Senshi Gundam 2",
          developer: "TOSE",
          publisher: "Angel",
          release_year: "September 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SD The Great Battle",
          developer: "Banpresto",
          publisher: "Banpresto",
          release_year: "December 29, 1990",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SeaQuest DSV",
          developer: "Sculptured Software",
          publisher: "Malibu Games",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Secret of Evermore",
          developer: "Square",
          publisher: "Square",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Secret of Mana\n•Seiken Densetsu 2JP",
          developer: "Square",
          publisher: "Square (JP)\nNintendo (NA/EU)",
          release_year: "August 6, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Secret of the Stars\n•AqutallionJP",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "November 5, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Seifuku Densetsu: Pretty Fighter",
          publisher: "Imagineer Co., Ltd.",
          release_year: "December 2, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Seijuu Maden: Beasts & Blades",
          publisher: "Bullet Proof Software",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Seiken Densetsu 3 †",
          developer: "Square",
          publisher: "Square",
          release_year: "September 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sengoku Denshou",
          publisher: "Data East",
          release_year: "September 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sengoku no Hasha",
          developer: "Bits Laboratory",
          publisher: "Banpresto",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sensible Soccer\n•International Sensible Soccer - World Champions: Limited Edition",
          developer: "Sensible Software",
          publisher: "Renegade Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sgt. Saunders' Combat!",
          developer: "Play Avenue \nChickenhead",
          publisher: "ASCII Corporation",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shadowrun",
          developer: "Beam Software",
          publisher: "Data East",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shanghai: Banri no Choujou",
          developer: "Kuusou Kagaku",
          publisher: "Sunsoft",
          release_year: "November 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shanghai II: Dragon's Eye\n•Super Shanghai: Dragon's EyeJP",
          developer: "Hot-B",
          publisher: "Activision",
          release_year: "April 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shanghai III",
          developer: "Kuusou Kagaku",
          publisher: "Sunsoft",
          release_year: "September 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shaq Fu",
          developer: "Delphine Software International",
          publisher: "Electronic Arts",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shien's Revenge\n•Shien: The Blade ChaserJP",
          developer: "Almanic",
          publisher: "Vic Tokai",
          release_year: "April 8, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shigetaka Kashiwagi's Top Water Bassing",
          developer: "Imagesoft",
          publisher: "VAP",
          release_year: "February 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shijou Saikyou League Serie A: Ace Striker",
          publisher: "TNN",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shijou Saikyou no Quiz Ou Ketteisen Super",
          developer: "ISCO",
          publisher: "Yonezawa PR21",
          release_year: "December 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shiki Eiyuuden",
          publisher: "Outrigger Koubou",
          release_year: "July 7, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shimono Masaki no Fishing to Bassing",
          developer: "Natsume",
          publisher: "Natsume",
          release_year: "October 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Ikkaku Senkin",
          developer: "Jorudan",
          publisher: "VAP",
          release_year: "July 7, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Majan",
          publisher: "Konami",
          release_year: "March 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Megami Tensei",
          publisher: "Atlus",
          release_year: "October 30, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Megami Tensei if...",
          publisher: "Atlus",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Megami Tensei II",
          publisher: "Atlus",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Momotarou Densetsu",
          publisher: "Hudson Soft",
          release_year: "December 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Naki no Ryū: Mahjong Hishō-den",
          publisher: "Bec",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Nekketsu Kōha: Kunio-tachi no Banka",
          developer: "Almanic",
          publisher: "Technos Japan",
          release_year: "April 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Nippon Pro Wrestling: Chou Senshi in Tokyo Dome",
          publisher: "Varie",
          release_year: "September 14, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Nippon Pro Wrestling '94: Battlefield in Tokyo Dome",
          publisher: "Varie",
          release_year: "August 12, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Nippon Pro Wrestling '95: Tokyo Dome Battle 7",
          publisher: "Varie",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin SD Sengokuden: Taishou Gun Retsuden",
          developer: "Bec",
          publisher: "Bec",
          release_year: "April 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Seikoku: La Wares",
          developer: "J-Force",
          publisher: "Yutaka",
          release_year: "April 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Shougi Club",
          developer: "Natsu System",
          publisher: "Hect",
          release_year: "September 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shin Togenkyo",
          publisher: "Banpresto",
          release_year: "September 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Shinri Game: Akuma no Kokoroji",
          publisher: "Visit",
          release_year: "March 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Shinri Game 2: Magical Trip",
          publisher: "Visit",
          release_year: "February 10, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Shinri Game 3",
          developer: "Ukiyotei",
          publisher: "Visit",
          release_year: "August 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shinseiki Odysselya",
          developer: "Vic Tokai",
          publisher: "Vic Tokai",
          release_year: "June 18, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shinseiki Odysselya II",
          developer: "Vic Tokai",
          publisher: "Vic Tokai",
          release_year: "October 6, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shinzui Taikyoku Igo: Go Sennin",
          developer: "Jorudan",
          publisher: "J-Wing",
          release_year: "June 2, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shiroi Ringu he",
          developer: "Opera House",
          publisher: "Pony Canyon",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shodai Nekketsu Kouha Kunio-kun",
          developer: "Technos Japan",
          publisher: "Technos Japan",
          release_year: "August 7, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shodan Morita Shougi",
          publisher: "SETA Corporation",
          release_year: "August 23, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shodankurai Nintei: Shodan Pro Mahjong",
          developer: "Khaos",
          publisher: "Gaps",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shougi: Fuurinkazan",
          publisher: "Pony Canyon",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shougi Club",
          developer: "Natsu System",
          publisher: "Hect",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shougi Saikyou",
          publisher: "Magical Company",
          release_year: "July 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shougi Saikyou 2: Jissen Taikyoku Hen",
          publisher: "Magical Company",
          release_year: "February 9, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shougi Sanmai",
          publisher: "Virgin Interactive",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shōnen Ashibe",
          developer: "Nova Games",
          publisher: "Takara",
          release_year: "December 22, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shōnen Ninja Sasuke",
          publisher: "Sunsoft",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shōnin yo Taishi wo Idake!!",
          developer: "AIM",
          publisher: "Bandai",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shutokō Battle '94 Keichii Tsuchiya Drift King",
          developer: "Genki",
          publisher: "Bullet Proof Software",
          release_year: "May 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shutokou Battle 2: Drift King Keichii Tsuchiya & Masaaki Bandoh",
          developer: "Genki",
          publisher: "Bullet Proof Software",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Shuushoku Game",
          developer: "Lenar",
          publisher: "Imagineer",
          release_year: "July 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Side Pocket",
          developer: "Iguana Entertainment",
          publisher: "Data East",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Silva Saga II: The Legend of Light and Darkness",
          developer: "SETA Corporation",
          publisher: "SETA Corporation",
          release_year: "June 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SimAnt",
          developer: "Tomcat System",
          publisher: "Maxis",
          release_year: "February 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SimCity",
          developer: "Nintendo/Maxis",
          publisher: "Nintendo",
          release_year: "April 26, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SimCity 2000",
          developer: "THQ",
          publisher: "Black Pearl Software",
          release_year: "May 26, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SimCity Jr.",
          publisher: "Imagineer",
          release_year: "July 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SimEarth\n•SimEarth: The Living PlanetJP",
          developer: "Tomcat System",
          publisher: "FCI",
          release_year: "December 29, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Simpsons: Bart's Nightmare\n•Simpsons, The: Bart no Fushigi na Yume no DaiboukenJP",
          developer: "Sculptured Software",
          publisher: "Acclaim Entertainment",
          release_year: "February 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Simulation Pro Yakyuu",
          developer: "Hect",
          publisher: "Hect",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sink or Swim",
          developer: "Zeppelin Games",
          publisher: "Titus Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sküljagger: Revolt of the Westicans",
          developer: "Realtime Associates",
          publisher: "American Softworks",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Skyblazer\n•KaruraouJP",
          developer: "Ukiyotei",
          publisher: "Sony Imagesoft",
          release_year: "February 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Slayers",
          developer: "Bec",
          publisher: "Banpresto",
          release_year: "June 24, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Smart Ball\n•Jerry BoyJP",
          developer: "Game Freak, System Sacom",
          publisher: "Sony Imagesoft",
          release_year: "September 13, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Smash Tennis\n•Super Family TennisJP",
          developer: "Namco",
          publisher: "Namco (JP)\nVirgin Interactive (EU)",
          release_year: "June 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Smurfs",
          developer: "Infogrames",
          publisher: "Infogrames",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Smurfs Travel The World",
          developer: "Infogrames",
          publisher: "Infogrames",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Snoopy Concert",
          developer: "Pax Softonica",
          publisher: "Mitsui Fudosan",
          release_year: "May 19, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Snow White: Happily Ever After",
          developer: "Imagitec Design",
          publisher: "American Softworks",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Soccer Kid\n•The Adventures of Kid KleetsNA",
          developer: "Krisalis Software",
          publisher: "Ocean Software",
          release_year: "December 28, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Soldiers of Fortune\n•The Chaos EngineEU",
          developer: "Bitmap Brothers",
          publisher: "Spectrum Holobyte",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Solid Runner",
          developer: "Sting",
          publisher: "ASCII Entertainment",
          release_year: "March 28, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Song Master",
          developer: "Japan Art Media",
          publisher: "Yanoman",
          release_year: "November 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sonic Blast Man",
          developer: "I.T.L / Zuntata",
          publisher: "Taito",
          release_year: "September 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sonic Blast Man II",
          developer: "Taito / I.T.L",
          publisher: "Taito",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Soreyuke Ebisumaru Karakuri Meiro: Kieta Goemon no Nazo!!",
          developer: "Konami Computer Entertainment Osaka",
          publisher: "Konami",
          release_year: "March 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SOS\n•SeptentrionJP",
          developer: "Human Entertainment",
          publisher: "Vic Tokai",
          release_year: "May 28, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sotsugyou Bangai Hen: Nee Mahjong Shiyo!",
          publisher: "KSS",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sougou Kakutougi: Astral Bout",
          developer: "A-Wave",
          publisher: "King Records",
          release_year: "June 26, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sougou Kakutougi: Astral Bout 2: The Total Fighters",
          developer: "A-Wave",
          publisher: "King Records",
          release_year: "February 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sougou Kakutougi Rings: Astral Bout 3",
          developer: "A-Wave",
          publisher: "King Records",
          release_year: "October 20, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Soukou Kihei Votoms: The Battling Road",
          developer: "Genki",
          publisher: "Takara",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Soul & Sword",
          developer: "Pandora Box",
          publisher: "Zamuse",
          release_year: "November 30, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Soul Blazer\n•Soul BladerJP",
          developer: "Quintet",
          publisher: "Enix",
          release_year: "January 31, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sound Novel Tsukūru",
          developer: "Success",
          publisher: "ASCII",
          release_year: "May 31, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Space Ace",
          developer: "Entertainment International",
          publisher: "Absolute Entertainment",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Space Football: One on One\n•Super LinearballJP",
          developer: "Bits Studios",
          publisher: "Triffix",
          release_year: "November 6, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Space Invaders\n•Space Invaders: The Original GameJP",
          developer: "Taito",
          publisher: "Taito (JP)\nNintendo (NA/EU)",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Space Megaforce\n•Super AlesteEU",
          developer: "Compile",
          publisher: "Toho",
          release_year: "April 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Spanky's Quest\n•Hansei Zaru: Jirou-kun no DaiboukenJP",
          developer: "Natsume",
          publisher: "Natsume",
          release_year: "December 27, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Spark World",
          publisher: "Den'Z",
          release_year: "May 26, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sparkster",
          developer: "Konami",
          publisher: "Konami",
          release_year: "September 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Spectre",
          developer: "Synergistic Software",
          publisher: "Cybersoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Speed Racer in My Most Dangerous Adventures",
          developer: "Radical Entertainment",
          publisher: "Accolade",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Speedy Gonzales: Los Gatos Bandidos",
          developer: "Sunsoft",
          publisher: "Acclaim Entertainment / Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Spider-Man",
          developer: "Western Technologies",
          publisher: "LJN",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Spider-Man and Venom: Maximum Carnage",
          developer: "Software Creations",
          publisher: "LJN",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Spider-Man and the X-Men in Arcade's Revenge",
          developer: "Software Creations",
          publisher: "LJN",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Spindizzy Worlds",
          developer: "ASCII Entertainment",
          publisher: "ASCII Entertainment",
          release_year: "August 7, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Spirou",
          developer: "Infogrames",
          publisher: "Infogrames",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Sporting News: Power Baseball",
          developer: "Now Production",
          publisher: "Hudson Soft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sports Illustrated: Championship Football & Baseball\n•All-American Championship FootballEU",
          developer: "Malibu Games",
          publisher: "Malibu Games",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Spriggan Powered",
          developer: "Micronics",
          publisher: "Naxat Soft",
          release_year: "July 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sprinter Monogatari: Mezase!! Ikkaku Senkin",
          developer: "Video and Audio Project",
          publisher: "Video and Audio Project",
          release_year: "April 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "St. Andrews: Eikou to Rekishi no Old Course",
          publisher: "Epoch Co.",
          release_year: "September 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Star Fox\n•StarwingEU",
          developer: "Nintendo/Argonaut Games",
          publisher: "Nintendo",
          release_year: "February 21, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Star Fox 2",
          developer: "Nintendo/Argonaut Games",
          publisher: "Nintendo",
          release_year: "October 5, 2017",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Star Ocean",
          publisher: "Enix",
          release_year: "July 19, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Star Trek: Deep Space Nine – Crossroads of Time",
          developer: "Novotrade",
          publisher: "Playmates Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Star Trek: Starfleet Academy - Starship Bridge Simulator",
          developer: "Paramount Interactive",
          publisher: "Interplay Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Star Trek: The Next Generation – Future's Past\n•Shin Star Trek: The Next GenerationJP",
          developer: "Spectrum Holobyte",
          publisher: "Spectrum Holobyte",
          release_year: "November 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Stardust Suplex",
          publisher: "Varie",
          release_year: "January 20, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Stargate",
          developer: "Probe Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "May 26, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Stealth",
          developer: "Axes Art Amuse",
          publisher: "Hect",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Steel Talons",
          developer: "Panoramic",
          publisher: "Left Field Productions",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sterling Sharpe: End 2 End",
          developer: "Tose",
          publisher: "Jaleco",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Stone Protectors",
          developer: "Eurocom",
          publisher: "Kemco",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Street Combat\n•Ranma ½: Chōnai GekitōhenJP",
          developer: "Opus Corporation",
          publisher: "Irem",
          release_year: "March 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Street Fighter Alpha 2\n•Street Fighter Zero 2JP",
          developer: "Capcom",
          publisher: "Capcom (JP/NA)\nNintendo (EU)",
          release_year: "December 20, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Street Fighter II: The World Warrior†",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "June 10, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Street Fighter II Turbo: Hyper Fighting",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "July 11, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Street Hockey '95",
          developer: "GTE Interactive Media",
          publisher: "GTE Interactive Media",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Street Racer",
          developer: "Vivid Image",
          publisher: "Ubisoft",
          release_year: "December 2, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Strike Gunner S.T.G.\n•Super Strike GunnerEU",
          developer: "Athena",
          publisher: "NTVIC",
          release_year: "March 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Stunt Race FX\n•Wild TraxJP",
          developer: "Nintendo/Argonaut Games",
          publisher: "Nintendo",
          release_year: "June 4, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sugoi Hebereke",
          developer: "Sunsoft",
          publisher: "Sunsoft",
          release_year: "March 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sugoro Quest ++ Dicenics",
          publisher: "Technos Japan",
          release_year: "December 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sugoroku Ginga Senki",
          developer: "Bottom Up",
          publisher: "Bottom Up",
          release_year: "December 19, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sun Sport Fishing: Keiryuu-Ou",
          developer: "Lenar",
          publisher: "Imagineer",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sunset Riders",
          developer: "Konami",
          publisher: "Konami (NA)\nPalcom Software (EU)",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Supapoon",
          developer: "Now Production",
          publisher: "Yutaka",
          release_year: "October 6, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Supapoon DX",
          developer: "Now Production",
          publisher: "Yutaka",
          release_year: "May 31, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Adventure Island\n•Takahashi Meijin no Daibōken JimaJP",
          developer: "Produce!",
          publisher: "Hudson Soft",
          release_year: "January 11, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Adventure Island II\n•Takahashi Meijin no Daibōken Jima TsūJP",
          developer: "Make Software",
          publisher: "Hudson Soft",
          release_year: "January 3, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Air Diver 2",
          developer: "Copya Systems",
          publisher: "Asmik Ace Entertainment",
          release_year: "March 3, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Alfred Chicken",
          developer: "Twilight Games",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Super Aquatic Games Starring the Aquabats\n•James Pond's Crazy SportsEU",
          developer: "Millennium Interactive",
          publisher: "Seika Corporation",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Back to the Future II",
          developer: "Invictus[citation needed]",
          publisher: "Toshiba EMI",
          release_year: "July 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Baken Ou '95",
          publisher: "Techiku",
          release_year: "March 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Baseball 2020",
          developer: "Monolith Corporation",
          publisher: "Tradewest",
          release_year: "March 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Baseball Simulator 1.000\n•Super Ultra BaseballJP",
          developer: "Culture Brain",
          publisher: "Culture Brain",
          release_year: "July 12, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bases Loaded\n•Super Professional BaseballJP",
          developer: "Tose",
          publisher: "Jaleco",
          release_year: "May 17, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bases Loaded 2 †\n•Super 3D BaseballJP\n•Korean Pro BaseballKR",
          developer: "Tose",
          publisher: "Jaleco",
          release_year: "August 7, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bases Loaded 3: License to Steal\n•Super Moero!! Pro YakyuuJP",
          developer: "Tose",
          publisher: "Jaleco",
          release_year: "December 23, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Batter Up\n•Super FamistaJP",
          developer: "Namco",
          publisher: "Namco",
          release_year: "March 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Battleship",
          developer: "World Builders Synergistic",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Garry Kitchen's Super Battletank: War in the Gulf\n•Super BattletankEU",
          developer: "Imagineering",
          publisher: "Absolute Entertainment",
          release_year: "April 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Battletank 2",
          developer: "Absolute Entertainment",
          publisher: "Absolute Entertainment",
          release_year: "March 27, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bikkuriman",
          developer: "Tom Create",
          publisher: "Bec",
          release_year: "January 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Birdie Rush",
          developer: "Data East",
          publisher: "Data East",
          release_year: "March 6, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Black Bass",
          developer: "Starfish",
          publisher: "Hot-B",
          release_year: "December 4, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Black Bass 3",
          publisher: "Starfish",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bomberman: Panic Bomber W",
          developer: "Raizing",
          publisher: "Hudson Soft",
          release_year: "March 1, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bomberman\n•Sūpā BonbāmanJP",
          developer: "Produce",
          publisher: "Hudson Soft",
          release_year: "April 28, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bomberman 2\n•Sūpā Bonbāman TsūJP",
          developer: "Produce",
          publisher: "Hudson Soft",
          release_year: "April 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bomberman 3\n•Sūpā Bonbāman SurīJP",
          developer: "Hudson Soft",
          publisher: "Hudson Soft",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bomberman 4",
          developer: "Produce",
          publisher: "Hudson Soft",
          release_year: "April 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bomberman 5",
          developer: "Hudson Soft",
          publisher: "Hudson Soft",
          release_year: "February 28, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bombliss",
          developer: "TOSE",
          publisher: "Bullet Proof Software",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bonk\n•Super B.C. KidEU\n•Chō GenjinJP",
          developer: "A.I. Company Ltd.",
          publisher: "Hudson Soft",
          release_year: "July 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Bowling",
          developer: "Athena",
          publisher: "Technōs Japan",
          release_year: "July 3, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Buster Bros. †\n•Super PangEU",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "August 7, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Caesars Palace",
          developer: "Illusion Softworks",
          publisher: "Virgin Interactive",
          release_year: "October 21, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Casino 2",
          developer: "OeRSTED",
          publisher: "Coconuts Japan",
          release_year: "July 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Castles",
          publisher: "Victor Interactive Software",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Castlevania IV\n•Akumajou DraculaJP",
          developer: "Konami",
          publisher: "Konami",
          release_year: "October 31, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Chase H.Q.\n•Super H.Q. Criminal ChaserJP",
          developer: "Taito",
          publisher: "Taito",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Chinese Fighter",
          publisher: "Culture Brain",
          release_year: "January 3, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Chinese World 2: Uchuu Ichibuto Daikai",
          publisher: "Culture Brain",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Chinese World 3",
          publisher: "Culture Brain",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Conflict",
          developer: "Vic Tokai",
          publisher: "Vic Tokai",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Dany",
          developer: "Cryo Interactive",
          publisher: "Virgin Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Double Dragon\n•Return of Double DragonJP",
          developer: "Technōs Japan",
          publisher: "Tradewest",
          release_year: "October 16, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Double Yakuman",
          publisher: "VAP",
          release_year: "April 1, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Double Yakuman II",
          publisher: "VAP",
          release_year: "March 14, 1997",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Drift Out",
          developer: "Dragnet",
          publisher: "Visco Corporation",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Dropzone\n•Archer MacLean's Super Dropzone",
          developer: "Eurocom",
          publisher: "Psygnosis",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Earth Defense Force",
          developer: "Jaleco",
          publisher: "Jaleco",
          release_year: "October 25, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Dunk Star",
          developer: "C-Lab",
          publisher: "Sammy Corporation",
          release_year: "April 28, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super F1 Circus",
          developer: "Cream",
          publisher: "Nichibutsu",
          release_year: "July 24, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super F1 Circus 2",
          developer: "Cream",
          publisher: "Nichibutsu",
          release_year: "July 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super F1 Circus 3",
          developer: "Cream",
          publisher: "Nichibutsu",
          release_year: "July 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super F1 Circus Gaiden",
          developer: "Cream",
          publisher: "Nichibutsu",
          release_year: "July 7, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super F1 Circus Limited",
          developer: "Cream",
          publisher: "Nichibutsu",
          release_year: "October 23, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super F1 Hero",
          developer: "Aprinet",
          publisher: "Varie",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Famicom Wars",
          developer: "Intelligent Systems",
          publisher: "Nintendo",
          release_year: "May 1, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Family Circuit",
          developer: "Game Studio",
          publisher: "Namco",
          release_year: "October 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Family Gelände",
          publisher: "Namco",
          release_year: "February 1, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Famista 2",
          publisher: "Namco",
          release_year: "March 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Famista 3",
          publisher: "Namco",
          release_year: "March 4, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Famista 4",
          publisher: "Namco",
          release_year: "March 3, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Famista 5",
          publisher: "Namco",
          release_year: "February 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Final Match Tennis",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "August 12, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Fire Pro Wrestling",
          developer: "Human Club",
          publisher: "Human Entertainment",
          release_year: "December 20, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Fire Pro Wrestling: Queen's Special",
          developer: "Human Club",
          publisher: "Human Entertainment",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Fire Pro Wrestling 2",
          developer: "Human Club",
          publisher: "Human Entertainment",
          release_year: "December 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Fire Pro Wrestling 3 Easy Type",
          developer: "Human Club",
          publisher: "Human Entertainment",
          release_year: "February 4, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Fire Pro Wrestling 3 Final Bout",
          developer: "Human Club",
          publisher: "Human Entertainment",
          release_year: "December 28, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Fire Pro Wrestling Special",
          developer: "Human Club",
          publisher: "Human Entertainment",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Fire Pro Wrestling X",
          developer: "Human Club",
          publisher: "Human Entertainment",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Fire Pro Wrestling X Premium",
          developer: "Human Club",
          publisher: "Human Entertainment",
          release_year: "March 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Fishing: Big Fight",
          developer: "Geo Factory",
          publisher: "Naxat Soft",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Formation Soccer 94",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "June 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Formation Soccer 95: della Serie A",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Formation Soccer 95: della Serie A: UCC Xaqua",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "March 31, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Formation Soccer 96: World Club Edition",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "March 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Formation Soccer II",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "June 11, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Ghouls 'n Ghosts †\n•Chō MakaimuraJP",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "October 4, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Goal! 2\n•Takeda Nobuhiro no Super Cup SoccerJP",
          developer: "Tose",
          publisher: "Jaleco",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Godzilla\n•Chou-GodzillaJP",
          developer: "Toho",
          publisher: "Toho",
          release_year: "December 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Gomoku Narabe Renju",
          developer: "Naxat Soft",
          publisher: "Naxat Soft",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Gomoku Shougi",
          publisher: "Nichibutsu",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Gussun Oyoyo",
          developer: "Kan's",
          publisher: "Banpresto",
          release_year: "August 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Gussun Oyoyo 2",
          developer: "Kan's",
          publisher: "Banpresto",
          release_year: "May 24, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Hanafuda",
          developer: "Use",
          publisher: "I'Max",
          release_year: "August 5, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Hanafuda 2",
          developer: "Use",
          publisher: "I'Max",
          release_year: "October 20, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super High Impact",
          developer: "Iguana Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "July 9, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Hockey '94",
          publisher: "Yonezawa PR21",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Honmei: G1 Seiha",
          publisher: "Nichibutsu",
          release_year: "February 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Ice Hockey\n•Super Hockey '94JP",
          developer: "Opera House",
          publisher: "Sunsoft",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Igo Go Ou",
          publisher: "Naxat Soft",
          release_year: "April 8, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Indy Champ",
          developer: "Opensystem",
          publisher: "Forum",
          release_year: "April 1, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super International Cricket",
          developer: "Beam Software",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super James Pond\n•Super James Pond IIEU",
          developer: "American Softworks",
          publisher: "American Softworks",
          release_year: "July 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Jangou",
          publisher: "Victor Interactive Software",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Jinsei Game",
          developer: "Takara",
          publisher: "Takara",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Jinsei Game 2",
          developer: "Takara",
          publisher: "Takara",
          release_year: "September 8, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Jinsei Game 3",
          developer: "Takara",
          publisher: "Takara",
          release_year: "November 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Keiba",
          publisher: "I'Max",
          release_year: "August 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Keiba 2",
          developer: "Tomcat System",
          publisher: "I'Max",
          release_year: "May 19, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Keirin",
          developer: "Betop",
          publisher: "I'Max",
          release_year: "July 14, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Kokou Yakyuu: Ichikyuu Jikkon",
          publisher: "I'Max",
          release_year: "August 5, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Kyousouba: Kaze no Sylphid",
          publisher: "King Records",
          release_year: "October 8, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Kyotei",
          publisher: "Nichibutsu",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Kyotei 2",
          publisher: "Nichibutsu",
          release_year: "April 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Kyuukyoku Harikiri Stadium",
          publisher: "Taito",
          release_year: "December 3, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Kyuukyoku Harikiri Stadium 2",
          developer: "Now Production",
          publisher: "Taito",
          release_year: "August 12, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Loopz",
          developer: "Graffiti",
          publisher: "Imagineer",
          release_year: "March 4, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Mad Champ",
          developer: "Givro",
          publisher: "Tsukuda Original",
          release_year: "March 4, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Mahjong",
          publisher: "I'Max",
          release_year: "August 22, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Mahjong 2: Honkaku 4 Nin Uchi!",
          publisher: "I'Max",
          release_year: "December 2, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Mahjong 3: Karakuchi",
          publisher: "I'Max",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Mahjong Taikai",
          publisher: "Koei",
          release_year: "September 12, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Mario All-Stars †\n•Super Mario CollectionJP",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "July 14, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Mario Kart †",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "August 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Mario RPG: Legend of the Seven Stars †",
          developer: "Square",
          publisher: "Nintendo",
          release_year: "March 9, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Mario World †",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "November 21, 1990",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Mario World 2: Yoshi's Island †\n•Super Mario: Yoshi IslandJP",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "August 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Metroid",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "March 19, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Momotarou Dentetsu DX",
          developer: "Make",
          publisher: "Hudson Soft",
          release_year: "December 8, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Momotarou Dentetsu II",
          developer: "Make",
          publisher: "Hudson Soft",
          release_year: "August 7, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Momotarou Dentetsu III",
          developer: "Make",
          publisher: "Hudson Soft",
          release_year: "December 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Morph",
          developer: "Millennium Interactive",
          publisher: "Sony Imagesoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Naxat Open: Golf de Shoubu da! Dorabocchan",
          developer: "Kuusou Kagaku",
          publisher: "Naxat Soft",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Nazo Puyo: Ruruu no Ruu",
          developer: "Compile",
          publisher: "Banpresto",
          release_year: "May 26, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Nazo Puyo Tsuu: Ruruu no Tetsuwan Hanjouki",
          developer: "Compile",
          publisher: "Compile",
          release_year: "June 28, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Nichibutsu Mahjong",
          publisher: "Nichibutsu",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Nichibutsu Mahjong 2: Zenkoku Seiha Hen",
          publisher: "Nichibutsu",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Nichibutsu Mahjong 3: Yoshimoto Gekijou Hen",
          publisher: "Nichibutsu",
          release_year: "July 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Nichibutsu Mahjong 4: Kiso Kenkyuu Hen",
          publisher: "Nichibutsu",
          release_year: "September 27, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Ninja Boy\n•Super Chinese WorldJP",
          developer: "Culture Brain",
          publisher: "Culture Brain",
          release_year: "December 28, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Ninja-kun",
          publisher: "Jaleco",
          release_year: "August 5, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Nova\n•Darius ForceJP",
          developer: "Taito/Act Japan",
          publisher: "Taito",
          release_year: "September 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Off Road",
          developer: "Software Creations",
          publisher: "Tradewest",
          release_year: "July 3, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Off Road: The Baja\n•Super 4WD: The BajaJP",
          developer: "Software Creations",
          publisher: "Tradewest",
          release_year: "June 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Okuman Chouja Game",
          publisher: "Takara",
          release_year: "November 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Ōzumō: Netsusen Daiichiban",
          publisher: "Namco",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Pachi-Slot Mahjong",
          developer: "Syscom",
          publisher: "Nichibutsu",
          release_year: "April 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Pachinko",
          developer: "Betop",
          publisher: "I'Max",
          release_year: "July 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Pachinko Taisen",
          publisher: "Banpresto",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Pinball: Behind the Mask",
          developer: "KaZe / Meldac",
          publisher: "Nintendo",
          release_year: "January 8, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Pinball II: Amazing Odyssey",
          developer: "KAZe",
          publisher: "Meldac",
          release_year: "March 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Play Action Football",
          developer: "Tose",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Power League",
          developer: "Now Production",
          publisher: "Hudson Soft",
          release_year: "August 6, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Power League 2",
          developer: "Now Production",
          publisher: "Hudson Soft",
          release_year: "August 3, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Power League 3",
          developer: "Now Production",
          publisher: "Hudson Soft",
          release_year: "August 10, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Power League 4",
          developer: "Now Production",
          publisher: "Hudson Soft",
          release_year: "August 9, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Professional Baseball II",
          developer: "TOSE",
          publisher: "Jaleco",
          release_year: "August 7, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Punch-Out!!",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "March 1, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Putty\n•Putty MoonJP",
          developer: "System 3",
          publisher: "U.S. Gold",
          release_year: "July 30, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Puyo Puyo",
          developer: "Compile",
          publisher: "Banpresto",
          release_year: "December 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Puyo Puyo Tsuu",
          developer: "Compile",
          publisher: "Compile",
          release_year: "December 8, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Puyo Puyo Tsuu Remix",
          developer: "Compile",
          publisher: "Compile",
          release_year: "March 8, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super R.B.I. Baseball",
          developer: "Gray Matter",
          publisher: "Time Warner Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super R-Type\n•Sūpā Āru TaipuJP",
          developer: "Irem",
          publisher: "Irem",
          release_year: "July 13, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Real Mahjong PIV",
          developer: "Affect",
          publisher: "SETA Corporation",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Real Mahjong PV: Paradise: All-Star 4 Nin Uchi",
          developer: "SETA Corporation",
          publisher: "SETA Corporation",
          release_year: "April 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Robot Taisen EX",
          developer: "Winkysoft",
          publisher: "Banpresto",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Robot Taisen Gaiden: Masou Kishin: The Lord of Elemental",
          developer: "Winkysoft",
          publisher: "Banpresto",
          release_year: "March 22, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Rugby",
          developer: "TOSE",
          publisher: "Tonkin House",
          release_year: "October 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Sangokushi",
          developer: "Koei",
          publisher: "Koei",
          release_year: "August 12, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Scope 6\n•Nintendo Scope 6EU",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "June 21, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Shougi",
          publisher: "I'Max",
          release_year: "June 19, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Shougi 2",
          publisher: "I'Max",
          release_year: "June 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Shougi 3: Kitaihei",
          developer: "Gaibrain",
          publisher: "I'Max",
          release_year: "December 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Slam Dunk\n•Magic Johnson no Super Slam DunkJP",
          developer: "Virgin Interactive",
          publisher: "Virgin Interactive",
          release_year: "July 16, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Slap Shot",
          developer: "Ringler Studios",
          publisher: "Virgin Interactive",
          release_year: "August 20, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Smash TV",
          developer: "Beam Software",
          publisher: "Acclaim Entertainment",
          release_year: "March 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Soccer †\n•Super Formation SoccerJP",
          developer: "Human Entertainment",
          publisher: "Nintendo",
          release_year: "December 13, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Soccer Champ\n•Euro Football ChampEU\n•Hat Trick HeroJP",
          developer: "Taito",
          publisher: "Taito",
          release_year: "March 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Solitaire\n•Trump IslandJP",
          developer: "Extreme Entertainment Group",
          publisher: "Extreme Entertainment Group",
          release_year: "July 23, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Soukoban",
          developer: "Thinking Rabbit",
          publisher: "Pack-In-Video",
          release_year: "January 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Star Wars",
          developer: "Sculptured Software",
          publisher: "JVC / LucasArts",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Star Wars: The Empire Strikes Back",
          developer: "Sculptured Software",
          publisher: "JVC / LucasArts",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Star Wars: Return of the Jedi",
          developer: "Sculptured Software",
          publisher: "JVC / LucasArts",
          release_year: "June 23, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Street Fighter II: The New Challengers †",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "June 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Strike Eagle\n•F-15 Super Strike EagleJP",
          developer: "MicroProse",
          publisher: "MicroProse",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Tekkyuu Fight!",
          developer: "Metro",
          publisher: "Banpresto",
          release_year: "September 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Tennis\n•Super Tennis World CircuitJP",
          developer: "Tokyo Shoseki",
          publisher: "Nintendo",
          release_year: "August 30, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Tetris 2 + Bombliss",
          developer: "TOSE",
          publisher: "Bullet Proof Software",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Tetris 2 + Bombliss: Gentei Han",
          developer: "TOSE",
          publisher: "Bullet Proof Software",
          release_year: "January 21, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Tetris 3",
          developer: "TOSE",
          publisher: "Bullet Proof Software",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Troll Islands",
          developer: "Kemco",
          publisher: "American Softworks",
          release_year: "March 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Trump Collection",
          publisher: "Bottom Up",
          release_year: "April 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Trump Collection 2",
          publisher: "Bottom Up",
          release_year: "July 19, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Tsume Shougi 1000",
          publisher: "Bottom Up",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Turrican",
          developer: "Factor 5",
          publisher: "Seika Corporation",
          release_year: "September 3, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Turrican 2",
          developer: "Factor 5",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Ultra Baseball 2",
          publisher: "Culture Brain",
          release_year: "July 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Uno",
          publisher: "Tomy Corporation",
          release_year: "November 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super V.G.",
          developer: "TGL",
          publisher: "TGL",
          release_year: "July 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Valis IV\n•Red Moon Rising MaidenJP",
          developer: "Telenet Japan",
          publisher: "Atlus",
          release_year: "February 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Volley II",
          developer: "Video System",
          publisher: "Video System",
          release_year: "December 25, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Wagyan Land",
          developer: "Nova Games",
          publisher: "Namco",
          release_year: "December 13, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Wagyan Land 2",
          developer: "Nova Games",
          publisher: "Namco",
          release_year: "March 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Widget",
          developer: "Atlus",
          publisher: "Atlus",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Wrestle Angels",
          publisher: "Imagineer",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Yakyuu Michi",
          developer: "Nippon Create",
          publisher: "Banpresto",
          release_year: "January 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Zugan: Hakotenjou Kara no Shoutaijou",
          publisher: "Electronic Arts Victor",
          release_year: "February 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Super Zugan 2: Tsukanpo Fighter",
          publisher: "J-Wing",
          release_year: "December 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sutobasu Yarō Shō: 3 on 3 Basketball",
          developer: "KID",
          publisher: "B-AI",
          release_year: "February 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sutte Hakkun",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "June 25, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Suzuka 8 Hours\n•Suzuka Eito AwāzuJP",
          developer: "Arc System Works",
          publisher: "Namco",
          release_year: "October 15, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "SWAT Kats: The Radical Squadron",
          developer: "AIM",
          publisher: "Hudson Soft",
          release_year: "June 9, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sword World SFC",
          publisher: "T&E Soft",
          release_year: "August 6, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Sword World SFC 2",
          publisher: "T&E Soft",
          release_year: "July 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Syndicate",
          developer: "Bullfrog Productions",
          publisher: "Ocean Software",
          release_year: "May 19, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Syvalion\n•SaibarionJP",
          developer: "Taito",
          publisher: "Toshiba EMI JP, JVC NA/EU",
          release_year: "July 24, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "T2: The Arcade Game",
          developer: "Probe Entertainment",
          publisher: "LJN",
          release_year: "1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Table Game Daishuugou! Shougi Mahjong Hanafuda",
          publisher: "Varie",
          release_year: "July 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tactical Soccer",
          developer: "Electronic Arts Victor",
          publisher: "Electronic Arts Victor",
          release_year: "April 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tactics Ogre: Let Us Cling Together",
          developer: "Quest Corporation",
          publisher: "Atlus",
          release_year: "October 6, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tadaima Yuusha Boshuuchuu Okawari",
          developer: "Human Entertainment",
          publisher: "Human Entertainment",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Taekwon-Do †",
          developer: "Human Club",
          publisher: "Human Entertainment",
          release_year: "June 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Taikou Rishinden",
          publisher: "Koei",
          release_year: "April 7, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Taikyoku Igo: Goliath",
          publisher: "Bullet Proof Software",
          release_year: "May 14, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Taikyoku Igo: Idaten",
          publisher: "Bullet Proof Software",
          release_year: "December 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Take Yutaka G1 Memory",
          developer: "Gaps",
          publisher: "Naxat Soft",
          release_year: "July 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Takeda Nobuhiro no Super League Soccer",
          developer: "TOSE",
          publisher: "Jaleco",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Takemiya Masaki Kudan no Igo Taishou",
          publisher: "KSS",
          release_year: "August 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tales of Phantasia",
          developer: "Wolf Team",
          publisher: "Namco",
          release_year: "December 15, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tamagotchi Town",
          developer: "Marigul",
          publisher: "Bandai",
          release_year: "May 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tarot Mystery",
          developer: "Ukiyotei",
          publisher: "Visit",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Taz-Mania",
          developer: "Visual Concepts",
          publisher: "Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tecmo Super Baseball",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "October 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tecmo Super Bowl",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tecmo Super Bowl II: Special Edition",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "December 20, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tecmo Super Bowl III: Final Edition",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tecmo Super NBA Basketball",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "December 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Teenage Mutant Ninja Turtles IV: Turtles in Time †\n•Teenage Mutant Hero Turtles IV: Turtles in TimeEU",
          developer: "Konami",
          publisher: "Konami",
          release_year: "July 24, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Teenage Mutant Ninja Turtles: Tournament Fighters\n•Teenage Mutant Hero Turtles: Tournament FightersEU\n•Teenage Mutant Ninja Turtles: Mutant WarriorsJP",
          developer: "Konami",
          publisher: "Konami",
          release_year: "December 3, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tekichuu Keiba Juku",
          publisher: "Banpresto",
          release_year: "January 19, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tenchi Muyou! Game Hen",
          developer: "Banpresto",
          publisher: "Banpresto",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tenchi o Kurau: Sangokushi Gunyuuden",
          publisher: "Capcom",
          release_year: "August 11, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tengai Makyou Zero",
          developer: "Red Company",
          publisher: "Hudson",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tengai Makyou Zero: Shōnen Jump no Shou",
          developer: "Red Company",
          publisher: "Hudson",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tenshi no Uta: Shiroki Tsubasa no Inori",
          publisher: "Nippon Telenet",
          release_year: "July 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Terminator",
          developer: "Mindscape",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Terminator 2: Judgment Day\n•T2: The Arcade GameJP",
          developer: "Bits Studios",
          publisher: "LJN",
          release_year: "February 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Terranigma\n•Tenchi SōzōJP",
          developer: "Quintet",
          publisher: "Nintendo",
          release_year: "October 20, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tetris & Dr. Mario †",
          developer: "Tose",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tetris 2\n•Tetris FlashJP",
          developer: "Bulletproof Software",
          publisher: "Nintendo",
          release_year: "July 8, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tetris Attack\n•Panel de PonJP",
          developer: "Intelligent Systems",
          publisher: "Nintendo",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tetris Battle Gaiden",
          developer: "Bullet Proof Software",
          publisher: "Bullet Proof Software",
          release_year: "December 24, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tetsuwan Atom",
          developer: "Minato Giken",
          publisher: "Zamuse",
          release_year: "February 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Theme Park",
          developer: "Bullfrog Productions",
          publisher: "Electronic Arts",
          release_year: "December 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Thomas the Tank Engine & Friends",
          developer: "Software Creations",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Thoroughbred Breeder",
          developer: "Hect",
          publisher: "Hect",
          release_year: "August 27, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Thoroughbred Breeder II",
          developer: "Hect",
          publisher: "Hect",
          release_year: "June 8, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Thoroughbred Breeder III",
          developer: "Hect",
          publisher: "Hect",
          release_year: "October 18, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Thunder Spirits",
          developer: "Technosoft",
          publisher: "Seika Corporation",
          release_year: "December 27, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Thunderbirds: Kokusai Kyuujotai Juudou Seyo!",
          developer: "Nova Games",
          publisher: "Cobra Team",
          release_year: "September 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Tick",
          developer: "Software Creations",
          publisher: "Fox Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Time Slip",
          developer: "Sales Curve Interactive",
          publisher: "Vic Tokai",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Time Trax",
          developer: "Malibu Games",
          publisher: "Malibu Games",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Timecop",
          developer: "Cryo Interactive",
          publisher: "JVC",
          release_year: "February 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Timon & Pumbaa's Jungle Games",
          developer: "Tiertex Design Studios",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tin Star",
          developer: "Software Creations",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tintin in Tibet",
          developer: "Infogrames",
          publisher: "Infogrames",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tiny Toon Adventures: Buster Busts Loose! †",
          developer: "Konami",
          publisher: "Konami",
          release_year: "December 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tiny Toon Adventures: Wacky Sports Challenge\n•Tiny Toon Adventures: Wild & Wacky SportsEU\n•Tiny Toon Adventures: Dotabata DaiundoukaiJP",
          developer: "Konami",
          publisher: "Konami",
          release_year: "September 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "TKO Super Championship Boxing\n•Kentou-Ou World ChampionJP",
          developer: "Sting Entertainment",
          publisher: "Sofel",
          release_year: "April 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "TNN Bass Tournament of Champions\n•Larry Nixon's Super Bass FishingJP",
          developer: "American Softworks",
          publisher: "American Softworks",
          release_year: "September 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Todd McFarlane's Spawn: The Video Game",
          developer: "Ukiyotei",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tokimeki Memorial: Densetsu no Ki no Shita de",
          developer: "Konami",
          publisher: "Konami",
          release_year: "February 9, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tokoro's Mahjong",
          developer: "Syscom",
          publisher: "Vic Tokai",
          release_year: "September 23, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tom and Jerry",
          developer: "Riedel Software Productions",
          publisher: "Hi Tech Expressions",
          release_year: "June 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tommy Moe's Winter Extreme: Skiing & Snowboarding\n•Val d'Isere ChampionshipEU\n•Ski Paradise with SnowboardJP",
          developer: "Loriciel",
          publisher: "Electro Brain",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tony Meola's Sidekicks Soccer\n•Super CopaBR\n•World SoccerEU\n•Ramos' World Wide SoccerJP",
          developer: "Sculptured Software",
          publisher: "Electro Brain",
          release_year: "February 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Top Gear\n•Top RacerJP",
          developer: "Gremlin Interactive",
          publisher: "Kemco",
          release_year: "March 27, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Top Gear 2\n•Top Racer 2JP",
          developer: "Gremlin Interactive",
          publisher: "Kemco",
          release_year: "December 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Top Gear 3000\n•The Planet's Champ TG3000JP",
          developer: "Gremlin Interactive",
          publisher: "Kemco",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Top Management II",
          publisher: "Koei",
          release_year: "February 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Toride",
          developer: "Metro",
          publisher: "Takara",
          release_year: "December 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Torneko no Daibōken: Fushigi no Dungeon",
          developer: "Chunsoft",
          publisher: "Chunsoft",
          release_year: "September 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Total Carnage",
          developer: "Black Pearl Software",
          publisher: "Malibu Games",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tottemo! Luckyman: Lucky Cookie Roulette Assault!!",
          publisher: "Bandai",
          release_year: "June 30, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Touge Densetsu: Saisoku Battle",
          developer: "Lenar",
          publisher: "Bullet Proof Software",
          release_year: "March 15, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tower Dream",
          developer: "C-Lab",
          publisher: "ASCII",
          release_year: "October 25, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Toy Story\n•Disney's Toy Story",
          developer: "Traveller's Tales",
          publisher: "Disney Interactive",
          release_year: "April 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Toys",
          developer: "Imagineering",
          publisher: "Absolute Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Traverse: Starlight & Prairie",
          developer: "Pandora Box",
          publisher: "Banpresto",
          release_year: "June 28, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Treasure Hunter G",
          developer: "Sting Entertainment",
          publisher: "Square",
          release_year: "May 24, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Trinea",
          developer: "Japan Art Media",
          publisher: "Yanoman",
          release_year: "October 1, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Troddlers",
          developer: "Atod",
          publisher: "Seika Corporation",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Troy Aikman NFL Football",
          developer: "Leland Interactive Media",
          publisher: "Tradewest",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "True Golf: Wicked 18\n•Devil's CourseJP",
          developer: "T&E Software",
          publisher: "Bulletproof Software",
          release_year: "March 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "True Golf Classics: Pebble Beach Golf Links\n•Pebble Beach no HatouJP",
          developer: "T&E Software",
          publisher: "T&E Software",
          release_year: "April 10, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "True Golf Classics: Waialae Country Club\n•New 3D Golf Simulation: Waialae no KisekiJP",
          developer: "T&E Software",
          publisher: "T&E Software",
          release_year: "September 18, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "True Lies",
          developer: "Beam Software",
          publisher: "LJN",
          release_year: "April 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tsukikomori",
          developer: "Pandora Box",
          publisher: "Banpresto",
          release_year: "March 1, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tsuppari Ōzumō: Risshin Shusse Hen",
          developer: "Tecmo",
          publisher: "Tecmo",
          release_year: "March 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tsuri Tarou",
          publisher: "Pack-In-Video",
          release_year: "July 8, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tsuyoshi Shikkari Shinasai: Taisen Puzzle-dama",
          publisher: "Konami",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Tuff E Nuff\n•Dead DanceJP",
          developer: "Jaleco",
          publisher: "Jaleco",
          release_year: "March 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Turf Hero",
          publisher: "Tecmo",
          release_year: "March 21, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Turf Memories",
          publisher: "Bec",
          release_year: "February 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Turn and Burn: No-Fly Zone\n•Super DogfightJP",
          developer: "Absolute Entertainment",
          publisher: "Absolute Entertainment",
          release_year: "June 24, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Twisted Tales of Spike McFang\n•Chō Makai Taisen!: DorabocchanJP",
          developer: "Red Entertainment",
          publisher: "Bulletproof Software",
          release_year: "March 19, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "U.N. Squadron †\n•Area 88JP",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "July 26, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Uchū no Kishi: Tekkaman Blade",
          developer: "A.I.",
          publisher: "Bec",
          release_year: "July 30, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Uchuu Race: Astro Go! Go!",
          developer: "KAZe",
          publisher: "Meldac",
          release_year: "February 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "UFO Kamen Yakisoban: Kettler no Kuroi Inbō",
          developer: "KID",
          publisher: "Den'Z",
          release_year: "October 14, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ugoku E Ver. 2.0: Aryol",
          publisher: "Altron",
          release_year: "August 5, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultima: Kyouryuu Teikoku",
          developer: "Origin Systems",
          publisher: "Pony Canyon",
          release_year: "July 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultima: Runes of Virtue II\n•Ultima Gaiden: Kuro Kishi no InbouJP",
          developer: "Origin Systems",
          publisher: "FCI",
          release_year: "June 17, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultima VI: The False Prophet",
          developer: "Infinity Co., Ltd",
          publisher: "FCI",
          release_year: "April 3, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultima VII: The Black Gate",
          developer: "Origin Systems",
          publisher: "FCI",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultimate Fighter\n•Hiryuu no Ken S: Golden FighterJP",
          developer: "Culture Brain",
          publisher: "Culture Brain",
          release_year: "July 31, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultimate Mortal Kombat 3",
          developer: "Avalanche Software",
          publisher: "Williams Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultra Baseball Jitsumeiban",
          developer: "Culture Brain",
          publisher: "Micro Academy",
          release_year: "August 28, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultra Baseball Jitsumeiban 2",
          developer: "Culture Brain",
          publisher: "Culture Brain",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultra Baseball Jitsumeiban 3",
          developer: "Culture Brain",
          publisher: "Culture Brain",
          release_year: "October 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultra League: Moero! Soccer Daikessen!!",
          developer: "Tom Create",
          publisher: "Yutaka",
          release_year: "July 28, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultra Seven",
          developer: "BEC",
          publisher: "Bandai",
          release_year: "March 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ultraman: Towards the Future\n•Ultraman",
          developer: "Bec",
          publisher: "Bandai",
          release_year: "April 6, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Umi no Nushi Tsuri",
          publisher: "Pack-In-Video",
          release_year: "July 19, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Umi Tsuri Meijin: Suzuki Hen",
          developer: "A-Wave",
          publisher: "Electronic Arts Victor",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Umihara Kawase",
          developer: "Atelier Double",
          publisher: "TNN",
          release_year: "December 23, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Uncharted Waters\n•Daikoukai JidaiJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "August 5, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Uncharted Waters: New Horizons\n•Super Daikoukai JidaiJP",
          developer: "Koei",
          publisher: "Koei",
          release_year: "February 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Undercover Cops",
          developer: "Irem",
          publisher: "Varie",
          release_year: "March 9, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Uniracers\n•UnirallyEU",
          developer: "DMA Design",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Untouchables",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Urban Strike",
          developer: "Granite Bay Software",
          publisher: "Black Pearl Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ushio to Tora",
          publisher: "Yutaka",
          release_year: "January 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Utopia: The Creation of a Nation †",
          developer: "Jaleco",
          publisher: "Jaleco",
          release_year: "October 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Vegas Stakes\n•Las Vegas DreamJP",
          developer: "HAL Laboratory",
          publisher: "Nintendo",
          release_year: "1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Venom/Spider-Man: Separation Anxiety",
          developer: "Software Creations",
          publisher: "Acclaim Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Verne World",
          developer: "Dual",
          publisher: "Banpresto",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Virtual Bart",
          developer: "Sculptured Software",
          publisher: "Acclaim Entertainment",
          release_year: "September 30, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Virtual Soccer\n•J.League Super SoccerJP",
          developer: "Probe Entertainment",
          publisher: "Hudson Soft",
          release_year: "March 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Vortex",
          developer: "Argonaut Games",
          publisher: "Electro Brain",
          release_year: "December 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "VS. Collection",
          developer: "Bottom Up",
          publisher: "Bottom Up",
          release_year: "November 29, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wagyan Paradise",
          developer: "Namco",
          publisher: "Namco",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Waka Taka Ōzumō: Brothers Dream Match",
          developer: "Tomcat System",
          publisher: "Imagineer",
          release_year: "November 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Waku Waku Ski Wonder Spur",
          developer: "Human Club",
          publisher: "Human Entertainment",
          release_year: "January 13, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wally wo Sagase!",
          developer: "Natsu System",
          publisher: "Tomy",
          release_year: "February 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "War 2410",
          developer: "Advanced Productions",
          publisher: "Advanced Productions",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "War 3010: The Revolution",
          developer: "Advanced Productions",
          publisher: "Advanced Productions",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Waratte Iitomo! Tamorin Pick",
          publisher: "Athena",
          release_year: "April 28, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wario's Woods",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Warlock",
          developer: "Realtime Associates",
          publisher: "LJN",
          release_year: "May 26, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "WarpSpeed",
          developer: "Accolade",
          publisher: "Accolade",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Waterworld",
          developer: "Ocean Software",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wayne Gretzky and the NHLPA All-Stars",
          developer: "Time Warner Interactive",
          publisher: "Time Warner Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wayne's World",
          developer: "Gray Matter",
          publisher: "THQ",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "WCW SuperBrawl Wrestling",
          developer: "Beam Software",
          publisher: "FCI",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Weaponlord",
          developer: "Visual Concepts",
          publisher: "Namco NA, Ocean SoftwareEU",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wedding Peach",
          developer: "Shimada Kikaku",
          publisher: "KSS",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "We're Back! A Dinosaur's Story",
          developer: "Visual Concepts",
          publisher: "Hi Tech Expressions",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wheel of Fortune: Featuring Vanna White",
          developer: "Imagitec Design",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wheel of Fortune Deluxe!",
          developer: "Imagitec Design",
          publisher: "GameTek",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Where in the World Is Carmen Sandiego?",
          developer: "EA Canada",
          publisher: "Hi Tech Expressions",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Where in Time is Carmen Sandiego?",
          developer: "EA Canada",
          publisher: "Hi Tech Expressions",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Whirlo\n•Xandra no Daibōken: Valkyrie to no DeaiJP",
          developer: "Nova Games",
          publisher: "Namco",
          release_year: "July 23, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Whizz",
          developer: "Flair Software",
          publisher: "Titus Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wild Guns",
          developer: "Natsume",
          publisher: "Natsume",
          release_year: "August 12, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "WildSnake\n•Super SnakeyJP",
          developer: "Manley & Associates",
          publisher: "Spectrum HoloByte",
          release_year: "December 16, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Williams Arcade's Greatest Hits",
          developer: "Digital Eclipse Software",
          publisher: "Williams Entertainment",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wing Commander",
          developer: "Origin Systems",
          publisher: "Mindscape",
          release_year: "July 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wing Commander: The Secret Missions",
          developer: "Origin Systems",
          publisher: "Mindscape",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wings 2: Aces High\n•Blazing SkiesEU\n•Sky MissionJP",
          developer: "Malibu Interactive",
          publisher: "Namco",
          release_year: "September 29, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Winning Post",
          publisher: "Koei",
          release_year: "September 10, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Winning Post 2",
          publisher: "Koei",
          release_year: "March 18, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Winning Post 2: Program '96",
          publisher: "Koei",
          release_year: "October 5, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Winter Gold",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Winter Olympic Games: Lillehammer '94",
          developer: "U.S. Gold",
          publisher: "U.S. Gold",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wizap!: Ankoku no Ou",
          developer: "SAS Sakata",
          publisher: "ASCII",
          release_year: "September 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "The Wizard of Oz",
          developer: "SETA",
          publisher: "SETA",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wizardry Gaiden IV: Throb of the Demon's Heart",
          developer: "Access",
          publisher: "ASCII",
          release_year: "September 20, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wizardry I-II-III: Story of Llylgamyn",
          developer: "Gung-Ho!",
          publisher: "Media Factory",
          release_year: "June 1, 1999",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wizardry V: Heart of the Maelstrom",
          developer: "ASCII Entertainment",
          publisher: "Capcom",
          release_year: "November 20, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wizardry VI: Bane of the Cosmic Forge",
          developer: "Game Studio",
          publisher: "ASCII",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wolfchild",
          developer: "Core Design",
          publisher: "Virgin Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wolfenstein 3D",
          developer: "Imagineer",
          publisher: "Imagineer",
          release_year: "February 10, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wolverine: Adamantium Rage",
          developer: "Bits Studios",
          publisher: "LJN",
          release_year: "January 27, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wonder Project J: Kikai no Shōnen Pīno",
          developer: "Almanic",
          publisher: "Enix",
          release_year: "December 9, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wondrous Magic",
          developer: "System Sacom",
          publisher: "ASCII",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wordtris",
          developer: "Bulletproof Software",
          publisher: "Spectrum HoloByte",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "World Class Rugby",
          developer: "Audiogenic",
          publisher: "Imagineer",
          release_year: "January 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "World Class Rugby 2: Kokunai Gekitou Hen '93",
          developer: "Denton Designs",
          publisher: "Misawa",
          release_year: "January 7, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "World Cup USA '94",
          developer: "U.S. Gold",
          publisher: "U.S. Gold",
          release_year: "July 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "World Heroes",
          developer: "Sunsoft",
          publisher: "Sunsoft",
          release_year: "August 12, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "World Heroes 2",
          developer: "Saurus Co., Ltd",
          publisher: "Takara",
          release_year: "July 1, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "World League Soccer\n•Pro SoccerJP",
          developer: "ANCO",
          publisher: "Mindscape",
          release_year: "September 20, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "World Masters Golf",
          developer: "Arc Developments",
          publisher: "Virgin Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "World Soccer '94: Road to Glory\n•StrikerEU\n•Eric Cantona Football ChallengeFR",
          developer: "Rage Software",
          publisher: "Coconuts Japan (JP)\nAtlus (NA)\nElite Systems (EU)",
          release_year: "July 16, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Worms",
          developer: "Team17",
          publisher: "Ocean Software",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Wrecking Crew '98",
          publisher: "Nintendo",
          release_year: "May 23, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "WWF RAW",
          developer: "Sculptured Software",
          publisher: "LJN",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "WWF Royal Rumble",
          developer: "Sculptured Software",
          publisher: "LJN",
          release_year: "July 23, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "WWF Super WrestleMania",
          developer: "Sculptured Software",
          publisher: "LJN",
          release_year: "April 24, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "WWF WrestleMania: The Arcade Game",
          developer: "Iguana Entertainment",
          publisher: "Acclaim Entertainment",
          release_year: "March 1, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Xak: The Art of Visual Stage",
          developer: "Micro Cabin",
          publisher: "Sunsoft",
          release_year: "February 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Xardion",
          developer: "Asmik Ace Entertainment",
          publisher: "Asmik Ace Entertainment",
          release_year: "March 20, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "X-Kaliber 2097\n•Sword ManiacJP",
          developer: "Toshiba EMI",
          publisher: "Activision",
          release_year: "February 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "X-Men: Mutant Apocalypse",
          developer: "Capcom",
          publisher: "Capcom",
          release_year: "January 3, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "X-Terminator 2 Sauke",
          publisher: "GameTech",
          release_year: "January 1, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "X-Zone",
          developer: "Kemco",
          publisher: "Kemco",
          release_year: "August 27, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yadamon: Wonderland Dreams",
          developer: "Sting Entertainment",
          publisher: "Tokuma Shoten",
          release_year: "November 26, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yakouchuu",
          publisher: "Athena",
          release_year: "June 16, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yamato Takeru",
          developer: "Multimedia Intelligence Transfer",
          publisher: "Toho",
          release_year: "September 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "YamYam",
          developer: "Pandora Box",
          publisher: "Bandai",
          release_year: "February 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yokoyama Mitsuteru: Sangokushi",
          developer: "TOSE",
          publisher: "Angel",
          release_year: "June 26, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yokoyama Mitsuteru: Sangokushi 2",
          developer: "TOSE",
          publisher: "Angel",
          release_year: "December 29, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yokoyama Mitsuteru: Sangokushi Bangi: Sugoroku Eiyuuki",
          developer: "TOSE",
          publisher: "Angel",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yokozuna Monogatari",
          publisher: "KSS",
          release_year: "August 26, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yoshi no Kuruppon: Oven de Cookie",
          developer: "National Human Electronics",
          publisher: "Nintendo",
          release_year: "1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yoshi's Cookie\n•Yoshi no CookieJP",
          developer: "Bulletproof Software",
          publisher: "Bulletproof Software",
          release_year: "July 9, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yoshi's Safari\n•Yoshi's Road HuntingJP",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "July 14, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Youchien Senki Madara",
          developer: "Nexus Interact",
          publisher: "Datam Polystar",
          release_year: "January 26, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Young Merlin",
          developer: "Westwood Studios",
          publisher: "Virgin Interactive",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ys III: Wanderers from Ys",
          developer: "Tonkin House",
          publisher: "American Sammy",
          release_year: "June 21, 1991",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ys IV: Mask of the Sun",
          developer: "Tonkin House",
          publisher: "Tonkin House",
          release_year: "November 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ys V: Kefin, The Lost City of Sand",
          developer: "Nihon Falcom",
          publisher: "Nihon Falcom",
          release_year: "December 29, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Ys V Expert",
          developer: "Nihon Falcom",
          publisher: "Nihon Falcom",
          release_year: "March 22, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yū Yū Hakusho",
          developer: "Namco",
          publisher: "Namco",
          release_year: "December 22, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yū Yū Hakusho 2: Kakutō no Sho",
          developer: "Namco",
          publisher: "Namco",
          release_year: "June 10, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yū Yū Hakusho Final: Makai Saikyō Retsuden",
          developer: "Namco",
          publisher: "Namco",
          release_year: "March 24, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yū Yū Hakusho: Tokubetsu Hen",
          developer: "Namco",
          publisher: "Namco",
          release_year: "December 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yume Maboroshi no Gotoku",
          developer: "TOSE",
          publisher: "Intec",
          release_year: "December 17, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yume Meikyuu: Kigurumi Daibouken",
          developer: "Axes Art Amuse",
          publisher: "Hect",
          release_year: "April 15, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yuujin: Janjuu Gakuen",
          developer: "Varie",
          publisher: "Varie",
          release_year: "November 19, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yuujin: Janjuu Gakuen 2",
          developer: "Varie",
          publisher: "Varie",
          release_year: "November 18, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yuujin no Furi Furi Girls",
          developer: "U-Jin",
          publisher: "Planning Office Wada",
          release_year: "July 1, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Yuuyu no Quiz de GO! GO!",
          developer: "Taito",
          publisher: "Taito",
          release_year: "July 10, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zakuro no Aji",
          developer: "Imagineer",
          publisher: "Imagineer",
          release_year: "December 22, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zan II: Spirits",
          developer: "Wolf Team",
          publisher: "Telenet Japan",
          release_year: "May 29, 1992",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zan III Spirits",
          developer: "Wolf Team",
          publisher: "Wolf Team",
          release_year: "March 11, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zenkoku Juudan: Ultra Shinri Game",
          developer: "Ukiyotei",
          publisher: "Visit",
          release_year: "November 10, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zenkoku Kōkō Soccer",
          developer: "Affect",
          publisher: "Yojigen",
          release_year: "November 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zenkoku Kōkō Soccer 2",
          developer: "Nihon Syscom",
          publisher: "Yojigen",
          release_year: "November 17, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zenkoku Kōkō Soccer Senshuken '96",
          publisher: "Magical Company",
          release_year: "March 22, 1996",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zen-Nippon Pro Wrestling",
          developer: "Natsume",
          publisher: "Masaya",
          release_year: "July 16, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zen-Nippon Pro Wrestling Dash: Sekai Saikyō Tag",
          developer: "Natsume",
          publisher: "Masaya",
          release_year: "December 28, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zen-Nippon Pro Wrestling: Fight da Pon!",
          developer: "Natsume",
          publisher: "Masaya",
          release_year: "June 25, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zen-Nippon Pro Wrestling 2: 3-4 Budōkan",
          developer: "Natsume",
          publisher: "Masaya",
          release_year: "April 7, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zero the Kamikaze Squirrel",
          developer: "Iguana Entertainment",
          publisher: "Sunsoft",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zero4 Champ RR",
          developer: "Media Rings",
          publisher: "Media Rings",
          release_year: "July 22, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zero4 Champ RR-Z",
          developer: "Media Rings",
          publisher: "Media Rings",
          release_year: "November 25, 1995",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zico Soccer",
          developer: "Electronic Arts Victor",
          publisher: "Electronic Arts Victor",
          release_year: "March 4, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zig Zag Cat: Ostrich Club mo Oosawagi da",
          developer: "Opera House",
          publisher: "Den'Z",
          release_year: "June 24, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zoku: The Legend of Bishin",
          developer: "Magifact",
          publisher: "Magifact",
          release_year: "December 25, 1993",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zombies Ate My Neighbors\n•ZombiesEU",
          developer: "LucasArts",
          publisher: "Konami",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zoo-tto Mahjong!",
          developer: "Nintendo",
          publisher: "Nintendo",
          release_year: "July 1, 1998",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zool: Ninja of the \"Nth\" Dimension",
          developer: "Gremlin Interactive",
          publisher: "GameTek",
          release_year: "July 29, 1994",
          genre: '',
          console_id: 3,
          cover_picture: ''
      },
      {
          title: "Zoop",
          developer: "Hookstone Productions",
          publisher: "Viacom New Media",
          release_year: "Unreleased",
          genre: '',
          console_id: 3,
          cover_picture: ''
      }
    ]);
  };
