<script>
    import { page } from '$app/stores';
  
    let navItems = [
    //{ name: "Settings", path:"/settings"},
    { name: "Accounts", path: "/settings/accounts"},
    { name: "Avatar", path: "/settings/avatar"},
    { name: "Change Password", path: "/settings/profile"}
    
    ];
  
  </script>
  
  <header class="header">
    <nav class="navigation">
      <div class="nav-list">
        {#each navItems as item}
          <a href={item.path} class="nav-item" class:active={$page.url.pathname == item.path}>{ item.name}</a>
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
        background-color: #152032;
    }
    .header {
      background-color: var(--gray);
      display: flex;
      justify-content: center;
      height: 38px;
      align-items: center;
    }
    .navigation {
      display: flex;
      flex-direction: column;
    }
    .nav-list {
      list-style: none;
      display: flex;
      gap: 20px;
      font-size: 14px;
      justify-content: space-between;
      color: var(--white);
      letter-spacing: 1.25px;
      margin: 0;
      padding: 0;
    }
    .nav-item {
      font-family: Iosevka, sans-serif;
      color: var(--white);
    }
    .active {
      color: var(--green);
    }
  </style>