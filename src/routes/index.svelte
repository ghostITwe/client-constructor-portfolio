<svelte:head>
  <title>LeafStock</title>
</svelte:head>

<script>
  import Header from "$lib/components/Heading.svelte";
</script>


<Header/>
<main class="font-jetbrains grow">
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
    <button
        class="text-4xl text-white border-2 border-white py-2.5 px-10 rounded-2xl shadow-md shadow-white mb-24 hover:bg-[#0019F5] duration-200">
      Регистрация »
    </button>
  </article>
  <section class="grid text-white max-w-screen-2xl m-auto gap-60">
    <article class="grid grid-cols-2 items-center">
      <img src="/assets/images/icons/laravel.svg" alt="laravel" class="w-80 h-80">
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
      <img src="/assets/images/icons/svelte.svg" alt="svelte" class="w-80 h-80">
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
      <img src="/assets/images/icons/tailwindCss.svg" alt="typescript" class="w-80 h-80 justify-self-end">
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
      <img src="/assets/images/icons/typeScript.svg" alt="tailwindcss" class="w-80 h-80 justify-self-end">
    </article>
  </section>
  <article class="m-auto text-center my-60">
    <h2 class="text-6xl text-white font-bold mb-14 leading-[5rem]">
      Создайте свое<br>
      профессиональное портфолио
    </h2>
    <button
        class="text-4xl text-white border-2 border-white py-2.5 px-10 rounded-2xl shadow-md shadow-white hover:bg-[#0019F5] duration-200">
      Регистрация »
    </button>
  </article>
</main>
<footer class="p-4 bg-[#464646] mt-12">
  <p class="text-white text-center text-xl font-thin">© 2022 LEAFSTOCK</p>
</footer>
