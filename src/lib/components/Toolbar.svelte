<script>
    import Paragraph from "$lib/components/blocks/Paragraph.svelte";
    import { content } from "$lib/stores.js";
    import Header from "$lib/components/blocks/Header.svelte";
    import Link from "$lib/components/blocks/Link.svelte";
    import { addBlock } from "$lib/functions/blocks.ts";


    // function addBlock(component) {
    //     $content[$content.length] = {
    //         component: component,
    //         props: {
    //             text: 'test'
    //         }
    //     };
    // }

    function removeBlock(index) {
        $content.splice(index, 1);
        $content = $content;
    }

    function editBlock(index) {
        let element = $content[index];
        element.props = {
            text: 'Lorem ipsum'
        }
        $content[$content.length] = element;
    }

    let toolItems = [
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
    ];
</script>

<section id="toolbar"
         class="grid h-screen border-l-2 p-6 pl-8 gap-6 duration-200 overflow-y-scroll no-scrollbar
         backdrop-blur-md bg-main-color/90 absolute left-full top-0 transform content-start">
  <section class="grid w-80 grid-cols-2 gap-5">
    <h3 class="text-white col-span-2 pl-4">Текст</h3>
    {#each toolItems as {img, name, onclick, component}}
      <article data-component={component}
               class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto"
               class:cursor-pointer={!!onclick} on:click={() => onclick()}>
        <img src={img} alt="#" class="m-auto"/>
        <p class="text-white text-center pt-2.5">{name}</p>
      </article>
    {/each}
  </section>
</section>