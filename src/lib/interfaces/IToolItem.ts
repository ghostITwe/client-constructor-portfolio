import type { SvelteComponentDev } from 'svelte/internal';
import type { IImage } from '$lib/interfaces/IImage';

export interface IToolItem {
  img: IImage;
  text: string;
  name?: string;
  component?: typeof SvelteComponentDev;
  onclick?: Function;
}