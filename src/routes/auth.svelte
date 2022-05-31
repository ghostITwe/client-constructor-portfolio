<script>
  import Form from "$lib/components/Form.svelte";
  import Field from "$lib/components/Field.svelte";
  import Button from "$lib/components/Button.svelte";
  import Link from "$lib/components/Link.svelte";
  import Header from "$lib/components/Header.svelte";

  $: errors = [];

  async function signIn(body) {

      let response = await fetch("api/auth.json", {
          method: 'POST',
          body: JSON.stringify(body)
      });

      if (response.ok) {
          let result = await response.json();
          localStorage.setItem('token', result.token);
          window.location.href = '/portfolio';
      } else {
          errors = Object.values((await response.json())?.errors);
      }
  }
</script>

<Header type="cut"/>
<main class="max-w-screen-sm m-auto mt-24">
  <h1 class="text-white text-6xl font-bold text-center">Вход</h1>
  <p class="text-white text-center font-bold mt-5 text-2xl">
    Ещё нет аккаунта?
    <Link>Создать</Link>
  </p>
<!--  TODO: сделать стили для ошибок -->
  {#if errors}
    {#each errors as error }
      {#each error as message }
        <p>{message}</p>
      {/each}
    {/each}
  {/if}
  <Form method="post" on:submit={(e) => {
      e.preventDefault();
      const body = {
          email: e.target.email.value,
          password: e.target.password.value
      };
      signIn(body);
  }}>
    <Field id="email" placeholder="Почта" type="text"/>
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
