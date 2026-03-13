/**
 * Suno V5 Pronunciation Risk Detection
 *
 * Detects homographs, un-periodized acronyms, digit-based numbers,
 * and invented contractions that may cause mispronunciation in TTS singing.
 */

export const HIGH_RISK_HOMOGRAPHS = [
  { word: 'live', pronunciationA: 'LIV (performance)', pronunciationB: 'LYVE (alive)', fixSuggestion: 'Use "lyve" or "liv"' },
  { word: 'read', pronunciationA: 'REED (present)', pronunciationB: 'RED (past)', fixSuggestion: 'Use "reed" or rewrite' },
  { word: 'lead', pronunciationA: 'LEED (guide)', pronunciationB: 'LED (metal)', fixSuggestion: 'Use "leed" or rewrite' },
  { word: 'wind', pronunciationA: 'WIND (breeze)', pronunciationB: 'WYND (coil)', fixSuggestion: 'Use "wynd" for coil' },
  { word: 'close', pronunciationA: 'KLOHS (near)', pronunciationB: 'KLOHZ (shut)', fixSuggestion: 'Context-clarify' },
  { word: 'tear', pronunciationA: 'TEER (crying)', pronunciationB: 'TAIR (rip)', fixSuggestion: 'Use "teer" or "tair"' },
  { word: 'bow', pronunciationA: 'BOH (ribbon)', pronunciationB: 'BOW (bend)', fixSuggestion: 'Specify' },
  { word: 'bass', pronunciationA: 'BAYSS (instrument)', pronunciationB: 'BASS (fish)', fixSuggestion: 'Usually BAYSS in music' },
  { word: 'record', pronunciationA: 'REK-ord (noun)', pronunciationB: 'ri-KORD (verb)', fixSuggestion: 'Specify' },
  { word: 'present', pronunciationA: 'PREZ-ent (gift)', pronunciationB: 'pri-ZENT (give)', fixSuggestion: 'Specify' },
  { word: 'content', pronunciationA: 'KON-tent (stuff)', pronunciationB: 'kon-TENT (satisfied)', fixSuggestion: 'Specify' },
  { word: 'wound', pronunciationA: 'WOOND (injury)', pronunciationB: 'WOWND (coiled)', fixSuggestion: 'Specify' },
  { word: 'resume', pronunciationA: 'REZ-oo-may (document)', pronunciationB: 'ri-ZOOM (continue)', fixSuggestion: 'Specify or rewrite' },
  { word: 'object', pronunciationA: 'OB-jekt (thing)', pronunciationB: 'ob-JEKT (protest)', fixSuggestion: 'Specify' },
  { word: 'project', pronunciationA: 'PRAH-jekt (noun)', pronunciationB: 'pro-JEKT (verb)', fixSuggestion: 'Specify' },
  { word: 'desert', pronunciationA: 'DEZ-ert (sand)', pronunciationB: 'di-ZERT (abandon)', fixSuggestion: 'Specify' },
  { word: 'refuse', pronunciationA: 'REF-yoos (trash)', pronunciationB: 'ri-FYOOZ (decline)', fixSuggestion: 'Specify' },
];

