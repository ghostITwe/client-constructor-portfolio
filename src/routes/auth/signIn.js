

export function post(email, password) {

  return fetch('https://a7094aa89673aa.lhrtunnel.link/api/auth', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(res => res.json());
}