export async function post({ request }) {
    const formBody = await request.json();

    return await fetch(`${import.meta.env.VITE_BASE_URL}/api/registration`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(formBody)
    });
}