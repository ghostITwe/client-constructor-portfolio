import { get } from 'svelte/store';
import { ComponentsList, props } from '$lib/vars';
import { content, bar, index } from '$lib/stores';
import Editbar from '$lib/components/EditBar.svelte';

export function addBlock(component) {
  const id = get(index);
  // FIXME: как проводить поиск и сортировку
  //   content = {
  //     [id]: {
  //       index: id,
  //       name: ComponentsList.paragraph,
  //       component: component,
  //       props: {...props[ComponentsList.paragraph]}
  //     }
  //   }

  // FIXME: обдумать реализацию props
  content.update(content => [...content, {
    index: id,
    name: ComponentsList.paragraph,
    component: component,
    props: {...props[ComponentsList.paragraph]}
  }]);

  bar.update(bar => {
    return {
      index: id,
      component: Editbar
    };
  });

  index.update(index => index + 1);
}

export function removeBlock(index) {
  content.update(content => {
    content.splice(index, 1);
    // content = content.filter(el => el.index !== index);
    return content;
  });
}