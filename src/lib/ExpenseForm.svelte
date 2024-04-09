<!-- Expense Form -->

<script>
    import { pb } from "$lib/pocketbase.js";

    export let isOpen = false;
    export let onClose;
    export let categoryOptions = [];
    export let currentUser = "";

    let category = '';
    let amount = '';
    let startDate = '';
    let endDate = '';
    let month = '';
    let year = '';

    const months = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    async function submitExpense() {
      console.log("Inside submit expense function");
      const data = {
        "user": currentUser,
        "category": category,
        "amount": parseFloat(amount),
        "startDate": startDate,
        "endDate": endDate,
        "month": month,
        "year": parseInt(year),
      };
    
      console.log(data);

      try {
        const record = await pb.collection('budgets').create(data);
        console.log("Sucessful submission", record)
        
        // clear form fields
        category = '';
        amount = '';
        startDate = '';
        endDate = '';
        month = '';
        year = '';
        closeForm();

      } catch (error) {
        console.error("Error fetching:", error);
      }
        
    }

    function closeForm() {
      onClose();
    }   

  </script>
  
  {#if isOpen}
    <div class="expense-form">
      <div class="expense-form-content">
        <button class="close" on:click={closeForm}>&times;</button>
        <form>
        
            <div class="input-group">

              <label for="category">Category:</label>
              <select id="category" bind:value={category} required>
                    {#each categoryOptions as cat }
                      <option class="dropdown" value={cat.id}>{cat.name}</option>
                    {/each}
                    <option class="dropdown" value="other">Other</option>
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
                  <option class="dropdown" value={monthOption}>{monthOption}</option>
                {/each}
              </select>
  
              <label for="year">Year:</label>
              <input type="number" id="year" bind:value={year} required>
            </div>
            
            <!-- Submit button -->
            <button type="submit" on:click={submitExpense}>Submit</button>
        </form>
      </div>
    </div>
  {/if}
  
  <style>
    :global(:root) {
      --gray: #17253e;
      --white: #f5f7fa;
      --green: #02cd8c;
    }
    
    .input-group label {
        display: block; /*Make labels appear on a new line */
        margin-bottom: 5px;
        font-family: 'Iosevka', sans-serif;
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

    .expense-form-content select {
        color: var(--gray);
        background-color: var(--white); 
        border-radius: 5px; 
        padding: 8px;
        margin-bottom: 10px; 
        font-weight: bold;
    }

    .close {
      position: absolute;
      top: 15px;
      right: 25px;
      color: var(--white);
    }

</style>
  