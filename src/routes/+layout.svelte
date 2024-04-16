<script>
  import "../app.pcss";
  import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

  let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl';
</script>

<main class="min-h-[100vh]">
    <Navbar>
      <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TipGame</span>
      </NavBrand>
      <NavUl >
        <DarkMode {btnClass} />
      </NavUl>
    </Navbar>
    <slot></slot>
</main>