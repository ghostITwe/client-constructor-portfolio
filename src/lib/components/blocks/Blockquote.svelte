<script>
  import { bar, content } from '$lib/stores';
  import { toggle } from '$lib/functions/sidebar';
  import { removeBlock } from '$lib/functions/blocks';
  import EditBar from '$lib/components/EditBar.svelte';

  export let id;

  function onfocus() {
    $bar.component = EditBar;
    $bar.id = id;
    toggle(true);
  }

  $: index = $content.findIndex(el => el.id === id);
</script>

<div tabindex="0" on:focus={onfocus} class="relative p-4 rounded-3xl duration-100 cursor-pointer border-2 border-transparent ring-blue-300/30
        hover:ring-2 hover:border-white
        focus:border-white focus:backdrop-blur-md focus:bg-blue-100/80 focus:ring-4
">
  <blockquote class="ml-5 mb-2 w-full min-h-[1rem] border-l-2 border-black p-4">
    {#if $content[index]?.props.text}
      <p class="before:content-['❝'] after:content-['❞']">{$content[index]?.props.text}</p>
    {/if}
  </blockquote>
  <cite class="text-sm ml-5">{$content[index]?.props.author ? `— ${$content[index]?.props.author}` : ''}</cite>
  <button on:click={() => {
    removeBlock(index);
  }} class="absolute top-0 right-0 bottom-0 hover:bg-red-600 rounded-3xl px-4 py-2">X
  </button>
</div>