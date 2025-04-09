export async function redirect(context: any, originUrl: string) {
    const requestUrl = new URL(context.request.url);

    const response = await fetch(originUrl + requestUrl.search, {
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
