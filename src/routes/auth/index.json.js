export function post() {
    return fetch("https://fe47c82cb926df.lhrtunnel.link/api/auth", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: ''
    });
}