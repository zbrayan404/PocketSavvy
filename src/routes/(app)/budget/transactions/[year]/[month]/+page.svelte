<script>
    import MonthFilter from '$lib/MonthFilter.svelte';
    import Table2 from '$lib/Table2.svelte';
    import Budget1 from '$lib/Budget.svelte';

    export let data;

    let month;
    let year;

    let categoryType = ['Income', 'Expense', 'Saving'];
   
    function filterType(data, type) {
        return data.filter(item => item.type === type);
    }

    $ : {
        month = data.month - 1;
        year = data.year;
    }

</script>

<div class="body">
    <div class="month">
        <MonthFilter bind:selectedMonth={month} bind:year={year}></MonthFilter>
    </div>
    <div class="main">
        <h1>Transactions</h1>
        
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
        height: 100vh;
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
    .month {
        width: 100%;
        height: 90px;
    }
</style>