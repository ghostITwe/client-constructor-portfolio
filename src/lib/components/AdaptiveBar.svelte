<script>
  import { bar } from '$lib/stores';

  function switchAdaptive(size) {
    $bar.adaptive = size ? size : undefined;
    sessionStorage.setItem('adaptive', size ?? '');
  }

  const info = [{
    name: 'Исходный',
    className: 'max-w-screen-xl',
    size: 'Без ограничений',
    src: ''
  }, {
    name: 'xl',
    className: 'max-w-screen-xl',
    size: '1280px',
    src: '/assets/images/icons/adaptivebar/computer.svg'
  }, {
    name: 'lg',
    className: 'max-w-screen-lg',
    size: '1024px',
    src: '/assets/images/icons/adaptivebar/laptop.svg'
  }, {
    name: 'md',
    className: 'max-w-screen-md',
    size: '768px',
    src: '/assets/images/icons/adaptivebar/tablet.svg'
  }, {
    name: 'sm',
    className: 'max-w-screen-sm',
    size: '640px',
    src: '/assets/images/icons/adaptivebar/phone.svg'
  }];

</script>

<section class="grid w-80 gap-5 text-white">
  <h3 class="text-2xl pl-4">Адаптив</h3>
  {#each info as { name, className, size, src }}
    <article class="h-28 flex border border-white rounded cursor-pointer" on:click={() => switchAdaptive(className)}>
      {#if src}
        <img class="p-8 border border border-white rounded" {src} alt="">
      {/if}
      <div class="m-auto text-center">
        <p class="text-lg">{name}</p>
        <p class="font-light">{size}</p>
      </div>
    </article>
  {/each}
</section>