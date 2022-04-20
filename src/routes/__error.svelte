<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        error, status
      }
    };
  }
</script>

<script>
  export let error, status;
  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1 class="p-4 text-8xl text-center text-gray-300 dark:text-gray-700">{status}</h1>

<p class="p-4 text-xl sm:text-4xl text-center text-gray-800 dark:text-gray-300">{error.message}</p>

{#if dev && error.stack}
  <pre class="font-jetbrains m-4 p-4 rounded-xl border border-2 shadow-inner border-gray-500
      overflow-auto
      text-gray-300 bg-gray-900 dark:text-gray-800 dark:bg-white">{error.stack}</pre>
{/if}