import type { SvelteComponentDev } from 'svelte/internal';

export interface IToolItem {
  alt: string;
  src: string;
  text: string;
  name?: string;
  component?: typeof SvelteComponentDev;
  onclick?: Function;
}