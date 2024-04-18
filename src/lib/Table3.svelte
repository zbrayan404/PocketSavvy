<script>
    import TransactionButton from './TransactionButton.svelte';

    export let transactions = [
        { id: "11111", date: "2021-01-01", user: "1111112", account: "Cash", category: "Shipping", payee: "Amazon", amount: 3500.00, notes: "Gifts", verified: true },
        { id: "11112", date: "2021-01-01", user: "1111112", account: "Cash", category: "Shipping", payee: "Amazon", amount: 560.00, notes: "", verified: true },
        { id: "11113", date: "2021-01-01", user: "1111112", account: "Cash", category: "Shipping", payee: "Amazon", amount: 180.00, notes: "", verified: false },
        { id: "11114", date: "2021-01-01", user: "1111112", account: "Cash", category: "Shipping", payee: "Amazon", amount: 12.40, notes: "", verified: true }
    ];

     // Function to calculate dollar padding
    const dollarPadding = (amount, property) => {
        let maxAmount = Math.max(...transactions.map(item => item[property]));
        let maxDigits = maxAmount.toFixed(2).length;
        return maxDigits - amount.toFixed(2).length + 1;
    };

</script>

<section class="section">
    <table>
        <thead>
            <tr class="overview-header">
                <th class="date-header">Date</th>
                <th class="account-header">Account</th>
                <th class="payee-header">Payee</th>
                <th class="amount-header">Amount</th>
                <th class="notes-header">Notes</th>
                <th class="verified-header">Verifiy</th>
                <th class="actions-header"></th>
            </tr>
        </thead>
        <tbody>
            {#each transactions as transaction}
            <tr class="transaction-overview">
                <td class="date-transaction">{transaction.date}</td>
                <td class="account-transaction">{transaction.account}</td>
                <td class="payee-transaction">{transaction.payee}</td>
                <td class="amount-transcation">$<span style="padding-left: {dollarPadding(transaction.amount, "amount") * 6}px">{transaction.amount.toFixed(2)}</span></td>
                <td class="notes-transaction">{transaction.notes}</td>
                <td class="verified-transaction">{transaction.verified ? "Yes" : "No"}</td>
                <td class="actions-transcation">
                    <span class="action">
                        <TransactionButton {transaction}></TransactionButton>
                    </span>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
</section>

<style>
    .section {
        display: block;
        width: 100%;
    }
    table {
        width: 99%;
        border-collapse: separate;
        border-spacing: 0px 3.9px; /* Adjust this value to change the spacing */
        height: 100%;
    }
    .overview-header,
    .transaction-overview {
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
        background-color: #152032;
        color: #f5f7fa;
        border-radius: 11.42px;
        background-clip: padding-box;
        box-shadow: 1.9px 3.81px 0px #f5f7fa;
        text-align: center;
    }
    th,
    td {
        height: 36px;
        border-top: 2px solid;
        border-bottom: 2px solid;
    }
    td:first-child {
        border-left: 2px solid;
        border-radius: 11.42px 0 0 11.42px;
    }
    td:last-child {
        border-right: 2px solid;
        border-radius: 0 11.42px 11.42px 0;
    }
    th:first-child {
        border-left: 2px solid;
        border-radius: 11.42px 0 0 11.42px;
    }
    th:last-child {
        border-right: 2px solid;
        border-radius: 0 11.42px 11.42px 0;
    }
    .overview-header {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
    }
    .verified-header {
        width: 100px;
    }
    .date-header {
        width: 100px;
    }
    .actions-header{
        width: 60px;
    }
    .transaction-overview {
        font-weight: 500;
        font-size: 10px;
    }
</style>