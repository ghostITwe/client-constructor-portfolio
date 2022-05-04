<script lang="ts">
    interface props {
        text?: string,
        component: string
    }

    export let props;
</script>

<section class="grid w-80 grid-cols-2 gap-5">
    <h3 class="text-white col-span-2 pl-4">Текст</h3>
    <input type="text" bind:value={props}>
</section>