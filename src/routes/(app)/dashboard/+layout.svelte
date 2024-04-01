<script>
  import { page } from '$app/stores';

  export let data;

  let currentDate = new Date()
  let month = currentDate.getMonth() + 1; 
  let year = currentDate.getFullYear();
  month = parseInt(month) < 10 ? "0" + month : "" + month;
  
  let navItems = [
    { name: "Monthly", path: "/dashboard/" + year + "/" + month},
    { name: "Yearly", path: "/dashboard/" + year},
  ];
  
</script>
  
  <header class="header">
    <nav class="navigation">
      <div class="nav-list">
        {#each navItems as item}
          <a data-sveltekit-preload-data=off href={item.path} class="nav-item" class:active={data.active == item.name}>{ item.name }</a>
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
      --black: #152032;
    }
    :global(body) {
        background-color: var(--black);
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