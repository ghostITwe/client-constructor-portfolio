<script>
    import Paragraph from "$lib/components/Paragraph.svelte";

    export let content;

    function addBlock() {
        content[content.length] = {
            component: Paragraph,
            text: "lorem"
        };
    }

    let toolItems = [
        {
            img: "/assets/images/rec.svg",
            name: "Абзац",
            onclick: addBlock
        }, {
            img: "/assets/images/rec.svg",
            name: "Список",
        }, {
            img: "/assets/images/rec.svg",
            name: "Заголовок"
        }, {
            img: "/assets/images/rec.svg",
            name: "Цитата",
        },
    ];
</script>

<section id="toolbar"
         class="grid h-screen border-l-2 p-6 pl-8 gap-6 duration-200 overflow-y-scroll no-scrollbar
         backdrop-blur-md bg-main-color/90 absolute left-full top-0 transform content-start">
    <section class="grid w-80 grid-cols-2 gap-5">
        <h3 class="text-white col-span-2 pl-4">Текст</h3>
        {#each toolItems as {img, name, onclick}}
        <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto" class:cursor-pointer={!!onclick} on:click={onclick}>
            <img src={img} alt="#" class="m-auto"/>
            <p class="text-white text-center pt-2.5">{name}</p>
        </article>
        {/each}
    </section>
</section>