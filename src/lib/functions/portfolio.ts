import { content } from '$lib/stores';

export async function savePortfolio() {
  let response = await fetch("api/portfolio.json", {
    method: 'POST',
    body: JSON.stringify(content)
  });

  console.log(response);
}