export const MEDIUM_RISK_HOMOGRAPHS = [
  { word: 'alternate', pronunciationA: 'AWL-ter-nit (adj/noun)', pronunciationB: 'AWL-ter-nayt (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'attribute', pronunciationA: 'AT-rih-byoot (noun)', pronunciationB: 'uh-TRIB-yoot (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'combine', pronunciationA: 'KOM-byn (noun, machine)', pronunciationB: 'kum-BYN (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'complex', pronunciationA: 'KOM-pleks (noun)', pronunciationB: 'kum-PLEKS (adj)', fixSuggestion: 'Specify or rewrite' },
  { word: 'conduct', pronunciationA: 'KON-dukt (noun)', pronunciationB: 'kun-DUKT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'conflict', pronunciationA: 'KON-flikt (noun)', pronunciationB: 'kun-FLIKT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'console', pronunciationA: 'KON-sohl (noun)', pronunciationB: 'kun-SOHL (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'contract', pronunciationA: 'KON-trakt (noun)', pronunciationB: 'kun-TRAKT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'contrast', pronunciationA: 'KON-trast (noun)', pronunciationB: 'kun-TRAST (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'convert', pronunciationA: 'KON-vert (noun)', pronunciationB: 'kun-VERT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'convict', pronunciationA: 'KON-vikt (noun)', pronunciationB: 'kun-VIKT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'decrease', pronunciationA: 'DEE-krees (noun)', pronunciationB: 'di-KREES (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'digest', pronunciationA: 'DY-jest (noun)', pronunciationB: 'di-JEST (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'discount', pronunciationA: 'DIS-kownt (noun)', pronunciationB: 'dis-KOWNT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'exploit', pronunciationA: 'EKS-ployt (noun)', pronunciationB: 'iks-PLOYT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'extract', pronunciationA: 'EKS-trakt (noun)', pronunciationB: 'iks-TRAKT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'impact', pronunciationA: 'IM-pakt (noun)', pronunciationB: 'im-PAKT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'import', pronunciationA: 'IM-port (noun)', pronunciationB: 'im-PORT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'incline', pronunciationA: 'IN-klyn (noun)', pronunciationB: 'in-KLYN (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'increase', pronunciationA: 'IN-krees (noun)', pronunciationB: 'in-KREES (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'insert', pronunciationA: 'IN-sert (noun)', pronunciationB: 'in-SERT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'insult', pronunciationA: 'IN-sult (noun)', pronunciationB: 'in-SULT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'invalid', pronunciationA: 'IN-vuh-lid (noun, disabled person)', pronunciationB: 'in-VAL-id (adj, not valid)', fixSuggestion: 'Specify or rewrite' },
  { word: 'moderate', pronunciationA: 'MOD-er-it (adj/noun)', pronunciationB: 'MOD-er-ayt (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'perfect', pronunciationA: 'PER-fikt (adj)', pronunciationB: 'per-FEKT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'permit', pronunciationA: 'PER-mit (noun)', pronunciationB: 'per-MIT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'pervert', pronunciationA: 'PER-vert (noun)', pronunciationB: 'per-VERT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'produce', pronunciationA: 'PROH-doos (noun)', pronunciationB: 'pruh-DOOS (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'progress', pronunciationA: 'PRAH-gres (noun)', pronunciationB: 'pruh-GRES (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'protest', pronunciationA: 'PROH-test (noun)', pronunciationB: 'pruh-TEST (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'rebel', pronunciationA: 'REB-ul (noun)', pronunciationB: 'ri-BEL (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'recount', pronunciationA: 'REE-kownt (noun)', pronunciationB: 'ri-KOWNT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'refund', pronunciationA: 'REE-fund (noun)', pronunciationB: 'ri-FUND (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'reject', pronunciationA: 'REE-jekt (noun)', pronunciationB: 'ri-JEKT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'relay', pronunciationA: 'REE-lay (noun)', pronunciationB: 'ri-LAY (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'segment', pronunciationA: 'SEG-ment (noun)', pronunciationB: 'seg-MENT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'separate', pronunciationA: 'SEP-er-it (adj)', pronunciationB: 'SEP-er-ayt (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'subject', pronunciationA: 'SUB-jikt (noun)', pronunciationB: 'sub-JEKT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'survey', pronunciationA: 'SER-vay (noun)', pronunciationB: 'ser-VAY (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'suspect', pronunciationA: 'SUS-pekt (noun/adj)', pronunciationB: 'sus-PEKT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'torment', pronunciationA: 'TOR-ment (noun)', pronunciationB: 'tor-MENT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'transfer', pronunciationA: 'TRANS-fer (noun)', pronunciationB: 'trans-FER (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'transport', pronunciationA: 'TRANS-port (noun)', pronunciationB: 'trans-PORT (verb)', fixSuggestion: 'Specify or rewrite' },
  { word: 'upset', pronunciationA: 'UP-set (noun/adj)', pronunciationB: 'up-SET (verb)', fixSuggestion: 'Specify or rewrite' },
];

// Build lookup maps for fast scanning
const highRiskMap = new Map(HIGH_RISK_HOMOGRAPHS.map(h => [h.word.toLowerCase(), h]));
const mediumRiskMap = new Map(MEDIUM_RISK_HOMOGRAPHS.map(h => [h.word.toLowerCase(), h]));

// Standard contractions that should NOT be flagged
const STANDARD_CONTRACTIONS = new Set([
  // 'd contractions
  "i'd", "he'd", "she'd", "we'd", "they'd", "you'd", "it'd", "who'd",
  // 'll contractions
  "i'll", "he'll", "she'll", "we'll", "they'll", "you'll", "it'll", "who'll",
  // n't contractions
  "wouldn't", "couldn't", "shouldn't", "didn't", "doesn't", "wasn't",
  "weren't", "isn't", "aren't", "can't", "won't", "haven't", "hasn't", "hadn't",
  // 'm contractions
  "i'm",
  // 've contractions
  "i've", "you've", "we've", "they've", "who've",
  // 's contractions
  "let's", "that's", "what's", "there's", "here's", "where's", "how's",
  // 're contractions
]);

// Contraction suffixes to check for invented contractions
const CONTRACTION_SUFFIXES = ["'d", "'ll", "'ve", "'m", "'re", "'s"];

// Structure tags that should not be flagged as acronyms
const STRUCTURE_TAG_PATTERN = /^\[.*\]$/;

/**
 * Scan lyrics text for pronunciation risks.
 *
 * @param {string} text - The full lyrics text to scan.
 * @returns {Array<{word: string, line: number, riskLevel: string, issue: string, suggestion: string}>}
 */
export function scanLyrics(text) {
  const results = [];
  const lines = text.split('\n');

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const lineNum = lineIdx + 1;
    const line = lines[lineIdx];

    // Extract words, preserving punctuation-attached tokens for contraction checks
    const tokens = line.split(/\s+/).filter(t => t.length > 0);

    for (const token of tokens) {
      // Skip structure tags like [VERSE], [CHORUS], etc.
      if (STRUCTURE_TAG_PATTERN.test(token)) {
        continue;
      }

      // Strip leading/trailing punctuation for word matching (but keep apostrophes inside)
      const cleaned = token.replace(/^[^a-zA-Z0-9']+/, '').replace(/[^a-zA-Z0-9']+$/, '');
      if (!cleaned) continue;

      const lower = cleaned.toLowerCase();

      // --- Check high-risk homographs ---
      const highMatch = highRiskMap.get(lower);
      if (highMatch) {
        results.push({
          word: cleaned,
          line: lineNum,
          riskLevel: 'high',
          issue: `Homograph: "${highMatch.word}" could be ${highMatch.pronunciationA} or ${highMatch.pronunciationB}`,
          suggestion: highMatch.fixSuggestion,
        });
      }

      // --- Check medium-risk homographs ---
      const medMatch = mediumRiskMap.get(lower);
      if (medMatch) {
        results.push({
          word: cleaned,
          line: lineNum,
          riskLevel: 'medium',
          issue: `Homograph: "${medMatch.word}" could be ${medMatch.pronunciationA} or ${medMatch.pronunciationB}`,
          suggestion: medMatch.fixSuggestion,
        });
      }

      // --- Check for un-periodized acronyms ---
      // 2+ consecutive uppercase letters that aren't inside structure tags
      if (/^[A-Z]{2,}$/.test(cleaned)) {
        results.push({
          word: cleaned,
          line: lineNum,
          riskLevel: 'medium',
          issue: `Un-periodized acronym "${cleaned}" may be read as a word instead of spelled out`,
          suggestion: `Use "${cleaned.split('').join('.')}" or spell it out`,
        });
      }

      // --- Check for digit-based numbers ---
      // Allow '93-style year abbreviations (apostrophe + 2 digits)
      if (/\d/.test(cleaned) && !/^'\d{2}$/.test(cleaned)) {
        results.push({
          word: cleaned,
          line: lineNum,
          riskLevel: 'low',
          issue: `Digit-based number "${cleaned}" may be mispronounced`,
          suggestion: 'Spell out the number in words',
        });
      }

      // --- Check for invented contractions ---
      for (const suffix of CONTRACTION_SUFFIXES) {
        if (lower.endsWith(suffix) && lower.length > suffix.length) {
          if (!STANDARD_CONTRACTIONS.has(lower)) {
            results.push({
              word: cleaned,
              line: lineNum,
              riskLevel: 'low',
              issue: `Non-standard contraction "${cleaned}" may be mispronounced`,
              suggestion: 'Expand to full words or use a standard contraction',
            });
          }
          break; // Only flag once per token
        }
      }
    }
  }

  return results;
}
