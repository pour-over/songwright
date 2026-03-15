import Anthropic from "@anthropic-ai/sdk";

export default async (req: Request) => {
  // Only allow POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const { lyrics, genre, bpm, stylePrompt, mode, fixes } = await req.json();

    if (!lyrics || !genre) {
      return new Response(JSON.stringify({ error: "Missing required fields: lyrics, genre" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const apiKey = Netlify.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const client = new Anthropic({ apiKey });

    // FIX MODE: rewrite lyrics based on quality check fixes
    if (mode === "fix" && fixes) {
      const fixPrompt = `You are a Suno V5 lyric fixer. Rewrite the provided lyrics to address the issues listed below. Preserve the original meaning, voice, and structure tags (like [Verse 1], [Chorus], etc.) exactly. Only change what's needed to fix the issues.

Genre: ${genre}
BPM: ${bpm || "not specified"}
Style Prompt: ${stylePrompt || "not specified"}

## ISSUES TO FIX
${fixes.map((f: any) => `- ${f.name}: ${f.fix}`).join("\n")}

## RULES
- Keep ALL structure tags exactly as they are ([Verse 1], [Chorus], [Bridge], etc.)
- Preserve the song's meaning, tone, and emotional arc
- Only modify lines that need fixing
- Maintain the same number of sections
- Output ONLY the fixed lyrics, no explanation, no markdown`;

      const fixMessage = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 3000,
        messages: [{ role: "user", content: `Fix these lyrics:\n\n${lyrics}` }],
        system: fixPrompt
      });

      const fixedLyrics = fixMessage.content
        .filter((block: any) => block.type === "text")
        .map((block: any) => block.text)
        .join("");

      return new Response(JSON.stringify({ fixedLyrics }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    const systemPrompt = `You are a Suno V5 lyric quality analyst. Analyze the provided lyrics against a 13-point quality checklist, considering the specified genre and BPM.

Genre: ${genre}
BPM: ${bpm || "not specified"}
Style Prompt: ${stylePrompt || "not specified"}

## 13-POINT QUALITY CHECKLIST

1. **Craft Standard**: Check for clichés ("heart on fire", "breaking free"), filler words ("oh yeah", "baby" used as padding), and lazy rhymes (love/above, fire/desire used without fresh context).

2. **Source Accuracy**: If the lyrics tell a story or reference real events, flag any claims that seem inaccurate or unverifiable. Pass if purely fictional/emotional.

3. **Pronunciation Scan**: Flag these high-risk homographs if present without phonetic fixes: live, read, lead, wind, close, tear, bow, bass, record, present, content, wound. Also flag un-periodized acronyms (FBI not F.B.I.), digit numbers (21 not twenty-one), and invented contractions (signal'd, TV'd).

4. **POV/Tense Consistency**: Check for unintentional shifts in point of view (I/you/they) or tense (past/present/future) within sections.

5. **Narrative Arc**: Each section should advance the story or emotional journey. Flag sections that repeat the same idea without development.

6. **Repeated Rhymes**: No rhyme pair should be used more than once in the entire song (e.g., "night/light" appearing in both verse 1 and verse 3).

7. **Flow Check**: Syllable counts should be reasonably consistent within verses (±2 syllables per line within the same section). Genre tolerance varies.

8. **Word Count**: Non-hip-hop genres: max 400 words, flag under 200. Hip-hop/rap genres: max 600 words, flag under 200.

9. **Section Length Check**: Lines per section must be within genre limits. This is genre-specific — use the genre data provided.

10. **Rhyme Scheme Check**: Should match genre convention. Flag orphan lines (lines that should rhyme but don't).

11. **Density/Pacing Check**: Verse line count should match genre BPM defaults. An 8-line verse at BPM under 100 in a non-hip-hop genre = HARD FAIL.

12. **Verse-Chorus Echo Check**: The last 2 lines of a verse should not share phrases, rhyme words, or hooks with the first 2 lines of the following chorus.

13. **Pitfalls Check**: No invented contractions (only standard English contractions), no unresolved pronunciation risks, no section-genre length mismatches.

## RESPONSE FORMAT

Respond with ONLY a JSON array of exactly 13 objects. No markdown, no explanation, just the JSON array.

Each object must have:
- "id": number (1-13)
- "name": string (checklist item name)
- "status": "pass" | "fail" | "warn"
- "details": string (specific observation about these lyrics)
- "fix": string | null (specific fix suggestion, or null if passing)

Use "fail" for hard failures that will cause problems in Suno. Use "warn" for issues that could be improved but aren't critical. Use "pass" for items that are fine.

Be specific in your details — reference actual lines/words from the lyrics.`;

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: `Analyze these lyrics:\n\n${lyrics}`
        }
      ],
      system: systemPrompt
    });

    // Extract text from response
    const responseText = message.content
      .filter((block: any) => block.type === "text")
      .map((block: any) => block.text)
      .join("");

    // Parse the JSON response
    let results;
    try {
      // Try to extract JSON from the response (in case there's surrounding text)
      const jsonMatch = responseText.match(/\[[\s\S]*\]/);
      results = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(responseText);
    } catch (parseError) {
      results = [{ id: 0, name: "Parse Error", status: "warn", details: "Could not parse quality check results. Raw response available.", fix: null }];
    }

    return new Response(JSON.stringify({ results }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const config = {
  path: "/api/quality-check"
};
