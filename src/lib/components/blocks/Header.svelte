<script>
  export let props;
</script>
<!--TODO: Сделать заголовок динамическим?-->
<h1 class="text-2xl w-full min-h-[1rem]">{props.text ?? ''}</h1>