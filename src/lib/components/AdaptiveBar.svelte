<script>
  import { bar } from '$lib/stores.js';

  function switchAdaptive(size) {
    $bar.adaptive = size ? size : undefined;
  }
</script>

<section class="grid w-80 gap-5 text-white">
  <h3 class="text-2xl pl-4">Адаптив</h3>
  <article class="h-28 flex border border-white rounded cursor-pointer" on:click={() => switchAdaptive()}>
    <div class="m-auto text-center">
      <p class="text-lg">Исходный</p>
      <p class="font-light">Без ограничений</p>
    </div>
  </article>
  <article class="h-28 flex border border-white rounded cursor-pointer" on:click={() => switchAdaptive('max-w-screen-xl')}>
    <img class="p-8 border border border-white rounded" src="/assets/images/icons/adaptivebar/computer.svg" alt="">
    <div class="m-auto text-center">
      <p class="text-lg">xl</p>
      <p class="font-light">1280px</p>
    </div>
  </article>
  <article class="h-28 flex border border-white rounded cursor-pointer" on:click={() => switchAdaptive('max-w-screen-lg')}>
    <img class="p-8 border border border-white rounded" src="/assets/images/icons/adaptivebar/laptop.svg" alt="">
    <div class="m-auto text-center">
      <p class="text-lg">lg</p>
      <p class="font-light">1024px</p>
    </div>
  </article>
  <article class="h-28 flex border border-white rounded cursor-pointer" on:click={() => switchAdaptive('max-w-screen-md')}>
    <img class="p-8 border border border-white rounded" src="/assets/images/icons/adaptivebar/tablet.svg" alt="">
    <div class="m-auto text-center">
      <p class="text-lg">md</p>
      <p class="font-light">768px</p>
    </div>
  </article>
  <article class="h-28 flex border border-white rounded cursor-pointer" on:click={() => switchAdaptive('max-w-screen-sm')}>
    <img class="p-8 border border border-white rounded" src="/assets/images/icons/adaptivebar/phone.svg" alt="">
    <div class="m-auto text-center">
      <p class="text-lg">sm</p>
      <p class="font-light">640px</p>
    </div>
  </article>
</section>