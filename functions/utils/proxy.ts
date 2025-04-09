export async function redirect(context: any, url: string) {
    const response = await fetch(url, {
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
