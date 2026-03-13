// genreDatabase.js — Songwright genre reference for Suno V5 prompt generation
// 67 genres with BPM-aware lyrical density guidance

export const genreDatabase = {
  // ═══════════════════════════════════════════
  // ROCK & RELATED
  // ═══════════════════════════════════════════
  rock: {
    name: "Rock",
    defaultLinesPerVerse: 6,
    bpmRange: "110-130",
    densityNotes: "130-140: 4 lines. 120 BPM sweet spot",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Direct, energetic, emotionally charged with strong hooks",
  },
  alternative: {
    name: "Alternative",
    defaultLinesPerVerse: 6,
    bpmRange: "110-130",
    densityNotes: "<110: up to 8. 130-140: 4. Quiet-loud dynamics",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Introspective, unconventional imagery, shifts between soft and intense",
  },
  "indie-rock": {
    name: "Indie Rock",
    defaultLinesPerVerse: 6,
    bpmRange: "110-120",
    densityNotes: "100-110: up to 8. 120-130: 4-6",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Conversational, clever, slightly detached observation",
  },
  "garage-rock": {
    name: "Garage Rock",
    defaultLinesPerVerse: 4,
    bpmRange: "120-140",
    densityNotes: "140-160: 3-4. Repetition over variety",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Raw, lo-fi, primal energy with simple repeated phrases",
  },
  grunge: {
    name: "Grunge",
    defaultLinesPerVerse: 6,
    bpmRange: "110-120",
    densityNotes: "<100: up to 8. Keep raw/sparse",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Angst-driven, disaffected, layered meaning under rough delivery",
  },
  punk: {
    name: "Punk",
    defaultLinesPerVerse: 4,
    bpmRange: "150-180",
    densityNotes: "160+: 2-3 lines. NEVER exceed 4",
    defaultRhymeScheme: "AABB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Aggressive, anti-establishment, fast and blunt",
  },
  "hardcore-punk": {
    name: "Hardcore Punk",
    defaultLinesPerVerse: "2-3",
    bpmRange: "180-220+",
    densityNotes: "Extreme tempo, barely intelligible",
    defaultRhymeScheme: "AABB",
    topicsPerVerse: "1",
    lyricalCharacter: "Screamed, furious, sloganeering bursts of rage",
  },
  emo: {
    name: "Emo",
    defaultLinesPerVerse: 6,
    bpmRange: "110-140",
    densityNotes: "<115: up to 8. Fast emo-punk 140-160: 4",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Confessional, vulnerable, emotionally overwrought sincerity",
  },
  "post-rock": {
    name: "Post-Rock",
    defaultLinesPerVerse: "2-4",
    bpmRange: "variable",
    densityNotes: "Often fully instrumental",
    defaultRhymeScheme: "Free",
    topicsPerVerse: "1",
    lyricalCharacter: "Sparse poetic fragments amid sweeping instrumental passages",
  },
  "progressive-rock": {
    name: "Progressive Rock",
    defaultLinesPerVerse: "8-10",
    bpmRange: "variable",
    densityNotes: "THE EXCEPTION. 90-110: up to 12. 130+: 6-8",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "3-4",
    lyricalCharacter: "Epic, literary, concept-driven narratives with complex structure",
  },
  "psychedelic-rock": {
    name: "Psychedelic Rock",
    defaultLinesPerVerse: 6,
    bpmRange: "100-120",
    densityNotes: "<100: up to 8. Surreal imagery OK",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Surreal, stream-of-consciousness, vivid hallucinatory imagery",
  },
  shoegaze: {
    name: "Shoegaze",
    defaultLinesPerVerse: 4,
    bpmRange: "80-110",
    densityNotes: "Vocals are texture, not focus",
    defaultRhymeScheme: "Free",
    topicsPerVerse: "1",
    lyricalCharacter: "Dreamy, buried in reverb, impressionistic and blurred",
  },
  "surf-rock": {
    name: "Surf Rock",
    defaultLinesPerVerse: 4,
    bpmRange: "130-160",
    densityNotes: "Often instrumental",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Breezy, carefree, sun-and-waves imagery when vocals appear",
  },
  "new-wave": {
    name: "New Wave",
    defaultLinesPerVerse: "4-6",
    bpmRange: "110-130",
    densityNotes: "130-140: 4",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Quirky, synth-tinged, artful and slightly ironic",
  },
  "celtic-punk": {
    name: "Celtic Punk",
    defaultLinesPerVerse: "4-6",
    bpmRange: "130-160",
    densityNotes: "150+: 4. Singalong choruses",
    defaultRhymeScheme: "AABB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Rousing, pub-anthem energy, folk storytelling meets punk defiance",
  },
  "ska-punk": {
    name: "Ska Punk",
    defaultLinesPerVerse: 4,
    bpmRange: "140-170",
    densityNotes: "Horn sections need room",
    defaultRhymeScheme: "AABB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Upbeat, politically aware, bouncy rhythms with punchy phrasing",
  },
  "piano-rock": {
    name: "Piano Rock",
    defaultLinesPerVerse: 6,
    bpmRange: "100-120",
    densityNotes: "Ballad <100: up to 8",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Melodic, emotive, piano-driven storytelling with dramatic builds",
  },

  // ═══════════════════════════════════════════
  // METAL
  // ═══════════════════════════════════════════
  metal: {
    name: "Metal",
    defaultLinesPerVerse: "6-8",
    bpmRange: "100-140",
    densityNotes: "Vocal delivery compresses syllables",
    defaultRhymeScheme: "ABAB or free",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Powerful, dark imagery, guttural intensity with mythic themes",
  },
  "black-metal": {
    name: "Black Metal",
    defaultLinesPerVerse: "6-8",
    bpmRange: "130-200",
    densityNotes: "Atmospheric alternates with blasts",
    defaultRhymeScheme: "ABAB or free",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Occult, atmospheric, shrieked over tremolo-picked walls of sound",
  },
  "doom-metal": {
    name: "Doom Metal",
    defaultLinesPerVerse: 4,
    bpmRange: "60-100",
    densityNotes: "Funeral doom <60: 2-4. NEVER exceed 6",
    defaultRhymeScheme: "ABAB or free",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Slow, crushing, mournful — each word drags through sludge",
  },
  "thrash-metal": {
    name: "Thrash Metal",
    defaultLinesPerVerse: "8-10",
    bpmRange: "150-200+",
    densityNotes: "May rush past 10 lines in Suno",
    defaultRhymeScheme: "ABAB or free",
    topicsPerVerse: "3-4",
    lyricalCharacter: "Rapid-fire aggression, politically charged, machine-gun delivery",
  },
  metalcore: {
    name: "Metalcore",
    defaultLinesPerVerse: "6-8",
    bpmRange: "120-140",
    densityNotes: "Breakdown sections: 2-4 chant-friendly lines",
    defaultRhymeScheme: "ABAB or free",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Alternating screams and clean vocals, emotional intensity with breakdowns",
  },
  industrial: {
    name: "Industrial",
    defaultLinesPerVerse: "4-6",
    bpmRange: "100-130",
    densityNotes: "Mechanical, syllables lock to machine rhythms",
    defaultRhymeScheme: "ABAB or free",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Cold, mechanical, repetitive phrasing that locks to grinding rhythms",
  },

  // ═══════════════════════════════════════════
  // ELECTRONIC & DANCE
  // ═══════════════════════════════════════════
  electronic: {
    name: "Electronic",
    defaultLinesPerVerse: 4,
    bpmRange: "120-140",
    densityNotes: "Vocals are texture. Production is star",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Minimalist, hook-focused, vocals serve the production",
  },
  edm: {
    name: "EDM",
    defaultLinesPerVerse: "2-4",
    bpmRange: "126-132",
    densityNotes: "Festival hooks, minimal verses",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1",
    lyricalCharacter: "Anthemic one-liners, festival-ready singalong hooks",
  },
  house: {
    name: "House",
    defaultLinesPerVerse: 2,
    bpmRange: "120-130",
    densityNotes: "Single ideas looped",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1",
    lyricalCharacter: "Soulful vocal snippets looped over four-on-the-floor groove",
  },
  techno: {
    name: "Techno",
    defaultLinesPerVerse: "1-2",
    bpmRange: "125-150",
    densityNotes: "Minimal/no vocals",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1",
    lyricalCharacter: "Hypnotic, machine-like, words as rhythmic texture if present at all",
  },
  trance: {
    name: "Trance",
    defaultLinesPerVerse: "2-4",
    bpmRange: "128-150",
    densityNotes: "Simple phrases timed to build/drop",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1",
    lyricalCharacter: "Euphoric, uplifting, ethereal phrases riding the build-drop cycle",
  },
  dubstep: {
    name: "Dubstep",
    defaultLinesPerVerse: "2-4",
    bpmRange: "140 (half-time 70)",
    densityNotes: "Bass drops need vocal space",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1",
    lyricalCharacter: "Dark, heavy, vocal lines punctuate between massive bass drops",
  },
  "drum-and-bass": {
    name: "Drum and Bass",
    defaultLinesPerVerse: "2-4",
    bpmRange: "160-180",
    densityNotes: "Fastest electronic genre",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1",
    lyricalCharacter: "Rapid-fire or soulful vocals over breakneck rhythms",
  },
  synthwave: {
    name: "Synthwave",
    defaultLinesPerVerse: "4-6",
    bpmRange: "90-120",
    densityNotes: "Retro 80s movie soundtrack feel",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Nostalgic, neon-lit, retro-futuristic 80s movie atmosphere",
  },
  ambient: {
    name: "Ambient",
    defaultLinesPerVerse: "0-2",
    bpmRange: "60-100",
    densityNotes: "Often instrumental",
    defaultRhymeScheme: "Free",
    topicsPerVerse: "1",
    lyricalCharacter: "Barely-there whispers, words dissolve into soundscape",
  },
  chillwave: {
    name: "Chillwave",
    defaultLinesPerVerse: "2-4",
    bpmRange: "80-110",
    densityNotes: "Hazy, nostalgic",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1",
    lyricalCharacter: "Sun-bleached, washed-out, lazy summer afternoon feeling",
  },
  "lo-fi": {
    name: "Lo-Fi",
    defaultLinesPerVerse: "2-4",
    bpmRange: "60-90",
    densityNotes: "Chill study-music aesthetic",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1",
    lyricalCharacter: "Gentle, murmured, warm analog texture over mellow beats",
  },
  vaporwave: {
    name: "Vaporwave",
    defaultLinesPerVerse: "0-2",
    bpmRange: "60-90",
    densityNotes: "Slowed, chopped samples",
    defaultRhymeScheme: "Free",
    topicsPerVerse: "1",
    lyricalCharacter: "Ironic, consumer-culture pastiche, slowed and distorted fragments",
  },
  hyperpop: {
    name: "Hyperpop",
    defaultLinesPerVerse: 3,
    bpmRange: "140-170",
    densityNotes: "160+: 2-3. Fragment ideas",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1",
    lyricalCharacter: "Glitchy, maximal, pitch-shifted chaos with fragmented phrases",
  },
  disco: {
    name: "Disco",
    defaultLinesPerVerse: "4-6",
    bpmRange: "110-130",
    densityNotes: "Four-on-the-floor, dancefloor clarity",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Glamorous, celebratory, dancefloor joy with clear vocal hooks",
  },
  "trip-hop": {
    name: "Trip-Hop",
    defaultLinesPerVerse: "4-6",
    bpmRange: "80-100",
    densityNotes: "More lyrical than other electronic",
    defaultRhymeScheme: "Free or AABB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Moody, cinematic, smoky atmosphere with spoken or sung depth",
  },

  // ═══════════════════════════════════════════
  // HIP-HOP & RAP
  // ═══════════════════════════════════════════
  "hip-hop": {
    name: "Hip-Hop",
    defaultLinesPerVerse: "8",
    bpmRange: "85-95",
    densityNotes: "80-85: max 6. NEVER exceed 8",
    defaultRhymeScheme: "AABB couplets",
    topicsPerVerse: "3-4",
    lyricalCharacter: "Rhythmic wordplay, braggadocio or storytelling, flow is everything",
  },
  trap: {
    name: "Trap",
    defaultLinesPerVerse: "8",
    bpmRange: "130-170 (half-time 65-85)",
    densityNotes: "65-70 effective: max 6",
    defaultRhymeScheme: "AABB couplets",
    topicsPerVerse: "3-4",
    lyricalCharacter: "Dark, boastful, triplet flows over 808s and hi-hats",
  },
  drill: {
    name: "Drill",
    defaultLinesPerVerse: "8",
    bpmRange: "140-145",
    densityNotes: "Never exceed 8",
    defaultRhymeScheme: "AABB couplets",
    topicsPerVerse: "3-4",
    lyricalCharacter: "Menacing, street-level, sliding 808s with deadpan delivery",
  },
  grime: {
    name: "Grime",
    defaultLinesPerVerse: "8",
    bpmRange: "140",
    densityNotes: "Write two 8-line verses, not one 16",
    defaultRhymeScheme: "AABB couplets",
    topicsPerVerse: "3-4",
    lyricalCharacter: "Aggressive, rapid UK delivery, MC-battle energy over dark synths",
  },
  phonk: {
    name: "Phonk",
    defaultLinesPerVerse: "4",
    bpmRange: "60-80",
    densityNotes: "Drift phonk 130-170: 4-6, often instrumental",
    defaultRhymeScheme: "AABB couplets",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Dark Memphis-rap revival, chopped vocals, cowbell-heavy and gritty",
  },
  nerdcore: {
    name: "Nerdcore",
    defaultLinesPerVerse: "8",
    bpmRange: "85-100",
    densityNotes: "Electro/trap 120-150: 6 lines",
    defaultRhymeScheme: "AABB couplets",
    topicsPerVerse: "3-4",
    lyricalCharacter: "Geek culture references, clever wordplay, gaming/tech/fandom themes",
  },

  // ═══════════════════════════════════════════
  // POP
  // ═══════════════════════════════════════════
  pop: {
    name: "Pop",
    defaultLinesPerVerse: 4,
    bpmRange: "110-120",
    densityNotes: "100-110: up to 6. 120-130: stick to 4",
    defaultRhymeScheme: "ABAB or ABCB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Catchy, universal, polished hooks with broad emotional appeal",
  },
  "k-pop": {
    name: "K-Pop",
    defaultLinesPerVerse: 4,
    bpmRange: "120-140",
    densityNotes: "Rapid verse-chorus cycling",
    defaultRhymeScheme: "ABAB or ABCB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "High-energy, genre-blending, tight choreography-synced phrasing",
  },
  "piano-pop": {
    name: "Piano Pop",
    defaultLinesPerVerse: 6,
    bpmRange: "100-120",
    densityNotes: "Ballad 90-100: up to 8",
    defaultRhymeScheme: "ABAB or ABCB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Heartfelt, melodic, piano-forward intimacy with singable hooks",
  },

  // ═══════════════════════════════════════════
  // R&B, SOUL, FUNK
  // ═══════════════════════════════════════════
  "r-and-b": {
    name: "R&B",
    defaultLinesPerVerse: 6,
    bpmRange: "60-100",
    densityNotes: "Ballads <80: 4-6. Leave room for runs",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Smooth, sensual, melodic runs and emotional intimacy",
  },
  funk: {
    name: "Funk",
    defaultLinesPerVerse: 6,
    bpmRange: "100-130",
    densityNotes: "Syllables on the one. Call-and-response",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Groovy, rhythmic, locked to the pocket with call-and-response energy",
  },
  gospel: {
    name: "Gospel",
    defaultLinesPerVerse: 6,
    bpmRange: "70-120",
    densityNotes: "Building intensity through repetition",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Spiritual, uplifting, choir-driven builds with fervent repetition",
  },
  afrobeats: {
    name: "Afrobeats",
    defaultLinesPerVerse: 6,
    bpmRange: "100-120",
    densityNotes: "Call-and-response. Repetitive hooks",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Infectious, rhythmic, call-and-response with danceable groove",
  },

  // ═══════════════════════════════════════════
  // COUNTRY & FOLK
  // ═══════════════════════════════════════════
  country: {
    name: "Country",
    defaultLinesPerVerse: 6,
    bpmRange: "90-120",
    densityNotes: "Ballads 60-80: 4. Uptempo 130+: 6-8",
    defaultRhymeScheme: "ABAB or ABCB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Storytelling, plainspoken, rural imagery with emotional honesty",
  },
  folk: {
    name: "Folk",
    defaultLinesPerVerse: "6-8",
    bpmRange: "80-110",
    densityNotes: "Storytelling handles longer verses",
    defaultRhymeScheme: "ABAB or ABCB",
    topicsPerVerse: "3-4",
    lyricalCharacter: "Narrative, acoustic, passed-down-story quality with poetic detail",
  },
  americana: {
    name: "Americana",
    defaultLinesPerVerse: "6-8",
    bpmRange: "85-120",
    densityNotes: "Most density-tolerant in country family",
    defaultRhymeScheme: "ABAB or ABCB",
    topicsPerVerse: "3-4",
    lyricalCharacter: "Rootsy, literary, blends country/folk/rock with deep Americana themes",
  },
  bluegrass: {
    name: "Bluegrass",
    defaultLinesPerVerse: "4-6",
    bpmRange: "120-160",
    densityNotes: "Fast picking but sparse lyrics",
    defaultRhymeScheme: "ABAB or ABCB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Mountain storytelling, fast acoustic picking, simple heartfelt words",
  },
  "indie-folk": {
    name: "Indie Folk",
    defaultLinesPerVerse: 6,
    bpmRange: "85-120",
    densityNotes: "Literary lyrics tolerated",
    defaultRhymeScheme: "ABAB or ABCB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Bookish, pastoral, quietly beautiful with literary sensibility",
  },
  "singer-songwriter": {
    name: "Singer-Songwriter",
    defaultLinesPerVerse: "6-8",
    bpmRange: "70-105",
    densityNotes: "Listeners expect dense personal detail",
    defaultRhymeScheme: "ABAB or ABCB",
    topicsPerVerse: "3-4",
    lyricalCharacter: "Deeply personal, confessional, every word carries autobiographical weight",
  },

  // ═══════════════════════════════════════════
  // JAZZ & CLASSICAL
  // ═══════════════════════════════════════════
  jazz: {
    name: "Jazz",
    defaultLinesPerVerse: "6-8",
    bpmRange: "variable",
    densityNotes: "Bebop 120-200: 2-4. Ballads: 6-8",
    defaultRhymeScheme: "AABA",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Sophisticated, improvisation-aware, swing phrasing with cool detachment",
  },
  blues: {
    name: "Blues",
    defaultLinesPerVerse: 3,
    bpmRange: "any",
    densityNotes: "Line 1 stated, line 2 repeats, line 3 resolves",
    defaultRhymeScheme: "AAB",
    topicsPerVerse: "1",
    lyricalCharacter: "Raw, soulful, call-and-response with stated-repeated-resolved structure",
  },
  classical: {
    name: "Classical",
    defaultLinesPerVerse: "4-6",
    bpmRange: "variable",
    densityNotes: "Instrument-dominated",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Formal, composed, words serve the orchestral arrangement",
  },
  opera: {
    name: "Opera",
    defaultLinesPerVerse: "4-6",
    bpmRange: "variable",
    densityNotes: "Fewer words, more expression",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Dramatic, theatrical, each syllable stretched across soaring vocal lines",
  },
  swing: {
    name: "Swing",
    defaultLinesPerVerse: "4-6",
    bpmRange: "120-180",
    densityNotes: "Conversational, witty phrasing",
    defaultRhymeScheme: "AABA",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Breezy, playful, conversational wit with jazzy rhythmic bounce",
  },

  // ═══════════════════════════════════════════
  // WORLD & OTHER
  // ═══════════════════════════════════════════
  reggae: {
    name: "Reggae",
    defaultLinesPerVerse: "4-6",
    bpmRange: "65-90",
    densityNotes: "Offbeat skank creates natural spaces",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Laid-back, conscious, offbeat groove with message-driven words",
  },
  dancehall: {
    name: "Dancehall",
    defaultLinesPerVerse: "6-8",
    bpmRange: "90-110",
    densityNotes: "DJ-style rapid delivery",
    defaultRhymeScheme: "AABB couplets",
    topicsPerVerse: "2-3",
    lyricalCharacter: "High-energy, toasting/DJ style, rapid patois-inflected delivery",
  },
  latin: {
    name: "Latin",
    defaultLinesPerVerse: 6,
    bpmRange: "90-140",
    densityNotes: "Clave/tresillo governs syllable placement",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "2-3",
    lyricalCharacter: "Rhythmic, passionate, syllables dance to clave patterns",
  },
  "bossa-nova": {
    name: "Bossa Nova",
    defaultLinesPerVerse: "4-6",
    bpmRange: "70-100",
    densityNotes: "Whispered, intimate",
    defaultRhymeScheme: "ABAB",
    topicsPerVerse: "1-2",
    lyricalCharacter: "Whispered, intimate, gentle sway with understated elegance",
  },
  cinematic: {
    name: "Cinematic",
    defaultLinesPerVerse: "2-4",
    bpmRange: "variable",
    densityNotes: "Words sparse but weighty",
    defaultRhymeScheme: "Free",
    topicsPerVerse: "1",
    lyricalCharacter: "Epic, sweeping, every word lands like a scene in a film score",
  },
};


