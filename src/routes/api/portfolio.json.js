export async function post({ request }) {
    const formBody = await request.json();
    const authToken = request.headers.get('authorization');

    return await fetch("http://vds.4it.space/api/portfolio", {
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

    return await fetch("http://vds.4it.space/api/portfolio", {
        method: 'GET',
        headers: {
            'Authorization': authToken,
            'Content-type': 'application/json',
            'accept': 'application/json',
        }
    });
}