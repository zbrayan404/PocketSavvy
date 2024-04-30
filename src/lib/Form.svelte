<script>
  import BudgetForm from "./BudgetForm.svelte";
  import CategoryForm from "./CategoryForm.svelte";

  export let isOpen = false;
  export let onClose;
  export let categoryOptions = [];
  export let month;
  export let year;

  let activeTab = "Budget";

  function switchToBudget() {
    activeTab = "Budget";
  }

  function switchToCategory() {
    activeTab = "Category";
  }
</script>

{#if isOpen}
  <div class="form-page">
    <div class="body-page">
      <div>
        <div class="nav flex">
          <button
            on:click={switchToBudget}
            class:selected={activeTab === "Budget"}>Budget</button
          >
          <button
            on:click={switchToCategory}
            class:selected={activeTab === "Category"}>Category</button
          >
        </div>
        <section class="card">
          <div class="prose">
            <h1>{activeTab}</h1>
          </div>
          {#if activeTab === "Budget"}
            <BudgetForm
              {year}
              {month}
              {categoryOptions}
              {onClose}
              {switchToCategory}
            ></BudgetForm>
          {:else}
            <CategoryForm {onClose}></CategoryForm>
          {/if}
        </section>
      </div>
    </div>
  </div>
{/if}

<style>
  :global(:root) {
    --gray: #17253e;
    --white: #f5f7fa;
    --green: #02cd8c;
  }
  .form-page {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  }
  .body-page {
    position: relative;
    display: flex;
    height: 730px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .card {
    background-color: var(--gray);
    color: var(--white);
    border-radius: 11.83px;
    border: 2px solid;
    width: 440px;
    position: relative;
    padding: 5%;
    padding-top: 2.5rem;
    padding-bottom: 0;
    min-width: 300px;
  }
  .card h1 {
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
    font-size: 2rem;
    margin: 0;
    text-align: center;
  }
  .nav button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
    align-items: center;
    justify-content: center;
    line-height: 1;
    color: var(--white);
    font-size: 15px;
    width: 100%;
    height: 49px;
    font-weight: bold;
    border: 2px solid;
    background-color: var(--gray);
    border-top-right-radius: 11.83px;
    border-top-left-radius: 11.83px;
    padding-bottom: 9px;
  }
  .nav button:hover {
    color: var(--gray);
    background-color: var(--white);
  }
  .nav button.selected {
    color: var(--gray);
    background-color: var(--white);
  }
  .nav {
    position: relative;
    top: 11px;
  }
</style>
