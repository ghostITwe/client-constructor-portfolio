<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import switchTheme from './assets/switch.svg';
</script>


<header class="flex justify-around bg-main-color p-8">
  <span class="text-3xl text-white">LEAFSTOCK_</span>
  <nav class="flex items-center text-white text-xl gap-8">
    <a href="#">Test</a>
    <a href="#">Test</a>
    <a href="#"><img src="{switchTheme}" alt="switchTheme"></a>
  </nav>
</header>
<main class="text-center">
  <section>
    <h2>Конструктор портфолио</h2>
  </section>
</main>
