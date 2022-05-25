import type { SvelteComponentDev } from 'svelte/internal';
import type { ComponentsList } from '$lib/vars';

export interface IToolItem {
  alt: string;
  src: string;
  text: string;
  name?: ComponentsList;
  component?: typeof SvelteComponentDev;
  onclick?: Function;
}