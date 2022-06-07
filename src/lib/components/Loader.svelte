<div
    class="absolute top-0 right-0 bottom-0 left-0 z-50 flex justify-center bg-main-color/90 backdrop-blur items-center">
<!-- 1-й вариант -->
<!--  <img class="w-40 h-40 select-none" src="/assets/loader.gif" alt="">-->
<!-- 2-й вариант -->
<!--  <img class="w-72 h-72 select-none" src="/assets/loader2.gif" alt="">-->
<!-- 3-й вариант -->
  <div class="relative">
    <div class="around absolute w-2 h-2 bg-white rounded-full shadow-sm shadow-white after:content-[''] after:absolute after:w-2 after:h-2 after:bg-white after:rounded-full"></div>
    <span
        class="select-none block p-1 m-3 w-12 text-3xl font-bold bg-black align-middle text-center text-white shadow-[0_3px_5px_rgba(0_0_0_/_0.5)]">L<span
        class="flashing bg-white text-black leading-6 inline-block">S</span></span>
  </div>
</div>

<style>
  .around {
    animation: around 4.8s infinite;
  }
  .around:after {
    animation: ease-in around 4.8s infinite;
  }

  .flashing {
    animation: step-start flashing 1.2s infinite;
  }

  @keyframes flashing {
    from {
      filter: invert(0);
    }

    50% {
      filter: invert();
    }

    to {
      filter: invert(0);
    }
  }

  @keyframes around {
    from {
      left: 0;
      top: 0;
    }

    25% {
      left: calc(100% - .5rem);
      top: 0;
    }

    50% {
      left: calc(100% - .5rem);
      top: calc(100% - .5rem);
    }

    75% {
      left: 0;
      top: calc(100% - .5rem);
    }

    to {
      left: 0;
      top: 0;
    }
  }
</style>