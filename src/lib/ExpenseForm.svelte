<!-- Expense Form -->

<script>
    import { currentUser, pb } from "$lib/pocketbase.js";
    import { onMount } from 'svelte';

    export let isOpen = false;
    export let onClose;
    
    let date = '';
    let amount = '';
    let category = '';

    let categoryOptions = [];

    
    async function getCategories() {
      const records = await pb.collection('categories').getFullList({
        sort: '-created',
      });

      let data = records.map(record => ({
        id: record.id,
        name: record.name
      }));

      console.log(data);

      return data;
    }

    async function submitExpense() {
      const data = {
        "user": currentUser.id,
        "category": category,
        "amount": parseFloat(amount),
        "startDate": date,
        "year": "2024"
      };
      
      const record = await pb.collection('budgets').create(data);
      
      // clear form fields
      date = '';
      amount = '';
      category = '';
      closeForm();
    }

    function closeForm() {
      onClose();
    }

    onMount(async () => {
      categoryOptions = await getCategories();
      console.log(categoryOptions);
    });
    

  </script>
  
  {#if isOpen}
    <div class="expense-form">
      <div class="expense-form-content">
        <button class="close" on:click={closeForm}>&times;</button>
        <form on:submit|preventDefault={submitExpense}>
            <div class="input-group">
                <label for="date">Date:</label>
                <input type="date" id="date" bind:value={date} required style="color: var(--black);">

                <label for="amount">Amount Spent:</label>
                <input type="number" id="amount" min="0" step="1.00" bind:value={amount} required style="color: var(--black);">

                <label for="category">Category:</label>
                <select id="category" bind:value={category} required>
                      {#each categoryOptions as cat }
                        <option value={cat.id}>{cat.name}</option>
                        
                      {/each}
                
              </select>
              </div>
            
            <!-- Submit button -->
            <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  {/if}
  
  <style>
    
    .input-group label {
        display: block; /*Make labels appear on a new line */
        margin-bottom: 5px;
    }

    .expense-form {
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

    .expense-form-content {
        background-color: var(--gray); 
        color: var(--white); 
        margin: 15% auto; 
        padding: 3.5%; 
        border-radius: 22.83px; 
        background-clip: padding-box;
        border: 2px solid;
        max-width: 600px;
        position: relative;
    }

    .close {
      position: absolute;
      top: 15px;
      right: 25px;
      color: var(--white);
    }

</style>
  