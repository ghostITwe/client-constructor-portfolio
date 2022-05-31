<script>
  export let method = 'get', name;
</script>

<form class="grid gap-12 max-w-md m-auto mt-24 text-white" {method} on:submit >
  <slot></slot>
</form>