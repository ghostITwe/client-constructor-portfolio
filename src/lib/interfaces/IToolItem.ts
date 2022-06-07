import type { BlocksList } from '$lib/vars';

export interface IToolItem {
  alt: string;
  src: string;
  text: string;
  componentName?: BlocksList;
  onclick?: Function;
}