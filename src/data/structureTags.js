export const STRUCTURE_TAGS = {
  intro: ["[Short Instrumental Intro]", "[Intro]", "[Intro - Spoken]"],
  verse: ["[Verse]", "[Verse 1]", "[Verse 2]", "[Verse 3]", "[Catchy Verse]"],
  preChorus: ["[Pre-Chorus]"],
  chorus: ["[Chorus]", "[Catchy Hook]", "[Refrain]"],
  bridge: ["[Bridge]", "[Break]", "[Interlude]"],
  instrumental: ["[Guitar Solo Interlude]", "[Percussion Break]", "[melodic interlude]", "[Dance Break]"],
  ending: ["[Outro]", "[End]", "[Fade Out]", "[Fade to End]", "[Big Finish]"],
  mood: ["[Shout]", "[Whimsical]", "[Melancholy]", "[Spoken]", "[Whispered]", "[Energetic]"]
};

export const GENRE_TEMPLATES = {
  pop_rock: [
    "[Short Instrumental Intro]", "[Verse 1]", "[Chorus]", "[Verse 2]", "[Chorus]", "[Bridge]", "[Chorus]", "[Outro]", "[Fade Out]"
  ],
  hip_hop: [
    "[Intro - Spoken]", "[Verse 1]", "[Chorus]", "[Verse 2]", "[Chorus]", "[Verse 3]", "[Outro]", "[End]"
  ],
  punk: [
    "[Intro]", "[Verse 1]", "[Chorus]", "[Verse 2]", "[Chorus]", "[Break]", "[Chorus]", "[Big Finish]"
  ],
  k_pop: [
    "[Intro]", "[Verse 1]", "[Pre-Chorus]", "[Chorus]", "[Verse 2]", "[Pre-Chorus]", "[Chorus]", "[Bridge]", "[Dance Break]", "[Chorus]", "[Outro]"
  ],
  edm: [
    "[Short Instrumental Intro]", "[Verse 1]", "[Pre-Chorus]", "[Chorus]", "[Break]", "[Verse 2]", "[Pre-Chorus]", "[Chorus]", "[Outro]", "[Fade Out]"
  ],
  blues_aab: [
    "[Short Instrumental Intro]", "[Verse 1]", "[Verse 2]", "[Verse 3]", "[Guitar Solo Interlude]", "[Verse 4]", "[Verse 5]", "[Outro]", "[End]"
  ],
  folk: [
    "[Short Instrumental Intro]", "[Verse 1]", "[Chorus]", "[Verse 2]", "[Chorus]", "[Verse 3]", "[Chorus]", "[Outro]", "[Fade Out]"
  ],
  metal: [
    "[Intro]", "[Verse 1]", "[Pre-Chorus]", "[Chorus]", "[Verse 2]", "[Pre-Chorus]", "[Chorus]", "[Bridge]", "[Guitar Solo Interlude]", "[Chorus]", "[Big Finish]"
  ]
};

export const TAG_RELIABILITY = {
  "[Verse]": "reliable", "[Verse 1]": "reliable", "[Verse 2]": "reliable",
  "[Chorus]": "reliable", "[End]": "reliable", "[Fade Out]": "reliable",
  "[Pre-Chorus]": "reliable", "[Catchy Verse]": "reliable", "[Catchy Hook]": "reliable",
  "[Bridge]": "moderate", "[Break]": "moderate", "[Outro]": "moderate",
  "[Intro]": "less_reliable", "[Refrain]": "moderate",
  "[Short Instrumental Intro]": "reliable",
  "[Guitar Solo Interlude]": "moderate", "[Percussion Break]": "moderate",
  "[melodic interlude]": "moderate", "[Dance Break]": "moderate",
  "[Fade to End]": "moderate", "[Big Finish]": "moderate",
  "[Interlude]": "moderate", "[Intro - Spoken]": "moderate",
  "[Shout]": "less_reliable", "[Whimsical]": "less_reliable",
  "[Melancholy]": "less_reliable", "[Spoken]": "moderate",
  "[Whispered]": "moderate", "[Energetic]": "less_reliable",
  "[Verse 3]": "reliable"
};
