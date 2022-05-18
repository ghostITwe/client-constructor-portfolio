<script>
  import { bar, content } from '$lib/stores';
  import EditBar from '$lib/components/EditBar.svelte';
  import Toolbar from '$lib/components/Toolbar.svelte';
  // import { removeBlock } from '$lib/functions/blocks';

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

<p tabindex="0" class="w-full min-h-[1rem] focus:bg-amber-500" on:focus={onfocus} on:blur={onblur}
   contenteditable="true" bind:textContent={$content[index].props.text}></p>
<p tabindex="0" class="w-full min-h-[1rem]">{$content[index].props.text}</p>