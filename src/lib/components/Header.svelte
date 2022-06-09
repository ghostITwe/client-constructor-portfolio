<script>
  import { onMount } from 'svelte';

  export let type = undefined;

  $: isAuth = undefined;

  onMount(() => {
    isAuth = !!localStorage.getItem('token');
  })

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
      <!-- FIXME: переписать -->
      {#if typeof isAuth === 'boolean'}
        {#if isAuth}
          <button class="cursor-pointer" on:click={() => {
            fetch(`${import.meta.env.VITE_BASE_URL}/api/logout`, {
              headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
              }
            });
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            isAuth = false;
          }}>Выход</button>
        {:else}
          <a href="/auth">Вход</a>
        {/if}
      {/if}
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