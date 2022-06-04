export async function post({ request }) {
    const formBody = await request.json();

    return await fetch("http://vds.4it.space/api/auth", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(formBody)
    });
}