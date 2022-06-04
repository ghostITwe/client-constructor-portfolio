import { content } from '$lib/stores';
import { get } from 'svelte/store';

let token = 'Bearer ' + localStorage.getItem('token')

export async function savePortfolio() {
  let contentValue = get(content);

  let response = await fetch("api/portfolio.json", {
    method: 'POST',
    headers: {
      'Authorization': token
    },
    body: JSON.stringify({contentValue})
  });

  let res = await response.json();
}

export async function getPortfolio() {
  let response = await fetch("api/portfolio.json", {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  });

  if (response.ok) {
    return await response.json();
  }
}