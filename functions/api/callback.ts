export async function onRequest(context) {
    const backendURL = "https://services.outsideworx.net/api/callback/come-in-and-find-out";

    const init: RequestInit = {
        method: context.request.method,
        headers: context.request.headers,
        body: context.request.method !== "GET" && context.request.method !== "HEAD"
            ? await context.request.text()
            : undefined,
        redirect: "follow"
    };

    const response = await fetch(backendURL, init);

    return new Response(response.body, {
        status: response.status,
        headers: {
            "Content-Type": response.headers.get("Content-Type") || "application/json"
        }
    });
}
