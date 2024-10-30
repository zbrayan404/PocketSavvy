<script>
  import { onMount } from "svelte";

  export let transactions;
  // export let categories;
  export let accounts;

  let hideAccount = false;
  let hideNotes = false;
  let hideVerified = false;

  // Function to calculate dollar padding
  const dollarPadding = (amount, property) => {
    let maxAmount = Math.max(...transactions.map((item) => item[property]));
    let maxDigits = maxAmount.toFixed(2).length;
    return maxDigits - amount.toFixed(2).length + 1;
  };

  const findAccountName = (id) => {
    let account = accounts.find((account) => account.id === id);
    if (!account) {
      return "No Account";
    }
    return account.name;
  };

  onMount(() => {
    function hiddenTabs() {
      if (window.innerWidth < 600) {
        hideAccount = true; // Close menu on desktop
      }
      if (window.innerWidth > 600) {
        hideAccount = false; // Close menu on desktop
      }
      if (window.innerWidth < 700) {
        hideNotes = true; // Close menu on desktop
      }
      if (window.innerWidth > 700) {
        hideNotes = false; // Close menu on desktop
      }
      if (window.innerWidth < 440) {
        hideVerified = true;
      }
      if (window.innerWidth > 440) {
        hideVerified = false;
      }
    }
    hiddenTabs();
    window.addEventListener("resize", hiddenTabs);
    return () => {
      window.removeEventListener("resize", hiddenTabs);
    };
  });
</script>

<section class="section">
  <table>
    <thead>
      <tr class="overview-header">
        <th class="date-header">Date</th>
        <th hidden={hideAccount} class="account-header">Account</th>
        <th class="payee-header">Payee</th>
        <th class="amount-header">Amount</th>
        <th hidden={hideNotes} class="notes-header">Notes</th>
        <th hidden={hideVerified} class="verified-header">Verifiy</th>
        <th class="actions-header"></th>
      </tr>
    </thead>
    <tbody>
      {#each transactions as transaction}
        <tr class="transaction-overview">
          <td class="date-transaction">{transaction.date.substring(0, 10)}</td>
          <td hidden={hideAccount} class="account-transaction"
            >{findAccountName(transaction.account)}</td
          >
          <td class="payee-transaction">{transaction.payee}</td>
          <td class="amount-transcation"
            >$<span
              style="padding-left: {dollarPadding(
                transaction.amount,
                'amount'
              ) * 6}px">{transaction.amount.toFixed(2)}</span
            ></td
          >
          <td hidden={hideNotes} class="notes-transaction"
            >{transaction.notes}</td
          >
          <td hidden={hideVerified} class="verified-transaction"
            >{transaction.verified ? "Yes" : "No"}</td
          >
          <td class="actions-transcation">
            <span class="action"> </span>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  {#if transactions.length === 0}
    <div class="none">
      <p class="none-text">No Transactions Found</p>
    </div>
  {/if}
</section>

<style>
  .section {
    display: block;
    width: 100%;
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 3.9px; /* Adjust this value to change the spacing */
    height: 100%;
  }
  .overview-header,
  .transaction-overview {
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
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
  .actions-header {
    width: 60px;
  }
  .transaction-overview {
    font-weight: 500;
    font-size: 10px;
  }
  .none {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--black);
    color: var(--white);
    opacity: 0.8;
    border-radius: 11.83px;
    height: 315px;
    margin-top: 5px;
  }
  .none .none-text {
    font-size: 30px;
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
  }
</style>
