<script>
  import BudgetAction from "$lib/BudgetAction.svelte";

  export let dataSet = [];
  export let type = "";
  export let categories = [];

  let header;
  let budgets;

  // Function to calculate difference between budget and current
  const calculateDifference = (budget, current) => {
    return budget - current;
  };

  // Function to calculate dollar padding
  const dollarPadding = (amount, property) => {
    let maxAmount = Math.max(...budgets.map((item) => item[property]));
    let maxDigits = maxAmount.toFixed(2).length;
    return maxDigits - amount.toFixed(2).length + 1;
  };

  // Function to calculate the table header based on type
  function tableHeader(type) {
    if (type === "Income") {
      return ["incomes", "earned"];
    } else if (type === "Expense") {
      return ["expenses", "spent"];
    } else {
      return ["savings", "saved"];
    }
  }

  // Reactive declaration to update budgets whenever dataSet or type changes
  $: {
    header = tableHeader(type);
    budgets = dataSet.map((item) => ({
      category: item.category,
      categoryID: item.categoryID,
      current: item.current,
      budget: item.budget,
      color: item.color,
      difference: calculateDifference(item.budget, item.current),
      startDate: item.startDate,
      endDate: item.endDate,
      month: item.month,
      year: item.year,
      id: item.id,
    }));
  }
</script>

<section class="section">
  <table>
    <thead>
      <tr class="overview-header">
        <th class="title-header">Category</th>
        <th class="budget-header">Budget</th>
        <th class="current-header">{header[1]}</th>
        <th class="differ-header">Difference</th>
        <th class="actions-header"></th>
      </tr>
    </thead>
    <tbody>
      {#each budgets as budget}
        <tr class="category-overview" key={budget.category}>
          <td class="category-title">
            <div class="category">
              <div
                class="category-indicator"
                style="background-color: {budget.color}"
              ></div>
              <span class="title">{budget.category}</span>
            </div>
          </td>
          <td class="budget-summary"
            >$<span
              style="padding-left: {dollarPadding(budget.budget, 'budget') *
                6}px">{budget.budget.toFixed(2)}</span
            ></td
          >
          <td class="current-summary"
            >$<span
              style="padding-left: {dollarPadding(budget.current, 'current') *
                6}px">{budget.current.toFixed(2)}</span
            ></td
          >
          <td class="differ-summary"
            >$<span
              style="padding-left: {dollarPadding(
                budget.difference,
                'difference'
              ) * 6}px">{budget.difference.toFixed(2)}</span
            ></td
          >
          <td class="actions">
            <span class="action">
              <BudgetAction {categories} {budget}></BudgetAction>
            </span>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  {#if budgets.length === 0}
    <div class="none">
      <p>No Budget ({type}) Found</p>
    </div>
  {/if}
</section>

<style>
  :global(:root) {
    --gray: #17253e;
    --white: #f5f7fa;
    --green: #02cd8c;
  }
  .section {
    display: block;
    min-width: 341px;
    width: 100%;
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 3.9px; /* Adjust this value to change the spacing */
    height: 100%;
  }
  .overview-header,
  .category-overview {
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
    background-color: #152032;
    color: var(--white);
    border-radius: 11.42px;
    background-clip: padding-box;
    box-shadow: 1.9px 3.81px 0px var(--white);
  }
  .overview-header {
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
  }
  .category-overview {
    font-weight: 500;
    font-size: 12px;
  }
  .budget-header,
  .current-header,
  .differ-header,
  .budget-summary,
  .current-summary,
  .differ-summary {
    text-align: center;
  }
  th,
  td {
    height: 35px;
    border-top: 2px solid;
    border-bottom: 2px solid;
  }
  td:first-child {
    border-left: 2px solid;
    border-radius: 11.42px 0 0 11.42px;
    padding-left: 10px;
  }
  td:last-child {
    border-right: 2px solid;
    border-radius: 0 11.42px 11.42px 0;
    padding-right: 5px;
  }
  th:first-child {
    border-left: 2px solid;
    border-radius: 11.42px 0 0 11.42px;
    padding-left: 10px;
  }
  th:last-child {
    border-right: 2px solid;
    border-radius: 0 11.42px 11.42px 0;
    min-width: 35px;
  }
  .title-header,
  .category-title {
    min-width: 75px;
    max-width: 100px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .differ-header {
    min-width: 60.41px;
    text-overflow: ellipsis;
  }
  .title {
    min-width: 75px;
    max-width: 230px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 1px;
  }
  .category-indicator {
    width: 15px;
    height: 15px;
    color: #f5f7fa;
    border-radius: 11.83px;
    background-clip: padding-box;
    border: 2px solid;
    flex-shrink: 0;
  }
  .category {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .action {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .none {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--black);
    color: var(--white);
    opacity: 0.8;
    border-radius: 11.83px;
    height: 50px;
    margin-top: 5px;
  }
  @media (max-width: 764px) {
    .overview-header {
      font-size: 13px;
    }
    .category-overview {
      font-size: 10px;
    }
  }
</style>
