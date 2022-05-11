import type { toolLink } from '$lib/interfaces/ToolLink';
import { toggle } from '$lib/functions/sidebar';
import Paragraph from '$lib/components/blocks/Paragraph.svelte';
import { addBlock } from '$lib/functions/blocks';
import Header from '$lib/components/blocks/Header.svelte';
import Link from '$lib/components/blocks/Link.svelte';
import { bar } from '$lib/stores';
import Editbar from '$lib/components/Editbar.svelte';
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
        component: Toolbar,
      };
    });
  }
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


export const toolItems = [
  {
    name: 'Добавить',
    items: [
      {
        img: "/assets/images/rec.svg",
        name: "Абзац",
        component: Paragraph,
        onclick: addBlock
      }, {
        img: "/assets/images/rec.svg",
        name: "Список",
      }, {
        img: "/assets/images/rec.svg",
        name: "Заголовок",
        component: Header,
        onclick: addBlock
      }, {
        img: "/assets/images/rec.svg",
        name: "Цитата",
      }, {
        img: "/assets/images/rec.svg",
        name: 'Ссылка',
        component: Link,
        onclick: addBlock
      }
    ]
  },
];
