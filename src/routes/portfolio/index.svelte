<svelte:head>
  <title>Портфолио</title>
</svelte:head>

<script>
  import { bar, content } from '$lib/stores';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { onMount } from 'svelte';

  let loadedAdaptive;

  onMount(() => {
    loadedAdaptive = sessionStorage.getItem('adaptive');
  });

  $: adaptive = $bar?.adaptive ?? loadedAdaptive;
</script>

<div class="flex overflow-hidden h-screen">
  <Sidebar/>
  <main class="overflow-y-auto w-full bg-white p-8">
    <div class={(adaptive ?? 'max-w-[1920px]') + ' mx-auto duration-200'}>
      {#each $content as { component, id }}
        <svelte:component this={component} {id}/>
      {/each}
    </div>
  </main>
</div>