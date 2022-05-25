<script>
  import { content, bar } from '$lib/stores';
  import { toggle } from '$lib/functions/sidebar';
  import Toolbar from '$lib/components/Toolbar.svelte';
  import ToolNavigation from '$lib/components/ToolNavigation.svelte';

  // FIXME: удалить и закрыть при старте страницы панель
  $bar = {
    component: Toolbar
  };
</script>

<aside class="relative">
  <ToolNavigation/>
  <section id="bar"
           class="h-screen duration-200
         backdrop-blur-md bg-main-color/90 absolute z-10 left-full top-0 transform
         after:block after:content-[''] after:w-px after:absolute after:top-0 after:bottom-0 after:bg-transparent after:shadow-[0_0_11px_0_#fff8]
    ">
    <div class="grid p-6 pl-8 gap-6 overflow-y-scroll no-scrollbar content-start">
      <!--  TODO: попробовать сделать динамическим атрибут - props={$content[$bar.id]?.props}  -->
      <svelte:component this={$bar.component}/>
    </div>

<!--  TODO: сделать изменение кнопки при клике  -->
    <button class="absolute left-full top-1/2 transform -translate-y-1/2" on:click={toggle}>
      <svg width="14" height="70" viewBox="0 0 14 70" class="backdrop-blur-md" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.9062 8.50442C13.2202 9.44298 14 10.9583 14 12.5731L14 53.0292C14 54.2957 13.5194 55.5149 12.6553 56.4408L3.61592e-06 70L3.33786e-06 -6.11959e-07L11.9062 8.50442Z"
            fill="rgb(40 40 40 / 0.9)"/>
        <path
            d="M9.54518 26.0722C9.94998 26.2421 10.1154 26.6575 9.91463 27L5.90617 33.8391C5.74061 34.1216 5.63631 34.5413 5.63631 35C5.63631 35.4587 5.74061 35.8784 5.90617 36.1609L9.91463 43C10.1154 43.3425 9.94998 43.7579 9.54518 43.9278C9.14037 44.0976 8.64946 43.9577 8.4487 43.6151L4.44024 36.7761C4.1324 36.2509 4 35.606 4 35C4 34.394 4.1324 33.7491 4.44024 33.2239L8.4487 26.3849C8.64946 26.0423 9.14037 25.9024 9.54518 26.0722Z"
            fill="white"/>
      </svg>
    </button>
  </section>
</aside>