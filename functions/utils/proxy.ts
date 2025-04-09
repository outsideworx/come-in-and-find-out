export async function redirect(context: any, originUrl: string) {
    const authToken = context.env.AUTH_TOKEN;
    const headers = new Headers(context.request.headers);
    if (authToken) {
        headers.set("X-Auth-Token", authToken);
    }

    const requestUrl = new URL(context.request.url);
    const response = await fetch(originUrl + requestUrl.search, {
        method: context.request.method,
        headers: headers,
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
