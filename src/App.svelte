<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import switchTheme from './assets/switch.svg';

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
    }, 700);
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
  <article class="bg-[#3E3E3E80] backdrop-blur-sm shadow-lg rounded-xl text-center p-4 max-w-3xl m-auto mt-28 mb-28">
    <h2 class="text-6xl text-white mb-7 font-bold mt-24">Конструктор портфолио</h2>
    <button class="text-4xl text-white border-2 border-white py-2.5 px-10 rounded-2xl shadow-md shadow-white mb-24">Регистрация »</button>
  </article>
</main>
