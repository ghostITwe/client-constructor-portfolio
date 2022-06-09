<svelte:head>
  <title>Портфолио</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { bar, content, freeId } from '$lib/stores';
  import { blocks } from '$lib/vars';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Loader from '$lib/components/Loader.svelte';

  onMount(() => {
    if ($bar) {
      $bar.adaptive = sessionStorage.getItem('adaptive');
    }
  });

  async function getPortfolio() {
    const response = await fetch(`/portfolio/${$page.params.username}.json`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });

    if (response.ok) {
      const portfolio = await response.json();

      // FIXME: попробовать вынести в саму функцию
      if (portfolio?.status) {
        $content = portfolio?.contentPortfolio ?? [];
        // FIXME: переделать
        if ($content.length) {
          $freeId = $content[$content.length - 1].id + 1;
        }

        return portfolio?.editAccess;
      }
    } else {
      throw response;
    }
  }

  let loading = getPortfolio();

  $: adaptive = $bar?.adaptive;
</script>

<div class="flex overflow-hidden h-screen">
  {#await loading}
    <Loader/>
  {:then isAccess}
    {#if isAccess}
      <Sidebar/>
    {/if}
    <main class="overflow-y-auto w-full bg-white p-8">
      <div class={(isAccess && adaptive ? adaptive : 'max-w-[1920px]') + ' mx-auto duration-200'}>

        {#each $content as { componentName, id }}
          {#if blocks[componentName]}
            <svelte:component this={blocks[componentName]} {id} editable={isAccess}/>
          {/if}
        {/each}

      </div>
    </main>
  {:catch { status, statusText }}
    <div class="m-auto">
      <h1 class="p-4 text-8xl text-center text-gray-300 dark:text-gray-700">{status}</h1>
      <p class="p-4 text-xl sm:text-4xl text-center text-gray-800 dark:text-gray-300">{statusText}</p>
    </div>
  {/await}
</div>