<script lang="ts">
  import { bar, content } from '$lib/stores';

  const componentProps = {
    paragraph: {
      text: {
        name: 'Текст'
      }
    }
  }
</script>

<section class="grid w-80 grid-cols-2 gap-5">

  <!--        <h3 class="text-white col-span-2 pl-4">{componentProps[]?.text.name ?? ''}</h3>-->
  <input type="text" bind:value={$content[$bar.index].props.text}>

</section>