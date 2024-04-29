<script>
  import ProgressBar from "$lib/ProgressBar.svelte";
  import Table from "$lib/DashboardTable.svelte";
  import MonthFilter from "$lib/MonthFilter.svelte";

  export let data;

  let month;
  let year;

  const type = ["Income", "Expense", "Saving"];

  $: {
    month = data.month - 1;
    year = data.year;
  }

  function sortByType(type, dataset) {
    return dataset.filter((item) => item.type === type);
  }
</script>

<div class="body">
  <div class="month">
    <MonthFilter bind:selectedMonth={month} bind:year></MonthFilter>
  </div>
  <div class="main">
    <h1>Dashboard:</h1>
    <div style="height: 60px; width: 100%; min-width: 341px">
      <ProgressBar data={data.budgets} />
    </div>
    <div class="tables">
      <div class="category">
        <div style="height: 30px; max-width: width: 100%; min-width: 341px">
          <ProgressBar data={sortByType(type[0], data.budgets)} />
        </div>
        <Table data={sortByType(type[0], data.budgets)} type={type[0]}></Table>
      </div>

      <div class="category">
        <div style="height: 30px; width: 100%; min-width: 341px">
          <ProgressBar data={sortByType(type[1], data.budgets)} />
        </div>
        <Table data={sortByType(type[1], data.budgets)} type={type[1]}></Table>
      </div>

      <div class="category">
        <div style="height: 30px; width: 100%; min-width: 341px">
          <ProgressBar data={sortByType(type[2], data.budgets)} />
        </div>
        <Table data={sortByType(type[2], data.budgets)} type={type[2]}></Table>
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
    gap: 10px;
    display: flex;
    flex-direction: column;
    min-height: 72vh;
  }
  h1 {
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
    font-size: 40px;
  }
  .tables {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 341px;
    justify-content: space-between;
  }
  .month {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .tables .category {
    min-width: 341px;
    margin: 15px;
  }
  @media (max-width: 1290px) {
    .main {
      padding-left: 2.5%;
      padding-right: 2.5%;
    }
  }
  @media (max-width: 793px) {
    .tables {
      justify-content: center;
    }
    .tables .category {
      width: 480px;
    }
  }
</style>
