<script>
    import { Cat, Plus } from "lucide-svelte";
    import AddReoccuring from '$lib/AddReoccuring.svelte';

    //export let data;

    // let categoryType = ['Income', 'Expenses', 'Savings'];
   
    let isOpen = false;

    function filterType(data, type) {
        return data.filter(item => item.type === type);
    }

    function openForm() {
        isOpen = true;
    }

    function closeForm(){
        isOpen = false;
    }

</script>

<div class="body">
    <div class="main">
        <div class="header">
            <h1>Reocurring</h1>
            <button on:click={openForm} class="add"><Plus size={30} /></button>
        </div>
        <AddReoccuring {isOpen} onClose={closeForm}></AddReoccuring>
        <!-- <ExpenseForm {isOpen} onClose={closeForm}></ExpenseForm> -->
        <!-- <div class="overview">
            <div class="budget-overview"> 
                {#each categoryType as type}
                    <div class="budget">
                        <h2>{type}</h2>
                        <div class="table">
                            <div class="indent"></div>
                            <-- Table
                        </div>
                    </div>
	            {/each}
            </div>
            <div class="category-overview">
            </div>
        </div> -->
    </div>
</div>

<style>
    :global(:root) {
      --gray: #17253e;
      --white: #f5f7fa;
      --green: #02cd8c;
    }
    .body {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        flex-direction: column;
    }
    .main {
        width: 99%;
        height: 100%;
        background-color: var(--gray);
        color: var(--white);
        border-radius: 22.83px;
        background-clip: padding-box;
        border: 2px solid;
        padding: 3.5%;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    h1 {
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
        font-size: 40px;
    }
    /* h2 {
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
        font-size: 30px;
    }
    .overview {
        display: flex;
        justify-content: space-evenly;
    }
    .indent {
        width: 10%;
    }
    .table {
        width: 100%;
        display: flex;
    }
    .budget-overview {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .category-overview {
        width: 35%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 1.5%;
    }
    @media (max-width: 860px) {
        .category-overview {
            display: none;
        }
    } */
    .add {
        height: 40px;
        width: 40px;
        background-color: var(--gray);
        color: var(--white);
        border-radius: 11.83px;
        background-clip: padding-box;
        box-shadow: 1.9px 3.81px 0px var(--white);
        border: 2px solid;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Iosevka', sans-serif;
        font-size: 30px;
    }
    .add:hover {
		box-shadow: 0 0 black;
		color: var(--gray);
		background-color: var(--white);
    }
    /* .add-expenses-button {
        height: 40px;
        width: 40px;
        background-color: var(--gray);
        color: var(--white);
        border-radius: 11.83px;
        background-clip: padding-box;
        box-shadow: 1.9px 3.81px 0px var(--white);
        border: 2px solid;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Iosevka', sans-serif;
        font-size: 30px;
    }
    .add-expenses-button:hover {
		box-shadow: 0 0 black;
		color: var(--gray);
		background-color: var(--white);
    } */
</style>