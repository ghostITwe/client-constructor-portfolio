<script>
  import { removeBlock } from '$lib/functions/blocks';

  export let index;
</script>

<button on:click={() => {
  removeBlock(index);
}} class="group-hover:opacity-100 opacity-0 absolute -top-2 right-0 w-10 h-10 bg-white
        hover:bg-red-400 duration-200 rounded-3xl flex justify-center items-center shadow-md
  ">
  <img src="/assets/images/icons/trash.svg" alt="X">
</button>