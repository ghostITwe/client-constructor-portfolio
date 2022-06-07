import type { IToolItem } from '$lib/interfaces/IToolItem';
import type { BarsList } from '$lib/vars';

export interface IToolLink {
  src: string;
  negative: string;
  after: string;
  componentName?: BarsList;
  onclick?: Function; // FIXME: сделать обязательным?
  items?: IToolItem[];
}

