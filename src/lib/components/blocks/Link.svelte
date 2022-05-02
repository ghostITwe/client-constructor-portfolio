<script>
  export let props;
</script>
<!--TODO: Подумать над тем, что сделать стили для LINK, кастомные мб?-->
<a href={props?.href ?? '#'}>{props?.text ?? ''}</a>