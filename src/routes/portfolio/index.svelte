<script>
    import Sidebar from "$lib/components/Sidebar.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";

    let logo = 'LS';

    $: content = [];
</script>

<div class="flex overflow-hidden h-screen">
    <Sidebar bind:content={content}/>
    <main class="overflow-y-auto w-full">
        {#each content as {component, text}}
            <Paragraph {text} />
        {/each}
    </main>
</div>