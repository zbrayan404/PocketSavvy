<script>
  import "/src/app.css";
  import { page } from '$app/stores';
  import { Menu } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let navItems = [
    { name: "Login", path: "/login"},
    { name: "Register", path: "/register"},
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
  <div class="logo">

  </div>
  <h1 class="welcome-message">Welcome</h1>
  <nav class="navigation">
    <button class="menu-button" on:click={toggleMenu}>
      <span class="icon"><Menu size={32} /></span>
    </button>
    <div class="nav-list" class:open={isMenuOpen}>
      {#each navItems as item}
        <a href={item.path} class="nav-item" class:active={$page.url.pathname.startsWith(item.path)}>
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
    color: var(--white);
    letter-spacing: 2px;
    font-family: 'Iosevka', sans-serif;
    font-size: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex: 1 0 auto;
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
  }
  .nav-item {
    font-family: 'Iosevka', sans-serif;
    text-decoration: dashed underline 3px;
    text-underline-offset: 8px;
    display: flex;
    align-items: center;
    gap: 10%;
    height: 45px;
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

  .logo{
    width: 45px;
    height: 45px;
    background-color: var(--green);
    border-radius: 11.42px;
  }
  .icon {
    padding-top: 5.4%;
    color: var(--white);
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

    .welcome-message {
      font-size: 25px;
      min-width: 235px;
      text-align: center;
    }

    .logo {
      width: 35px;
      height: 35px;
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

