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
    import rec from "./assets/images/rec.svg";

    let logo = 'ls';

</script>

<aside class="grid min-h-screen justify-center content-between gap-15 w-25 px-5">
  <div class="grid gap-15">
    <a href="#" class="bg-black text-center text-white">{logo}</a>
    <button class=""><img src="{templateIcon}" alt="Шаблоны"></button>
    <button class=""><img src="{addIcon}" alt="Добавить"></button>
    <button class=""><img src="{mediaIcon}" alt="Медия"></button>
    <button class=""><img src="{designIcon}" alt="Дизайн"></button>
    <button class=""><img src="{adaptiveIcon}" alt="Адаптив"></button>
  </div>
  <div class="grid gap-15 mb-15">
    <button><img src="{viewIcon}" alt="Просмотр"></button>
    <button class="flex justify-center items-center"><img src="{saveIcon}" alt="Сохранить"></button>
  </div>
</aside>
<aside class="grid min-h-screen">
  <section class="grid grid-cols-2">
    <h3 class="text-white text-lg font-light col-span-2">Текст</h3>
    <article class="w-32 h-32 grid justify-center border border-white rounded py-6">
      <img src="{rec}" alt="#">
      <p class="text-white text-center pt-2.5">Текст</p>
    </article>
    <article class="w-32 h-32 grid justify-center border border-white rounded py-6">
      <img src="{rec}" alt="#">
      <p class="text-white text-center pt-2.5">Текст</p>
    </article>
    <article class="w-32 h-32 grid justify-center border border-white rounded py-6">
      <img src="{rec}" alt="#">
      <p class="text-white text-center pt-2.5">Текст</p>
    </article>
    <article class="w-32 h-32 grid justify-center border border-white rounded py-6">
      <img src="{rec}" alt="#">
      <p class="text-white text-center pt-2.5">Текст</p>
    </article>
  </section>
</aside>