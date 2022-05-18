import { content, bar } from '$lib/stores';
import Editbar from '$lib/components/EditBar.svelte';

export function addBlock(component) {
  let index = 0;

  content.update(content => [...content, {
    index: index,
    name: 'paragraph',
    component: component,
    props: {
      text: 'test'
    }
  }]);

  bar.update(bar => {
    return {
      index: index,
      component: Editbar
    };
  });
}

export function removeBlock(index) {
  content.update(content => {
    content.splice(index, 1);
    return content;
  });
}