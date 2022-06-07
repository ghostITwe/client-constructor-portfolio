<script lang="ts">
  import { toolsLinks } from '$lib/vars';
  import IconButton from '$lib/components/IconButton.svelte';
</script>


<!-- FIXME: Сделать возможность прокрутки. overflow-y-scroll no-scrollbar h-full -->
<section class="relative z-20 bg-main-color flex flex-col min-h-screen items-center gap-2 p-2">
  <!--  FIXME: заменить тень на логотипе  -->
  <a href="#"
     class="p-1 mx-3 w-12 text-3xl font-bold bg-black align-middle text-center text-white shadow-[0_3px_5px_rgba(0_0_0_/_0.5)]">L<span
      class="bg-white text-black leading-6 inline-block">S</span></a>
  <section class="flex-grow grid justify-center content-between gap-2">
    {#each toolsLinks as groupToolLinks}
      <div class="grid gap-1">
        {#each groupToolLinks as toolLink}
          <IconButton {...toolLink}/>
        {/each}
      </div>
    {/each}
  </section>
</section>