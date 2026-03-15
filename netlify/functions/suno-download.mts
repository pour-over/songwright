export default async (req: Request) => {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const url = new URL(req.url);
    const audioUrl = url.searchParams.get("url");
    const filename = url.searchParams.get("filename") || "song.mp3";

    if (!audioUrl) {
      return new Response(JSON.stringify({ error: "Missing url parameter" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const resp = await fetch(audioUrl);

    if (!resp.ok) {
      return new Response(JSON.stringify({ error: `Failed to fetch audio: ${resp.status}` }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    const audioBuffer = await resp.arrayBuffer();

    return new Response(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": audioBuffer.byteLength.toString()
      }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || "Download failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const config = {
  path: "/api/suno-download"
};
