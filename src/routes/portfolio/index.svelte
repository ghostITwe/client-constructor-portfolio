<svelte:head>
  <title>Портфолио</title>
</svelte:head>

<script>
  import { content } from '$lib/stores';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { removeBlock } from '$lib/functions/blocks';

  let logo = 'LS';
</script>

<div class="flex overflow-hidden h-screen">
  <Sidebar/>
  <main class="overflow-y-auto w-full bg-white max-w-screen-lg mx-auto p-8">
    {#each $content as { component, index } (index)}
      <svelte:component this={component} {index}/>
    {/each}
  </main>
</div>