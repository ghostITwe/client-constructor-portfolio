<script>
    //TODO: Посмотреть про либы, чтобы не делать через относительные пути
    import negativeViewIcon from "../assets/images/icon/toolbarIcon/negativeViewIcon.svg";
    import negativeSaveIcon from "../assets/images/icon/toolbarIcon/negativeSaveIcon.svg";
    import negativeMediaIcon from "../assets/images/icon/toolbarIcon/negativeMediaIcon.svg";
    import negativeTemplateIcon from "../assets/images/icon/toolbarIcon/negativeTemplateIcon.svg";
    import negativeDesignIcon from "../assets/images/icon/toolbarIcon/negativeDesignIcon.svg";
    import negativeAdaptiveIcon from "../assets/images/icon/toolbarIcon/negativeAdaptiveIcon.svg";
    import negativeAddIcon from "../assets/images/icon/toolbarIcon/negativeAddIcon.svg";
    import IconButton from "./IconButton.svelte";

    export let toolLinks;
</script>

<section class="relative z-10 bg-main-color flex flex-col min-h-screen min-w-max items-center gap-2 p-2">
    <a href="#" class="p-1 text-3xl font-bold bg-black align-middle text-center text-white">L<span class="bg-white text-black leading-6 inline-block">S</span></a>
    <section class="flex-grow grid justify-center content-between gap-2">
        {#each toolLinks as groupToolLinks}
            <div class="grid gap-1">
                {#each groupToolLinks as {src, alt, after, onclick}}
                    <IconButton {after} {alt} {src} {onclick}/>
                {/each}
            </div>
        {/each}
    </section>
</section>