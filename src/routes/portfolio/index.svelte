<svelte:head>
  <title>Портфолио</title>
</svelte:head>

<script>
  import { content } from '$lib/stores';
  import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="flex overflow-hidden h-screen">
  <Sidebar/>
  <main class="overflow-y-auto w-full bg-white max-w-screen-lg mx-auto p-8">
    <!--{JSON.stringify($content)}-->

    <!--  TODO: Возможно (index) не требуется  -->
    <!--{#each $content as { component, index }}-->
    {#each $content as el}
      {JSON.stringify(el)}
<!--      <svelte:component this={component} {index}/>-->
      <svelte:component this={el.component} index={el.index}/>
    {/each}

  </main>
</div>