<script>
    import Paragraph from "$lib/components/blocks/Paragraph.svelte";
    import Header from "$lib/components/blocks/Header.svelte";
    import Link from "$lib/components/blocks/Link.svelte";
    import { addBlock, removeBlock } from "$lib/functions/blocks.ts";

    export let props;
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

  <section class="grid w-80 grid-cols-2 gap-5">
    <h3 class="text-white col-span-2 pl-4">Текст</h3>
    {#each toolItems as {img, name, onclick, component}}
      <article data-component={component}
               class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto"
               class:cursor-pointer={!!onclick} on:click={() => onclick(component)}>
        <img src={img} alt="#" class="m-auto"/>
        <p class="text-white text-center pt-2.5">{name}</p>
      </article>
    {/each}
  </section>