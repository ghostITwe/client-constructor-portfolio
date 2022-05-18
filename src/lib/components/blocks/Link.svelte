<script>
  import { bar, content } from '$lib/stores';

  export let index;
</script>
<!-- TODO: Подумать над тем, что сделать стили для LINK, кастомные мб? -->
<a class="hover:underline" href={$content[index].props.href} contenteditable="true"
   bind:textContent={$content[index].props.text}></a>
<a class="hover:underline" href={$content[index].props.href ?? '#'}>{$content[index].props.text}</a>