<script>
    import ProgressBar from '$lib/ProgressBar.svelte';
    import Table from '$lib/DashboardTable.svelte';
    import Table2 from '$lib/BudgetTable.svelte';
    import MonthFilter from '$lib/MonthFilter.svelte';

    let incomes = [
        { category: 'Employment', current: 3500.00, budget: 3500.00 },
        { category: 'Side Hustle', current: 560.00, budget: 1000.00 },
        { category: 'Investments', current: 180.00, budget: 300.00},
        { category: 'Other', current: 12.40, budget: 150.00}
    ];

    let category = [
        {category: 'Employment', color: 'blue'},
        {category: 'Side Hustle', color: 'green'},
        {category: 'Investments', color: 'red'},
        {category: 'Other', color: 'yellow'}
    ];

    let currentDate = new Date()
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();;
    
</script>

<div class="body">
    <MonthFilter bind:selectedMonth={month} bind:year={year}></MonthFilter>
    <div class="main">
        <h1>Dashboard: {month + 1} {year}</h1>
        <div style="height: 30px; max-width: 389px; min-width: 341px">
            <ProgressBar dataSet={incomes} categoryList={category}/> 
        </div>

        <Table dataSet={incomes} categoryList={category} header={['income', 'earned']}></Table>

        <Table2 dataSet={incomes} categoryList={category} header={['earned']}></Table2>
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
        height: 100vh;
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
    h1 {
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
        font-size: 40px;
    }
</style>



  