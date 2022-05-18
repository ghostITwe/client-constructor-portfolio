import type { SvelteComponentDev } from 'svelte/internal';
import type { ToolItem } from '$lib/interfaces/ToolItem';
import type { Image } from '$lib/interfaces/Image';

export interface ToolLink {
  img: Image;
  negative: string;
  after: string;
  component?: typeof SvelteComponentDev;
  onclick?: Function; // FIXME: сделать обязательным?
  items?: ToolItem[];
}

