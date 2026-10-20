export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("No authorization code provided by GitHub.", { status: 400 });
  }

  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response(
      "OAuth credentials (GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET) missing in Cloudflare Pages.",
      { status: 500 }
    );
  }

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "user-agent": "cloudflare-pages-decap-cms",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new Response(`GitHub OAuth Error: ${tokenData.error_description || tokenData.error}`, {
        status: 400,
      });
    }

    const token = tokenData.access_token;
    const provider = "github";

    // Decap CMS expects postMessage back to window.opener
    const html = `<!doctype html>
<html>
  <head>
    <title>Authorizing Decap CMS...</title>
  </head>
  <body>
    <p style="font-family: sans-serif; text-align: center; margin-top: 40px;">
      Otentikasi GitHub berhasil. Menghubungkan ke Decap CMS...
    </p>
    <script>
      (function() {
        function recieveMessage(e) {
          window.opener.postMessage(
            'authorization:${provider}:success:{"token":"${token}","provider":"${provider}"}',
            e.origin
          );
          window.removeEventListener("message", recieveMessage, false);
          window.close();
        }
        window.addEventListener("message", recieveMessage, false);
        window.opener.postMessage("authorizing:${provider}", "*");
      })();
    </script>
  </body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  } catch (err) {
    return new Response(`Internal Server Error: ${err.message}`, { status: 500 });
  }
}
