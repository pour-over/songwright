export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const {
      title, style, lyrics, referenceUrl, instrumental,
      audioWeight, styleWeight, weirdnessConstraint, vocalGender
    } = await req.json();

    const isInstrumental = instrumental === true;

    if (!title || !style || (!isInstrumental && !lyrics)) {
      return new Response(JSON.stringify({ error: "Missing required fields: title, style, lyrics" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const apiKey = Netlify.env.get("KIE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Suno API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const isCover = !!referenceUrl;
    const endpoint = isCover
      ? "https://api.kie.ai/api/v1/generate/upload-cover"
      : "https://api.kie.ai/api/v1/generate";

    const body: Record<string, any> = {
      customMode: true,
      instrumental: isInstrumental,
      model: "V5",
      prompt: isInstrumental ? '' : lyrics,
      style: style,
      title: title,
      callBackUrl: "https://songwright.netlify.app/api/suno-callback"
    };

    if (isCover) {
      body.uploadUrl = referenceUrl;
      // V5 cover controls (0-1 range)
      if (audioWeight !== undefined) body.audioWeight = audioWeight;
      if (styleWeight !== undefined) body.styleWeight = styleWeight;
      if (weirdnessConstraint !== undefined) body.weirdnessConstraint = weirdnessConstraint;
    }

    if (vocalGender) body.vocalGender = vocalGender;

    const resp = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const rawText = await resp.text();
    let data: any;
    try {
      data = JSON.parse(rawText);
    } catch {
      return new Response(JSON.stringify({
        error: `Generation service error (HTTP ${resp.status}): ${rawText.slice(0, 200)}`
      }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!resp.ok || data.code !== 200) {
      return new Response(JSON.stringify({
        error: data.msg || `Kie.ai API error: HTTP ${resp.status}`
      }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ taskId: data.data?.taskId }), {
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
  path: "/api/suno-generate"
};
