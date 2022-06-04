<svelte:head>
  <title>Портфолио</title>
</svelte:head>

<!--FIXME: Подумать как передавать токен при загрузке контента-->
<!--<script context="module">-->
<!--  import { getPortfolio } from "$lib/functions/portfolio";-->

<!--  export async function load() {-->
<!--      let data = await getPortfolio();-->

<!--      return {-->
<!--          props: {-->
<!--              contentValue: data-->
<!--          }-->
<!--      }-->

<!--  }-->
<!--</script>-->

<script>
  import { bar, content } from '$lib/stores';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { onMount } from 'svelte';
  import { savePortfolio } from "$lib/functions/portfolio";

  onMount(() => {
    $bar.adaptive = sessionStorage.getItem('adaptive');
  })

  //TODO: class Proxy($content[id].component) переделать в Object и сделать JSON.stringify($content)
  $: adaptive = $bar?.adaptive;
</script>

<div class="flex overflow-hidden h-screen">
  <Sidebar/>
  <main class="overflow-y-auto w-full bg-white p-8">
    <div class={(adaptive ?? 'max-w-[1920px]') + ' mx-auto duration-200'}>
      <button on:click={ savePortfolio }>click</button>
      {#each $content as { component, id }}
        <svelte:component this={component} {id}/>
      {/each}
    </div>
  </main>
</div>