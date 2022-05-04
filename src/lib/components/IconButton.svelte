<script>
    export let after, src, alt, negative,
        onclick = '';
</script>


<button {after} on:click={onclick} class="iconBtn">
    <img {src} {alt} />
    <img class="negativeImg" src={negative} alt=""/>
</button>

<style>
    .iconBtn {
        @apply p-4 relative border-transparent border-y duration-150 flex justify-center items-center;
    }

    .iconBtn:hover {
        @apply border-white;
    }

    .iconBtn:hover:after {
        @apply left-[130%] p-2 text-sm top-1/2 -translate-y-1/2 block absolute bg-white rounded-xl content-[attr(after)];
    }

    .iconBtn:hover:before {
        @apply content-[''] bg-white block absolute left-[130%] w-3 h-3 rotate-45 top-1/2 -translate-y-1/2 -translate-x-1/2;
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