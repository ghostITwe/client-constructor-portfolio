<script>
  import { bar, content } from '$lib/stores';
  import { toggle } from '$lib/functions/sidebar';
  import EditBar from '$lib/components/EditBar.svelte';
  import Trash from '$lib/components/Trash.svelte';

  export let id;

  function onfocus() {
    $bar.componentName = EditBar;
    $bar.id = id;
    toggle(true);
  }

  $: index = $content.findIndex(el => el.id === id);
</script>
<!--TODO: Сделать заголовок динамическим?-->
<div tabindex="0" on:focus={onfocus}
     class="relative group w-full min-h-[1rem] p-4 rounded-3xl duration-100 cursor-pointer border-2 border-transparent ring-blue-300/30
        hover:ring-2 hover:border-white
        focus:border-white focus:backdrop-blur-md focus:bg-blue-100/80 focus:ring-4">
  <h1 class="text-2xl">{$content[index]?.props.text ?? ''}</h1>
  <!-- FIXME: сделать компонентом -->
  <Trash {index}/>
</div>