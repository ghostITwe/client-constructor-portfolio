<svelte:head>
  <title>Портфолио</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import { bar, content } from '$lib/stores';
  import { blocks } from '$lib/vars';
  import { getPortfolio } from '$lib/functions/portfolio';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Loader from '$lib/components/Loader.svelte';

  onMount(() => {
    if ($bar) {
      $bar.adaptive = sessionStorage.getItem('adaptive');
    }
  });

  async function getTest() {
    const a = await getPortfolio();
    if (a?.status) {
      // $content = a?.contentPortfolio ?? [];
    }
    console.log(a);
  }

  let loading = getTest();

  $: adaptive = $bar?.adaptive;
</script>

<div class="flex overflow-hidden h-screen">
  <Sidebar/>
  <main class="overflow-y-auto w-full bg-white p-8">
    <div class={(adaptive ?? 'max-w-[1920px]') + ' mx-auto duration-200'}>
      {#await loading}
        <Loader/>
      {:then result}
        {#each $content as { componentName, id }}
          {#if blocks[componentName]}
            <svelte:component this={blocks[componentName]} {id}/>
          {/if}
        {/each}
      {:catch error}
        <p>ERROR</p>
      {/await}
    </div>
  </main>
</div>