import { derived, writable } from 'svelte/store';

export const content = writable([]);
export const bar = writable(null);
export const index = writable(0);