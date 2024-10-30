<script>
  import { MoreHorizontal } from "lucide-svelte";
  import BudgetForm from "$lib/BudgetForm.svelte";
  import { onMount } from "svelte";
  import { pb } from "$lib/pocketbase";

  export let budget;
  export let categories;

  let isMenuVisible = false;
  let isEditMenuVisible = false;
  let isDeleteMenuVisible = false;
  let editButton;

  const PB = pb;

  function clickOutside(node, params) {
    function onClick(event) {
      if (
        !node.contains(event.target) &&
        !params.button.contains(event.target)
      ) {
        params.f();
      } else {
        console.log("");
      }
    }
    window.addEventListener("click", onClick);
    return {
      destroy() {
        window.removeEventListener("click", onClick);
      },
    };
  }

  function openEdit() {
    isEditMenuVisible = true;
    isMenuVisible = false;
  }

  function openDelete() {
    isDeleteMenuVisible = true;
    isMenuVisible = false;
  }

  function onClose() {
    isEditMenuVisible = false;
    isDeleteMenuVisible = false;
  }

  async function deleteBudget() {
    try {
      await PB.collection("budgets").delete(budget.id);
    } catch (error) {
      console.error(error);
    }

    isDeleteMenuVisible = false;
  }

  let menuItems = [
    {
      name: "edit",
      action: openEdit,
      displayText: "Edit",
    },
    {
      name: "delete",
      action: openDelete,
      displayText: "Delete",
    },
  ];

  onMount(() => {
    PB.authStore?.loadFromCookie(document.cookie);
  });
</script>

<div>
  <button
    class="edit-button"
    on:click={() => (isMenuVisible = !isMenuVisible)}
    bind:this={editButton}><MoreHorizontal /></button
  >
  {#if isMenuVisible}
    <div class="menu">
      <div
        class="secondmenu"
        use:clickOutside={{
          f: () => (isMenuVisible = false),
          button: editButton,
        }}
      >
        {#each menuItems as item}
          <div>
            <button on:click={item.action}>
              {item.displayText}
            </button>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

{#if isEditMenuVisible || isDeleteMenuVisible}
  <div class="form-page">
    <div class="body-page">
      <section class="card">
        <div class="prose">
          <h1>Budget</h1>
        </div>
        {#if isEditMenuVisible}
          <BudgetForm
            year={budget.year}
            month={parseInt(budget.month) - 1}
            categoryOptions={categories}
            {onClose}
            {budget}
          ></BudgetForm>
        {/if}
        {#if isDeleteMenuVisible}
          <form on:submit|preventDefault>
            <div class="note">
              <p>Are you sure?</p>
            </div>
            <input type="text" name="id" bind:value={budget.id} hidden />
            <div class="buttons">
              <button
                type="button"
                on:click={() => (isDeleteMenuVisible = false)}>Cancel</button
              >
              <button type="submit" on:click={deleteBudget}>Delete</button>
            </div>
          </form>
        {/if}
      </section>
    </div>
  </div>
{/if}

<style>
  :global(:root) {
    --gray: #17253e;
    --white: #f5f7fa;
    --green: #02cd8c;
  }
  .menu {
    position: relative;
  }
  .secondmenu {
    color: var(--white);
    letter-spacing: 2px;
    font-family: "Iosevka", sans-serif;
    background-color: var(--gray);
    display: flex;
    align-items: stretch;
    flex-direction: column;
    padding: 0px 10px;
    font-size: 1rem;
    border-radius: 11.42px;
    border: 2px solid;
    position: absolute;
    top: 1px;
    right: -13px;
  }
  .secondmenu button {
    width: 100%;
    height: 35px;
    min-width: 50px;
    text-align: left;
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
    padding: 2.5%;
    padding-top: 2.5rem;
    padding-bottom: 0;
    min-width: 300px;
    text-align: left;
  }
  .card h1 {
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
    font-size: 2rem;
    margin: 0;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  form button {
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
    width: 90px;
    height: 35px;
    font-weight: bold;
    border: 2px solid;
    transition: 0.3s;
    box-shadow: 5px 5px 0px 0px var(--white);
    background-color: var(--gray);
    border-radius: 11.83px;
  }
  form button:hover {
    box-shadow: 0 0 black;
    color: var(--gray);
    background-color: var(--white);
  }
  form .buttons {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 40px;
  }
  .note {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-family: "Iosevka", sans-serif;
    letter-spacing: 0.6px;
    font-size: 1.2rem;
    margin-top: 30px;
  }
</style>
