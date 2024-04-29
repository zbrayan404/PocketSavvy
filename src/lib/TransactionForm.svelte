<script>
  import { onMount } from "svelte";
  import { pb } from "$lib/pocketbase";

  export let onClose;
  export let transaction;
  export let categories = [];
  export let accounts = [];
  export let switchToAccount;
  export let switchToCategory;

  const PB = pb;

  let mode = "Add";

  let currentDate = new Date();

  let date = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${(currentDate.getDay() + 7).toString().padStart(2, "0")}`;
  let account;
  let category;
  let payee;
  let amount;
  let notes;
  let verify = false;

  if (transaction) {
    mode = "Edit";
    date = new Date(transaction.date).toISOString().split("T")[0];
    account = transaction.account;
    category = transaction.category;
    payee = transaction.payee;
    amount = transaction.amount;
    verify = transaction.verified;
    notes = transaction.notes;
  }

  function handleClose() {
    onClose();
  }

  async function updateTransaction() {
    console.log("Updating transaction");
    const data = {
      date: date,
      user: PB.authStore?.model.id,
      account: account,
      category: category,
      payee: payee,
      amount: amount,
      verify: verify,
      notes: notes,
    };
    console.log(data);
    try {
      await PB.collection("transactions").update(transaction.id, data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  async function addTransaction() {
    const data = {
      date: date,
      user: PB.authStore?.model.id,
      account: account,
      category: category,
      payee: payee,
      amount: amount,
      verify: verify,
      notes: notes,
    };
    try {
      await PB.collection("transactions").create(data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit() {
    if (mode === "Add") {
      await addTransaction();
    } else {
      await updateTransaction();
    }
  }

  // Function to handle item selection
  function handleSelect(event) {
    const value = event.target.value;
    console.log(value);
    if (value === "account") {
      switchToAccount();
    }
    if (value === "category") {
      switchToCategory();
    }
  }

  onMount(async () => {
    PB.authStore?.loadFromCookie(document.cookie || "");
  });
</script>

<form class="flex flex-col gap-4" on:submit|preventDefault>
  <div class="flex justify-between items-start">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="date">Date:</label>
        <input type="date" name="date" bind:value={date} required />
      </div>
      <div class="flex flex-col gap-2">
        <label for="account">Account:</label>
        <select id="account" bind:value={account} on:change={handleSelect}>
          {#if mode === "Add"}
            <option value="">Select a Account</option>
          {/if}
          {#each accounts as account}
            <option value={account.id}
              >{account.name + " (" + account.type + ")"}
            </option>
          {/each}
          {#if switchToCategory}
            <option value="account">Other</option>
          {/if}
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <label for="category">Category:</label>
        <select
          id="category"
          bind:value={category}
          on:change={handleSelect}
          required
        >
          {#if mode === "Add"}
            <option value="">Select a Category</option>
          {/if}
          {#each categories as category}
            <option value={category.id}
              >{category.name + " (" + category.type + ")"}</option
            >
          {/each}
          {#if switchToCategory}
            <option value="category">Other</option>
          {/if}
        </select>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="amount">Amount:</label>
        <input
          type="number"
          name="amount"
          placeholder="Amount..."
          bind:value={amount}
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="payee">Payee:</label>
        <input
          type="text"
          name="payee"
          placeholder="Payee..."
          bind:value={payee}
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="verify">Verify:</label>
        <label class="switch">
          <input type="checkbox" name="verify" bind:checked={verify} required />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <label for="note">Note:</label>
    <input
      id="note"
      type="text"
      name="note"
      placeholder="Note..."
      bind:value={notes}
    />
  </div>
  <div class="flex items-center justify-end gap-4 mt-12">
    <button type="button" on:click={handleClose}>Close</button>
    <button type="submit" on:click={handleSubmit}>{mode}</button>
  </div>
</form>

<style>
  form {
    height: 470px;
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
  form .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 35px;
  }
  form .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  form .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  form .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  form input:checked + .slider {
    background-color: #2196f3;
  }
  form input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  form input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  form .slider.round {
    border-radius: 34px;
  }
  form .slider.round:before {
    border-radius: 50%;
  }
  form #note {
    width: 100%;
  }
</style>
