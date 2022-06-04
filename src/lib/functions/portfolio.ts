import { content } from '$lib/stores';
import { get } from 'svelte/store';

export async function savePortfolio() {
  let contentValue = get(content);

  let response = await fetch("api/portfolio.json", {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({contentValue})
  });

  let res = await response.json();
}

export async function getPortfolio() {
  let response = await fetch("api/portfolio.json", {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  });

  if (response.ok) {
    return await response.json();
  }
}