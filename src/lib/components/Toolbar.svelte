<script>
  import { toolsLinks } from '$lib/vars';
</script>

<section class="grid w-80 grid-cols-2 gap-5">
  <h3 class="text-xl text-white col-span-2 pl-4">Основные</h3>
<!-- FIXME: переписать на названиях -->
  {#each toolsLinks[0][1].items as { text, onclick, name, component, src, alt }}
    <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto"
             class:cursor-pointer={!!onclick} on:click={() => onclick(component, name)}>
      <img {src} {alt} class="m-auto">
      <p class="text-white text-center pt-2.5">{text}</p>
    </article>
  {/each}
</section>