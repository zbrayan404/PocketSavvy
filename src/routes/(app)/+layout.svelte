<script>
  import "/src/app.css";
  import { page } from '$app/stores';
  import { AreaChart, Receipt, UserRoundCog, Menu } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let navItems = [
    { name: "Dashboard", path: "/dashboard", icon: AreaChart},
    { name: "Budget", path: "/budget", icon: Receipt },
    { name: "Settings", path: "/settings", icon: UserRoundCog},
  ];

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }


  onMount(() => {
    function handleResize() {
      if (window.innerWidth > 814) {
        isMenuOpen = false; // Close menu on desktop
      }
    }

    function handleClickOutside(event) {
      const navBar = document.querySelector('.navigation');
      if (navBar && !navBar.contains(event.target)) {
        closeMenu();
      }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClickOutside);
    };
  });
  
</script>

<header class="header" class:open={isMenuOpen}>
  <h1 class="welcome-message">Hello, Brayan</h1>
  <nav class="navigation">
    <button class="menu-button" on:click={toggleMenu}>
      <span class="icon"><Menu size={32} /></span>
    </button>
    <div class="nav-list" class:open={isMenuOpen}>
      {#each navItems as item}
        <a href={item.path} class="nav-item" class:active={$page.url.pathname.startsWith(item.path)}>
          <span class="icon-nav"><svelte:component this={item.icon} size={24}/></span>
          <span class="name">{item.name}</span>
        </a>
      {/each}
    </div>
  </nav>
</header>

<slot />

<style>
  :global(:root) {
    --gray: #17253e;
    --white: #f5f7fa;
    --green: #02cd8c;
  }
  :global(body) {
    background-color: var(--gray);
    height: 100%;
  }

  .header {
    background-color: var(--gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5%;
    padding: 0px 5% 0px 5%;
    height: 70px;
    border-bottom: 2px dotted var(--white);
  }

  .welcome-message {
    text-align: center;
    color: var(--white);
    letter-spacing: 2px;
    font-family: 'Iosevka', sans-serif;
    font-size: calc(1rem + 1vw);
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .navigation {
    display: flex;
    flex-direction: column;
  }

  .nav-list {
    list-style: none;
    display: none; /* Initially hidden */
    gap: 1%;
    font-size: 20px;
    justify-content: space-between;
    color: var(--white);
    letter-spacing: 1.25px;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    font-family: Iosevka, sans-serif;
    text-decoration: dashed underline 3px;
    text-underline-offset: 8px;
    display: flex;
    align-items: center;
    gap: 10%;
  }

  .nav-item {
    height: 45px;
    color: var(--gray);
    padding: 0px 15px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    outline: none;
    border-radius: 11.42px;
    z-index: 0;
    background: var(--gray);
    overflow: hidden;
    color: var(--white);
    justify-content: space-evenly;
  }
  .nav-item:hover {
    color: var(--gray);;
  }
  .nav-item:hover:after {
    height: 100%;
  }
  .nav-item:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    background: var(--green);
  }

  .icon {
    padding-top: 5.4%;
    color: var(--white);
  }

  .icon-nav {
    padding-top: 4.4%;
  }


  .active {
    color: var(--green);
    text-decoration: solid underline 3px;
    text-underline-offset: 8px;
  }

  .menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .nav-list.open {
    height: 40px;
    display: flex; /* Display when open */
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background-color: var(--gray);
    justify-content: space-evenly;
    font-size: 13px;
    align-items: center;
  }

  .nav-list.open .nav-item {
    height: 40px;
  }

  .header.open {
    height: 106px;
    padding-bottom: 36px;
  }

  @media (max-width: 814px) {
    .menu-button {
      display: block;
    }

    .nav-list {
      display: none; /* Hidden by default */
    }
  }

  @media (min-width: 815px) {
    .menu-button {
      display: none;
    }

    .nav-list {
      display: flex;
      gap: 20px;
    }
  }
</style>

