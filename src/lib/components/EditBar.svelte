<script lang="ts">
  import { bar, content } from '$lib/stores';
  import { ComponentsList, props } from '$lib/vars';

  function setDefaultValue(name, value) {
    $content[$bar.index].props[name] = value;
  }
</script>

<section class="grid w-80 gap-5">

  <!-- TODO: цикл для пропов -->
  <!-- FIXME: При полной очистке поля ввода невозможно изменить элемент -->
  <!--   Возможно можно доп. условие на onfocus -->
  <div>
    {#if typeof $bar.index === 'number'}
      {#each props[ComponentsList.paragraph] as { name, title, type, value }}
        {#if typeof $content[$bar.index].props[name] === type}
          <h3 class="text-white pl-4">{title}</h3>
          <input type="text" bind:value={$content[$bar.index].props[name]}>
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