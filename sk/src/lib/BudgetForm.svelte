<script>
  import { pb } from "$lib/pocketbase.js";
  import { onMount } from "svelte";

  export let onClose;
  export let budget;
  export let categoryOptions = [];
  export let month;
  export let year;
  export let switchToCategory;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  month = months[month];

  let startDate = `${year}-${(months.indexOf(month) + 1).toString().padStart(2, "0")}-01`;
  let endDate = `${year}-${(months.indexOf(month) + 1).toString().padStart(2, "0")}-${new Date(year, months.indexOf(month) + 1, 0).getDate()}`;
  let category;
  let amount;

  let mode = "Add";

  const PB = pb;

  if (budget) {
    mode = "Edit";
    category = budget.categoryID;
    amount = budget.budget;
  }

  $: {
    if (mode === "Add") {
      startDate = `${year}-${(months.indexOf(month) + 1).toString().padStart(2, "0")}-01`;
      endDate = `${year}-${(months.indexOf(month) + 1).toString().padStart(2, "0")}-${new Date(year, months.indexOf(month) + 1, 0).getDate()}`;
    }
  }

  function handleClose() {
    onClose();
  }

  function handleSelect(event) {
    const value = event.target.value;
    console.log(value);
    if (value === "category") {
      switchToCategory();
    }
  }

  async function updateBudget() {
    const data = {
      amount: parseFloat(amount),
      startDate: startDate,
      endDate: endDate,
      month: (months.indexOf(month) + 1).toString(),
      year: year,
    };

    try {
      await PB.collection("budgets").update(budget.id, data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  async function addBudget() {
    const data = {
      user: PB.authStore?.model.id,
      category: category,
      amount: parseFloat(amount),
      startDate: startDate,
      endDate: endDate,
      month: (months.indexOf(month) + 1).toString(),
      year: year,
    };

    try {
      await PB.collection("budgets").create(data);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit() {
    if (mode === "Add") {
      await addBudget();
    } else {
      await updateBudget();
    }
  }

  onMount(async () => {
    PB.authStore?.loadFromCookie(document.cookie);
  });
</script>

<form class="flex flex-col gap-4" on:submit|preventDefault>
  <div class="flex items-center justify-between">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="category">Category:</label>
        <select
          on:change={handleSelect}
          id="category"
          bind:value={category}
          required
        >
          {#if mode === "Add"}
            <option value="">Select a Category</option>
          {/if}
          {#each categoryOptions as cat}
            <option value={cat.id}>{cat.name + " (" + cat.type + ")"} </option>
          {/each}
          <option value="category">Other</option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <label for="start">Start Date:</label>
        <input type="date" name="start" bind:value={startDate} required />
      </div>
      <div class="flex flex-col gap-2">
        <label for="month">Month:</label>
        <select name="month" bind:value={month} required>
          {#each months as m}
            <option value={m}>{m}</option>
          {/each}
        </select>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="amount">Amount:</label>
        <input
          type="number"
          name="amount"
          bind:value={amount}
          placeholder="Amount..."
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="end">End Date:</label>
        <input type="date" name="end" bind:value={endDate} required />
      </div>
      <div class="flex flex-col gap-2">
        <label for="year">Year:</label>
        <input
          type="number"
          name="year"
          bind:value={year}
          placeholder="Year..."
          required
        />
      </div>
    </div>
  </div>
  <div class="flex items-center justify-end gap-4 mt-12">
    <button type="button" on:click={handleClose}>Close</button>
    <button type="submit" on:click={handleSubmit}>{mode}</button>
  </div>
</form>

<style>
  form {
    height: 380px;
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
