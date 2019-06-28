/* eslint-disable */
const tableName = 'games';
exports.seed = knex => populateWithNesGames(knex);

async function populateWithNesGames(knex) {
    await knex.raw('SELECT setval(\'games_game_id_seq\', (SELECT MAX(game_id) from "games"));');
    await knex(tableName).where('console_id', 13).del();
    await knex(tableName).insert([
        {
            title: "Ace Combat: Assault Horizon Legacy",
            developer: "Bandai",
            publisher: "Bandai",
            release_year: "15 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Angler's Club: Ultimate Bass Fishing 3D",
            developer: "Tamsoft",
            publisher: "D3 Publisher",
            release_year: "30 de agosto de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Animal Crossing: New Leaf",
            developer: "Nintendo",
            publisher: "Nintendo EAD",
            release_year: "9 de junho de 2013",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Arcade 3D",
            developer: "TBA",
            publisher: "UFO Interactive",
            release_year: "13 de setembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Asphalt 3D",
            developer: "Ubisoft",
            publisher: "Gameloft",
            release_year: "22 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Balloon Pop 2",
            developer: "Dreams",
            publisher: "UFO Interactive",
            release_year: "14 de julho de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Ben 10: Galactic Racing",
            developer: "Monkey Bar Games",
            publisher: "D3 Publisher",
            release_year: "25 de outubro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Bit. Trip Saga",
            release_year: "13 de setembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "BlazBlue: Continuum Shift II",
            developer: "Arc System Works",
            publisher: "Aksys Games",
            release_year: "31 de maio de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Bravely Default: Flying Fairy",
            developer: "TBA",
            publisher: "Square Enix",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Brunswick Pro Bowling",
            developer: "FarSight Studios",
            publisher: "Crave Entertainment",
            release_year: "13 de agosto de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Bust-a-Move Universe",
            developer: "Arika",
            publisher: "Square Enix",
            release_year: "27 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Captain America: Super Soldier",
            developer: "Sega",
            publisher: "Sega Europe",
            release_year: "25 de outubro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Carnival Games: Wild West 3D",
            developer: "Take-Two Interactive",
            publisher: "2K Games",
            release_year: "21 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Cars 2: The Videogame",
            developer: "Avalanche Software",
            publisher: "Disney Interactive",
            release_year: "1 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Cartoon Network: Punch Time Explosion",
            developer: "Papaya Studios",
            publisher: "Crave",
            release_year: "2 de junho de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Castlevania: Mirror of Fate",
            developer: "Mercury Steam",
            publisher: "Konami",
            release_year: "5 de março de 2013",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Cave Story 3D",
            developer: "Nicalis",
            publisher: "NIS America",
            release_year: "8 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Centipede: Infestation",
            developer: "WayForward",
            publisher: "Atari",
            release_year: "1 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Combat of Giants: Dinosaurs 3D",
            developer: "TBA",
            publisher: "Ubisoft",
            release_year: "22 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Crosswords Plus",
            developer: "TBA",
            publisher: "Nintendo",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Crush 3D",
            developer: "TBA",
            publisher: "Sega",
            release_year: "21 de fevereiro de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Cubic Ninja",
            developer: "AQ Interactive",
            publisher: "Ubisoft",
            release_year: "14 de junho de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Dead or Alive: Dimensions",
            developer: "Team Ninja",
            publisher: "Koei",
            release_year: "24 de maio de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Deca Sports Extreme",
            developer: "Hudson Soft",
            publisher: "Hudson",
            release_year: "13 de setembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Doctor Lautrec and the Forgotten Knights",
            developer: "TBA",
            publisher: "Konami",
            release_year: "6 de dezembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Donkey Kong Country Returns 3D",
            developer: "Monster Games",
            publisher: "Nintendo",
            release_year: "24 de maio de 2013",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Dragon Ball Z Extreme Butoden",
            developer: "TBA",
            publisher: "Bandai",
            release_year: "20 de outubro de 2015",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Dream Trigger 3D",
            developer: "D3 Publisher",
            publisher: "D3 Publisher",
            release_year: "10 de maio de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Driver: Renegade",
            developer: "TBA",
            publisher: "Ubisoft",
            release_year: "6 de setembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "DualPenSports",
            developer: "Indies Zero",
            publisher: "Bandai",
            release_year: "21 de junho de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Dynasty Warriors VS",
            developer: "TBA",
            publisher: "Koei",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "F1 2011",
            developer: "Sumo Digital",
            publisher: "Codemasters",
            release_year: "25 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Face Racers: Photo Finish",
            release_year: "1 de dezembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Fantasy Life",
            developer: "Brownie Brown",
            publisher: "Level 5",
            release_year: "2013",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "FIFA 12",
            developer: "EA Sports",
            publisher: "Eletronic Arts",
            release_year: "27 de setembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "FIFA 13",
            developer: "EA Sports",
            publisher: "Eletronic Arts",
            release_year: "25 de setembro de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Fire Emblem: Awakening",
            developer: "Intelligent Systems",
            publisher: "Nintendo",
            release_year: "4 de fevereiro de 2013",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Frogger 3D",
            developer: "Alpha Unit",
            publisher: "Konami",
            release_year: "20 de setembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Gabrielle's Ghostly Groove 3D",
            developer: "Santa Entertainment",
            publisher: "Natsume",
            release_year: "3 de fevereiro de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Generator Rex: Agent of Providence",
            developer: "Virtuos",
            publisher: "Activision",
            release_year: "1 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Girls RPG: Cinderellife",
            developer: "TBA",
            publisher: "Level 5",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Green Lantern: Rise of the Manhunters",
            developer: "Griptonite Games",
            publisher: "Warner Bros.",
            release_year: "7 de junho de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Happy Feet Two: The Videogame",
            developer: "WayForward",
            publisher: "Warner Bros.",
            release_year: "8 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Harvest Moon: The Tale of Two Towns",
            release_year: "1 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Hatsune Miku: Project Mirai",
            developer: "Heroes of Ruin",
            publisher: "n-Space",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Hyrule Warriors Legends",
            developer: "TBA",
            publisher: "TBA",
            release_year: "2016",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "The Hidden",
            developer: "1st Playable Prod.",
            publisher: "Majesco Games",
            release_year: "3 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "James Noir's Hollywood Crimes",
            developer: "Ubisoft",
            publisher: "Ubisoft",
            release_year: "1 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "JAWS: Ultimate Predator",
            release_year: "1 de dezembro de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Kid Icarus: Uprising",
            developer: "Project Sora",
            publisher: "Nintendo EAD",
            release_year: "23 de março de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "King of Pirates[9]",
            developer: "Interceptor",
            publisher: "MarvelousAQL",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "The Legend of Zelda: Ocarina of Time 3D",
            developer: "GREZZO",
            publisher: "Nintendo EAD",
            release_year: "19 de junho de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "LEGO Harry Potter: Years 5-7",
            developer: "Traveller's Tales",
            publisher: "Warner Bros.",
            release_year: "11 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "LEGO Pirates of the Caribbean: The Video Game",
            developer: "Traveller's Tales",
            publisher: "Disney Interactive Studios",
            release_year: "10 de maio de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "LEGO Star Wars III: The Clone Wars",
            developer: "Traveller's Tales",
            publisher: "LucasArts",
            release_year: "27 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Luigi's Mansion: Dark Moon",
            developer: "Next Level Games",
            publisher: "Nintendo EAD",
            release_year: "24 de março de 2013",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Madden NFL Football",
            developer: "EA Tiburon",
            publisher: "Eletronic Arts",
            release_year: "22 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Mahjong Cub3d",
            developer: "SunSoft",
            publisher: "Atlus Co.",
            release_year: "11 de outubro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Mario & Sonic at the London 2012 Olympic Games",
            developer: "Nintendo",
            publisher: "Sega",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Mario Kart 7",
            developer: "Retro Studios",
            publisher: "Nintendo",
            release_year: "4 de dezembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Mario Tennis Open",
            developer: "Camelot Software Planning",
            publisher: "Nintendo",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Marvel Super Hero Squad: Infinity Gauntlet",
            developer: "Griptonite Games",
            publisher: "THQ",
            release_year: "11 de outubro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Metal Gear Solid: Snake Eater 3D",
            developer: "Kojima Productions",
            publisher: "Konami",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Michael Jackson: The Experience",
            developer: "Ubisoft",
            publisher: "Ubisoft",
            release_year: "8 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Monster Hunter 3 Ultimate",
            developer: "Capcom",
            release_year: "19 de março de 2013",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Nano Assault",
            developer: "Shin'en",
            publisher: "Majesco Games",
            release_year: "1 de dezembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Need for Speed: The Run",
            developer: "Black Box",
            publisher: "Eletronic Arts",
            release_year: "15 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "New Super Mario Bros. 2",
            developer: "Nintendo",
            publisher: "Sega",
            release_year: "19 de agosto de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Nintendogs + Cats",
            developer: "Nintendo",
            publisher: "Nintendo EAD",
            release_year: "27 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Order Up!!",
            developer: "SuperVillain Studios",
            publisher: "Ignition Entertainment",
            release_year: "17 de janeiro de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Pac-Man & Galaga Dimensions",
            developer: "Bandai",
            publisher: "Bandai",
            release_year: "26 de julho de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Pac-Man Party 3D[11]",
            developer: "Bandai",
            publisher: "Bandai",
            release_year: "11 de agosto de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Paper Mario Sticker Star",
            developer: "Intelligent Systems",
            publisher: "Nintendo EAD",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Petz Fantasy 3D",
            developer: "Ubisoft",
            publisher: "Ubisoft",
            release_year: "21 de junho de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Pilotwings Resort",
            developer: "Monster Games Inc.",
            publisher: "Nintendo EAD",
            release_year: "27 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Pinball Hall of Fame: The Williams Collection",
            developer: "FarSight Studios",
            publisher: "Crave Entertainment",
            release_year: "23 de setembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Pokémon Mystery Dungeon: Magnagate and the Infinite Labyrinth",
            developer: "Chunsoft",
            publisher: "Nintendo",
            release_year: "24 de Março de 2013",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Pokémon Rumble Blast",
            developer: "Ambrella",
            publisher: "Nintendo",
            release_year: "24 de outubro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Pro Evolution Soccer 2011 3D",
            developer: "Konami",
            publisher: "Konami",
            release_year: "25 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Pro Evolution Soccer 2012 3D[12]",
            developer: "Konami",
            publisher: "Konami",
            release_year: "21 de fevereiro de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Professor Layton and the Mask of Miracles",
            developer: "Level 5",
            publisher: "Level 5",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Rabbids: Travel in Time 3D",
            developer: "Ubisoft",
            publisher: "Ubisoft",
            release_year: "10 de abril de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Rayman 3D",
            developer: "Ubisoft",
            publisher: "Ubisoft",
            release_year: "22 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Rayman Origins[13]",
            developer: "Ubisoft",
            publisher: "Ubisoft",
            release_year: "20 de março de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Reel Fishing Paradise 3D",
            developer: "Funbox Media",
            publisher: "Natsume",
            release_year: "21 de junho de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Resident Evil: Revelations",
            developer: "Capcom",
            publisher: "Capcom",
            release_year: "7 de fevereiro de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Resident Evil: The Mercenaries 3D",
            developer: "Capcom",
            publisher: "Capcom",
            release_year: "28 de junho de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Rhythm Thief & the Emperor's Treasure",
            developer: "Sega",
            publisher: "Sega",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Ridge Racer 3D",
            developer: "Bandai",
            publisher: "Bandai",
            release_year: "22 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "RollerCoaster Tycoon 3D",
            developer: "n-Space",
            publisher: "Atari",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Runabout 3D: Drive: Impossible",
            developer: "Rocket Company",
            publisher: "Rocket Company",
            release_year: "19 de janeiro de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Rune Factory 4",
            developer: "Neverland",
            publisher: "Marvelous",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Samurai Warriors Chronicles",
            developer: "Omega Force",
            publisher: "Koei Tecmo Games",
            release_year: "27 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Shin Megami Tensei IV",
            developer: "TBA",
            publisher: "Atlus Co.",
            release_year: "16 de julho de 2013",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Shin Megami Tensei: Devil Survivor Overclocked",
            developer: "Atlus",
            publisher: "Atlus",
            release_year: "23 de agosto de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Shinobi 3DS",
            developer: "Griptonite Games",
            publisher: "Sega",
            release_year: "15 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Spirit Camera''[14]",
            developer: "Tecmo",
            publisher: "Nintendo",
            release_year: "13 de abril de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Shovel Knight[15]",
            developer: "Yacht Club Games",
            publisher: "Yacht Club Games",
            release_year: "26 de junho de 2014",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "The Sims 3",
            developer: "Visceral Games",
            publisher: "EA Games",
            release_year: "22 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "The Sims 3: Pets",
            developer: "The Sims Studio",
            publisher: "Eletronic Arts",
            release_year: "18 de outubro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Skylanders: Spyro's Adventure",
            developer: "Vicarious Visions",
            publisher: "Activision",
            release_year: "16 de outubro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Sonic Generations",
            developer: "Sonic Team",
            publisher: "Sega",
            release_year: "22 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Spider-Man: Edge of Time",
            developer: "Beenox",
            publisher: "Activision",
            release_year: "4 de outubro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "SpongeBob Squigglepants 3D",
            developer: "WayForward",
            publisher: "THQ",
            release_year: "17 de maio de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Star Fox 64 3D",
            developer: "Q-Games",
            publisher: "Nintendo",
            release_year: "9 de setembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Steel Diver",
            developer: "Nintendo",
            publisher: "Nintendo EAD",
            release_year: "27 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Super Mario 3D Land",
            developer: "Nintendo",
            publisher: "Nintendo EAD",
            release_year: "13 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Super Monkey Ball 3D",
            developer: "Amusement Vision",
            publisher: "Sega",
            release_year: "27 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Super Smash Bros. for Nintendo 3DS and Wii U[16]",
            developer: "Sora Ltd.\nNamco Bandai",
            publisher: "Nintendo",
            release_year: "21 de novembro de 2014",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Super Street Fighter IV: 3D Edition",
            developer: "Dimps",
            publisher: "Capcom",
            release_year: "27 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Tales of the Abyss",
            developer: "Bandai",
            publisher: "Bandai",
            release_year: "14 de fevereiro de 2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Tekken 3D: Prime Edition",
            developer: "Bandai",
            publisher: "Bandai",
            release_year: "2012",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Tetris Axis",
            developer: "Hudson",
            publisher: "Tetris Online, Inc.",
            release_year: "2 de outubro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Thor: God of Thunder",
            developer: "Red Fly Studio",
            publisher: "Sega",
            release_year: "13 de setembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Tom Clancy's Ghost Recon: Shadow Wars",
            developer: "Ubisoft",
            publisher: "Ubisoft",
            release_year: "22 de março de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Tom Clancy's Splinter Cell 3D",
            developer: "Ubisoft",
            publisher: "Ubisoft",
            release_year: "10 de abril de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Transformers: Dark of the Moon - Stealth Force Edition",
            developer: "Behavior Interactive",
            publisher: "Activision",
            release_year: "14 de junho de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "WWE All Stars",
            developer: "Subdued Software",
            publisher: "THQ",
            release_year: "22 de novembro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        },
        {
            title: "Zoo Resort 3D",
            developer: "AQ Interactive",
            publisher: "Ubisoft",
            release_year: "25 de outubro de 2011",
            genre: '',
            console_id: 13,
            cover_picture: ''
        }
    ]);
}
