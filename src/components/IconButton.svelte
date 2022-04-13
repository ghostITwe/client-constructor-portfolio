<script>
    export let after, src, alt,
        onclick = '';

</script>


<button {after} on:click={onclick} class="p-4 relative border-transparent border-y duration-150 flex justify-center items-center
                hover:border-white
                hover:after:left-full hover:after:p-2 hover:after:text-sm hover:after:top-1/2 hover:after:-translate-y-1/2
                hover:after:block hover:after:absolute hover:after:bg-white hover:after:rounded hover:after:content-[attr(after)]
                hover:before:bg-white hover:before:block hover:before:absolute hover:before:left-full hover:before:w-3
                hover:before:h-3 hover:before:rotate-45 hover:before:top-1/2 hover:before:-translate-y-1/2 hover:before:-translate-x-1/2">
    <img {src} {alt} />
</button>