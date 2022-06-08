<script>

  export let type;
  let logo = '';

  // FIXME: Переделать
  function tick() {
    const text = 'LEAFSTOCK';
    let i = 0;

    setTimeout(function showNext() {
      if (i < text.length) {
        logo += text[i++];
        setTimeout(showNext, 100);
      }
    }, 100);
  }

  tick();
</script>

<header class="flex justify-between p-4 min-h-[4rem]">
  <a href="/" class="cursor-underscore text-2xl text-white font-bold ml-32">{logo}</a>
  {#if type !== 'cut'}
    <nav class="flex items-center text-white text-xl gap-8">
      <a href="/auth">Вход</a>
      <a href="#"><img src="assets/switch.svg" alt="switchTheme" class="w-8"></a>
    </nav>
  {/if}
</header>

<style>
  .cursor-underscore:after {
    content: '';
    animation: flashing-underscore 1.2s infinite;
  }

  @keyframes flashing-underscore {
    from {
      content: '';
    }

    50% {
      content: '_';
    }

    to {
      content: '';
    }
  }
</style>