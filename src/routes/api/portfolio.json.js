export async function post({ request }) {
    const formBody = await request.json();

    return await fetch("https://fef5048a28eea3.lhrtunnel.link/api/portfolio", {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer' + localStorage.getItem('token'),
            'Content-type': 'application/json',
            'accept': 'application/json',
        },
        body: JSON.stringify(formBody)
    });
}