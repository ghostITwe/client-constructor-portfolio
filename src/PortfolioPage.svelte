<script>
    import viewIcon from "./assets/images/icon/toolbarIcon/viewIcon.svg";
    import saveIcon from "./assets/images/icon/toolbarIcon/saveIcon.svg";
    import mediaIcon from "./assets/images/icon/toolbarIcon/mediaIcon.svg";
    import templateIcon from "./assets/images/icon/toolbarIcon/templateIcon.svg";
    import designIcon from "./assets/images/icon/toolbarIcon/designIcon.svg";
    import adaptiveIcon from "./assets/images/icon/toolbarIcon/adaptiveIcon.svg";

    let logo = 'ls';

</script>

<aside class="grid min-h-screen justify-center content-between gap-15 w-25">
    <div class="grid gap-15">
        <a href="#" class='bg-black px-4 py-5 text-white'>{logo}</a>
        <button class=""><img src="{templateIcon}" alt="Шаблоны"></button>
        <button class=""><img src="{mediaIcon}" alt="Медия"></button>
        <button class=""><img src="{designIcon}" alt="Дизайн"></button>
        <button class=""><img src="{adaptiveIcon}" alt="Адаптив"></button>
    </div>
    <div class="grid gap-15">
        <button><img src="{viewIcon}" alt="Просмотр"></button>
        <button class="flex justify-center items-center"><img src="{saveIcon}" alt="Сохранить"></button>
    </div>
</aside>