// ═══════════════════════════════════════════════════
// BPM-AWARE DENSITY HELPER
// ═══════════════════════════════════════════════════

/**
 * Parses a defaultLinesPerVerse value into a numeric midpoint.
 * Handles numbers, strings like "6-8", and strings like "8".
 */
function parseLinesDefault(val) {
  if (typeof val === "number") return val;
  const str = String(val);
  const rangeMatch = str.match(/^(\d+)-(\d+)$/);
  if (rangeMatch) {
    return Math.round((parseInt(rangeMatch[1]) + parseInt(rangeMatch[2])) / 2);
  }
  const num = parseInt(str);
  return isNaN(num) ? 4 : num;
}

/**
 * Returns BPM-adjusted linesPerVerse for a genre.
 *
 * Parses the densityNotes field for BPM thresholds and returns
 * an adjusted line count along with relevant notes.
 *
 * @param {string} genre - kebab-case genre key (e.g. "hip-hop")
 * @param {number} bpm - target BPM
 * @returns {{ linesPerVerse: number, notes: string }} adjusted density info
 */
export function getGenreByBPM(genre, bpm) {
  const entry = genreDatabase[genre];
  if (!entry) {
    return { linesPerVerse: 4, notes: `Unknown genre: ${genre}` };
  }

  const defaultLines = parseLinesDefault(entry.defaultLinesPerVerse);
  const notes = entry.densityNotes;
  let adjustedLines = defaultLines;
  let matchedRule = null;

  // Pattern: "<N:" or "< N:" — BPM below threshold
  const belowPatterns = [...notes.matchAll(/<\s*(\d+)\s*:\s*(.*?)(?:\.|$)/g)];
  for (const match of belowPatterns) {
    const threshold = parseInt(match[1]);
    const rule = match[2].trim();
    if (bpm < threshold) {
      const lineMatch = rule.match(/(?:up to |max |max\s)(\d+)/i);
      const exactMatch = rule.match(/^(\d+)(?:-(\d+))?$/);
      if (lineMatch) {
        adjustedLines = parseInt(lineMatch[1]);
        matchedRule = `BPM ${bpm} < ${threshold}: up to ${adjustedLines} lines. ${rule}`;
      } else if (exactMatch) {
        adjustedLines = parseInt(exactMatch[1]);
        matchedRule = `BPM ${bpm} < ${threshold}: ${rule}`;
      }
    }
  }

  // Pattern: "N+:" or "N +:" — BPM above threshold
  const abovePatterns = [...notes.matchAll(/(\d+)\+\s*:\s*(.*?)(?:\.|$)/g)];
  for (const match of abovePatterns) {
    const threshold = parseInt(match[1]);
    const rule = match[2].trim();
    if (bpm >= threshold) {
      const lineMatch = rule.match(/(\d+)(?:-(\d+))?\s*lines?/i);
      const maxMatch = rule.match(/max\s*(\d+)/i);
      if (lineMatch) {
        adjustedLines = parseInt(lineMatch[1]);
        matchedRule = `BPM ${bpm} >= ${threshold}: ${rule}`;
      } else if (maxMatch) {
        adjustedLines = parseInt(maxMatch[1]);
        matchedRule = `BPM ${bpm} >= ${threshold}: max ${adjustedLines}. ${rule}`;
      }
    }
  }

  // Pattern: "N-M:" — BPM range (e.g., "130-140: 4 lines" or "130-140: 4")
  const rangePatterns = [...notes.matchAll(/(\d+)-(\d+)\s*:\s*(.*?)(?:\.|$)/g)];
  for (const match of rangePatterns) {
    const low = parseInt(match[1]);
    const high = parseInt(match[2]);
    const rule = match[3].trim();
    // Skip if this looks like a lines-per-verse range rather than a BPM range
    if (high - low <= 10 && low < 20) continue;
    if (bpm >= low && bpm <= high) {
      const lineMatch = rule.match(/(?:up to |max )?(\d+)(?:\s*lines?)?/i);
      if (lineMatch) {
        adjustedLines = parseInt(lineMatch[1]);
        matchedRule = `BPM ${bpm} in ${low}-${high}: ${rule}`;
      }
    }
  }

  // Pattern: "effective N-M:" for half-time genres (e.g., "65-70 effective: max 6")
  const effectivePatterns = [...notes.matchAll(/(\d+)-(\d+)\s*effective\s*:\s*(.*?)(?:\.|$)/g)];
  for (const match of effectivePatterns) {
    const low = parseInt(match[1]);
    const high = parseInt(match[2]);
    const rule = match[3].trim();
    if (bpm >= low && bpm <= high) {
      const lineMatch = rule.match(/(?:max\s*)?(\d+)/i);
      if (lineMatch) {
        adjustedLines = parseInt(lineMatch[1]);
        matchedRule = `BPM ${bpm} effective in ${low}-${high}: ${rule}`;
      }
    }
  }

  // Pattern: "Ballad N-M:" or "Ballads N-M:" or "Ballad <N:"
  const balladBelowPattern = notes.match(/[Bb]allads?\s*<\s*(\d+)\s*:\s*(.*?)(?:\.|$)/);
  if (balladBelowPattern) {
    const threshold = parseInt(balladBelowPattern[1]);
    const rule = balladBelowPattern[2].trim();
    if (bpm < threshold) {
      const lineMatch = rule.match(/(?:up to |max )?(\d+)(?:-(\d+))?/i);
      if (lineMatch) {
        adjustedLines = parseInt(lineMatch[1]);
        matchedRule = `Ballad BPM ${bpm} < ${threshold}: ${rule}`;
      }
    }
  }

  const balladRangePattern = notes.match(/[Bb]allads?\s*(\d+)-(\d+)\s*:\s*(.*?)(?:\.|$)/);
  if (balladRangePattern) {
    const low = parseInt(balladRangePattern[1]);
    const high = parseInt(balladRangePattern[2]);
    const rule = balladRangePattern[3].trim();
    if (bpm >= low && bpm <= high) {
      const lineMatch = rule.match(/(?:up to |max )?(\d+)/i);
      if (lineMatch) {
        adjustedLines = parseInt(lineMatch[1]);
        matchedRule = `Ballad BPM ${bpm} in ${low}-${high}: ${rule}`;
      }
    }
  }

  // Pattern: "Bebop N-M:" for jazz
  const bebopPattern = notes.match(/[Bb]ebop\s*(\d+)-(\d+)\s*:\s*(.*?)(?:\.|$)/);
  if (bebopPattern) {
    const low = parseInt(bebopPattern[1]);
    const high = parseInt(bebopPattern[2]);
    const rule = bebopPattern[3].trim();
    if (bpm >= low && bpm <= high) {
      const lineMatch = rule.match(/(\d+)(?:-(\d+))?/);
      if (lineMatch) {
        adjustedLines = lineMatch[2]
          ? Math.round((parseInt(lineMatch[1]) + parseInt(lineMatch[2])) / 2)
          : parseInt(lineMatch[1]);
        matchedRule = `Bebop BPM ${bpm} in ${low}-${high}: ${rule}`;
      }
    }
  }

  // Pattern: "Funeral doom <N:" for doom metal
  const funeralPattern = notes.match(/[Ff]uneral\s*doom\s*<\s*(\d+)\s*:\s*(.*?)(?:\.|$)/);
  if (funeralPattern) {
    const threshold = parseInt(funeralPattern[1]);
    const rule = funeralPattern[2].trim();
    if (bpm < threshold) {
      const lineMatch = rule.match(/(\d+)(?:-(\d+))?/);
      if (lineMatch) {
        adjustedLines = lineMatch[2]
          ? Math.round((parseInt(lineMatch[1]) + parseInt(lineMatch[2])) / 2)
          : parseInt(lineMatch[1]);
        matchedRule = `Funeral doom BPM ${bpm} < ${threshold}: ${rule}`;
      }
    }
  }

  // Pattern: "Drift phonk N-M:" for phonk
  const driftPattern = notes.match(/[Dd]rift\s*phonk\s*(\d+)-(\d+)\s*:\s*(.*?)(?:\.|$)/);
  if (driftPattern) {
    const low = parseInt(driftPattern[1]);
    const high = parseInt(driftPattern[2]);
    const rule = driftPattern[3].trim();
    if (bpm >= low && bpm <= high) {
      const lineMatch = rule.match(/(\d+)(?:-(\d+))?/);
      if (lineMatch) {
        adjustedLines = lineMatch[2]
          ? Math.round((parseInt(lineMatch[1]) + parseInt(lineMatch[2])) / 2)
          : parseInt(lineMatch[1]);
        matchedRule = `Drift phonk BPM ${bpm} in ${low}-${high}: ${rule}`;
      }
    }
  }

  // Pattern: "Electro/trap N-M:" for nerdcore
  const electroTrapPattern = notes.match(/[Ee]lectro\/trap\s*(\d+)-(\d+)\s*:\s*(.*?)(?:\.|$)/);
  if (electroTrapPattern) {
    const low = parseInt(electroTrapPattern[1]);
    const high = parseInt(electroTrapPattern[2]);
    const rule = electroTrapPattern[3].trim();
    if (bpm >= low && bpm <= high) {
      const lineMatch = rule.match(/(\d+)/);
      if (lineMatch) {
        adjustedLines = parseInt(lineMatch[1]);
        matchedRule = `Electro/trap BPM ${bpm} in ${low}-${high}: ${rule}`;
      }
    }
  }

  // Pattern: "Fast emo-punk N-M:" for emo
  const emoPunkPattern = notes.match(/[Ff]ast\s*emo-punk\s*(\d+)-(\d+)\s*:\s*(.*?)(?:\.|$)/);
  if (emoPunkPattern) {
    const low = parseInt(emoPunkPattern[1]);
    const high = parseInt(emoPunkPattern[2]);
    const rule = emoPunkPattern[3].trim();
    if (bpm >= low && bpm <= high) {
      const lineMatch = rule.match(/(\d+)/);
      if (lineMatch) {
        adjustedLines = parseInt(lineMatch[1]);
        matchedRule = `Fast emo-punk BPM ${bpm} in ${low}-${high}: ${rule}`;
      }
    }
  }

  // Pattern: "Uptempo N+:" for country
  const uptempoPattern = notes.match(/[Uu]ptempo\s*(\d+)\+\s*:\s*(.*?)(?:\.|$)/);
  if (uptempoPattern) {
    const threshold = parseInt(uptempoPattern[1]);
    const rule = uptempoPattern[2].trim();
    if (bpm >= threshold) {
      const lineMatch = rule.match(/(\d+)(?:-(\d+))?/);
      if (lineMatch) {
        adjustedLines = lineMatch[2]
          ? Math.round((parseInt(lineMatch[1]) + parseInt(lineMatch[2])) / 2)
          : parseInt(lineMatch[1]);
        matchedRule = `Uptempo BPM ${bpm} >= ${threshold}: ${rule}`;
      }
    }
  }

  return {
    linesPerVerse: adjustedLines,
    notes: matchedRule || `Default for ${entry.name} at ${bpm} BPM: ${notes}`,
  };
}
