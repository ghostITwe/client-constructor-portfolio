import type { SvelteComponentDev } from 'svelte/internal';
import type { Image } from '$lib/interfaces/Image';

export interface ToolItem {
  img: Image;
  text: string;
  name?: string;
  component?: typeof SvelteComponentDev;
  onclick?: Function;
}