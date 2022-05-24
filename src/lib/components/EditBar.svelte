<script>
  import { bar, content } from '$lib/stores';
  import { ComponentsList, props } from '$lib/vars';

  function setDefaultValue(name, value) {
    if (index !== -1) {
      $content[index].props[name] = value;
    }
  }

  // $: a = $content.find(el => el.index === $bar.index);
  // $: {
  //   const b = $content.findIndex(el => el.index === $bar.index);
  //   $content[b] = a;
  // }

  $: index = $content.findIndex(el => el.index === $bar.index);

  $: console.log('bar', $bar);
  $: console.log('content', $content);
  $: console.log('index', index);
</script>

<section class="grid w-80 gap-5">

  <!-- TODO: цикл для пропов -->
  <!-- FIXME: При полной очистке поля ввода невозможно изменить элемент -->
  <!--   Возможно можно доп. условие на onfocus -->
  <div>

    {#if typeof $bar.index === 'number' && index !== -1 && props[$content[index].name]}
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