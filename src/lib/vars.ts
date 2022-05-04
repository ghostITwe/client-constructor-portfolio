import type { toolLink } from '$lib/interfaces/ToolLink';
import { toggle } from '$lib/functions/sidebar';

export const toolLinks: toolLink[][] = [[{
  alt: 'Шаблоны',
  src: '/assets/images/icon/toolbarIcon/templateIcon.svg',
  negative: '',
  after: 'Шаблоны',
  onclick: toggle
}, {
  alt: 'Добавить',
  src: '/assets/images/icon/toolbarIcon/addIcon.svg',
  negative: '',
  after: 'Добавить',
  onclick: toggle
}, {
  alt: 'Медия',
  src: '/assets/images/icon/toolbarIcon/mediaIcon.svg',
  negative: '',
  after: 'Медия'
}, {
  alt: 'Дизайн',
  src: '/assets/images/icon/toolbarIcon/designIcon.svg',
  negative: '',
  after: 'Дизайн'
}, {
  alt: 'Адаптив',
  src: '/assets/images/icon/toolbarIcon/adaptiveIcon.svg',
  negative: '',
  after: 'Адаптив'
}], [{
  alt: 'Просмотр',
  src: '/assets/images/icon/toolbarIcon/viewIcon.svg',
  negative: '/assets/images/icon/toolbarIcon/negativeViewIcon.svg',
  after: 'Просмотр'
}, {
  alt: 'Сохранить',
  src: '/assets/images/icon/toolbarIcon/saveIcon.svg',
  negative: '',
  after: 'Сохранить'
}]];
