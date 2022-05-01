<script>
    import Sidebar from "$lib/components/Sidebar.svelte";
    import Paragraph from "$lib/components/blocks/Paragraph.svelte";
    import { content } from "$lib/stores.js";

    let logo = 'LS';

</script>

<div class="flex overflow-hidden h-screen">
    <Sidebar/>
    <main class="overflow-y-auto w-full">
        {#each $content as {component, props}}
            <svelte:component this={component} {props}/>
        {/each}
    </main>
</div>