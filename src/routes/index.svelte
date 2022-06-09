<svelte:head>
  <title>LeafStock</title>
</svelte:head>

<script>
  import Header from '$lib/components/Header.svelte';

  const technologies = [{
    title: 'Laravel — это фреймворк для веб-приложений с выразительным элегантным синтаксисом',
    desc: 'Мы уже заложили основу — даем вам возможность творить, не беспокоясь о мелочах',
    src: '/assets/images/icons/laravel.svg',
    alt: 'laravel',
    side: 'left'
  }, {
    title: 'Svelte. Радикальный подход к созданию пользовательских интерфейсов',
    desc: 'В то время как традиционные фреймворки, такие как React и Vue, выполняют большую часть своей работы в браузере, Svelte переносит эту работу на этап компиляции, при создании приложения',
    src: '/assets/images/icons/svelte.svg',
    alt: 'svelte',
    side: 'left'
  }, {
    title: 'TypeScript. Строго типизированный язык программирования',
    desc: 'Основанный на JavaScript, предоставляющий вам лучшие инструменты в любом масштабе',
    src: '/assets/images/icons/typeScript.svg',
    alt: 'typescript',
    side: 'right'
  }, {
    title: 'TailwindCss. CSS-фреймворк, ориентированный на утилиты',
    desc: 'Содержит такие классы, как flex, pt-4, text-center и rotate-90, которые можно скомпоновать для создания любого дизайна прямо в вашей разметке',
    src: '/assets/images/icons/tailwindCss.svg',
    alt: 'tailwindcss',
    side: 'right'
  }];
</script>

<Header/>
<main class="font-jetbrains grow p-8">
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
    <a href="/registration"
       class="inline-block text-4xl text-white border-2 border-white py-2.5 px-10 rounded-2xl shadow-md shadow-white mb-24 hover:bg-[#0019F5] duration-200">
      Создать портфолио »
    </a>
  </article>
  <section class="grid text-white max-w-screen-2xl m-auto gap-60">

    <!--  FIXME: Переделать  -->
    {#each technologies as { title, desc, src, alt, side }}
      <article class="grid grid-cols-2 items-center">
        {#if side === 'left'}
          <img {src} {alt} class="w-80 h-80">
        {/if}
        <div>
          <h3 class="text-3xl font-bold mb-4">{title}</h3>
          <p class="text-3xl font-thin">{desc}</p>
        </div>
        {#if side === 'right'}
          <img {src} {alt} class="w-80 h-80 justify-self-end">
        {/if}
      </article>
    {/each}

  </section>
  <article class="m-auto text-center my-60">
    <h2 class="text-6xl text-white font-bold mb-14 leading-[5rem]">
      Создайте свое<br>
      профессиональное портфолио
    </h2>
    <a href="/registration"
       class="inline-block text-4xl text-white border-2 border-white py-2.5 px-10 rounded-2xl shadow-md shadow-white hover:bg-[#0019F5] duration-200">
      Создать »
    </a>
  </article>
</main>
<footer class="p-4 bg-[#464646] mt-12">
  <a href="/privacy" class="text-white text-center font-thin block w-fit m-auto">Политика в отношении обработки
    персональных данных</a>
  <p class="text-white text-center text-xl font-thin">© 2022 LEAFSTOCK</p>
</footer>
