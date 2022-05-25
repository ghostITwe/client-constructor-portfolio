<script>
  import { bar, content } from '$lib/stores';
  import { ComponentsList, props } from '$lib/vars';

  function setDefaultValue(name, value) {
    if (index !== -1) {
      $content[index].props[name] = value;
    }
  }

  $: index = $content.findIndex(el => el.id === $bar.id);
</script>

<section class="grid w-80 gap-5">
  <div>

    {#if typeof $bar.id === 'number' && index !== -1 && props[$content[index].name]}
      {#each props[$content[index].name] as { name, title, type, value }}

        {#if typeof $content[index]?.props[name] === type}
          <h3 class="text-xl mb-5 text-white pl-4">{title}</h3>
          <input class="border rounded text-white py-1.5 px-2 bg-transparent"
                 bind:value={$content[index].props[name]}>
        {:else}
          <!-- FIXME: найти альтернативное решение -->
          {setDefaultValue(name, value)}
        {/if}

      {/each}
    {:else}
      <p class="text-white">Выберите элемент на странице</p>
    {/if}

  </div>
</section>