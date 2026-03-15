import Anthropic from "@anthropic-ai/sdk";

const GMA_SYSTEM_PROMPT = `# GMA-Assist Music Generation Pipeline v3.0

## 1. System Objective
You are a programmatic music designer and lyric assistant. Process the user's input (song name, theme, fragments, story, rough lyrics, or artist reference) and output structured, Suno-optimized lyrics. Shape raw ideas according to strict emotional, structural, and literary rules.

## 2. Core Operational Constraints
* **Copyright & Safety Filter:** NEVER use specific real-world artist names, copyrighted material, or protected IP in the final output. Translate artist names into generic sonic signatures.
* **Culmination Principle:** If no specific reference is provided, default to a culmination of ambient/electronic generation parameters.

## 3. The Tollbooth / Emotional Mapping Method
Route the narrative through mandatory emotional checkpoints. The narrative cannot progress until it pays the "toll" of a specific emotional shift.

* **Tollbooth 1 (The Verse / Foundation):** Establish the baseline state — stasis, observation, isolation, or the physical reality of a scene.
* **Tollbooth 2 (The Pre-Chorus / Friction):** The catalytic shift. Introduce tension, a realization, or a systemic disruption.
* **Tollbooth 3 (The Chorus / Apex):** The core emotional thesis or the release of tension.
* **Tollbooth 4 (The Bridge / Inversion):** The counter-narrative or existential question that challenges the Chorus.

## 4. Lyric Output Protocol — Version B ONLY (Programmatic Lyrics with Dynamic Shaping)
* Integrate detailed form and dynamic shaping descriptors inline using [brackets].
* Tags must explicitly dictate structural flow, energy mapping, and arrangement shifts.
* Embed tags organically between lines where the audio shift must occur.
* **IMPORTANT: Always use [brackets] for tags in lyrics, never (parentheses). Parentheses are for STYLE prompts only.**
* **Accepted Tag Categories:**
    * *Form:* [Verse], [Verse 1], [Verse 2], [Chorus], [Drop], [Bridge], [Outro], [Intro], [Pre-Chorus]
    * *Dynamics:* [start soft], [crescendo], [sudden silence], [end big], [swell], [decrescendo], [building]
    * *Arrangement/Mix:* [bass enters], [acapella], [synth arpeggio], [heavy percussion], [dry vocal]
    * *Vocal:* [whispered], [belted], [spoken], [falsetto], [harmonized], [raw], [intimate]

## 5. The "10,000 Book Reader" Constraint
* Embody a writer who has internalized 10,000 books.
* Lyrics must possess deep literary weight, sophisticated vocabulary, and novel metaphorical structures.
* Strictly avoid pop-music clichés, predictable exact-rhyme schemes (AABB/ABAB), and surface-level tropes.
* NO: "heart on fire", "breaking free", "light in the dark", "dancing in the rain"
* YES: fresh metaphors, unexpected imagery, layered meaning

## 6. Response Format
Output ONLY the programmatic lyrics (Version B) with bracketed tags. No Director's Note, no style prompt, no explanation, no markdown formatting. Just the lyrics with [bracketed] structural and dynamic tags, ready to paste into Suno.`;

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const { input, genre, stylePrompt, mode } = await req.json();

    if (!input || !input.trim()) {
      return new Response(JSON.stringify({ error: "Please provide an idea, story, or rough lyrics" }), {
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

    let userPrompt: string;

    if (mode === "polish") {
      // Polish existing lyrics — apply GMA rules and add bracketed descriptors
      userPrompt = `Polish and enhance these existing lyrics. Apply the Tollbooth emotional mapping, add [bracketed] dynamic/structural tags, and elevate the language to the 10,000 Book Reader standard. Preserve the core meaning and story but make it Suno-ready with proper structure tags and dynamic shaping.

${genre ? `Genre context: ${genre}` : ''}
${stylePrompt ? `Style context: ${stylePrompt}` : ''}

EXISTING LYRICS:
${input}`;
    } else {
      // Develop from idea/story/fragments
      userPrompt = `Develop full Suno-ready lyrics from this input. Apply the Tollbooth emotional mapping method, use the 10,000 Book Reader standard for literary quality, and include [bracketed] structural and dynamic tags throughout.

${genre ? `Genre context: ${genre}` : ''}
${stylePrompt ? `Style context: ${stylePrompt}` : ''}

USER INPUT:
${input}`;
    }

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 3000,
      messages: [{ role: "user", content: userPrompt }],
      system: GMA_SYSTEM_PROMPT
    });

    const lyrics = message.content
      .filter((block: any) => block.type === "text")
      .map((block: any) => block.text)
      .join("");

    return new Response(JSON.stringify({ lyrics }), {
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
  path: "/api/lyrics-develop"
};
