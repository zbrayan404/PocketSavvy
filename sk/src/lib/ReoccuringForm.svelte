<script>
    import { onMount } from 'svelte';
    import { pb } from "$lib/pocketbase";

    export let onClose;
    export let transaction;
    export let categoryOptions = [];
    export let accountOptions = [];
    const PB = pb;

    let mode = "Add";

    let currentDate = new Date();

    let startDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${(currentDate.getDay() + 7).toString().padStart(2, '0')}`;
    let account;
    let category;
    let payee;
    let amount;
    let occurance;
    let payed = false;

    if (transaction) {
        mode = "Edit"
        startDate = new Date(transaction.startDate).toISOString().split('T')[0];
        account = transaction.account;
        category = transaction.category;
        payee = transaction.payee;
        amount = transaction.amount;
        occurance = transaction.occurance;
        payed = transaction.payed;
    }

    let notes;

    function handleClose() {
        onClose();
    } 

    async function updateTransaction() {
        console.log("Updating transaction");
        const data = {
            "startDate": startDate,
            "user": PB.authStore?.model.id,
            "account": account,
            "category": category,
            "payee": payee,
            "amount": amount,
            "payed": payed,
            "occurance": occurance,
            "notes": notes
        };
        console.log(data);
        try {
            await PB.collection('reoccuring').update(transaction.id, data);
            onClose();
        } catch (error) {
            console.error(error);
        }
    }

    async function addTransaction() {
        const data = {
            "startDate": startDate,
            "user": PB.authStore?.model.id,
            "account": account,
            "category": category,
            "payee": payee,
            "amount": amount,
            "payed": payed,
            "occurance": occurance,
            "notes": notes
        };
        try {
            await PB.collection('reoccuring').create(data);
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

    onMount(async () => {
        PB.authStore?.loadFromCookie(document.cookie || '');
    });

</script>

<form class="flex flex-col gap-4" on:submit|preventDefault>
    <div class="flex justify-between items-start">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="startDate">Date:</label>
          <input type="startDate" name="startDate" bind:value={startDate} required />
        </div>
        <div class="flex flex-col gap-2">
            <label for="account">Account:</label>
            <select id="account" bind:value={account} required>
                {#each accountOptions as acc}
                <option value={acc.id}>{acc.name}</option>
                {/each}
          </div>
        <div class="flex flex-col gap-2">
          <label for="category">Category:</label>
          <select id="category" bind:value={category} required>
              {#each categoryOptions as cat}
              <option value={cat.id}>{cat.name}</option>
              {/each}
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="amount">Amount:</label>
          <input type="number" name="amount" placeholder="Amount..." bind:value={amount} required />
        </div>
        <div class="flex flex-col gap-2">
            <label for="payee">Payee:</label>
            <input type="text" name="payee" placeholder="Payee..." bind:value={payee} required />
        </div>
        <div class="flex flex-col gap-2">
            <label for="occurance">Occurance:</label>
            <select name="occurance" bind:value={occurance} required>
              <option value="Yearly">Yearly</option>
              <option value="Monthly">Monthly</option>
              <option value="Bi-weekly">Bi-weekly</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>
        <div class="flex flex-col gap-2">
            <label for="payed">Payed:</label>
            <label class="switch">
                <input type="checkbox" name="payed" bind:checked={payed} required>
                <span class="slider round"></span>
            </label>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
        <label for="note">Note:</label>
        <input id="note" type="text" name="note" placeholder="Note..." bind:value={notes} />
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
    -webkit-transition: .4s;
    transition: .4s;
    }
    form .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }
    form input:checked + .slider {
    background-color: #2196F3;
    }
    form input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
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