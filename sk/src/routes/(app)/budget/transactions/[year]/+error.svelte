<script>
  import { page } from "$app/stores";
</script>

<div class="body">
  <div class="main">
    <div class="error">
      <h1>{$page.error.message}</h1>
    </div>
  </div>
</div>

<style>
  :global(:root) {
    --gray: #17253e;
    --white: #f5f7fa;
    --green: #02cd8c;
  }
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
  .main {
    width: 99%;
    height: 100%;
    background-color: var(--gray);
    color: var(--white);
    border-radius: 22.83px;
    background-clip: padding-box;
    border: 2px solid;
    padding: 3.5%;
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
    font-size: 40px;
    color: var(--green);
  }
  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
