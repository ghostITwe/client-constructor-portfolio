export async function post({ request }) {
    const formBody = await request.json();
    const authToken = request.headers.get('authorization');

    return await fetch(`${import.meta.env.VITE_BASE_URL}/api/portfolio`, {
        method: 'POST',
        headers: {
            'Authorization': authToken,
            'Content-type': 'application/json',
            'accept': 'application/json',
        },
        body: JSON.stringify(formBody)
    });
}

export async function get({ request }) {
    const authToken = request.headers.get('authorization');

    return await fetch(`${import.meta.env.VITE_BASE_URL}/api/portfolio`, {
        method: 'GET',
        headers: {
            'Authorization': authToken,
            'Content-type': 'application/json',
            'accept': 'application/json',
        }
    });
}