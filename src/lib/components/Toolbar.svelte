<script>
    import { toolItems } from '$lib/vars';
</script>

<section class="grid w-80 grid-cols-2 gap-5">
  <h3 class="text-white col-span-2 pl-4">Текст</h3>
  {#each toolItems as {img, text, onclick, component}}
    <article data-component={component}
             class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto"
             class:cursor-pointer={!!onclick} on:click={() => onclick(component)}>
      <img src={img} alt="#" class="m-auto"/>
      <p class="text-white text-center pt-2.5">{text}</p>
    </article>
  {/each}
</section>