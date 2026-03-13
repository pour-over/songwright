export const GENRE_TAGS = {
  electronic_dance: [
    "Acid Jazz", "Ambient", "Bass House", "Brostep", "Chillwave", "Club", "Cyberpunk",
    "Dance", "Dance Pop", "Dark Ambient", "Dark Electro", "Deep House", "Deep Techno",
    "Downtempo", "Drone", "Dub", "Dub Techno", "Dubstep", "EDM", "Electro",
    "Electro Swing", "Electroacoustic", "Electronic", "Electropop", "Eurodance",
    "French House", "Future Bass", "Future Garage", "Future House", "Gabber",
    "Glitch", "Glitch Hop", "Glitch Pop", "Goa Trance", "Happy Hardcore",
    "Hardstyle", "House", "Hyperpop", "IDM", "Industrial", "Jungle",
    "Minimal Techno", "Moombahton", "Neurofunk", "Nu Disco", "Post-Disco",
    "Post-Dubstep", "Progressive House", "Psybient", "Psychedelic Trance",
    "Rave", "Space Disco", "Synthwave", "Tech House", "Techno", "Trance",
    "Trip Hop", "Tropical House", "UK Funky", "UK Garage", "Vaporwave",
    "Vocal House", "Vocal Trance", "Witch House"
  ],
  hip_hop_rap: [
    "Crunk", "Hip Hop", "Mumble Rap", "Pop Rap", "Rap", "Trap", "UK Drill",
    "West Coast Rap", "Jazz Rap", "Boom Bap", "Lo-fi Hip Hop", "Conscious Hip Hop",
    "Gangsta Rap", "Southern Hip Hop", "East Coast Hip Hop", "Underground Hip Hop",
    "Nerdcore"
  ],
  jazz_blues: [
    "Bebop", "Big Band", "Blues", "Cool Jazz", "Dark Jazz", "Delta Blues",
    "Gypsy Jazz", "Hard Bop", "Jazz", "Jazz Fusion", "Latin Jazz", "Modal Jazz",
    "New Orleans Jazz", "Nu Jazz", "Piano Blues", "Piedmont Blues", "Post-Bop",
    "Punk Blues", "Smooth Jazz", "Soul Jazz", "Swing"
  ],
  rock_metal: [
    "Alternative Rock", "Arena Rock", "Art Rock", "Black Metal", "Blues Rock",
    "Classic Rock", "Death Metal", "Doom Metal", "Emo", "Garage Rock",
    "Glam Rock", "Gothic Rock", "Grunge", "Hair Metal", "Hard Rock",
    "Heavy Metal", "Indie Rock", "Math Rock", "Metal", "Metalcore",
    "New Wave", "Noise Rock", "Nu Metal", "Post-Hardcore", "Post-Punk",
    "Post-Rock", "Progressive Metal", "Progressive Rock", "Psychedelic Rock",
    "Punk", "Punk Rock", "Shoegaze", "Skate Punk", "Sludge Metal",
    "Soft Rock", "Southern Rock", "Stoner Rock", "Surf Rock", "Thrash Metal"
  ],
  pop_contemporary: [
    "Adult Contemporary", "Avant-garde", "Bedroom", "Broadway", "Disco",
    "Disco Funk", "Dream Pop", "Europop", "Funk", "Indie", "Indie Pop",
    "J-pop", "K-pop", "Latin Pop", "Lounge", "Motown", "Neon Pop",
    "Noise Pop", "Pop", "Pop Punk", "Pop Rock", "Power Pop",
    "Psychedelic Pop", "R&B", "Contemporary R&B", "Singer-Songwriter",
    "Soul", "Synth-pop"
  ],
  folk_country: [
    "Acoustic", "Alt-Country", "Americana", "Appalachian", "Bluegrass",
    "Celtic", "Country", "Country Rock", "Folk", "Folk Pop", "Folk Rock",
    "Honky Tonk", "Irish Folk", "Nashville Sound", "Neo-Folk",
    "Outlaw Country", "Traditional Folk"
  ],
  world_cultural: [
    "Afrobeat", "Arabian", "Bossa Nova", "Calypso", "Celtic", "Cumbia",
    "Dancehall", "Flamenco", "Forro", "Highlife", "Indian Classical",
    "Klezmer", "Latin", "Mariachi", "Mediterranean", "Middle Eastern",
    "Persian", "Polka", "Reggae", "Reggaeton", "Salsa", "Samba",
    "Soca", "Tango", "Zouk"
  ],
  classical_orchestral: [
    "Baroque", "Chamber Music", "Choral", "Classical", "Contemporary Classical",
    "Film Score", "Impressionist", "Minimalist", "Neo-Classical", "Opera",
    "Orchestral", "Romantic", "Symphony"
  ],
  soundtrack_theme: [
    "Audiobook Background", "Background", "Cinematic", "Movie Soundtrack",
    "Score", "Spaghetti Western", "TV Themes", "Video Game Music", "Villain Theme"
  ],
  experimental: [
    "Avant-garde Jazz", "Dark Cabaret", "Dungeon Synth", "Experimental",
    "Harsh Noise", "Martial Industrial", "Musique Concrète", "Noise",
    "No Wave", "Power Electronics", "Sound Art", "Sound Collage", "Tape Music"
  ],
  vocal_choral: [
    "Acapella", "Barbershop", "Beatboxing", "Choir", "Christmas Carol",
    "Doo Wop", "Gregorian Chant", "Throat Singing", "Vocal", "Vocal Jazz",
    "Vocaloid"
  ]
};

// Flat array of all tags
export const ALL_TAGS = Object.values(GENRE_TAGS).flat();

// Fuzzy search across all categories
export function searchTags(query) {
  const q = query.toLowerCase();
  return ALL_TAGS.filter(tag => tag.toLowerCase().includes(q));
}

// Get related tags (same category)
export function getRelatedTags(tag) {
  for (const [category, tags] of Object.entries(GENRE_TAGS)) {
    if (tags.some(t => t.toLowerCase() === tag.toLowerCase())) {
      return tags.filter(t => t.toLowerCase() !== tag.toLowerCase());
    }
  }
  return [];
}
