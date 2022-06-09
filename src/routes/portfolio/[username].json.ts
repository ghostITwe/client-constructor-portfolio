export async function get({ request, params }) {
  const authToken = request.headers.get('authorization');

  return await fetch(`${import.meta.env.VITE_BASE_URL}/api/portfolio/${params.username}`, {
    method: 'GET',
    headers: {
      'Authorization': authToken,
      'Content-type': 'application/json',
      'accept': 'application/json'
    }
  });
}