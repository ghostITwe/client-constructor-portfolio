import { get } from 'svelte/store';
import { bars, BarsList, props } from '$lib/vars';
import { bar, content, freeId } from '$lib/stores';

export function addBlock(componentName) {
  const id = get(freeId);

  // FIXME: обдумать реализацию props
  content.update(content => [...content, {
    id: id,
    componentName: componentName,
    props: {...props[componentName]}
  }]);

  bar.update(bar => {
    bar.id = id;
    bar.component = bars[BarsList.editbar];
    return bar;
  });

  // FIXME: доработать учитывая загрузку из бд
  freeId.update(freeId => freeId + 1);
}

export function removeBlock(index) {
  content.update(content => {
    content.splice(index, 1);
    return content;
  });
}