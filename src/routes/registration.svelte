<script>
  import Form from "$lib/components/Form.svelte";
  import Field from "$lib/components/Field.svelte";
  import Button from "$lib/components/Button.svelte";
  import Link from "$lib/components/Link.svelte";
  import Header from "$lib/components/Heading.svelte";
</script>

<Header type="cut"/>
<main class="max-w-screen-sm m-auto mt-24">
  <h1 class="text-white text-6xl font-bold text-center">Новый аккаунт</h1>
  <p class="text-white text-center font-bold mt-5 text-2xl">
    У вас уже есть аккаунт?
    <Link>Войти</Link>
  </p>
  <Form>
    <Field id="email" placeholder="Эл.почта" type="text"/>
    <Field id="login" placeholder="Логин" type="text"/>
    <Field id="password" placeholder="Пароль" type="password"/>
    <Field id="password_verify" placeholder="Повторите пароль" type="password"/>
    <Button>Создать</Button>
  </Form>
</main>
