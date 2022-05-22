import type { SvelteComponentDev } from 'svelte/internal';
import type { IToolItem } from '$lib/interfaces/IToolItem';
import type { BarsList } from '$lib/vars';

export interface IToolLink {
  src: string;
  negative: string;
  after: string;
  component?: BarsList; // typeof SvelteComponentDev;
  onclick?: Function; // FIXME: сделать обязательным?
  items?: IToolItem[];
}

