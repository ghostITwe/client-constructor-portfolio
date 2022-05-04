import { content } from '$lib/stores';

export function addBlock(component) {
    content.update(content => [...content, {
        index: 0,
        component: component,
        props: {
            text: 'test'
        }
    }]);
}

export function removeBlock(index) {
    content.update(content => {
        content.splice(index, 1);
        return content;
    });
}

// export function editBlock(index) {
//     content.update(content => {
//         content[index].props = {
//
//         };
//         return content;
//     })
// }