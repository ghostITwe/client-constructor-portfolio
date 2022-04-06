<script>
    import viewIcon from "./assets/images/icon/toolbarIcon/viewIcon.svg";
    import negativeViewIcon from "./assets/images/icon/toolbarIcon/negativeViewIcon.svg";
    import saveIcon from "./assets/images/icon/toolbarIcon/saveIcon.svg";
    import negativeSaveIcon from "./assets/images/icon/toolbarIcon/negativeSaveIcon.svg";
    import mediaIcon from "./assets/images/icon/toolbarIcon/mediaIcon.svg";
    import negativeMediaIcon from "./assets/images/icon/toolbarIcon/negativeMediaIcon.svg";
    import templateIcon from "./assets/images/icon/toolbarIcon/templateIcon.svg";
    import negativeTemplateIcon from "./assets/images/icon/toolbarIcon/negativeTemplateIcon.svg";
    import designIcon from "./assets/images/icon/toolbarIcon/designIcon.svg";
    import negativeDesignIcon from "./assets/images/icon/toolbarIcon/negativeDesignIcon.svg";
    import adaptiveIcon from "./assets/images/icon/toolbarIcon/adaptiveIcon.svg";
    import negativeAdaptiveIcon from "./assets/images/icon/toolbarIcon/negativeAdaptiveIcon.svg";
    import addIcon from "./assets/images/icon/toolbarIcon/addIcon.svg";
    import negativeAddIcon from "./assets/images/icon/toolbarIcon/negativeAddIcon.svg";
    import leftArrowIcon from "./assets/images/icon/toolbarIcon/leftArrowIcon.svg";
    import rec from "./assets/images/rec.svg";
    import img from "./assets/123.jpg";

    let logo = 'LS';

    function toggle() {
        const toolbar = document.getElementById('toolbar');
        toolbar.classList.toggle('-translate-x-full');
    }

</script>

<div class="flex overflow-hidden h-screen">
    <aside class="relative">
        <section class="relative z-10 bg-main-color grid min-h-screen justify-center content-between gap-10 p-6">
            <div class="grid gap-10">
                <a href="#" class="bg-black w-8 h-8 align-middle text-center text-white"><span>{logo}</span></a>
                <button class="" on:click={toggle}><img src="{templateIcon}" alt="Шаблоны" class="w-8 h-8"></button>
                <button class=""><img src="{addIcon}" alt="Добавить" class="w-8 h-8"></button>
                <button class=""><img src="{mediaIcon}" alt="Медия" class="w-8 h-8"></button>
                <button class=""><img src="{designIcon}" alt="Дизайн" class="w-8 h-8"></button>
                <button class=""><img src="{adaptiveIcon}" alt="Адаптив" class="w-8 h-8"></button>
            </div>
            <div class="grid gap-10">
                <button><img src="{viewIcon}" alt="Просмотр" class="w-8 h-8"></button>
                <button class="flex justify-center items-center"><img src="{saveIcon}" alt="Сохранить" class="w-8 h-8"></button>
            </div>
        </section>
        <section id="toolbar" class="grid h-screen border-l-2 p-6 pl-8 gap-6 duration-200 overflow-y-scroll no-scrollbar backdrop-blur-md bg-main-color/90 absolute left-full top-0 transform">
            <section class="grid w-80 grid-cols-2 gap-5">
                <h3 class="text-white col-span-2 pl-4">Текст</h3>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Абзац</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Список</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Заголовок</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Цитата</p>
                </article>
            </section>
            <section class="grid w-80 grid-cols-2 gap-5">
                <h3 class="text-white col-span-2 pl-4">Текст</h3>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Изображение</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Кнопки</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Текст</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Текст</p>
                </article>
            </section>
            <section class="grid w-80 grid-cols-2 gap-5">
                <h3 class="text-white col-span-2 pl-4">Текст</h3>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Текст</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Текст</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Текст</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Текст</p>
                </article>
            </section>
            <section class="grid w-80 grid-cols-2 gap-5">
                <h3 class="text-white col-span-2 pl-4">Текст</h3>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Текст</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Текст</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Текст</p>
                </article>
                <article class="w-full h-32 grid justify-center border border-white rounded py-6 m-auto">
                    <img src="{rec}" alt="#" class="m-auto">
                    <p class="text-white text-center pt-2.5">Текст</p>
                </article>
            </section>
<!--            <button on:click={toggle} class="fixed bg-white right-0 top-1/2 h-11 w-3 rounded-l-md flex justify-center p-0.5"><img src="{leftArrowIcon}" alt="leftArrowIcon" ></button>-->
        </section>
    </aside>
    <main>
        <img src="{img}" alt="123" class="w-full min-h-screen">
    </main>
</div>