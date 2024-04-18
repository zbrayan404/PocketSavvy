<script>
    import MonthFilter from '$lib/MonthFilter.svelte';
    import Table2 from '$lib/Table2.svelte';
    import Budget1 from '$lib/Budget.svelte';
    import Form from '$lib/Form.svelte';

    import ExpenseForm from '$lib/ExpenseForm.svelte';

    export let data;

    let month;
    let year;

    let incomes = [
        { category: 'Employment', current: 3500.00, budget: 3500.00, color: 'blue' },
        { category: 'Side Hustle', current: 560.00, budget: 1000.00, color: 'green' },
        { category: 'Investments', current: 180.00, budget: 300.00, color: 'red'},
        { category: 'Other', current: 12.40, budget: 150.00, color: 'yellow'}
    ];

    let category = [
        {category: 'Employment', color: 'blue', type: 'Income'},
        {category: 'Side Hustle', color: 'green', type: 'Income'},
        {category: 'Investments', color: 'red', type: 'Savings'},
        {category: 'Other', color: 'yellow', type: 'Income'}
    ];

    let categoryType = ['Income', 'Expenses', 'Savings'];
   
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

    $ : {
        month = data.month - 1;
        year = data.year;
    }

</script>

<div class="body">
    <MonthFilter bind:selectedMonth={month} bind:year={year}></MonthFilter>
    <div class="main">
        <div class="header">
            <h1>Budget</h1>
            <button on:click={openForm} class="add-expenses-button">+</button>
        </div>
        <Form {year} {month} {isOpen} onClose={closeForm} categoryOptions={data.categories} user={data.userID}></Form>
        <div class="overview">
            <div class="budget-overview"> 
                {#each categoryType as type}
                    <div class="budget">
                        <h2>{type}</h2>
                        <div class="table">
                            <div class="indent"></div>
                            <Table2 dataSet={data.budgets} header={['earned']}></Table2>
                        </div>
                    </div>
	            {/each}
            </div>
            <div class="category-overview">
                <Budget1 dataSet={incomes} categoryList={category} ></Budget1>
            </div>
        </div>
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
    h2 {
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
    }
    .add-expenses-button {
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
    }
</style>