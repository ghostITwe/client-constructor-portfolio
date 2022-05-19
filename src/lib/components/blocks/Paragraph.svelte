<script>
  import { bar, content } from '$lib/stores';
  import EditBar from '$lib/components/EditBar.svelte';
  import Toolbar from '$lib/components/Toolbar.svelte';
  import { removeBlock } from '$lib/functions/blocks';

  export let index;

  function onfocus() {
    $bar.component = EditBar;
    $bar.index = index;
  }

  function onblur() {
    $bar.component = Toolbar;
    // if ($content[index]?.props.text) removeBlock(index);
  }
</script>

<p tabindex="0" on:focus={onfocus}
   class="w-full min-h-[1rem] p-4 rounded-3xl duration-100 cursor-pointer border-2 border-transparent ring-blue-300/30
      hover:ring-2 hover:border-white
      focus:border-white focus:backdrop-blur-md focus:bg-blue-100/80 focus:ring-4">{$content[index]?.props.text ?? ''}</p>
<button on:click={() => {
//  $bar.component = Toolbar;
  if ($bar.index === index) $bar.index = undefined;
  removeBlock(index);
}} class="bg-red-600 rounded-lg px-4 py-2">X</button>
