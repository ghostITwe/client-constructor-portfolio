<script>
  import ListItem from "$lib/components/blocks/ListItem.svelte";

  export let props;
</script>

<svelte:element this={props?.type ?? 'ul'}>
  {#each props.items as item}
    <ListItem props={item.text}/>
  {/each}
</svelte:element>