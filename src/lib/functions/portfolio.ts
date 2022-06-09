import { get } from 'svelte/store';
import { content } from '$lib/stores';

export async function savePortfolio() {
  const contentValue = get(content);

  const response = await fetch('/api/portfolio.json', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({contentValue})
  });

  // let res = await response.json();
}