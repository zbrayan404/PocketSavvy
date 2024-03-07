<script>
    import MonthFilter from '$lib/MonthFilter.svelte';
    import Table2 from '$lib/Table2.svelte';

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

</script>

<div class="body">
    <MonthFilter></MonthFilter>
    <div class="main">
        <h1>Budget</h1>
        <div class="overview">
            <div class="budget-overview"> 
                {#each Array(3) as _, index (index)}
                    <div class="budget">
                        <h2>Income</h2>
                        <div class="table">
                            <Table2 dataSet={incomes} categoryList={category} header={['earned']}></Table2>
                        </div>
                    </div>
	            {/each}
            </div>
            <div class="category-overview">
                
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
    .table {
        width: 100%;
        padding-left: 5%;
        transition: padding-left 0.4s ease;
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
    }

    @media (max-width: 868px) {
        .table {
            padding-left: 2%;
        }
    }

    @media (max-width: 576px) {
        .table {
            padding-left: 0;
        }
    }
</style>