<svelte:head>
  <title>Портфолио</title>
</svelte:head>

<script>
  import { content } from '$lib/stores';
  import Sidebar from '$lib/components/Sidebar.svelte';

  let logo = 'LS';
</script>


<div class="flex overflow-hidden h-screen">
  <Sidebar/>
  <main class="overflow-y-auto w-full bg-white max-w-screen-xl mx-auto p-8">
<!--  TODO: сделать удаление  -->
    {#each $content as { component, index } (index)}
      <svelte:component this={component} {index}/>
    {/each}
  </main>
</div>