<script>
    import ProgressBar from '$lib/ProgressBar.svelte';
    import Table from '$lib/Table.svelte';
    import MonthFilter from '$lib/MonthFilter.svelte';

    export let data;

    let month;
    let year;

    const type = ['Income', 'Expense', 'Saving']

    $ : {
        month = data.month - 1;
        year = data.year;
    }

    function sortByType(type, dataset) {
        return dataset.filter(item => item.type === type);
    }
    
</script>

<div class="body">
    <div class="month">
        <MonthFilter bind:selectedMonth={month} bind:year={year}></MonthFilter>
    </div>
    <div class="main">
        <h1>Dashboard:</h1>
        {#if data.budgets.length === 0}
            <p class="no-data">No Data Available</p>
        {:else}
            <div style="height: 30px; max-width: 389px; min-width: 341px">
                <ProgressBar data={data.budgets}/> 
            </div>
            <div class="tables">
                <Table data={sortByType(type[0], data.budgets)} type={type[0]}></Table>
                <Table data={sortByType(type[1], data.budgets)} type={type[1]}></Table>
                <Table data={sortByType(type[2], data.budgets)} type={type[2]}></Table>
            </div>
        {/if}
        
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
        height: 800px;
        width: 100%;
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
    .tables {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        min-width: 341px;
        justify-content: space-between
    }
    .month{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .no-data {
        font-size: 50px;
        font-family: 'Iosevka', sans-serif;
        color: var(--green);
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 110px;
    }

</style>