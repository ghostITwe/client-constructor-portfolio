<script>
  import { bar } from '$lib/stores';
  import { toggle } from '$lib/functions/sidebar';

  export let after, negative, component, bars, src;
</script>

<button {after} on:click={() => {
  if ($bar.component === bars[component]) {
    toggle();
  } else {
    toggle(true);
    $bar.component = bars[component];
  }
}} class="iconBtn">
  <img {src} alt={after}/>
  <img class="negativeImg" src={negative} alt={after}/>
</button>

<style>
  .iconBtn {
    @apply p-4 relative border-transparent border-y duration-150 flex justify-center items-center;
  }

  .iconBtn:hover {
    @apply border-white;
  }

  .iconBtn:hover:after {
    @apply left-[130%] p-2 text-sm top-1/2 -translate-y-1/2 block absolute bg-white rounded-xl content-[attr(after)] shadow-[0_0_6px_rgba(0_0_0/_0.25)];
  }

  .iconBtn:hover:before {
    @apply content-[''] bg-white block absolute left-[130%] w-3 h-3 rotate-45 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_6px_rgba(0_0_0/_0.25)];
  }

  .iconBtn img {
    @apply max-w-none;
  }

  .negativeImg {
    @apply absolute opacity-0 transition duration-150;
  }

  .iconBtn:hover .negativeImg {
    @apply opacity-100;
  }
</style>