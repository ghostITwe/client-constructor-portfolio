<script>

  export let type;
  let logo = '';
  // FIXME: Переделать его)
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
      logo = logo.slice(-1) === '_' ? 'LEAFSTOCK' : 'LEAFSTOCK_';
    }, 750);
  }

  tick();
</script>

<header class="flex justify-between p-4">
  <a href="/" class="text-2xl text-white font-bold ml-32">{logo}</a>
  {#if type !== 'cut'}
    <nav class="flex items-center text-white text-xl gap-8">
      <a href="#"><img src="assets/switch.svg" alt="switchTheme" class="w-8"></a>
    </nav>
  {/if}
</header>