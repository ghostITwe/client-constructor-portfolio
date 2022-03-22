<script lang="ts">
  import Form from "./components/Form.svelte";
  import Field from "./components/Field.svelte";
  import Button from "./components/Button.svelte";
  import Link from "./components/Link.svelte";
  import Header from "./components/Header.svelte";
</script>


<Header type="cut"/>
<main class="max-w-screen-sm m-auto mt-24">
  <h1 class="text-white text-6xl font-bold text-center">Вход</h1>
  <p class="text-white text-center font-bold mt-5 text-2xl">
    Ещё нет аккаунта? <Link>Создать</Link>
  </p>
  <Form>
    <Field id="login" placeholder="Логин" type="text"/>
    <div class="grid gap-4">
      <Field id="password" placeholder="Пароль" type="password"/>
      <div class="flex justify-between font-thin">
        <Field id="remember" type="checkbox">Запомнить меня</Field>
        <Link>Забыли почту или пароль?</Link>
      </div>
    </div>
    <Button>Войти</Button>
  </Form>
</main>
