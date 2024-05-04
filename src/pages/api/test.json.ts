import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ params, request }) => {
    return new Response(JSON.stringify({
            message: "Das war ein GET!"
        })
    )
}
