<script>
  export let id, type,
      placeholder = undefined;

  const labelClasses = type === 'checkbox' ? 'font-thin group' : 'px-2 before:block before:absolute before:-bottom-1 before:left-0 before:right-0 before:shadow before:shadow-white before:h-px before:bg-white relative inline-block',
      inputClasses = type === 'checkbox' ? 'appearance-none align-middle border rounded duration-200 group-hover:shadow group-hover:shadow-white checked:shadow checked:shadow-white checked:bg-white w-4 h-4' : 'placeholder-white bg-transparent outline-none placeholder:font-thin w-full';
</script>

<label for={id}
       class={labelClasses}>
  <input {id} {type} name={id} {placeholder}
         class={inputClasses}>
  {#if type === 'checkbox'}
    <span class="align-middle group-hover:drop-shadow-white duration-200 font-thin"><slot/></span>
  {/if}
</label>