import type { IToolLink } from '$lib/interfaces/IToolLink';
import { addBlock } from '$lib/functions/blocks';
import Paragraph from '$lib/components/blocks/Paragraph.svelte';
import Heading from '$lib/components/blocks/Heading.svelte';
import Link from '$lib/components/blocks/Link.svelte';
import { toggle } from '$lib/functions/sidebar';

export enum BarsList {
  toolbar,
  editbar
}

export enum ComponentsList {
  paragraph
}

export const propsList = {
  text: {
    name: 'text',
    title: 'Текст',
    type: 'string',
    value: ''
  }
}

export const props = {
  [ComponentsList.paragraph]: [propsList.text]
}

export const toolsLinks: IToolLink[][] = [[{
  src: '/assets/images/icons/toolbar/templateIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeTemplateIcon.svg',
  after: 'Шаблоны',
  onclick: toggle,
  component: BarsList.editbar
}, {
  src: '/assets/images/icons/toolbar/addIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeAddIcon.svg',
  after: 'Добавить',
  component: BarsList.toolbar,
  items: [{
    alt: '',
    src: '/assets/images/icons/blocks/paragraph.svg',
    text: 'Абзац',
    name: 'paragraph', // FIXME: нужен ли? Нужна переменная для передачи названия в функцию добавления
    component: Paragraph,
    onclick: addBlock
  }, {
    alt: '',
    src: '/assets/images/icons/blocks/list.svg',
    text: 'Список'
  }, {
    alt: '',
    src: '/assets/images/icons/blocks/heading.svg',
    text: 'Заголовок',
    name: 'heading',
    component: Heading,
    onclick: addBlock
  }, {
    alt: '',
    src: '/assets/images/icons/blocks/blockquote.svg',
    text: 'Цитата'
  }]
}, {
  src: '/assets/images/icons/toolbar/mediaIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeMediaIcon.svg',
  after: 'Медия'
}, {
  src: '/assets/images/icons/toolbar/designIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeDesignIcon.svg',
  after: 'Дизайн'
}, {
  src: '/assets/images/icons/toolbar/adaptiveIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeAdaptiveIcon.svg',
  after: 'Адаптив'
}], [{
  src: '/assets/images/icons/toolbar/viewIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeViewIcon.svg',
  after: 'Просмотр'
}, {
  src: '/assets/images/icons/toolbar/saveIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeSaveIcon.svg',
  after: 'Сохранить'
}]];