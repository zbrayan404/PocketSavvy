<script>
    import { Plus } from "lucide-svelte";
    import MonthFilter from '$lib/MonthFilter.svelte';
    import Table3 from '$lib/Table3.svelte';
    import AddTransactions from '$lib/AddTransactions.svelte';
    import {onMount,onDestroy} from 'svelte';
    import { pb } from "$lib/pocketbase";

    export let data;

    let month;
    let year;

    function sortByType(type, data) {
        return data.filter(item => item.type === type);
    }

    $ : {
        month = data.month - 1;
        year = data.year;
    }

    let isOpen = false;

    function openForm() {
        isOpen = true;
    }

    function closeForm(){
        isOpen = false;
    }

    // REALTIME POCKETBASE
	const PB = pb;

    onMount(async () => {
        PB.authStore?.loadFromCookie(document.cookie || '');
        PB.collection("transactions").subscribe('*', async ({action, record}) => {
            if (action === 'create') {
                let newRecord = {
                    id: record.id,
                    date: record.date,
                    user: record.user,
                    account: record.account,
                    category: record.category,
                    payee: record.payee,
                    amount: record.amount,
                    notes: record.notes,
                    verified: record.verify,
                };
                data.transactions = [...data.transactions, newRecord];
            }
            if (action === 'delete') {
                data.transactions = data.transactions.filter(item => item.id !== record.id);
            }
            if (action === 'update') {
                let updatedRecord = {
                    id: record.id,
                    date: record.date,
                    user: record.user,
                    account: record.account,
                    category: record.category,
                    payee: record.payee,
                    amount: record.amount,
                    notes: record.notes,
                    verified: record.verify,
                };
                data.transactions = data.transactions.map(item => item.id === record.id ? updatedRecord : item);
            }
        });
    });

    onDestroy(()=>{
        PB.collection("transactions").unsubscribe('*');
    })

</script>

<div class="body">
    <div class="month">
        <MonthFilter bind:selectedMonth={month} bind:year={year}></MonthFilter>
    </div>
    <div class="main">
        <div class="header">
            <h1>Transactions</h1>
            <button on:click={openForm} class="add"><Plus size={30} /></button>
        </div>
        <AddTransactions {isOpen} categoryOptions={data.categories} onClose={closeForm}></AddTransactions>
        <Table3 transactions={data.transactions} categories={data.categories} accounts={data.accounts}></Table3>
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
        height: 84vh;
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
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .month {
        width: 100%;
        height: 90px;
    }
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
</style>