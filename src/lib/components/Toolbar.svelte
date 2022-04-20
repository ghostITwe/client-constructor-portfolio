<script>
    export let content;

    function addBlock() {
        content = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum libero quod temporibus tenetur. </p>";
    }
</script>

<section id="toolbar"
         class="grid h-screen border-l-2 p-6 pl-8 gap-6 duration-200 overflow-y-scroll no-scrollbar backdrop-blur-md bg-main-color/90 absolute left-full top-0 transform">
    <section class="grid w-80 grid-cols-2 gap-5">
        <h3 class="text-white col-span-2 pl-4">Текст</h3>
        <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto" on:click={addBlock}>
            <img src="/assets/images/rec.svg" alt="#" class="m-auto"/>
            <p class="text-white text-center pt-2.5">Абзац</p>
        </article>
        <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
            <img src="/assets/images/rec.svg" alt="#" class="m-auto"/>
            <p class="text-white text-center pt-2.5">Список</p>
        </article>
        <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
            <img src="/assets/images/rec.svg" alt="#" class="m-auto"/>
            <p class="text-white text-center pt-2.5">Заголовок</p>
        </article>
        <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
            <img src="/assets/images/rec.svg" alt="#" class="m-auto"/>
            <p class="text-white text-center pt-2.5">Цитата</p>
        </article>
    </section>
</section>