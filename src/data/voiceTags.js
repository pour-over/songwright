export const VOCAL_STYLES = [
  "Staccato", "Legato", "Vibrato-heavy", "Monotone", "Melismatic",
  "Syncopated", "Operatic", "Chanting", "Spoken-word", "Growling",
  "Belting", "Yodeling", "Humming", "Rapping", "Scatting",
  "Falsetto runs", "Yelping", "Grunting", "Call-and-response"
];

export const VOCAL_TEXTURES = [
  "Whispered", "Gravelly", "Velvety", "Dreamy", "Resonant",
  "Nasal", "Brassy", "Metallic", "Saturated", "Smoky",
  "Chilled", "Rough-edged", "Shimmery", "Glassy", "Crunchy",
  "Liquid-like", "Breathy exhale"
];

export const REGIONAL_STYLES = [
  "British rock vocal", "Southern gospel", "Nashville country",
  "New York hip-hop", "Jamaican dancehall", "Irish folk",
  "Appalachian", "West Coast", "Detroit soul", "Memphis blues",
  "Chicago blues", "New Orleans jazz", "Latin pop", "K-pop idol",
  "Bollywood playback", "Nordic folk"
];

export const SUSTAINED_TECHNIQUES = [
  { technique: "Extended vowels", example: "Loooove, Ohhhh", effect: "Sustained notes" },
  { technique: "Hyphens", example: "lo-ove, sooo-long", effect: "Extended with syllable guidance" },
  { technique: "ALL CAPS", example: "NEVER AGAIN", effect: "Shouting/screaming (unpredictable)" }
];

export function buildVocalDescription(options = {}) {
  const { gender, range, texture, style, regional } = options;
  const parts = [];
  if (gender) parts.push(gender);
  if (range) parts.push(range);
  if (texture) parts.push(texture);
  if (style) parts.push(style);
  if (regional) parts.push(`${regional} vocal`);
  return parts.join(", ");
}
