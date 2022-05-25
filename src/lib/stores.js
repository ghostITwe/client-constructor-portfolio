import { writable } from 'svelte/store';

export const content = writable([]);
export const bar = writable(null);
export const freeId = writable(0);