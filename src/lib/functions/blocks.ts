import { cnt, content } from '$lib/stores';

export function addBlock() {
  // let e = {
  //   component: component,
  //   props: {
  //     text: 'test'
  //   }
  // }
  // // @ts-ignore
  // content.update(el => { return el.push(e)} );
  console.log(cnt);
  cnt.update(n => n * 2);
  console.log(cnt);
}