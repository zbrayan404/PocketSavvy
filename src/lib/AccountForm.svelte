<script>
  import { pb } from "$lib/pocketbase.js";
  import { onMount } from "svelte";

  export let onClose;
  export let account;

  const accountTypes = [
    "Checking",
    "Savings",
    "Credit Card",
    "Cash",
    "Investment",
    "Loan",
    "Retirement",
    "Money Market",
    "Certificate of Deposit (CD)",
    "Health Savings (HSA)",
    "Flexible Spending (FSA)",
    "Individual Retirement (IRA)",
    "401(k)",
    "Trust",
  ];

  let name;
  let type;
  let mode = "Add";

  const PB = pb;

  if (account) {
    mode = "Edit";
    name = account.name;
    type = account.type;
  }

  function handleClose() {
    onClose();
  }

  async function updateAccount() {
    const data = {
      name: name,
      type: type,
    };

    try {
      await PB.collection("accounts").update(account.id, data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  async function addAccount() {
    const data = {
      user: PB.authStore?.model.id,
      name: name,
      type: type,
    };

    try {
      await PB.collection("accounts").create(data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit() {
    if (mode === "Add") {
      await addAccount();
    } else {
      await updateAccount();
    }
  }

  onMount(async () => {
    PB.authStore?.loadFromCookie(document.cookie);
  });
</script>

<form class="flex flex-col gap-4" on:submit|preventDefault>
  <div class="flex justify-between items-start">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="type">Type:</label>
        <select name="type" bind:value={type} required>
          {#if mode === "Add"}
            <option value="">Select a Type</option>
          {/if}
          {#each accountTypes as accountType}
            <option value={accountType}>{accountType}</option>
          {/each}
        </select>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          bind:value={name}
          required
        />
      </div>
    </div>
  </div>
  <div class="flex items-center justify-end gap-4 mt-12">
    <button type="button" on:click={handleClose}>Close</button>
    <button type="submit" on:click={handleSubmit}>Submit</button>
  </div>
</form>

<style>
  form {
    height: 205px;
  }
  form input,
  form select {
    background-color: var(--gray);
    color: var(--white);
    border-radius: 11.83px;
    padding: 0.5rem;
    background-clip: padding-box;
    border: 2px solid;
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
    font-size: 0.8rem;
    width: 150px;
    height: 35px;
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
  form {
    display: flex;
    flex-direction: column;
    font-family: "Iosevka", sans-serif;
  }
  form label {
    font-family: "Iosevka", sans-serif;
    font-size: 1.2rem;
  }
</style>
