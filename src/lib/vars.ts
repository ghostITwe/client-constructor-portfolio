import { bar } from '$lib/stores';
import type { IToolLink } from '$lib/interfaces/IToolLink';
import { toggle } from '$lib/functions/sidebar';
import { addBlock } from '$lib/functions/blocks';
import Paragraph from '$lib/components/blocks/Paragraph.svelte';
import Header from '$lib/components/blocks/Header.svelte';
import Link from '$lib/components/blocks/Link.svelte';
import Toolbar from '$lib/components/Toolbar.svelte';

export const toolsLinks: IToolLink[][] = [[{
  img: {
    alt: 'Шаблоны',
    src: '/assets/images/icon/toolbarIcon/templateIcon.svg'
  },
  negative: '/assets/images/icon/toolbarIcon/negativeTemplateIcon.svg',
  after: 'Шаблоны',
  onclick: toggle
}, {
  img: {
    alt: 'Добавить',
    src: '/assets/images/icon/toolbarIcon/addIcon.svg'
  },
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
  items: [{
    img: {
      alt: '',
      src: '/assets/images/rec.svg'
    },
    text: 'Абзац',
    name: 'paragraph', // FIXME: нужен ли? Нужна переменная для передачи названия в функцию добавления
    component: Paragraph,
    onclick: addBlock
  }, {
    img: {
      alt: '',
      src: '/assets/images/rec.svg'
    },
    text: 'Список'
  }, {
    img: {
      alt: '',
      src: '/assets/images/rec.svg'
    },
    text: 'Заголовок',
    name: 'header',
    component: Header,
    onclick: addBlock
  }, {
    img: {
      alt: '',
      src: '/assets/images/rec.svg'
    },
    text: 'Цитата'
  }, {
    img: {
      alt: '',
      src: '/assets/images/rec.svg'
    },
    text: 'Ссылка',
    name: 'link',
    component: Link,
    onclick: addBlock
  }]
}, {
  img: {
    alt: 'Медия',
    src: '/assets/images/icon/toolbarIcon/mediaIcon.svg'
  },
  negative: '/assets/images/icon/toolbarIcon/negativeMediaIcon.svg',
  after: 'Медия'
}, {
  img: {
    alt: 'Дизайн',
    src: '/assets/images/icon/toolbarIcon/designIcon.svg'
  },
  negative: '/assets/images/icon/toolbarIcon/negativeDesignIcon.svg',
  after: 'Дизайн'
}, {
  img: {
    alt: 'Адаптив',
    src: '/assets/images/icon/toolbarIcon/adaptiveIcon.svg'
  },
  negative: '/assets/images/icon/toolbarIcon/negativeAdaptiveIcon.svg',
  after: 'Адаптив'
}], [{
  img: {
    alt: 'Просмотр',
    src: '/assets/images/icon/toolbarIcon/viewIcon.svg'
  },
  negative: '/assets/images/icon/toolbarIcon/negativeViewIcon.svg',
  after: 'Просмотр'
}, {
  img: {
    alt: 'Сохранить',
    src: '/assets/images/icon/toolbarIcon/saveIcon.svg'
  },
  negative: '/assets/images/icon/toolbarIcon/negativeSaveIcon.svg',
  after: 'Сохранить'
}]];

export const propsList = {
  text: {
    name: 'Текст',
    type: 'text'
  }
}