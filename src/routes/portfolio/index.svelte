<script>
    import Sidebar from "$lib/components/Sidebar.svelte";

    let logo = 'LS';

    $: content = "";
</script>

<div class="flex overflow-hidden h-screen">
    <Sidebar {content}/>
    <main class="overflow-y-scroll">
        <img src="/assets/123.jpg" alt="123" class="w-full min-h-screen" />
        {@html content}
    </main>
</div>