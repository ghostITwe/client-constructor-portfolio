<script lang="ts">
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
</header>
<main class="max-w-screen-sm m-auto mt-24">
  <h1 class="text-white text-6xl font-bold text-center">Вход</h1>
  <p class="text-white text-center font-bold mt-2 text-2xl">
    Ещё нет аккаунта? <a href="#" class="hover:drop-shadow-white duration-200">Создать</a>
  </p>
  <form class="grid gap-4 max-w-md m-auto mt-24">
    <label for="login"
           class="before:block before:absolute before:-bottom-1 before:left-0 before:right-0 before:shadow before:shadow-white before:h-px before:bg-white relative inline-block">
      <input type="text" id="login" placeholder=" Логин"
             class="placeholder-white bg-transparent outline-none placeholder:font-thin text-white w-full">
    </label>
    <label for="password"
           class="before:block before:absolute before:-bottom-1 before:left-0 before:right-0 before:shadow before:shadow-white before:h-px before:bg-white relative inline-block mt-12">
      <input type="text" id="password" placeholder=" Пароль"
             class="placeholder-white bg-transparent outline-none placeholder:font-thin text-white w-full">
    </label>
    <label for="remember" class="text-white font-thin ">
      <input type="checkbox" id="remember" name="remember" class="form-checkbox ml-1">
      <span>Запомнить меня</span>
    </label>
    <button
        class="text-white border border-white rounded shadow-sm shadow-white justify-self-center px-8 py-2 hover:bg-white hover:text-black duration-200">
      Войти
    </button>
  </form>
</main>
