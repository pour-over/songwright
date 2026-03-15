export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const { base64, filename, mimeType } = await req.json();

    if (!base64 || !filename) {
      return new Response(JSON.stringify({ error: "Missing required fields: base64, filename" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const apiKey = Netlify.env.get("KIE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Upload to Kie.ai File Upload API (free, 3-day retention)
    const resp = await fetch("https://kieai.redpandaai.co/api/file-base64-upload", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        base64Data: base64,
        fileName: filename,
        uploadPath: "audio"
      })
    });

    const rawText = await resp.text();
    let data: any;
    try {
      data = JSON.parse(rawText);
    } catch {
      return new Response(JSON.stringify({
        error: `Upload service error (HTTP ${resp.status}): ${rawText.slice(0, 200)}`
      }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!resp.ok || !data.success) {
      return new Response(JSON.stringify({
        error: data.msg || `Upload failed: HTTP ${resp.status}`
      }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({
      fileUrl: data.data?.fileUrl || data.data?.downloadUrl,
      fileName: data.data?.originalName || filename,
      expiresAt: data.data?.expiresAt
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Upload failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const config = {
  path: "/api/suno-upload"
};
