<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import switchTheme from './assets/switch.svg';
  import laravelIcon from './assets/images/icon/laravel.svg';
  import svelteIcon from './assets/images/icon/svelte.svg';
  import tailwindCssIcon from './assets/images/icon/tailwindCss.svg';
  import typeScriptIcon from './assets/images/icon/typeScript.svg';

  let logo = '';

  function tick() {
    setTimeout(() => {
      logo += 'L';
    }, 50);
    setTimeout(() => {
      logo += 'E';
    }, 100);
    setTimeout(() => {
      logo += 'A';
    }, 150);
    setTimeout(() => {
      logo += 'F';
    }, 200);
    setTimeout(() => {
      logo += 'S';
    }, 300);
    setTimeout(() => {
      logo += 'T';
    }, 400);
    setTimeout(() => {
      logo += 'O';
    }, 500);
    setTimeout(() => {
      logo += 'C';
    }, 600);
    setTimeout(() => {
      logo += 'K';
    }, 700);
    setInterval(() => {
      logo = logo.slice(-1) == '_' ? 'LEAFSTOCK' : 'LEAFSTOCK_';
    }, 750);
  }
  tick();
</script>


<header class="flex justify-between p-4">
  <a href="#" class="text-2xl text-white font-bold">{logo}</a>
  <nav class="flex items-center text-white text-xl gap-8">
    <a href="#" class="font-bold">Текст</a>
    <a href="#" class="font-bold">Тарифы</a>
    <a href="#"><img src="{switchTheme}" alt="switchTheme" class="w-8"></a>
  </nav>
</header>
<main>
  <article class="bg-[#3E3E3E80] backdrop-blur-sm shadow-lg rounded-xl text-center max-w-3xl m-auto my-28">
    <div class="flex items-center justify-evenly gap-10 py-4 px-8 shadow-lg">
      <div class="flex items-center gap-2">
        <div class="border border-white h-4 w-4 rounded-full"></div>
        <div class="border border-white h-4 w-4 rounded-full"></div>
        <div class="border border-white h-4 w-4 rounded-full"></div>
      </div>
      <div class="border-white border rounded h-5 w-full"></div>
    </div>
    <h2 class="text-6xl text-white mb-7 font-bold mt-20 px-4 leading-[5rem]">Конструктор портфолио</h2>
    <button class="text-4xl text-white border-2 border-white py-2.5 px-10 rounded-2xl shadow-md shadow-white mb-24 hover:bg-[#0019F5] duration-200">Регистрация »</button>
  </article>
  <section class="grid text-white max-w-screen-2xl m-auto gap-60">
    <article class="grid grid-cols-2 items-center">
      <img src="{laravelIcon}" alt="laravel" class="w-80 h-80">
      <article>
        <h3 class="text-3xl font-bold mb-4 ">
          Laravel — это фреймворк для
          веб-приложений с выразительным элегантным синтаксисом
        </h3>
        <p class="text-3xl font-thin">
          Мы уже заложили основу — даем вам возможность творить, не беспокоясь
          о мелочах
        </p>
      </article>
    </article>
    <article class="grid grid-cols-2 items-center">
      <img src="{svelteIcon}" alt="svelte" class="w-80 h-80">
      <article>
        <h3 class="text-3xl font-bold mb-4">
        Svelte. Радикальный подход к созданию пользовательских интерфейсов
      </h3>
        <p class="text-3xl font-thin">
          В то время как традиционные фреймворки, такие как React и Vue, выполняют большую часть своей работы в
          браузере, Svelte переносит эту работу на этап компиляции, при создании приложения
        </p>
      </article>
    </article>
    <article class="grid grid-cols-2 items-center">
      <article>
        <h3 class="text-3xl font-bold mb-4">TypeScript. Строго типизированный
        язык программирования</h3>
        <p class="text-3xl font-thin">
          Основанный на JavaScript, предоставляющий вам лучшие инструменты в любом масштабе
        </p>
      </article>
      <img src="{typeScriptIcon}" alt="typescript" class="w-80 h-80 justify-self-end">
    </article>
    <article class="grid grid-cols-2 items-center">
      <article>
        <h3 class="text-3xl font-bold mb-4">
          TailwindCss. CSS-фреймворк, ориентированный на утилиты
        </h3>
        <p class="text-3xl font-thin">
          Содержит такие классы, как flex, pt-4,
          text-center и rotate-90, которые можно скомпоновать для создания любого дизайна прямо в вашей разметке
        </p>
      </article>
      <img src="{tailwindCssIcon}" alt="tailwindcss" class="w-80 h-80 justify-self-end">
    </article>
  </section>
  <article class="m-auto text-center my-60">
    <h2 class="text-6xl text-white font-bold mb-14 leading-[5rem]">
      Создайте свое<br>
      профессиональное портфолио
    </h2>
    <button class="text-4xl text-white border-2 border-white py-2.5 px-10 rounded-2xl shadow-md shadow-white hover:bg-[#0019F5] duration-200">Регистрация »</button>
  </article>
</main>
