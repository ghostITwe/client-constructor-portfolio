<script>
  import { bar, content } from '$lib/stores';
  import { props } from '$lib/vars';

  function setDefaultValue(name, value) {
    if (index !== -1) {
      $content[index].props[name] = value;
    }
  }

  $: index = $content.findIndex(el => el.id === $bar.id);
</script>

<section class="grid w-80 gap-5">
  {#if typeof $bar.id === 'number' && index !== -1 && props[$content[index].componentName]}
    {#each props[$content[index].componentName] as { name, title, type, value }}
      <div>
        {#if typeof $content[index]?.props[name] === type}
          <h3 class="text-xl mb-5 text-white pl-4">{title}</h3>
          <input class="w-full border rounded text-white py-1.5 px-2 bg-transparent"
                 bind:value={$content[index].props[name]}>
        {:else}
          <!-- FIXME: найти альтернативное решение -->
          {setDefaultValue(name, value)}
        {/if}
      </div>
    {/each}
  {:else}
    <p class="text-white">Выберите элемент на странице</p>
  {/if}
</section>