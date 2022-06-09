<script>
  import { bar, content } from '$lib/stores';
  import { bars, BarsList } from '$lib/vars';
  import { toggle } from '$lib/functions/sidebar';
  import Trash from '$lib/components/Trash.svelte';

  export let id, editable;

  function onfocus() {
    $bar.component = bars[BarsList.editbar];
    $bar.id = id;
    toggle(true);
  }

  $: index = $content.findIndex(el => el.id === id);
</script>
<!--TODO: Сделать заголовок динамическим?-->

{#if editable}
<div tabindex="0" on:focus={onfocus}
     class="relative group p-4 rounded-3xl duration-100 cursor-pointer border-2 border-transparent ring-blue-300/30
        hover:ring-2 hover:border-white
        focus:border-white focus:backdrop-blur-md focus:bg-blue-100/80 focus:ring-4">
  <h1 class="text-2xl w-full min-h-[1rem]">{$content[index]?.props.text ?? ''}</h1>
  <!-- FIXME: сделать компонентом -->
  <Trash {index}/>
</div>
{:else}
  <div class="w-full p-4 rounded-3xl border-2 border-transparent">
    <h1 class="text-2xl">{$content[index]?.props.text ?? ''}</h1>
  </div>
{/if}