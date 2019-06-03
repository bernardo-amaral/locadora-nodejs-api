/* eslint-disable */
exports.seed = function (knex) {
  return knex('games').where('console_id', 2).del()
    .then(() => knex('games').insert([
      {
        game_id: 1,
        title: "10-Yard Fight",
        developer: "Irem",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 2,
        title: "1942",
        developer: "Micronics",
        publisher: "Capcom",
        release_year: "November 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 3,
        title: "1943: The Battle of Midway",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 4,
        title: "The 3-D Battles of WorldRunner",
        developer: "Square",
        publisher: "Acclaim Entertainment",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 5,
        title: "720°",
        developer: "Tengen",
        publisher: "Mindscape",
        release_year: "November 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 6,
        title: "8 Eyes",
        developer: "Thinking Rabbit",
        publisher: "Taxan",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 7,
        title: "Abadox",
        developer: "Natsume, I.T.L",
        publisher: "Milton Bradley Company",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 8,
        title: "The Addams Family",
        developer: "Ocean Software",
        publisher: "Ocean Software",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 9,
        title: "The Addams Family: Pugsley's Scavenger Hunt",
        developer: "Ocean Software",
        publisher: "Ocean Software",
        release_year: "August 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 10,
        title: "Advanced Dungeons & Dragons: DragonStrike",
        developer: "Westwood Studios",
        publisher: "FCI",
        release_year: "July 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 11,
        title: "Advanced Dungeons & Dragons: Heroes of the Lance",
        developer: "Natsume",
        publisher: "FCI",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 12,
        title: "Advanced Dungeons & Dragons: Hillsfar",
        developer: "Crosstalk",
        publisher: "FCI",
        release_year: "February 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 13,
        title: "Advanced Dungeons & Dragons: Pool of Radiance",
        developer: "Marionette, SRS",
        publisher: "FCI",
        release_year: "April 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 14,
        title: "Adventure Island",
        developer: "Hudson Soft",
        publisher: "Hudson Soft",
        release_year: "September 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 15,
        title: "Adventure Island II (NA)\nThe Adventure Island Part II (EU/AUS)",
        developer: "Now Production",
        publisher: "Hudson Soft",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 16,
        title: "Adventure Island 3",
        developer: "Now Production",
        publisher: "Hudson Soft",
        release_year: "September 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 17,
        title: "Adventures in the Magic Kingdom",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 18,
        title: "The Adventures of Bayou Billy",
        developer: "Konami",
        publisher: "Konami",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 19,
        title: "Adventures of Dino Riki",
        developer: "Hudson Soft",
        publisher: "Hudson Soft",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 20,
        title: "The Adventures of Gilligan's Island",
        developer: "Human Entertainment",
        publisher: "Bandai",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 21,
        title: "Adventures of Lolo",
        developer: "HAL Laboratory",
        publisher: "HAL America",
        release_year: "April 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 22,
        title: "Adventures of Lolo 2",
        developer: "HAL Laboratory",
        publisher: "HAL America",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 23,
        title: "Adventures of Lolo 3",
        developer: "HAL Laboratory",
        publisher: "HAL America",
        release_year: "November 21, 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 24,
        title: "The Adventures of Rad Gravity",
        developer: "Interplay Productions",
        publisher: "Activision",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 25,
        title: "The Adventures of Rocky and Bullwinkle and Friends",
        developer: "Radical Entertainment",
        publisher: "THQ",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 26,
        title: "Adventures of Tom Sawyer",
        developer: "Winkysoft",
        publisher: "SETA",
        release_year: "August 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 27,
        title: "Air Fortress",
        developer: "HAL Laboratory",
        publisher: "HAL America",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 28,
        title: "Airwolf",
        developer: "Beam Software",
        publisher: "Acclaim Entertainment",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 29,
        title: "Al Unser Jr.'s Turbo Racing (NA)\nTurbo Racing (EU)",
        developer: "Data East",
        publisher: "Data East",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 30,
        title: "Alfred Chicken",
        developer: "Twilight",
        publisher: "Mindscape",
        release_year: "February 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 31,
        title: "Alien3",
        developer: "Bits Studios",
        publisher: "LJN",
        release_year: "March 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 32,
        title: "All-Pro Basketball",
        developer: "Aicom",
        publisher: "Vic Tokai",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 33,
        title: "Alpha Mission",
        developer: "SNK",
        publisher: "SNK",
        release_year: "October 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 34,
        title: "Amagon",
        developer: "Aicom",
        publisher: "American Sammy",
        release_year: "April 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 35,
        title: "American Gladiators",
        developer: "Incredible Technologies",
        publisher: "GameTek",
        release_year: "October 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 36,
        title: "Anticipation",
        developer: "Rare",
        publisher: "Nintendo",
        release_year: "November 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 37,
        title: "Arch Rivals",
        developer: "Rare",
        publisher: "Acclaim Entertainment",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 38,
        title: "Archon",
        developer: "Free Fall Associates",
        publisher: "Activision",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 39,
        title: "Arkanoid",
        developer: "Taito",
        publisher: "Taito",
        release_year: "August 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 40,
        title: "Arkista's Ring",
        developer: "American Sammy",
        publisher: "American Sammy",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 41,
        title: "Asterix",
        developer: "Bit Managers",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 42,
        title: "Astyanax",
        developer: "Aicom",
        publisher: "Jaleco",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 43,
        title: "Athena",
        developer: "Micronics",
        publisher: "SNK",
        release_year: "August 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 44,
        title: "Athletic World",
        developer: "Human Entertainment",
        publisher: "Bandai",
        release_year: "July 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 45,
        title: "Attack of the Killer Tomatoes",
        developer: "Imagineering",
        publisher: "THQ",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 46,
        title: "Aussie Rules Footy",
        developer: "Beam Software",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 47,
        title: "Back to the Future",
        developer: "Beam Software",
        publisher: "LJN",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 48,
        title: "Back to the Future Part II & III",
        developer: "Beam Software",
        publisher: "LJN",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 49,
        title: "Bad Dudes (NA)\nBad Dudes vs. DragonNinja (EU)",
        developer: "Data East",
        publisher: "Data East",
        release_year: "August 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 50,
        title: "Bad News Baseball",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 51,
        title: "Bad Street Brawler",
        developer: "Beam Software",
        publisher: "Mindscape",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 52,
        title: "Balloon Fight",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "August 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 53,
        title: "Banana Prince",
        developer: "KID",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 54,
        title: "Bandai Golf: Challenge Pebble Beach",
        developer: "TOSE",
        publisher: "Bandai",
        release_year: "February 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 55,
        title: "Bandit Kings of Ancient China",
        developer: "Koei",
        publisher: "Koei",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 56,
        title: "Barbie",
        developer: "Imagineering",
        publisher: "Hi Tech Expressions",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 57,
        title: "The Bard's Tale",
        developer: "Atelier Double",
        publisher: "FCI",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 58,
        title: "Barker Bill's Trick Shooting",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "August 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 59,
        title: "Base Wars",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "June 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 60,
        title: "Baseball",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 61,
        title: "Baseball Simulator 1.000",
        developer: "Culture Brain",
        publisher: "Culture Brain",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 62,
        title: "Baseball Stars",
        developer: "SNK",
        publisher: "SNK",
        release_year: "July 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 63,
        title: "Baseball Stars 2",
        developer: "???",
        publisher: "Romstar",
        release_year: "July 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 64,
        title: "Bases Loaded",
        developer: "TOSE",
        publisher: "Jaleco",
        release_year: "July 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 65,
        title: "Bases Loaded II: Second Season",
        developer: "TOSE",
        publisher: "Jaleco",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 66,
        title: "Bases Loaded 3",
        developer: "TOSE",
        publisher: "Jaleco",
        release_year: "September 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 67,
        title: "Bases Loaded 4",
        developer: "TOSE",
        publisher: "Jaleco",
        release_year: "April 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 68,
        title: "Batman",
        developer: "Sunsoft",
        publisher: "Sunsoft",
        release_year: "February 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 69,
        title: "Batman Returns",
        developer: "Konami",
        publisher: "Konami",
        release_year: "January 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 70,
        title: "Batman: Return of the Joker",
        developer: "Sunsoft",
        publisher: "Sunsoft",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 71,
        title: "Battle Chess",
        developer: "Beam Software",
        publisher: "Data East",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 72,
        title: "The Battle of Olympus",
        developer: "Infinity",
        publisher: "Brøderbund",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 73,
        title: "Battle Tank",
        developer: "Imagineering",
        publisher: "Absolute Entertainment",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 74,
        title: "Battleship",
        developer: "Mindscape",
        publisher: "Mindscape",
        release_year: "September 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 75,
        title: "Battletoads",
        developer: "Rare",
        publisher: "Tradewest",
        release_year: "June 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 76,
        title: "Battletoads & Double Dragon",
        developer: "Rare",
        publisher: "Tradewest",
        release_year: "June 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 77,
        title: "Beetlejuice",
        developer: "Rare",
        publisher: "LJN",
        release_year: "May 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 78,
        title: "Best of the Best: Championship Karate",
        developer: "Movie Software",
        publisher: "Electro Brain",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 79,
        title: "Bigfoot",
        developer: "Beam Software Company",
        publisher: "Acclaim Entertainment",
        release_year: "August 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 80,
        title: "Bill & Ted's Excellent Video Game Adventure",
        developer: "Rocket Science Games",
        publisher: "LJN",
        release_year: "August 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 81,
        title: "Bill Elliott's NASCAR Challenge",
        developer: "Distinctive Software",
        publisher: "Konami",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 82,
        title: "Bionic Commando",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 83,
        title: "The Black Bass",
        developer: "Another",
        publisher: "Hot-B",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 84,
        title: "Blades of Steel",
        developer: "Konami",
        publisher: "Konami",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 85,
        title: "Blaster Master",
        developer: "Sunsoft",
        publisher: "Sunsoft",
        release_year: "November 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 86,
        title: "The Blue Marlin",
        developer: "Hot-B",
        publisher: "Hot-B",
        release_year: "July 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 87,
        title: "The Blues Brothers",
        developer: "Titus Software",
        publisher: "Titus Software",
        release_year: "September 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 88,
        title: "Bo Jackson Baseball",
        developer: "Beam Software",
        publisher: "Data East",
        release_year: "October 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 89,
        title: "Bomberman",
        developer: "Hudson Soft",
        publisher: "Hudson Soft",
        release_year: "January 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 90,
        title: "Bomberman II (NA)\nDynablaster (EU)",
        developer: "Hudson Soft",
        publisher: "Hudson Soft",
        release_year: "February 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 91,
        title: "Bonk's Adventure",
        developer: "AI",
        publisher: "Hudson Soft",
        release_year: "January 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 92,
        title: "Boulder Dash",
        developer: "Data East, Sakata SAS",
        publisher: "JVC",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 93,
        title: "A Boy and His Blob: Trouble on Blobolonia",
        developer: "Imagineering",
        publisher: "Absolute Entertainment",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 94,
        title: "Bram Stoker's Dracula",
        developer: "Probe Software",
        publisher: "Sony Imagesoft",
        release_year: "September 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 95,
        title: "Break Time: The National Pool Tour",
        developer: "Opera House",
        publisher: "FCI",
        release_year: "January 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 96,
        title: "BreakThru",
        developer: "Data East",
        publisher: "Data East",
        release_year: "November 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 97,
        title: "Bubble Bobble",
        developer: "Taito",
        publisher: "Taito",
        release_year: "November 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 98,
        title: "Bubble Bobble Part 2",
        developer: "I.T.L",
        publisher: "Taito",
        release_year: "August 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 99,
        title: "Bucky O'Hare",
        developer: "Konami",
        publisher: "Konami",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 100,
        title: "The Bugs Bunny Birthday Blowout (NA)\nThe Bugs Bunny Blowout (EU)",
        developer: "Kemco",
        publisher: "Seika",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 101,
        title: "The Bugs Bunny Crazy Castle",
        developer: "Kemco",
        publisher: "Seika",
        release_year: "August 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 102,
        title: "Bump 'n' Jump",
        developer: "Data East, Sakata SAS",
        publisher: "Vic Tokai",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 103,
        title: "Burai Fighter",
        developer: "Taxan",
        publisher: "Taxan",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 104,
        title: "BurgerTime",
        developer: "Data East, Sakata SAS",
        publisher: "Data East",
        release_year: "May 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 105,
        title: "Cabal",
        developer: "TAD Corporation",
        publisher: "Milton Bradley Company",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 106,
        title: "Caesars Palace",
        developer: "Realtime Associates",
        publisher: "Virgin Interactive",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 107,
        title: "California Games",
        developer: "Rare",
        publisher: "Milton Bradley Company",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 108,
        title: "Capcom's Gold Medal Challenge '92",
        developer: "Make Software",
        publisher: "Capcom",
        release_year: "August 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 109,
        title: "Captain America and The Avengers",
        developer: "Data East",
        publisher: "Data East",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 110,
        title: "Captain Planet and the Planeteers",
        developer: "Chris Gray Enterprises",
        publisher: "Mindscape",
        release_year: "September 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 111,
        title: "Captain Skyhawk",
        developer: "Rare",
        publisher: "Milton Bradley Company",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 112,
        title: "Casino Kid",
        developer: "SOFEL",
        publisher: "SOFEL",
        release_year: "October 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 113,
        title: "Casino Kid 2",
        developer: "SOFEL",
        publisher: "SOFEL",
        release_year: "April 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 114,
        title: "Castelian",
        developer: "Triffix",
        publisher: "Triffix",
        release_year: "June 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 115,
        title: "Castle of Dragon",
        developer: "Athena",
        publisher: "SETA",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 116,
        title: "Castlequest",
        developer: "ASCII",
        publisher: "ASCII",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 117,
        title: "Castlevania",
        developer: "Konami",
        publisher: "Konami",
        release_year: "May 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 118,
        title: "Castlevania II: Simon's Quest",
        developer: "Konami",
        publisher: "Konami",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 119,
        title: "Castlevania III: Dracula's Curse",
        developer: "Konami",
        publisher: "Konami",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 120,
        title: "Caveman Games",
        developer: "Painting By Numbers",
        publisher: "Data East",
        release_year: "October 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 121,
        title: "Championship Bowling",
        developer: "Athena",
        publisher: "Romstar",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 122,
        title: "Championship Pool",
        developer: "Bitmasters",
        publisher: "Mindscape",
        release_year: "October 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 123,
        title: "Championship Rally",
        developer: "Human Entertainment",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 124,
        title: "Chessmaster",
        developer: "Ubisoft",
        publisher: "Hi Tech Expressions",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 125,
        title: "Chip 'n Dale: Rescue Rangers",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 126,
        title: "Chip 'n Dale: Rescue Rangers 2",
        developer: "Make Software",
        publisher: "Capcom",
        release_year: "January 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 127,
        title: "Chubby Cherub",
        developer: "TOSE",
        publisher: "Bandai",
        release_year: "October 29, 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 128,
        title: "Circus Caper",
        developer: "Advance Communication Company",
        publisher: "Toho",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 129,
        title: "City Connection",
        developer: "Jaleco",
        publisher: "Jaleco",
        release_year: "May 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 130,
        title: "Clash at Demonhead",
        developer: "Vic Tokai",
        publisher: "Vic Tokai",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 131,
        title: "Classic Concentration",
        developer: "Softie",
        publisher: "GameTek",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 132,
        title: "Cliffhanger",
        developer: "Spidersoft",
        publisher: "Sony Imagesoft",
        release_year: "November 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 133,
        title: "Clu Clu Land",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 134,
        title: "Cobra Command",
        developer: "Data East",
        publisher: "Data East",
        release_year: "November 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 135,
        title: "Cobra Triangle",
        developer: "Rare",
        publisher: "Nintendo",
        release_year: "July 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 136,
        title: "Code Name: Viper",
        developer: "Arc System Works, Capcom",
        publisher: "Capcom",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 137,
        title: "Color a Dinosaur",
        developer: "FarSight Studios",
        publisher: "Virgin Interactive",
        release_year: "July 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 138,
        title: "Commando",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "November 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 139,
        title: "Conan: The Mysteries of Time",
        developer: "Mindscape",
        publisher: "Mindscape",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 140,
        title: "Conflict",
        developer: "Vic Tokai",
        publisher: "Vic Tokai",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 141,
        title: "Conquest of the Crystal Palace",
        developer: "Quest",
        publisher: "Asmik",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 142,
        title: "Contra (NA)\nProbotector (EU)",
        developer: "Konami",
        publisher: "Konami",
        release_year: "February 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 143,
        title: "Contra Force",
        developer: "Konami",
        publisher: "Konami",
        release_year: "September 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 144,
        title: "Cool World",
        developer: "Ocean Software",
        publisher: "Ocean Software",
        release_year: "June 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 145,
        title: "Cowboy Kid",
        developer: "Visco Corporation",
        publisher: "Romstar",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 146,
        title: "Crackout",
        developer: "Konami",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 147,
        title: "Crash 'n the Boys: Street Challenge",
        developer: "Techn?s Japan",
        publisher: "Techn?s Japan",
        release_year: "October 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 148,
        title: "Crystalis",
        developer: "SNK",
        publisher: "SNK",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 149,
        title: "Cyberball",
        developer: "Tengen",
        publisher: "Jaleco",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 150,
        title: "Cybernoid: The Fighting Machine",
        developer: "Raffaele Cecco",
        publisher: "Acclaim Entertainment",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 151,
        title: "Dance Aerobics",
        developer: "Human Entertainment",
        publisher: "Nintendo",
        release_year: "March 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 152,
        title: "Danny Sullivan's Indy Heat",
        developer: "Rare",
        publisher: "Tradewest",
        release_year: "August 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 153,
        title: "Darkman",
        developer: "Painting by Numbers",
        publisher: "Ocean Software",
        release_year: "October 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 154,
        title: "Dash Galaxy in the Alien Asylum",
        developer: "Beam Software",
        publisher: "Data East",
        release_year: "February 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 155,
        title: "Day Dreamin' Davey",
        developer: "Sculptured Software",
        publisher: "HAL America",
        release_year: "June 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 156,
        title: "Days of Thunder",
        developer: "Beam Software",
        publisher: "Mindscape",
        release_year: "October 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 157,
        title: "Deadly Towers",
        developer: "Lenar, Tamtex",
        publisher: "Brøderbund",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 158,
        title: "Defender II",
        developer: "Vid Kidz",
        publisher: "HAL America",
        release_year: "July 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 159,
        title: "Defender of the Crown",
        developer: "Beam Software",
        publisher: "Ultra Games",
        release_year: "July 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 160,
        title: "Defenders of Dynatron City",
        developer: "Lucasfilm Games",
        publisher: "JVC",
        release_year: "July 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 161,
        title: "Déjà Vu",
        developer: "Kemco",
        publisher: "Seika",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 162,
        title: "Demon Sword",
        developer: "TOSE",
        publisher: "Taito",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 163,
        title: "Desert Commander",
        developer: "Kemco",
        publisher: "Seika",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 164,
        title: "Destination Earthstar",
        developer: "Imagineering",
        publisher: "Acclaim Entertainment",
        release_year: "February 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 165,
        title: "Destiny of an Emperor",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 166,
        title: "Devil World",
        developer: "Nintendo Research & Development 1",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 167,
        title: "Dick Tracy",
        developer: "Realtime Associates",
        publisher: "Bandai",
        release_year: "August 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 168,
        title: "Die Hard",
        developer: "Pack-In-Video",
        publisher: "Activision",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 169,
        title: "Dig Dug II",
        developer: "Namco",
        publisher: "Bandai",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 170,
        title: "Digger T. Rock: Legend of the Lost City",
        developer: "Rare",
        publisher: "Milton Bradley Company",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 171,
        title: "Dirty Harry",
        developer: "Gray Matter",
        publisher: "Mindscape",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 172,
        title: "Disney's Aladdin",
        developer: "NMS Software",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 173,
        title: "Disney's Beauty and the Beast",
        developer: "Probe Software",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 174,
        title: "Disney's Darkwing Duck",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "June 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 175,
        title: "Disney's The Jungle Book",
        developer: "Eurocom, Virgin Interactive",
        publisher: "Virgin Interactive",
        release_year: "August 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 176,
        title: "Disney's The Lion King",
        developer: "Westwood Studios",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 177,
        title: "Disney's The Little Mermaid",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "July 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 178,
        title: "Donkey Kong",
        developer: "Nintendo Research & Development 1, Nintendo Research & Development 2",
        publisher: "Nintendo",
        release_year: "June 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 179,
        title: "Donkey Kong 3",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "June 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 180,
        title: "Donkey Kong Classics",
        developer: "Nintendo",
        publisher: "Nintendo",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 181,
        title: "Donkey Kong Jr.",
        developer: "Nintendo Research & Development 1, Nintendo Research & Development 2",
        publisher: "Nintendo",
        release_year: "June 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 182,
        title: "Donkey Kong Jr. Math",
        developer: "Nintendo Research & Development 2",
        publisher: "Nintendo",
        release_year: "June 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 183,
        title: "Double Dare",
        developer: "Rare",
        publisher: "GameTek",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 184,
        title: "Double Dragon",
        developer: "Techn?s Japan",
        publisher: "Tradewest",
        release_year: "June 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 185,
        title: "Double Dragon II: The Revenge",
        developer: "Techn?s Japan",
        publisher: "Acclaim Entertainment",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 186,
        title: "Double Dragon III: The Sacred Stones",
        developer: "Techn?s Japan",
        publisher: "Acclaim Entertainment",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 187,
        title: "Double Dribble",
        developer: "Konami",
        publisher: "Konami",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 188,
        title: "Dr. Chaos",
        developer: "Marionette",
        publisher: "FCI",
        release_year: "November 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 189,
        title: "Dr. Jekyll and Mr. Hyde",
        developer: "Advance Communication",
        publisher: "Bandai",
        release_year: "April 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 190,
        title: "Dr. Mario",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 191,
        title: "Dragon Fighter",
        developer: "Natsume",
        publisher: "SOFEL",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 192,
        title: "Dragon Power (NA)\nDragon Ball: Le Secret du Dragon (FRA)",
        developer: "TOSE",
        publisher: "Bandai",
        release_year: "March 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 193,
        title: "Dragon Spirit: The New Legend",
        developer: "Now Production",
        publisher: "Bandai",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 194,
        title: "Dragon Warrior",
        developer: "Chunsoft",
        publisher: "Nintendo",
        release_year: "August 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 195,
        title: "Dragon Warrior II",
        developer: "Chunsoft",
        publisher: "Enix",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 196,
        title: "Dragon Warrior III",
        developer: "Chunsoft",
        publisher: "Enix",
        release_year: "March 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 197,
        title: "Dragon Warrior IV",
        developer: "Chunsoft",
        publisher: "Enix",
        release_year: "October 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 198,
        title: "Dragon's Lair",
        developer: "MotiveTime",
        publisher: "Sony Imagesoft",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 199,
        title: "Dropzone",
        developer: "Arena Graphics",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 200,
        title: "Duck Hunt",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 201,
        title: "DuckTales",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 202,
        title: "DuckTales 2",
        developer: "Make Software",
        publisher: "Capcom",
        release_year: "June 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 203,
        title: "Dungeon Magic: Sword of the Elements",
        developer: "Natsume",
        publisher: "Taito",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 204,
        title: "Dusty Diamond's All-Star Softball",
        developer: "TOSE",
        publisher: "Brøderbund",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 205,
        title: "Dynowarz: Destruction of Spondylus",
        developer: "Advance Communication Company",
        publisher: "Bandai",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 206,
        title: "Elevator Action",
        developer: "Micronics",
        publisher: "Taito",
        release_year: "August 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 207,
        title: "Eliminator Boat Duel",
        developer: "Sculptured Software, Radioactive Software",
        publisher: "Electro Brain",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 208,
        title: "Elite",
        developer: "David BrabenIan Bell",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 209,
        title: "Excitebike",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 210,
        title: "F-117A Stealth Fighter",
        developer: "MicroProse",
        publisher: "MicroProse",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 211,
        title: "F-15 Strike Eagle",
        developer: "MicroProse",
        publisher: "MicroProse",
        release_year: "February 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 212,
        title: "Family Feud",
        developer: "Beam Software",
        publisher: "GameTek",
        release_year: "May 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 213,
        title: "Faria: A World of Mystery and Danger",
        developer: "Game Arts",
        publisher: "ASCII",
        release_year: "June 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 214,
        title: "Faxanadu",
        developer: "Hudson Soft",
        publisher: "Nintendo",
        release_year: "August 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 215,
        title: "Felix the Cat",
        developer: "Shimada Kikaku",
        publisher: "Hudson Soft",
        release_year: "October 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 216,
        title: "Ferrari Grand Prix Challenge",
        developer: "System 3",
        publisher: "Acclaim Entertainment",
        release_year: "June 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 217,
        title: "Fester's Quest",
        developer: "Sunsoft",
        publisher: "Sunsoft",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 218,
        title: "Final Fantasy",
        developer: "Square",
        publisher: "Nintendo",
        release_year: "May 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 219,
        title: "Fire 'n Ice (NA)\nSolomon's Key 2 (EU)",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "March 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 220,
        title: "Fisher-Price: Firehouse Rescue",
        developer: "Davidson Associates",
        publisher: "GameTek",
        release_year: "March 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 221,
        title: "Fisher-Price: I Can Remember",
        developer: "Davidson Associates",
        publisher: "GameTek",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 222,
        title: "Fisher-Price: Perfect Fit",
        developer: "Davidson Associates",
        publisher: "GameTek",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 223,
        title: "Fist of the North Star",
        developer: "Shouei System",
        publisher: "Taxan",
        release_year: "April 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 224,
        title: "Flight of the Intruder",
        developer: "Imagineering",
        publisher: "Mindscape",
        release_year: "May 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 225,
        title: "The Flintstones: The Rescue of Dino & Hoppy",
        developer: "Taito/SOL",
        publisher: "Taito",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 226,
        title: "The Flintstones: Surprise at Dinosaur Peak",
        developer: "Taito/SOL",
        publisher: "Taito",
        release_year: "August 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 227,
        title: "Flying Dragon: The Secret Scroll",
        developer: "Culture Brain",
        publisher: "Culture Brain",
        release_year: "August 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 228,
        title: "Flying Warriors",
        developer: "Culture Brain",
        publisher: "Culture Brain",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 229,
        title: "Formula 1 Sensation",
        developer: "Konami",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 230,
        title: "Formula One: Built to Win",
        developer: "Winkysoft",
        publisher: "SETA",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 231,
        title: "Frankenstein: The Monster Returns",
        developer: "TOSE",
        publisher: "Bandai",
        release_year: "July 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 232,
        title: "Freedom Force",
        developer: "Sunsoft",
        publisher: "Sunsoft",
        release_year: "April 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 233,
        title: "Friday the 13th",
        developer: "Atlus",
        publisher: "LJN",
        release_year: "February 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 234,
        title: "Fun House",
        developer: "Realtime Associates",
        publisher: "Hi Tech Expressions",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 235,
        title: "G.I. Joe: A Real American Hero",
        developer: "KID",
        publisher: "Taxan",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 236,
        title: "G.I. Joe: The Atlantis Factor",
        developer: "KID",
        publisher: "Capcom",
        release_year: "March 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 237,
        title: "Galaga: Demons of Death (NA)\nGalaga (EU)",
        developer: "Namco",
        publisher: "Bandai",
        release_year: "September 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 238,
        title: "Galaxy 5000",
        developer: "Activision",
        publisher: "Activision",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 239,
        title: "Gargoyle's Quest II",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "October 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 240,
        title: "Gauntlet",
        developer: "Tengen",
        publisher: "Tengen",
        release_year: "July 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 241,
        title: "Gauntlet II",
        developer: "Tengen",
        publisher: "Mindscape",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 242,
        title: "Gemfire",
        developer: "Koei",
        publisher: "Koei",
        release_year: "March 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 243,
        title: "Genghis Khan",
        developer: "Koei",
        publisher: "Koei",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 244,
        title: "George Foreman's KO Boxing",
        developer: "Beam Software",
        publisher: "Acclaim Entertainment",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 245,
        title: "Ghostbusters",
        developer: "Bits",
        publisher: "Activision",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 246,
        title: "Ghostbusters II",
        developer: "Imagineering",
        publisher: "Activision",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 247,
        title: "Ghost Lion",
        developer: "Kemco",
        publisher: "Kemco",
        release_year: "October 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 248,
        title: "Ghosts 'n Goblins",
        developer: "Micronics",
        publisher: "Capcom",
        release_year: "November 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 249,
        title: "Ghoul School",
        developer: "Imagineering",
        publisher: "Electro Brain",
        release_year: "March 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 250,
        title: "Goal!",
        developer: "TOSE",
        publisher: "Jaleco",
        release_year: "October 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 251,
        title: "Goal! Two",
        developer: "TOSE",
        publisher: "Jaleco",
        release_year: "November 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 252,
        title: "Godzilla: Monster of Monsters",
        developer: "Compile",
        publisher: "Toho",
        release_year: "October 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 253,
        title: "Godzilla 2: War of the Monsters",
        developer: "???",
        publisher: "Toho",
        release_year: "February 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 254,
        title: "Golf",
        developer: "Nintendo",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 255,
        title: "Golf Grand Slam",
        developer: "TOSE",
        publisher: "Atlus",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 256,
        title: "Golgo 13: Top Secret Episode",
        developer: "Vic Tokai",
        publisher: "Vic Tokai",
        release_year: "September 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 257,
        title: "The Goonies II",
        developer: "Konami",
        publisher: "Konami",
        release_year: "November 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 258,
        title: "Gotcha! The Sport!",
        developer: "Atlus",
        publisher: "LJN",
        release_year: "November 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 259,
        title: "Gradius",
        developer: "Konami",
        publisher: "Konami",
        release_year: "December 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 260,
        title: "The Great Waldo Search",
        developer: "Radiance",
        publisher: "THQ",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 261,
        title: "Greg Norman's Golf Power",
        developer: "Gremlin Interactive",
        publisher: "Virgin Interactive",
        release_year: "July 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 262,
        title: "Gremlins 2: The New Batch",
        developer: "Sunsoft",
        publisher: "Sunsoft",
        release_year: "October 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 263,
        title: "The Guardian Legend",
        developer: "Compile",
        publisher: "Brøderbund",
        release_year: "April 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 264,
        title: "Guerrilla War",
        developer: "SNK",
        publisher: "SNK",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 265,
        title: "Gumshoe",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "August 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 266,
        title: "Gun-Nac",
        developer: "Compile",
        publisher: "ASCII",
        release_year: "September 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 267,
        title: "Gun.Smoke",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "February 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 268,
        title: "Gyromite",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 269,
        title: "Gyruss",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "February 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 270,
        title: "Hammerin' Harry",
        developer: "Tamtex",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 271,
        title: "Harlem Globetrotters",
        developer: "Softie",
        publisher: "GameTek",
        release_year: "March 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 272,
        title: "Hatris",
        developer: "Bullet-Proof Software",
        publisher: "Bullet-Proof Software",
        release_year: "April 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 273,
        title: "Heavy Barrel",
        developer: "Data East",
        publisher: "Data East",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 274,
        title: "Heavy Shreddin'",
        developer: "Imagineering",
        publisher: "Parker Brothers",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 275,
        title: "High Speed",
        developer: "Rare",
        publisher: "Tradewest",
        release_year: "July 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 276,
        title: "Hogan's Alley",
        developer: "Nintendo Research & Development 1, Intelligent Systems",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 277,
        title: "Hollywood Squares",
        developer: "Milton Bradley Company",
        publisher: "GameTek",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 278,
        title: "Home Alone",
        developer: "Bethesda Softworks",
        publisher: "THQ",
        release_year: "October 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 279,
        title: "Home Alone 2: Lost in New York",
        developer: "Imagineering",
        publisher: "THQ",
        release_year: "October 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 280,
        title: "Hook",
        developer: "Ocean Software",
        publisher: "Sony Imagesoft",
        release_year: "April 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 281,
        title: "Hoops",
        developer: "Aicom",
        publisher: "Jaleco",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 282,
        title: "Hudson Hawk",
        developer: "Special FX",
        publisher: "Sony Imagesoft",
        release_year: "February 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 283,
        title: "The Hunt for Red October",
        developer: "Beam Software",
        publisher: "Hi Tech Expressions",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 284,
        title: "Hydlide",
        developer: "T&E Soft",
        publisher: "FCI",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 285,
        title: "Ice Climber",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 286,
        title: "Ice Hockey",
        developer: "Nintendo Research & Development 2",
        publisher: "Nintendo",
        release_year: "March 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 287,
        title: "Ikari Warriors",
        developer: "Micronics",
        publisher: "SNK",
        release_year: "May 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 288,
        title: "Ikari Warriors II: Victory Road",
        developer: "Micronics",
        publisher: "SNK",
        release_year: "April 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 289,
        title: "Ikari Warriors III: The Rescue",
        developer: "SNK",
        publisher: "SNK",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 290,
        title: "Image Fight",
        developer: "Lenar",
        publisher: "Irem",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 291,
        title: "The Immortal",
        developer: "Sandcastle",
        publisher: "Electronic Arts",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 292,
        title: "The Incredible Crash Dummies",
        developer: "Gray Matter Interactive",
        publisher: "LJN",
        release_year: "August 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 293,
        title: "Indiana Jones and the Last Crusade",
        developer: "Software Creations",
        publisher: "Taito",
        release_year: "March 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 294,
        title: "Indiana Jones and the Last Crusade (NA)\nIndy: Indiana Jones and the Last Crusade (EU)",
        developer: "NMS Software",
        publisher: "Ubisoft",
        release_year: "December 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 295,
        title: "Indiana Jones and the Temple of Doom",
        developer: "Tengen",
        publisher: "Mindscape",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 296,
        title: "Infiltrator",
        developer: "Chris Gray Enterprises",
        publisher: "Mindscape",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 297,
        title: "International Cricket",
        developer: "Beam Software",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 298,
        title: "Iron Tank: The Invasion of Normandy",
        developer: "SNK",
        publisher: "SNK",
        release_year: "July 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 299,
        title: "Ironsword: Wizards & Warriors II",
        developer: "Zippo Games",
        publisher: "Acclaim Entertainment",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 300,
        title: "Isolated Warrior",
        developer: "KID",
        publisher: "NTVIC",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 301,
        title: "Ivan 'Ironman' Stewart's Super Off Road",
        developer: "Rare",
        publisher: "Tradewest",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 302,
        title: "Jack Nicklaus' Greatest 18 Holes of Major Championship Golf",
        developer: "Sculptured Software",
        publisher: "Konami",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 303,
        title: "Jackal",
        developer: "Konami",
        publisher: "Konami",
        release_year: "September 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 304,
        title: "Jackie Chan's Action Kung Fu",
        developer: "Now Production",
        publisher: "Hudson Soft",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 305,
        title: "James Bond Jr.",
        developer: "Eurocom",
        publisher: "THQ",
        release_year: "November 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 306,
        title: "Jaws",
        developer: "Atlus, Escape/Westone",
        publisher: "LJN",
        release_year: "November 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 307,
        title: "Jeopardy!",
        developer: "Rare",
        publisher: "GameTek",
        release_year: "September 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 308,
        title: "Jeopardy! 25th Anniversary Edition",
        developer: "Rare",
        publisher: "GameTek",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 309,
        title: "Jeopardy! Junior Edition",
        developer: "Rare",
        publisher: "GameTek",
        release_year: "October 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 310,
        title: "The Jetsons: Cogswell's Caper!",
        developer: "Natsume",
        publisher: "Taito",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 311,
        title: "Jimmy Connors Tennis",
        developer: "NMS Software",
        publisher: "Ubisoft",
        release_year: "November 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 312,
        title: "Joe & Mac (NA)\nJoe & Mac: Caveman Ninja (EU)",
        developer: "Elite Systems",
        publisher: "Data East",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 313,
        title: "John Elway's Quarterback",
        developer: "Leland Corporation",
        publisher: "Tradewest",
        release_year: "March 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 314,
        title: "Jordan vs. Bird: One on One",
        developer: "Rare",
        publisher: "Milton Bradley Company",
        release_year: "August 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 315,
        title: "Journey to Silius",
        developer: "Sunsoft",
        publisher: "Sunsoft",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 316,
        title: "Joust",
        developer: "HAL Laboratory",
        publisher: "HAL America",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 317,
        title: "Jurassic Park",
        developer: "Ocean Software",
        publisher: "Ocean Software",
        release_year: "June 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 318,
        title: "Kabuki Quantum Fighter",
        developer: "Human Entertainment",
        publisher: "HAL America",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 319,
        title: "Karate Champ",
        developer: "Data East, Sakata SAS",
        publisher: "Data East",
        release_year: "December 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 320,
        title: "The Karate Kid",
        developer: "Atlus",
        publisher: "LJN",
        release_year: "November 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 321,
        title: "Karnov",
        developer: "Data East, Sakata SAS",
        publisher: "Data East",
        release_year: "January 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 322,
        title: "Kick Master",
        developer: "KID",
        publisher: "Taito",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 323,
        title: "Kick Off",
        developer: "Dino Dini",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 324,
        title: "Kickle Cubicle",
        developer: "Irem",
        publisher: "Irem",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 325,
        title: "Kid Icarus",
        developer: "Nintendo Research & Development 1, TOSE",
        publisher: "Nintendo",
        release_year: "July 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 326,
        title: "Kid Klown in Night Mayor World",
        developer: "Kemco",
        publisher: "Kemco",
        release_year: "April 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 327,
        title: "Kid Kool",
        developer: "Vic Tokai",
        publisher: "Vic Tokai",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 328,
        title: "Kid Niki: Radical Ninja",
        developer: "TOSE",
        publisher: "Data East",
        release_year: "November 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 329,
        title: "King's Knight",
        developer: "Workss",
        publisher: "Square",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 330,
        title: "Kings of the Beach",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 331,
        title: "King's Quest V: Absence Makes the Heart Go Yonder!",
        developer: "Novotrade",
        publisher: "Konami",
        release_year: "June 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 332,
        title: "Kirby's Adventure",
        developer: "HAL Laboratory",
        publisher: "Nintendo",
        release_year: "May 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 333,
        title: "Kiwi Kraze (NA)\nThe NewZealand Story (EU/AUS)",
        developer: "Software Creations",
        publisher: "Taito",
        release_year: "March 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 334,
        title: "KlashBall",
        developer: "The Bitmap Brothers",
        publisher: "SOFEL",
        release_year: "July 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 335,
        title: "Knight Rider",
        developer: "Pack-In-Video",
        publisher: "Acclaim Entertainment",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 336,
        title: "Konami Hyper Soccer",
        developer: "Konami",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 337,
        title: "The Krion Conquest",
        developer: "Vic Tokai",
        publisher: "Vic Tokai",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 338,
        title: "Krusty's Fun House",
        developer: "Fox Williams and Audiogenic",
        publisher: "Acclaim Entertainment",
        release_year: "September 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 339,
        title: "Kung Fu",
        developer: "Nintendo",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 340,
        title: "Kung-Fu Heroes",
        developer: "Culture Brain",
        publisher: "Culture Brain",
        release_year: "March 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 341,
        title: "Laser Invasion",
        developer: "Konami",
        publisher: "Konami",
        release_year: "June 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 342,
        title: "Last Action Hero",
        developer: "Teeny Weeny Games",
        publisher: "Sony Imagesoft",
        release_year: "October 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 343,
        title: "The Last Ninja",
        developer: "System 3",
        publisher: "Jaleco",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 344,
        title: "The Last Starfighter",
        developer: "Andrew Braybrook",
        publisher: "Mindscape",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 345,
        title: "Lee Trevino's Fighting Golf",
        developer: "SNK",
        publisher: "SNK",
        release_year: "September 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 346,
        title: "Legacy of the Wizard",
        developer: "Nihon Falcom",
        publisher: "Brøderbund",
        release_year: "April 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 347,
        title: "The Legend of Kage",
        developer: "Taito",
        publisher: "Taito",
        release_year: "August 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 348,
        title: "The Legend of Prince Valiant",
        developer: "King Features Syndicate",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 349,
        title: "The Legend of Zelda",
        developer: "Nintendo Research & Development 4",
        publisher: "Nintendo",
        release_year: "August 22, 1987",
        genre: '',
        console_id: 2,
        cover_picture: 'https://upload.wikimedia.org/wikipedia/pt/9/96/The_Legend_of_Zelda_1_capa.png'
      },
      {
        game_id: 350,
        title: "Legendary Wings",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "July 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 351,
        title: "Legends of the Diamond",
        developer: "TOSE",
        publisher: "Bandai",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 352,
        title: "Lemmings",
        developer: "DMA Design",
        publisher: "Sunsoft",
        release_year: "November 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 353,
        title: "L'Empereur",
        developer: "Koei",
        publisher: "Koei",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 354,
        title: "Les Chevaliers du Zodiaque: La Légende d'or",
        developer: "TOSE",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 355,
        title: "Lethal Weapon",
        developer: "Eurocom",
        publisher: "Ocean Software",
        release_year: "April 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 356,
        title: "Life Force (NA)\nLife Force Salamander (EU)",
        developer: "Konami",
        publisher: "Konami",
        release_year: "August 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 357,
        title: "Little League Baseball: Championship Series",
        developer: "SNK",
        publisher: "SNK",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 358,
        title: "Little Nemo: The Dream Master",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 359,
        title: "Little Ninja Brothers",
        developer: "Culture Brain",
        publisher: "Culture Brain",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 360,
        title: "Little Samson",
        developer: "Takeru",
        publisher: "Taito",
        release_year: "November 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 361,
        title: "Lode Runner",
        developer: "Hudson Soft",
        publisher: "Brøderbund",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 362,
        title: "The Lone Ranger",
        developer: "Konami",
        publisher: "Konami",
        release_year: "August 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 363,
        title: "Loopz",
        developer: "Audiogenic, Milestone S.r.l.",
        publisher: "Mindscape",
        release_year: "October 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 364,
        title: "Low G Man: The Low Gravity Man",
        developer: "KID",
        publisher: "Taxan",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 365,
        title: "Lunar Pool",
        developer: "Compile",
        publisher: "FCI",
        release_year: "October 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 366,
        title: "M.C. Kids (NA)\nMcDonaldland (EU)",
        developer: "Virgin Interactive",
        publisher: "Virgin Interactive",
        release_year: "February 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 367,
        title: "M.U.L.E.",
        developer: "Eastridge Technology",
        publisher: "Mindscape",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 368,
        title: "M.U.S.C.L.E.",
        developer: "TOSE",
        publisher: "Bandai",
        release_year: "October 29, 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 369,
        title: "Mach Rider",
        developer: "Nintendo",
        publisher: "Nintendo",
        release_year: "August 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 370,
        title: "Mad Max",
        developer: "Mindscape",
        publisher: "Mindscape",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 371,
        title: "The Mafat Conspiracy",
        developer: "Aicom",
        publisher: "Vic Tokai",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 372,
        title: "Magic Darts",
        developer: "Romstar, Make Software",
        publisher: "Romstar",
        release_year: "September 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 373,
        title: "Magic Johnson's Fast Break",
        developer: "Arcadia Systems",
        publisher: "Tradewest",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 374,
        title: "The Magic of Scheherazade",
        developer: "Culture Brain",
        publisher: "Culture Brain",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 375,
        title: "Magician",
        developer: "Eurocom",
        publisher: "Taxan",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 376,
        title: "MagMax",
        developer: "Nihon Bussan",
        publisher: "FCI",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 377,
        title: "Major League Baseball",
        developer: "Atlus",
        publisher: "LJN",
        release_year: "April 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 378,
        title: "Maniac Mansion",
        developer: "Lucasfilm Games",
        publisher: "Jaleco",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 379,
        title: "Mappy-Land",
        developer: "TOSE",
        publisher: "Taxan",
        release_year: "April 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 380,
        title: "Marble Madness",
        developer: "Rare",
        publisher: "Milton Bradley Company",
        release_year: "March 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 381,
        title: "Mario Bros.",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "June 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 382,
        title: "Mario Bros. (Classic Series)",
        developer: "Nintendo Research & Development 1",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 383,
        title: "Mario Is Missing!",
        developer: "Radical Entertainment",
        publisher: "Mindscape",
        release_year: "July 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 384,
        title: "Mario's Time Machine",
        developer: "Radical Entertainment",
        publisher: "Mindscape",
        release_year: "June 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 385,
        title: "Mechanized Attack",
        developer: "SNK",
        publisher: "SNK",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 386,
        title: "Mega Man",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "December 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 387,
        title: "Mega Man 2",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 388,
        title: "Mega Man 3",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 389,
        title: "Mega Man 4",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 390,
        title: "Mega Man 5",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 391,
        title: "Mega Man 6",
        developer: "Capcom",
        publisher: "Nintendo",
        release_year: "March 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 392,
        title: "Mendel Palace",
        developer: "Game Freak",
        publisher: "Hudson Soft",
        release_year: "October 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 393,
        title: "Metal Gear",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "June 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 394,
        title: "Metal Mech",
        developer: "Sculptured Software",
        publisher: "Jaleco",
        release_year: "March 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 395,
        title: "Metal Storm",
        developer: "Tamtex",
        publisher: "Irem",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 396,
        title: "Metroid",
        developer: "Nintendo Research & Development 1, Intelligent Systems",
        publisher: "Nintendo",
        release_year: "August 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 397,
        title: "Michael Andretti's World GP",
        developer: "Human Entertainment",
        publisher: "American Sammy",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 398,
        title: "Mickey Mousecapade",
        developer: "Hudson Soft",
        publisher: "Capcom",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 399,
        title: "Mickey's Adventures in Numberland",
        developer: "Beam Software",
        publisher: "Hi Tech Expressions",
        release_year: "March 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 400,
        title: "Mickey's Safari in Letterland",
        developer: "Beam Software",
        publisher: "Hi Tech Expressions",
        release_year: "March 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 401,
        title: "Might and Magic Book One: The Secret of the Inner Sanctum",
        developer: "New World Computing",
        publisher: "American Sammy",
        release_year: "August 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 402,
        title: "Mighty Bomb Jack",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "July 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 403,
        title: "Mighty Final Fight",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "July 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 404,
        title: "Mike Tyson's Punch-Out!!",
        developer: "Nintendo Research & Development 3",
        publisher: "Nintendo",
        release_year: "October 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 405,
        title: "Millipede",
        developer: "HAL Laboratory",
        publisher: "HAL America",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 406,
        title: "Milon's Secret Castle",
        developer: "Hudson Soft",
        publisher: "Hudson Soft",
        release_year: "September 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 407,
        title: "The Miracle Piano Teaching System",
        developer: "Mindscape",
        publisher: "Mindscape",
        release_year: "1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 408,
        title: "Mission: Impossible",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 409,
        title: "Monopoly",
        developer: "Sculptured Software",
        publisher: "Parker Brothers",
        release_year: "May 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 410,
        title: "Monster in My Pocket",
        developer: "Konami",
        publisher: "Konami",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 411,
        title: "Monster Party",
        developer: "Human Entertainment",
        publisher: "Bandai",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 412,
        title: "Monster Truck Rally",
        developer: "Realtime Associates",
        publisher: "INTV",
        release_year: "September 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 413,
        title: "Motor City Patrol",
        developer: "Source Research & Development",
        publisher: "Matchbox",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 414,
        title: "Mr. Gimmick",
        developer: "Sunsoft",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 415,
        title: "Ms. Pac-Man",
        developer: "Now Production",
        publisher: "Namco",
        release_year: "November 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 416,
        title: "Muppet Adventure: Chaos at the Carnival",
        developer: "Mind's Eye",
        publisher: "Hi Tech Expressions",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 417,
        title: "The Mutant Virus: Crisis in a Computer World",
        developer: "Rocket Science Games",
        publisher: "American Softworks",
        release_year: "April 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 418,
        title: "Mystery Quest",
        developer: "Carry Lab",
        publisher: "Taxan",
        release_year: "April 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 419,
        title: "NARC",
        developer: "Rare",
        publisher: "Acclaim Entertainment",
        release_year: "August 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 420,
        title: "NES Open Tournament Golf",
        developer: "Nintendo Research & Development 2",
        publisher: "Nintendo",
        release_year: "September 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 421,
        title: "NES Play Action Football",
        developer: "TOSE",
        publisher: "Nintendo",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 422,
        title: "New Ghostbusters II",
        developer: "HAL Laboratory",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 423,
        title: "NFL Football",
        developer: "Atlus",
        publisher: "LJN",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 424,
        title: "Nigel Mansell's World Championship Racing",
        developer: "Gremlin Graphics",
        publisher: "GameTek",
        release_year: "October 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 425,
        title: "A Nightmare on Elm Street",
        developer: "Rare",
        publisher: "LJN",
        release_year: "October 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 426,
        title: "Nightshade",
        developer: "Beam Software",
        publisher: "Ultra Games",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Nightshade_(NES)_Coverart.png'
      },
      {
        game_id: 427,
        title: "Ninja Crusaders",
        developer: "MK",
        publisher: "American Sammy",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 428,
        title: "Ninja Gaiden (NA)\nShadow Warriors (EU)",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "March 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 429,
        title: "Ninja Gaiden II: The Dark Sword of Chaos (NA)\nShadow Warriors II: Ninja Gaiden (EU)",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "May 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 430,
        title: "Ninja Gaiden III: The Ancient Ship of Doom",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "August 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 431,
        title: "Ninja Kid",
        developer: "TOSE",
        publisher: "Bandai",
        release_year: "October 29, 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 432,
        title: "Nintendo World Cup",
        developer: "Techn?s Japan",
        publisher: "Nintendo",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 433,
        title: "Noah's Ark",
        developer: "Source Research & Development",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 434,
        title: "Nobunaga's Ambition",
        developer: "Koei",
        publisher: "Koei",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 435,
        title: "Nobunaga's Ambition II",
        developer: "Koei",
        publisher: "Koei",
        release_year: "April 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 436,
        title: "North & South",
        developer: "Infogrames",
        publisher: "Seika",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 437,
        title: "Operation Wolf",
        developer: "Taito",
        publisher: "Taito",
        release_year: "May 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 438,
        title: "Orb-3D",
        developer: "Mindscape",
        publisher: "Hi Tech Expressions",
        release_year: "October 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 439,
        title: "Othello",
        developer: "HAL Laboratory",
        publisher: "Acclaim Entertainment",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 440,
        title: "Over Horizon",
        developer: "Hot B, Pixel",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 441,
        title: "Overlord",
        developer: "Probe Software",
        publisher: "Virgin Interactive",
        release_year: "January 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 442,
        title: "P.O.W.: Prisoners of War",
        developer: "SNK",
        publisher: "SNK",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 443,
        title: "Pac-Man",
        developer: "Namco",
        publisher: "Namco",
        release_year: "November 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 444,
        title: "Pac-Man",
        developer: "Namco",
        publisher: "Tengen",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 445,
        title: "Palamedes",
        developer: "Natsume",
        publisher: "Hot-B",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 446,
        title: "Panic Restaurant",
        developer: "EIM Group",
        publisher: "Taito",
        release_year: "August 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 447,
        title: "Paperboy",
        developer: "Tengen",
        publisher: "Mindscape",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 448,
        title: "Paperboy 2",
        developer: "Tengen",
        publisher: "Mindscape",
        release_year: "April 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 449,
        title: "Parasol Stars: Rainbow Islands II",
        developer: "Ocean Software",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 450,
        title: "Parodius",
        developer: "Konami",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 451,
        title: "Peter Pan and the Pirates",
        developer: "Equilibrium",
        publisher: "THQ",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 452,
        title: "Phantom Fighter",
        developer: "Marionette",
        publisher: "FCI",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 453,
        title: "Pictionary",
        developer: "Software Creations",
        publisher: "LJN",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 454,
        title: "Pinball",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 455,
        title: "Pinball Quest",
        developer: "TOSE",
        publisher: "Jaleco",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 456,
        title: "Pin*Bot",
        developer: "Rare",
        publisher: "Nintendo",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 457,
        title: "Pipe Dream",
        developer: "Distinctive Software",
        publisher: "Bullet-Proof Software",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 458,
        title: "Pirates!",
        developer: "Rare",
        publisher: "Ultra Games",
        release_year: "October 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 459,
        title: "Platoon",
        developer: "Ocean Software",
        publisher: "Sunsoft",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 460,
        title: "Popeye",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "June 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 461,
        title: "Power Blade",
        developer: "Natsume, Taito",
        publisher: "Taito",
        release_year: "March 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 462,
        title: "Power Blade 2",
        developer: "Natsume, Taito",
        publisher: "Taito",
        release_year: "October 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 463,
        title: "Power Punch II",
        developer: "Beam Software",
        publisher: "American Softworks",
        release_year: "June 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 464,
        title: "Predator",
        developer: "Pack-In-Video",
        publisher: "Activision",
        release_year: "April 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 465,
        title: "Prince of Persia",
        developer: "MotiveTime",
        publisher: "Virgin Interactive",
        release_year: "November 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 466,
        title: "Princess Tomato in the Salad Kingdom",
        developer: "Hudson Soft",
        publisher: "Hudson Soft",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 467,
        title: "Pro Sport Hockey",
        developer: "TOSE",
        publisher: "Jaleco",
        release_year: "November 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 468,
        title: "Pro Wrestling",
        developer: "Nintendo Research & Development 3",
        publisher: "Nintendo",
        release_year: "March 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 469,
        title: "Punch-Out!!",
        developer: "Nintendo Research & Development 3",
        publisher: "Nintendo",
        release_year: "August 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 470,
        title: "The Punisher",
        developer: "Beam Software",
        publisher: "LJN",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 471,
        title: "Puss 'n Boots: Pero's Great Adventure",
        developer: "Shouei System",
        publisher: "Electro Brain",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 472,
        title: "Puzznic",
        developer: "Taito",
        publisher: "Taito",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 473,
        title: "Q*bert",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "February 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 474,
        title: "Qix",
        developer: "Novotrade",
        publisher: "Taito",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 475,
        title: "R.B.I. Baseball",
        developer: "Atari Games",
        publisher: "Tengen",
        release_year: "June 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 476,
        title: "R.C. Pro-Am",
        developer: "Rare",
        publisher: "Nintendo",
        release_year: "March 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 477,
        title: "R.C. Pro-Am II",
        developer: "Rare",
        publisher: "Tradewest",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 478,
        title: "Race America (NA)\nCorvette ZR-1 Challenge (EU)",
        developer: "Imagineering",
        publisher: "Absolute Entertainment",
        release_year: "May 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 479,
        title: "Racket Attack",
        developer: "TOSE",
        publisher: "Jaleco",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 480,
        title: "Rackets & Rivals",
        developer: "Konami",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 481,
        title: "Rad Racer",
        developer: "Square",
        publisher: "Nintendo",
        release_year: "October 1, 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 482,
        title: "Rad Racer II",
        developer: "Square",
        publisher: "Square",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 483,
        title: "Raid on Bungeling Bay",
        developer: "Hudson Soft",
        publisher: "Brøderbund",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 484,
        title: "Rainbow Islands",
        developer: "Taito",
        publisher: "Taito",
        release_year: "June 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 485,
        title: "Rainbow Islands: Bubble Bobble 2",
        developer: "Ocean Software",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 486,
        title: "Rally Bike",
        developer: "Toaplan",
        publisher: "Romstar",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 487,
        title: "Rambo",
        developer: "Pack-In-Video",
        publisher: "Acclaim Entertainment",
        release_year: "May 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 488,
        title: "Rampage",
        developer: "Data East",
        publisher: "Data East",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 489,
        title: "Rampart",
        developer: "Tengen",
        publisher: "Jaleco",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 490,
        title: "Remote Control",
        developer: "RSP Inc.",
        publisher: "Hi Tech Expressions",
        release_year: "May 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 491,
        title: "The Ren & Stimpy Show: Buckaroo$!",
        developer: "Imagineering",
        publisher: "THQ",
        release_year: "November 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 492,
        title: "Renegade",
        developer: "Techn?s Japan",
        publisher: "Taito",
        release_year: "January 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 493,
        title: "Rescue: The Embassy Mission",
        developer: "Kemco",
        publisher: "Seika",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 494,
        title: "Ring King",
        developer: "Jastec, Neue Design",
        publisher: "Data East",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 495,
        title: "River City Ransom (NA)\nStreet Gangs (EU)",
        developer: "Techn?s Japan",
        publisher: "Techn?s Japan",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 496,
        title: "Road Fighter",
        developer: "Konami",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 497,
        title: "RoadBlasters",
        developer: "Tengen",
        publisher: "Mindscape",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 498,
        title: "Robin Hood: Prince of Thieves",
        developer: "Sculptured Software, Bits Studios",
        publisher: "Virgin Interactive",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 499,
        title: "RoboCop",
        developer: "Data East, Sakata SAS",
        publisher: "Data East",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 500,
        title: "RoboCop 2",
        developer: "Ocean Software",
        publisher: "Data East",
        release_year: "April 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 501,
        title: "RoboCop 3",
        developer: "Probe",
        publisher: "Ocean Software",
        release_year: "August 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 502,
        title: "Robowarrior",
        developer: "Hudson Soft, Aicom",
        publisher: "Jaleco",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 503,
        title: "Rock 'n' Ball",
        developer: "KID",
        publisher: "NTVIC",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 504,
        title: "Rocket Ranger",
        developer: "Cinemaware",
        publisher: "Seika",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 505,
        title: "The Rocketeer",
        developer: "Ironwind Software",
        publisher: "Bandai",
        release_year: "May 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 506,
        title: "Rockin' Kats",
        developer: "Atlus",
        publisher: "Atlus",
        release_year: "September 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 507,
        title: "Rod Land",
        developer: "Jaleco, The Sales Curve, Eurocom",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 508,
        title: "Roger Clemens' MVP Baseball",
        developer: "Sculptured Software",
        publisher: "LJN",
        release_year: "October 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 509,
        title: "Rollerball",
        developer: "HAL Laboratory",
        publisher: "HAL America",
        release_year: "February 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 510,
        title: "Rollerblade Racer",
        developer: "Radiance",
        publisher: "Hi Tech Expressions",
        release_year: "February 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 511,
        title: "RollerGames",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 512,
        title: "Romance of the Three Kingdoms",
        developer: "Koei",
        publisher: "Koei",
        release_year: "October 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 513,
        title: "Romance of the Three Kingdoms II",
        developer: "Koei",
        publisher: "Koei",
        release_year: "September 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 514,
        title: "Roundball: 2 on 2 Challenge",
        developer: "Park Place Productions",
        publisher: "Mindscape",
        release_year: "May 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 515,
        title: "Rush'n Attack",
        developer: "Konami",
        publisher: "Konami",
        release_year: "April 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 516,
        title: "Rygar",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "July 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 517,
        title: "S.C.A.T.: Special Cybernetic Attack Team (NA)\nAction in New York (EU)",
        developer: "Natsume",
        publisher: "Natsume",
        release_year: "June 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 518,
        title: "Section Z",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "July 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 519,
        title: "Seicross",
        developer: "Nichibutsu",
        publisher: "FCI",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 520,
        title: "Sesame Street: 1-2-3",
        developer: "Rare",
        publisher: "Hi Tech Expressions",
        release_year: "January 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 521,
        title: "Sesame Street: A-B-C",
        developer: "Rare",
        publisher: "Hi Tech Expressions",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 522,
        title: "Sesame Street: A-B-C/1-2-3",
        developer: "Rare",
        publisher: "Hi Tech Expressions",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 523,
        title: "Sesame Street: Big Bird's Hide & Speak",
        developer: "RSP Inc.",
        publisher: "Hi Tech Expressions",
        release_year: "October 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 524,
        title: "Sesame Street: Countdown",
        developer: "RSP Inc.",
        publisher: "Hi Tech Expressions",
        release_year: "February 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 525,
        title: "Shadow of the Ninja (NA)\nBlue Shadow (EU)",
        developer: "Natsume",
        publisher: "Natsume",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 526,
        title: "Shadowgate",
        developer: "Kemco",
        publisher: "Seika",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 527,
        title: "Shatterhand",
        developer: "Natsume",
        publisher: "Jaleco",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 528,
        title: "Shingen the Ruler",
        developer: "Hot-B",
        publisher: "Hot-B",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 529,
        title: "Shooting Range",
        developer: "TOSE",
        publisher: "Bandai",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 530,
        title: "Short Order / Eggsplode!",
        developer: "TOSE",
        publisher: "Nintendo",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 531,
        title: "Side Pocket",
        developer: "Data East",
        publisher: "Data East",
        release_year: "November 30, 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 532,
        title: "Silent Service",
        developer: "Rare",
        publisher: "Ultra Games",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 533,
        title: "Silkworm",
        developer: "Tecmo",
        publisher: "American Sammy",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 534,
        title: "Silver Surfer",
        developer: "Software Creations",
        publisher: "Arcadia Systems",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 535,
        title: "The Simpsons: Bart vs. the Space Mutants",
        developer: "Imagineering",
        publisher: "Acclaim Entertainment",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 536,
        title: "The Simpsons: Bart vs. the World",
        developer: "Imagineering",
        publisher: "Acclaim Entertainment",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 537,
        title: "The Simpsons: Bartman Meets Radioactive Man",
        developer: "Imagineering",
        publisher: "Acclaim Entertainment",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 538,
        title: "Skate or Die!",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 539,
        title: "Skate or Die 2: The Search for Double Trouble",
        developer: "Electronic Arts",
        publisher: "Electronic Arts",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 540,
        title: "Ski or Die",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 541,
        title: "Sky Kid",
        developer: "Namco",
        publisher: "Sunsoft",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 542,
        title: "Sky Shark",
        developer: "Software Creations",
        publisher: "Taito",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 543,
        title: "Slalom",
        developer: "Rare",
        publisher: "Nintendo",
        release_year: "March 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 544,
        title: "Smash TV",
        developer: "Beam Software",
        publisher: "Acclaim Entertainment",
        release_year: "September 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 545,
        title: "The Smurfs",
        developer: "Bit Managers",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 546,
        title: "Snake Rattle 'n' Roll",
        developer: "Rare",
        publisher: "Nintendo",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 547,
        title: "Snake's Revenge",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 548,
        title: "Snoopy's Silly Sports Spectacular",
        developer: "Kemco",
        publisher: "Seika",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 549,
        title: "Snow Brothers",
        developer: "SOL",
        publisher: "Capcom",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 550,
        title: "Soccer",
        developer: "Intelligent Systems",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 551,
        title: "Solar Jetman: Hunt for the Golden Warpship",
        developer: "Zippo Games, Rare",
        publisher: "Tradewest",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 552,
        title: "Solomon's Key",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "July 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 553,
        title: "Solstice: The Quest for the Staff of Demnos",
        developer: "Software Creations",
        publisher: "Sony Imagesoft",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 554,
        title: "Space Shuttle Project",
        developer: "Imagineering",
        publisher: "Absolute Entertainment",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 555,
        title: "Spelunker",
        developer: "Tamtex, TOSE",
        publisher: "Brøderbund",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 556,
        title: "Spider-Man: Return of the Sinister Six",
        developer: "Bits Studios",
        publisher: "LJN",
        release_year: "October 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 557,
        title: "Spot: The Video Game",
        developer: "Virgin Mastertronic",
        publisher: "Arcadia Systems",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 558,
        title: "Spy Hunter",
        developer: "Sunsoft",
        publisher: "Sunsoft",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 559,
        title: "Spy vs. Spy",
        developer: "Kemco",
        publisher: "Seika",
        release_year: "October 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 560,
        title: "Sqoon",
        developer: "Home Data",
        publisher: "Irem",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 561,
        title: "Stack-Up",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 562,
        title: "Stadium Events",
        developer: "Human Entertainment",
        publisher: "Bandai",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 563,
        title: "Stanley: The Search for Dr. Livingston",
        developer: "Sculptured Software",
        publisher: "Electro Brain",
        release_year: "October 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 564,
        title: "Star Force",
        developer: "Hudson Soft",
        publisher: "Tecmo",
        release_year: "November 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 565,
        title: "Star Soldier",
        developer: "Hudson Soft",
        publisher: "Taxan",
        release_year: "January 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 566,
        title: "Star Trek: 25th Anniversary",
        developer: "Interplay Entertainment",
        publisher: "Ultra Games",
        release_year: "February 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 567,
        title: "Star Trek: The Next Generation",
        developer: "Imagineering",
        publisher: "Absolute Entertainment",
        release_year: "September 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 568,
        title: "Star Voyager",
        developer: "ASCII",
        publisher: "Acclaim Entertainment",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 569,
        title: "Star Wars",
        developer: "Beam Software",
        publisher: "JVC",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 570,
        title: "Star Wars: The Empire Strikes Back",
        developer: "Sculptured Software",
        publisher: "JVC",
        release_year: "March 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 571,
        title: "Starship Hector",
        developer: "Hudson Soft",
        publisher: "Hudson Soft",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 572,
        title: "StarTropics",
        developer: "Nintendo Research & Development 3, Locomotive Corporation",
        publisher: "Nintendo",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 573,
        title: "Stealth ATF",
        developer: "Imagineering",
        publisher: "Activision",
        release_year: "October 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 574,
        title: "Stinger",
        developer: "Konami",
        publisher: "Konami",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 575,
        title: "Street Cop",
        developer: "Human Entertainment",
        publisher: "Bandai",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 576,
        title: "Street Fighter 2010: The Final Fight",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 577,
        title: "Strider",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "July 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 578,
        title: "Super C (aka Super Contra) (NA)\nProbotector II: Return of The Evil Forces (EU)",
        developer: "Konami",
        publisher: "Konami",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 579,
        title: "Super Cars",
        developer: "Magnetic Fields",
        publisher: "Electro Brain",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 580,
        title: "Super Dodge Ball",
        developer: "Techn?s Japan",
        publisher: "Sony Imagesoft",
        release_year: "July 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 581,
        title: "Super Glove Ball",
        developer: "Rare",
        publisher: "Mattel",
        release_year: "October 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 582,
        title: "Super Jeopardy!",
        developer: "???",
        publisher: "GameTek",
        release_year: "September 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 583,
        title: "Super Mario Bros.",
        developer: "Nintendo Research & Development 4",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 584,
        title: "Super Mario Bros./Duck Hunt",
        developer: "Nintendo",
        publisher: "Nintendo",
        release_year: "November 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 585,
        title: "Super Mario Bros./Duck Hunt/World Class Track Meet",
        developer: "Nintendo",
        publisher: "Nintendo",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 586,
        title: "Super Mario Bros./Tetris/Nintendo World Cup",
        developer: "Nintendo",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 587,
        title: "Super Mario Bros. 2",
        developer: "Nintendo Research & Development 4",
        publisher: "Nintendo",
        release_year: "October 9, 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 588,
        title: "Super Mario Bros. 3",
        developer: "Nintendo Research & Development 4",
        publisher: "Nintendo",
        release_year: "February 9, 1990",
        genre: '',
        console_id: 2,
        cover_picture: 'https://upload.wikimedia.org/wikipedia/pt/a/a5/Super_Mario_Bros._3_coverart.png'
      },
      {
        game_id: 589,
        title: "Super Pitfall",
        developer: "Micronics",
        publisher: "Activision",
        release_year: "November 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 590,
        title: "Super Spike V'Ball",
        developer: "Techn?s Japan",
        publisher: "Nintendo",
        release_year: "February 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 591,
        title: "Super Spike V'Ball/Nintendo World Cup",
        developer: "Nintendo",
        publisher: "Nintendo",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 592,
        title: "Super Spy Hunter",
        developer: "Sunsoft",
        publisher: "Sunsoft",
        release_year: "February 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 593,
        title: "Super Team Games",
        developer: "Human Entertainment",
        publisher: "Nintendo",
        release_year: "November 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 594,
        title: "Super Turrican",
        developer: "Rainbow Arts",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 595,
        title: "Superman",
        developer: "Kemco",
        publisher: "Seika",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 596,
        title: "Swamp Thing",
        developer: "Imagineering",
        publisher: "THQ",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 597,
        title: "Sword Master",
        developer: "Athena",
        publisher: "Activision",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 598,
        title: "Swords and Serpents",
        developer: "Interplay Entertainment",
        publisher: "Acclaim Entertainment",
        release_year: "August 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 599,
        title: "Taboo: The Sixth Sense",
        developer: "Rare",
        publisher: "Tradewest",
        release_year: "April 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 600,
        title: "Tag Team Wrestling",
        developer: "Data East, Sakata SAS",
        publisher: "Data East",
        release_year: "October 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 601,
        title: "TaleSpin",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 602,
        title: "Target: Renegade",
        developer: "Software Creations (US)",
        publisher: "Taito",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 603,
        title: "Tecmo Baseball",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "January 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 604,
        title: "Tecmo Bowl",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "February 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 605,
        title: "Tecmo Cup Soccer Game",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "September 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 606,
        title: "Tecmo NBA Basketball",
        developer: "Sculptured Software",
        publisher: "Tecmo",
        release_year: "November 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 607,
        title: "Tecmo Super Bowl",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 608,
        title: "Tecmo World Cup Soccer",
        developer: "Tecmo",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 609,
        title: "Tecmo World Wrestling",
        developer: "Tecmo",
        publisher: "Tecmo",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 610,
        title: "Teenage Mutant Ninja Turtles (NA)\nTeenage Mutant Hero Turtles (EU)",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 611,
        title: "Teenage Mutant Ninja Turtles II: The Arcade Game (NA)\nTeenage Mutant Hero Turtles II: The Arcade Game (EU)",
        developer: "Konami",
        publisher: "Ultra Games",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 612,
        title: "Teenage Mutant Ninja Turtles III: The Manhattan Project",
        developer: "Konami",
        publisher: "Konami",
        release_year: "February 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 613,
        title: "Teenage Mutant Ninja Turtles: Tournament Fighters (NA)\nTeenage Mutant Hero Turtles: Tournament Fighters (EU)",
        developer: "Konami",
        publisher: "Konami",
        release_year: "February 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 614,
        title: "Tennis",
        developer: "Nintendo Research & Development 1, Intelligent Systems",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 615,
        title: "The Terminator",
        developer: "Radical Entertainment",
        publisher: "Mindscape",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 616,
        title: "Terminator 2: Judgment Day",
        developer: "Software Creations",
        publisher: "LJN",
        release_year: "February 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 617,
        title: "Terra Cresta",
        developer: "Nihon Bussan",
        publisher: "Vic Tokai",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 618,
        title: "Tetris",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "November 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 619,
        title: "Tetris 2",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 620,
        title: "The Three Stooges",
        developer: "Incredible Technologies",
        publisher: "Activision",
        release_year: "October 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 621,
        title: "Thunder & Lightning",
        developer: "SETA, Visco",
        publisher: "Romstar",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 622,
        title: "Thunderbirds",
        developer: "Pack-In-Video",
        publisher: "Activision",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 623,
        title: "Thundercade",
        developer: "Micronics",
        publisher: "American Sammy",
        release_year: "July 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 624,
        title: "Tiger-Heli",
        developer: "Micronics",
        publisher: "Acclaim Entertainment",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 625,
        title: "Time Lord",
        developer: "Rare",
        publisher: "Milton Bradley Company",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 626,
        title: "Times of Lore",
        developer: "Toho",
        publisher: "Toho",
        release_year: "May 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 627,
        title: "Tiny Toon Adventures",
        developer: "Konami",
        publisher: "Konami",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 628,
        title: "Tiny Toon Adventures 2: Trouble in Wackyland",
        developer: "Konami",
        publisher: "Konami",
        release_year: "April 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 629,
        title: "Tiny Toon Adventures Cartoon Workshop",
        developer: "Novotrade International",
        publisher: "Konami",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 630,
        title: "To the Earth",
        developer: "Cirque Verte",
        publisher: "Nintendo",
        release_year: "November 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 631,
        title: "Toki",
        developer: "Daiei Seisakusho",
        publisher: "Taito",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 632,
        title: "Tom and Jerry",
        developer: "Software Creations",
        publisher: "Hi Tech Expressions",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 633,
        title: "Tombs & Treasure",
        developer: "Compile",
        publisher: "Activision",
        release_year: "June 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 634,
        title: "Top Gun",
        developer: "Konami",
        publisher: "Konami",
        release_year: "November 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 635,
        title: "Top Gun: The Second Mission",
        developer: "Konami",
        publisher: "Konami",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 636,
        title: "Top Players' Tennis (NA)\nFour Players' Tennis (EU)",
        developer: "Home Data",
        publisher: "Asmik",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 637,
        title: "Total Recall",
        developer: "Interplay Entertainment",
        publisher: "Acclaim Entertainment",
        release_year: "August 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 638,
        title: "Totally Rad",
        developer: "Aicom",
        publisher: "Jaleco",
        release_year: "March 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 639,
        title: "Touch Down Fever",
        developer: "SNK",
        publisher: "SNK",
        release_year: "February 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 640,
        title: "Town & Country Surf Designs: Wood & Water Rage",
        developer: "Atlus",
        publisher: "LJN",
        release_year: "February 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 641,
        title: "Town & Country II: Thrilla's Surfari",
        developer: "Sculptured Software",
        publisher: "Acclaim Entertainment",
        release_year: "March 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 642,
        title: "Toxic Crusaders",
        developer: "TOSE",
        publisher: "Bandai",
        release_year: "April 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 643,
        title: "Track & Field (NA)\nTrack & Field in Barcelona (EU)",
        developer: "Konami",
        publisher: "Konami",
        release_year: "April 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 644,
        title: "Track & Field II",
        developer: "Konami",
        publisher: "Konami",
        release_year: "June 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 645,
        title: "Treasure Master",
        developer: "Software Creations",
        publisher: "American Softworks",
        release_year: "December 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 646,
        title: "Trog!",
        developer: "Visual Concepts",
        publisher: "Acclaim Entertainment",
        release_year: "October 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 647,
        title: "Trojan",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "February 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 648,
        title: "The Trolls in Crazyland",
        developer: "KID",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 649,
        title: "Twin Cobra",
        developer: "Toaplan",
        publisher: "American Sammy",
        release_year: "January 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 650,
        title: "Twin Eagle",
        developer: "SETA",
        publisher: "Romstar",
        release_year: "October 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 651,
        title: "Ufouria: The Saga",
        developer: "Sunsoft",
        publisher: "Unreleased",
        release_year: "Unreleased",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 652,
        title: "Ultima III: Exodus",
        developer: "Newtopia Planning",
        publisher: "FCI",
        release_year: "February 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 653,
        title: "Ultima IV: Quest of the Avatar",
        developer: "Atelier Double, Infinity",
        publisher: "FCI",
        release_year: "December 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 654,
        title: "Ultima V: Warriors of Destiny",
        developer: "Origin Systems",
        publisher: "FCI",
        release_year: "January 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 655,
        title: "Ultimate Air Combat",
        developer: "Activision",
        publisher: "Activision",
        release_year: "April 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 656,
        title: "Ultimate Basketball",
        developer: "Aicom",
        publisher: "American Sammy",
        release_year: "September 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 657,
        title: "The Uncanny X-Men",
        developer: "Atlus",
        publisher: "LJN",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 658,
        title: "Uncharted Waters",
        developer: "Koei",
        publisher: "Koei",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 659,
        title: "Uninvited",
        developer: "Kemco",
        publisher: "Seika",
        release_year: "June 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 660,
        title: "The Untouchables",
        developer: "Special FX",
        publisher: "Ocean Software",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 661,
        title: "Urban Champion",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "August 1986",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 662,
        title: "Vegas Dream",
        developer: "HAL America",
        publisher: "HAL America",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 663,
        title: "Vice: Project Doom",
        developer: "Aicom",
        publisher: "American Sammy",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 664,
        title: "Videomation",
        developer: "FarSight Studios",
        publisher: "THQ",
        release_year: "June 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 665,
        title: "Volleyball",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "March 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 666,
        title: "Wacky Races",
        developer: "Eidos",
        publisher: "Atlus",
        release_year: "May 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 667,
        title: "Wall Street Kid",
        developer: "SOFEL",
        publisher: "SOFEL",
        release_year: "June 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 668,
        title: "Wario's Woods",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "December 10, 1994",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 669,
        title: "Wayne Gretzky Hockey",
        developer: "Bethesda Softworks",
        publisher: "THQ",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 670,
        title: "Wayne's World",
        developer: "Radical Entertainment",
        publisher: "THQ",
        release_year: "November 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 671,
        title: "WCW Wrestling",
        developer: "Nichibutsu",
        publisher: "FCI",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 672,
        title: "Werewolf: The Last Warrior",
        developer: "Data East, Sakata SAS",
        publisher: "Data East",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 673,
        title: "Wheel of Fortune",
        developer: "Sharedata",
        publisher: "GameTek",
        release_year: "September 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 674,
        title: "Wheel of Fortune Family Edition",
        developer: "Sharedata",
        publisher: "GameTek",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 675,
        title: "Wheel of Fortune: Featuring Vanna White",
        developer: "Sharedata",
        publisher: "GameTek",
        release_year: "January 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 676,
        title: "Wheel of Fortune Junior Edition",
        developer: "Sharedata",
        publisher: "GameTek",
        release_year: "October 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 677,
        title: "Where in Time Is Carmen Sandiego?",
        developer: "Distinctive Software",
        publisher: "Konami",
        release_year: "October 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 678,
        title: "Where's Waldo?",
        developer: "Bethesda Softworks",
        publisher: "THQ",
        release_year: "September 17, 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 679,
        title: "Who Framed Roger Rabbit",
        developer: "Rare",
        publisher: "LJN",
        release_year: "September 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 680,
        title: "Whomp 'Em",
        developer: "Jaleco",
        publisher: "Jaleco",
        release_year: "March 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 681,
        title: "Widget",
        developer: "Graphic Research",
        publisher: "Atlus",
        release_year: "November 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 682,
        title: "Wild Gunman",
        developer: "Nintendo, Intelligent Systems",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 683,
        title: "Willow",
        developer: "Capcom",
        publisher: "Capcom",
        release_year: "December 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 684,
        title: "Win, Lose, or Draw",
        developer: "RSP Inc.",
        publisher: "Hi Tech Expressions",
        release_year: "March 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 685,
        title: "Winter Games",
        developer: "Atelier Double",
        publisher: "Acclaim Entertainment",
        release_year: "September 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 686,
        title: "Wizardry: Proving Grounds of the Mad Overlord",
        developer: "Sir-Tech",
        publisher: "ASCII",
        release_year: "July 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 687,
        title: "Wizardry II: The Knight of Diamonds",
        developer: "Sir-Tech",
        publisher: "ASCII",
        release_year: "April 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 688,
        title: "Wizards & Warriors",
        developer: "Rare",
        publisher: "Acclaim Entertainment",
        release_year: "December 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 689,
        title: "Wizards & Warriors III: Kuros: Visions of Power (NA)\nWizards & Warriors III (EU)",
        developer: "Rare, Zippo Games",
        publisher: "Acclaim Entertainment",
        release_year: "March 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 690,
        title: "Wolverine",
        developer: "Software Creations",
        publisher: "LJN",
        release_year: "October 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 691,
        title: "World Champ",
        developer: "???",
        publisher: "Romstar",
        release_year: "April 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 692,
        title: "World Class Track Meet",
        developer: "Human Entertainment",
        publisher: "Nintendo",
        release_year: "August 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 693,
        title: "World Games",
        developer: "Rare",
        publisher: "Milton Bradley Company",
        release_year: "March 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 694,
        title: "Wrath of the Black Manta",
        developer: "AI",
        publisher: "Taito",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 695,
        title: "Wrecking Crew",
        developer: "Nintendo Research & Development 1",
        publisher: "Nintendo",
        release_year: "October 18, 1985",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 696,
        title: "Wurm: Journey to the Center of the Earth",
        developer: "Cyclone System",
        publisher: "Asmik",
        release_year: "November 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 697,
        title: "WWF King of the Ring",
        developer: "Gray Matter Inc., Eastridge Technology",
        publisher: "LJN",
        release_year: "November 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 698,
        title: "WWF WrestleMania",
        developer: "Rare",
        publisher: "Acclaim Entertainment",
        release_year: "January 1989",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 699,
        title: "WWF WrestleMania Challenge",
        developer: "Rare",
        publisher: "LJN",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 700,
        title: "WWF WrestleMania: Steel Cage Challenge",
        developer: "Sculptured Software",
        publisher: "LJN",
        release_year: "September 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 701,
        title: "Xenophobe",
        developer: "Sunsoft",
        publisher: "Sunsoft",
        release_year: "December 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 702,
        title: "Xevious",
        developer: "Namco",
        publisher: "Bandai",
        release_year: "September 1988",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 703,
        title: "Xexyz",
        developer: "Atlus",
        publisher: "Hudson Soft",
        release_year: "April 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 704,
        title: "Yo! Noid",
        developer: "Now Production",
        publisher: "Capcom",
        release_year: "November 1990",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 705,
        title: "Yoshi (NA)\nMario & Yoshi (EU)",
        developer: "Game Freak",
        publisher: "Nintendo",
        release_year: "June 1, 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 706,
        title: "Yoshi's Cookie",
        developer: "Bullet-Proof Software",
        publisher: "Nintendo",
        release_year: "April 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 707,
        title: "The Young Indiana Jones Chronicles",
        developer: "Jaleco",
        publisher: "Jaleco",
        release_year: "December 1992",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 708,
        title: "Zanac",
        developer: "Compile",
        publisher: "FCI",
        release_year: "October 1987",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 709,
        title: "Zelda II: The Adventure of Link",
        developer: "Nintendo Research & Development 4",
        publisher: "Nintendo",
        release_year: "December 1, 1988",
        genre: '',
        console_id: 2,
        cover_picture: 'https://upload.wikimedia.org/wikipedia/pt/3/33/Zelda_2_The_Adventure_of_Link_capa.png'
      },
      {
        game_id: 710,
        title: "Zen the Intergalactic Ninja",
        developer: "Konami",
        publisher: "Konami",
        release_year: "March 1993",
        genre: '',
        console_id: 2,
        cover_picture: ''
      },
      {
        game_id: 711,
        title: "Zoda's Revenge: StarTropics II",
        developer: "Nintendo Research & Development 3",
        publisher: "Nintendo",
        release_year: "March 1994",
        genre: '',
        console_id: 2,
        cover_picture: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Zodasrevenge_box.PNG'
      },
      {
        game_id: 712,
        title: "Zombie Nation",
        developer: "KAZe",
        publisher: "Meldac",
        release_year: "January 1991",
        genre: '',
        console_id: 2,
        cover_picture: ''
      }
    ]));
};
