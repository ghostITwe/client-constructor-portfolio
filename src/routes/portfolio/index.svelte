<svelte:head>
    <title>Портфолио</title>
</svelte:head>

<script>
    import Sidebar from "$lib/components/Sidebar.svelte";

    import { content } from "$lib/stores.js";

    function getEditBar() {
        console.log(123);
    }

    let logo = 'LS';
</script>


<div class="flex overflow-hidden h-screen">
    <Sidebar/>
    <main class="overflow-y-auto w-full bg-white">
        {#each $content as {component, props, index}}
            <svelte:component this={component} {props} />
        {/each}
    </main>
</div>