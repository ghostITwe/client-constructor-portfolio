import type { toolLink } from '$lib/interfaces/ToolLink';
import { toggle } from '$lib/functions/sidebar';
import { addBlock } from '$lib/functions/blocks';
import { bar } from '$lib/stores';
import Paragraph from '$lib/components/blocks/Paragraph.svelte';
import Header from '$lib/components/blocks/Header.svelte';
import Link from '$lib/components/blocks/Link.svelte';
import Editbar from '$lib/components/EditBar.svelte';
import Toolbar from '$lib/components/Toolbar.svelte';

export const toolLinks: toolLink[][] = [[{
  alt: 'Шаблоны',
  src: '/assets/images/icon/toolbarIcon/templateIcon.svg',
  negative: '/assets/images/icon/toolbarIcon/negativeTemplateIcon.svg',
  after: 'Шаблоны',
  onclick: toggle
}, {
  alt: 'Добавить',
  src: '/assets/images/icon/toolbarIcon/addIcon.svg',
  negative: '/assets/images/icon/toolbarIcon/negativeAddIcon.svg',
  after: 'Добавить',
  onclick: () => {
    toggle();
    bar.update(bar => {
      return {
        component: Toolbar
      };
    });
  },
  component: ''
}, {
  alt: 'Медия',
  src: '/assets/images/icon/toolbarIcon/mediaIcon.svg',
  negative: '/assets/images/icon/toolbarIcon/negativeMediaIcon.svg',
  after: 'Медия'
}, {
  alt: 'Дизайн',
  src: '/assets/images/icon/toolbarIcon/designIcon.svg',
  negative: '/assets/images/icon/toolbarIcon/negativeDesignIcon.svg',
  after: 'Дизайн'
}, {
  alt: 'Адаптив',
  src: '/assets/images/icon/toolbarIcon/adaptiveIcon.svg',
  negative: '/assets/images/icon/toolbarIcon/negativeAdaptiveIcon.svg',
  after: 'Адаптив'
}], [{
  alt: 'Просмотр',
  src: '/assets/images/icon/toolbarIcon/viewIcon.svg',
  negative: '/assets/images/icon/toolbarIcon/negativeViewIcon.svg',
  after: 'Просмотр'
}, {
  alt: 'Сохранить',
  src: '/assets/images/icon/toolbarIcon/saveIcon.svg',
  negative: '/assets/images/icon/toolbarIcon/negativeSaveIcon.svg',
  after: 'Сохранить'
}]];

// TODO: Перенести в tools(toolLinks)
export const toolItems = [{
  img: '/assets/images/rec.svg',
  text: 'Абзац',
  name: 'paragraph',
  component: Paragraph,
  onclick: addBlock
}, {
  img: '/assets/images/rec.svg',
  text: 'Список'
}, {
  img: '/assets/images/rec.svg',
  text: 'Заголовок',
  name: 'header',
  component: Header,
  onclick: addBlock
}, {
  img: '/assets/images/rec.svg',
  text: 'Цитата'
}, {
  img: '/assets/images/rec.svg',
  text: 'Ссылка',
  name: 'link',
  component: Link,
  onclick: addBlock
}];