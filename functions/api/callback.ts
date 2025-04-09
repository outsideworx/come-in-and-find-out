export async function onRequest(context) {
    const response = await fetch("https://services.outsideworx.net/api/callback/come-in-and-find-out", {
        method: context.request.method,
        headers: context.request.headers,
        body: context.request.method !== "GET" && context.request.method !== "HEAD"
            ? await context.request.text()
            : undefined,
        redirect: "follow"
    });

    return new Response(response.body, {
        status: response.status,
        headers: response.headers
    });
}
