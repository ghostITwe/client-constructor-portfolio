<script>
    import Img from "$assets/123.jpg";
    import Sidebar from "$lib/components/Sidebar.svelte";

    let logo = 'LS';



</script>

<div class="flex overflow-hidden h-screen">
    <Sidebar/>
    <main class="overflow-y-scroll">
        <img src="{Img}" alt="123" class="w-full min-h-screen" />
        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at atque beatae cumque explicabo natus
            odio odit quaerat quisquam repellat. Accusantium dolorem est eum iure numquam sint tempore tenetur
            totam.</p>
        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet asperiores assumenda deserunt
            dolores quas quidem sed sunt vero voluptates. A tenetur vel voluptatibus. Adipisci dolor hic laborum
            provident repudiandae.</p>
        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur consequuntur minima odit sit soluta
            tenetur. Ad alias amet blanditiis dolorum eveniet molestiae mollitia odit quam! Laborum nemo qui
            quisquam!</p>
        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum harum, hic iure mollitia nobis
            reprehenderit voluptatum! A accusantium in inventore labore optio recusandae veniam voluptates. Assumenda
            obcaecati optio vel!</p>
        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum eligendi facere, id iure neque
            quis. Beatae dolorem ducimus ex harum inventore magnam necessitatibus perspiciatis porro quasi quos,
            repudiandae sequi.</p>
        <p class="text-white" id="qe"></p>
    </main>
</div>