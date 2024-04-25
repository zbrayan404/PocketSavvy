<script>
    import { pb } from "$lib/pocketbase.js";
    import { onMount } from "svelte";
    //import { switchToCategory } from "./Form.svelte";
  
    export let onClose;
    export let data = [];
    export let categoryOptions = [];
    let user;
    export let month;
    export let year;
    //export let switchToCategory;
    //export let activeTab;

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    month = months[month]

    let startDate = `${year}-${(months.indexOf(month) + 1).toString().padStart(2, '0')}-01`;
    let endDate = `${year}-${(months.indexOf(month) + 1).toString().padStart(2, '0')}-${new Date(year, months.indexOf(month) + 1, 0).getDate()}`;

    let category;
    let amount;

    const PB = pb;

    if (data.length > 0) {
        UpdateMode();
    }

    $ :  {
        console.log(month);
        startDate = `${year}-${(months.indexOf(month) + 1).toString().padStart(2, '0')}-01`;
        endDate = `${year}-${(months.indexOf(month) + 1).toString().padStart(2, '0')}-${new Date(year, months.indexOf(month) + 1, 0).getDate()}`;
    }

    // function switchToCategory() {
    //   activeTab = 'Category';
    // }

    function handleClose() {
        onClose();
    } 

    async function submitBudget() {
      console.log("Inside of submitBudget function")
      const data = {
        "user": user,
        "category": category,
        "amount": parseFloat(amount),
        "startDate": startDate,
        "endDate": endDate,
        "month": (months.indexOf(month) + 1).toString(),
        "year": year,
      };

      try {
        const record = await PB.collection('budgets').create(data);
      } catch (error) {
        console.error(error);
      }

      onClose();
    }

    // Function to handle item selection
    function handleSelect(event) {
      const value = event.target.value;
      console.log(value);
      if (value === "Other") {
        switchToCategory();
      }
    }

    // function UpdateMode() {
    //     id = data.id;
    //     category = data.category;
    //     amount = data.amount;
    //     startDate = data.startDate;
    //     endDate = data.endDate;
    //     month = data.month;
    //     year = data.year;
    // }

    // async function updateBudget() {
    //   const data = {
    //     "user": user,
    //     "category": category,
    //     "amount": parseFloat(amount),
    //     "startDate": startDate,
    //     "endDate": endDate,
    //     "month": month,
    //     "year": year,
    //   };

    //   try {
    //     const record = await pb.collection('budgets').update(id, data);
    //   } catch (error) {
    //     console.error(error);
    //   }
      
    //   onClose();
    // }

    onMount(async () => {
        PB.authStore?.loadFromCookie(document.cookie);
        user = PB.authStore?.model.id;
    });
</script>

<form class="flex flex-col gap-4" on:submit|preventDefault>
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="category">Category:</label>
            <select on:change={handleSelect} id="category" bind:value={category} required>
                {#each categoryOptions as cat}
                <option value={cat.id}>{cat.name + " (" + cat.type + ")"} </option>
                {/each}
                <option value="Other">Other</option>
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
          <input type="number" name="amount" bind:value={amount} placeholder="Amount..." required />
        </div>
        <div class="flex flex-col gap-2">
          <label for="end">End Date:</label>
          <input type="date" name="end" bind:value={endDate} required />
        </div>
        <div class="flex flex-col gap-2">
          <label for="year">Year:</label>
          <input type="number" name="year" bind:value={year} placeholder="Year..." required />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end gap-4 mt-12">
      <button type="button" on:click={handleClose}>Close</button>
      <button type="submit" on:click={submitBudget}>Submit</button>
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
        font-family: 'Iosevka', sans-serif;
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
        font-family: 'Iosevka', sans-serif;
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
        font-family: 'Iosevka', sans-serif;
        }
    form label {
        font-family: 'Iosevka', sans-serif;
        font-size: 1.2rem;
        }
</style>