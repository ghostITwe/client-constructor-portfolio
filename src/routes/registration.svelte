<script>
    import Form from "$lib/components/Form.svelte";
    import Field from "$lib/components/Field.svelte";
    import Button from "$lib/components/Button.svelte";
    import Link from "$lib/components/Link.svelte";
    import Header from "$lib/components/Header.svelte";

    $: errors = [];

    async function signUp(body) {
        let response = await fetch("api/registration.json", {
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
  <h1 class="text-white text-6xl font-bold text-center">Новый аккаунт</h1>
  <p class="text-white text-center font-bold mt-5 text-2xl">
    У вас уже есть аккаунт?
    <Link>Войти</Link>
  </p>
  <Form method="post" on:submit={(e) => {
       e.preventDefault();
       const body = {
           email: e.target.email.value,
           password: e.target.password.value,
           password_confirmation: e.target.password_confirmation.value
       };
       signUp(body);
  }}>
    <Field id="email" placeholder="Эл.почта" type="text"/>
    <Field id="password" placeholder="Пароль" type="password"/>
    <Field id="password_confirmation" placeholder="Повторите пароль" type="password"/>
    <Button>Создать</Button>
  </Form>
</main>
