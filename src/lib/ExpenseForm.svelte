<!-- Expense Form -->

<script>
    import { currentUser, pb } from "$lib/pocketbase.js";

    export let isOpen = false;
    export let onClose;
    export let categoryOptions = [];

    let category = '';
    let amount = '';
    let startDate = '';
    let endDate = '';
    let month = '';
    let year = '';

    const months = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    async function submitExpense() {
      const data = {
        "user": currentUser.id,
        "category": category,
        "amount": parseFloat(amount),
        "startDate": startDate,
        "endDate": endDate,
        "month": month,
        "year": year,
      };
      
      const record = await pb.collection('budgets').create(data);
      
      // clear form fields
      category = '';
      amount = '';
      startDate = '';
      endDate = '';
      month = '';
      year = '';
      closeForm();
    }

    function closeForm() {
      onClose();
    }   

  </script>
  
  {#if isOpen}
    <div class="expense-form">
      <div class="expense-form-content">
        <button class="close" on:click={closeForm}>&times;</button>
        <form on:submit={submitExpense}>
        
            <div class="input-group">

              <label for="category">Category:</label>
              <select id="category" bind:value={category} required>
                    {#each categoryOptions as cat }
                      <option value={cat.id}>{cat.name}</option>
                    {/each}
              </select>

              <label for="amount">Amount Spent:</label>
              <input type="number" id="amount" min="0" step="1.00" bind:value={amount} required style="color: var(--black);">

              <label for="startDate">Start Date:</label>
              <input type="date" id="startDate" bind:value={startDate} required style="color: var(--black);">

              <label for="endDate">End Date:</label>
              <input type="date" id="endDate" bind:value={endDate} required style="color: var(--black);">

              <label for="month">Month:</label>
              <select id="month" bind:value={month} required>
                {#each months as monthOption}
                  <option value={monthOption}>{monthOption}</option>
                {/each}
              </select>
  
              <label for="year">Year:</label>
              <input type="number" id="year" bind:value={year} required style="color: var(--black);">
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
  