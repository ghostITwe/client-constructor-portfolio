import type { SvelteComponentDev } from 'svelte/internal';
import type { IToolItem } from '$lib/interfaces/IToolItem';
import type { IImage } from '$lib/interfaces/IImage';

export interface IToolLink {
  img: IImage;
  negative: string;
  after: string;
  component?: typeof SvelteComponentDev;
  onclick?: Function; // FIXME: сделать обязательным?
  items?: IToolItem[];
}

