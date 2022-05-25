import { get } from 'svelte/store';
import { ComponentsList, props } from '$lib/vars';
import { content, bar, freeId } from '$lib/stores';
import Editbar from '$lib/components/EditBar.svelte';

export function addBlock(component, name) {
  const id = get(freeId);

  // FIXME: обдумать реализацию props
  content.update(content => [...content, {
    id: id,
    name: name,
    component: component,
    props: {...props[name]}
  }]);

  bar.update(bar => {
    bar.id = id;
    bar.component = Editbar;
    return bar;
  });

  freeId.update(freeId => freeId + 1);
}

export function removeBlock(index) {
  content.update(content => {
    content.splice(index, 1);
    return content;
  });
}