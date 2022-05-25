<script>
  import { bar, content } from '$lib/stores';
  import { removeBlock } from '$lib/functions/blocks';
  import EditBar from '$lib/components/EditBar.svelte';

  export let id;

  function onfocus() {
    $bar.component = EditBar;
    $bar.id = id;
  }

  $: index = $content.findIndex(el => el.id === id);
</script>


<div class="relative">
  <p tabindex="0" on:focus={onfocus}
     class="w-full min-h-[1rem] p-4 rounded-3xl duration-100 cursor-pointer border-2 border-transparent ring-blue-300/30
        hover:ring-2 hover:border-white
        focus:border-white focus:backdrop-blur-md focus:bg-blue-100/80 focus:ring-4">{$content[index]?.props.text ?? ''}</p>
  <button on:click={() => {
    removeBlock(index);
  }} class="absolute top-0 right-0 bottom-0 hover:bg-red-600 rounded-3xl px-4 py-2">X</button>
</div>