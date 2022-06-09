import type { IToolLink } from '$lib/interfaces/IToolLink';
import { addBlock } from '$lib/functions/blocks';
import { savePortfolio } from '$lib/functions/portfolio';
import Paragraph from '$lib/components/blocks/Paragraph.svelte';
import Heading from '$lib/components/blocks/Heading.svelte';
import Blockquote from '$lib/components/blocks/Blockquote.svelte';
import Toolbar from '$lib/components/Toolbar.svelte';
import EditBar from '$lib/components/EditBar.svelte';
import AdaptiveBar from '$lib/components/AdaptiveBar.svelte';

export enum BarsList {
  toolbar,
  editbar,
  adaptivebar
}

export enum BlocksList {
  paragraph,
  heading,
  blockquote
}

export const propsList = {
  text: {
    name: 'text',
    title: 'Текст',
    type: 'string',
    value: ''
  },
  author: {
    name: 'author',
    title: 'Автор',
    type: 'string',
    value: ''
  }
}

export const bars = {
  [BarsList.toolbar]: Toolbar,
  [BarsList.editbar]: EditBar,
  [BarsList.adaptivebar]: AdaptiveBar
}

export const blocks = {
  [BlocksList.paragraph]: Paragraph,
  [BlocksList.heading]: Heading,
  [BlocksList.blockquote]: Blockquote
}

export const props = {
  [BlocksList.paragraph]: [propsList.text],
  [BlocksList.heading]: [propsList.text],
  [BlocksList.blockquote]: [propsList.text, propsList.author]
}

export const toolsLinks: IToolLink[][] = [[{
  src: '/assets/images/icons/toolbar/templateIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeTemplateIcon.svg',
  after: 'Шаблоны',
}, {
  src: '/assets/images/icons/toolbar/addIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeAddIcon.svg',
  after: 'Добавить',
  componentName: BarsList.toolbar,
  items: [{
    alt: '',
    src: '/assets/images/icons/blocks/paragraph.svg',
    text: 'Абзац',
    componentName: BlocksList.paragraph, // FIXME: нужен ли? Нужна переменная для передачи названия в функцию добавления
    onclick: addBlock
  }, {
    alt: '',
    src: '/assets/images/icons/blocks/list.svg',
    text: 'Список'
  }, {
    alt: '',
    src: '/assets/images/icons/blocks/heading.svg',
    text: 'Заголовок',
    componentName: BlocksList.heading,
    onclick: addBlock
  }, {
    alt: '',
    src: '/assets/images/icons/blocks/blockquote.svg',
    text: 'Цитата',
    componentName: BlocksList.blockquote,
    onclick: addBlock
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
  after: 'Адаптив',
  componentName: BarsList.adaptivebar
}, {
  src: '/assets/images/icons/toolbar/editIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeEditIcon.svg',
  after: 'Свойства',
  componentName: BarsList.editbar
}], [{
  src: '/assets/images/icons/toolbar/viewIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeViewIcon.svg',
  after: 'Просмотр'
}, {
  src: '/assets/images/icons/toolbar/saveIcon.svg',
  negative: '/assets/images/icons/toolbar/negativeSaveIcon.svg',
  after: 'Сохранить',
  onclick: savePortfolio // TODO: Сделать реализацию сохранения
}]];