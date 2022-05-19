<script lang="ts">
  import { bar, content } from '$lib/stores';
  import { propsList } from '$lib/vars';
</script>

<section class="grid w-80 gap-5">

  <!-- TODO: цикл для пропов -->
  <!-- FIXME: При полной очистке поля ввода невозможно изменить элемент -->
  <!--   Возможно можно доп. условие на onfocus -->
  <div>
    {#if $content[$bar.index]?.props.text}
      <h3 class="text-white pl-4">{propsList[$content[$bar.index].name]?.text.name ?? ''}</h3>
      <input type="text" bind:value={$content[$bar.index].props.text}>
    {:else if !$bar.index}
      <p class="text-white">Выберите элемент на странице</p>
    {:else}
      <p class="text-white">ERROR</p>
    {/if}
  </div>
</section>