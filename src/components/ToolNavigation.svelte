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

    const logo = 'LS';
</script>

<!--<a href="#" class="p-4 bg-black w-8 h-8 align-middle text-center text-white"><span>{logo}</span></a>-->
<section class="relative z-10 bg-main-color grid min-h-screen min-w-max justify-center content-between gap-2 p-2">
    {#each toolLinks as groupToolLinks}
        <div class="grid gap-1">
            {#each groupToolLinks as {src, alt, after, onclick}}
                <IconButton {after} {alt} {src} {onclick}/>
            {/each}
        </div>
    {/each}
</section>