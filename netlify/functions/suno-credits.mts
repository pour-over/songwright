export default async (req: Request) => {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const apiKey = Netlify.env.get("KIE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Suno API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const resp = await fetch("https://api.kie.ai/api/v1/chat/credit", {
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    });

    const data = await resp.json();

    if (!resp.ok) {
      return new Response(JSON.stringify({ error: data.msg || "Credits check failed" }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify(data), {
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
  path: "/api/suno-credits"
};
