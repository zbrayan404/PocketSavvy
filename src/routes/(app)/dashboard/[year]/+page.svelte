<script>
  import ProgressBar from "$lib/ProgressBar.svelte";
  import Table from "$lib/DashboardTable.svelte";
  import YearFilter from "$lib/YearFilter.svelte";

  export let data;

  let year;
  let cumulativeData = [];

  $: {
    year = data.year;
    cumulativeData = generateCumulativeData(data.budgets);
  }

  const type = ["Income", "Expense", "Saving"];

  function sortByType(type, dataset) {
    return dataset.filter((item) => item.type === type);
  }

  function generateCumulativeData(budgets) {
    let cumulative = [];
    budgets.forEach((transaction) => {
      const existingCategoryIndex = cumulative.findIndex(
        (item) => item.categoryID === transaction.categoryID
      );

      if (existingCategoryIndex !== -1) {
        cumulative[existingCategoryIndex].current += transaction.current;
        cumulative[existingCategoryIndex].budget += transaction.budget;
      } else {
        cumulative.push({
          categoryID: transaction.categoryID,
          category: transaction.category,
          color: transaction.color,
          type: transaction.type,
          current: transaction.current,
          budget: transaction.budget,
        });
      }
    });
    return cumulative;
  }
</script>

<div class="body">
  <div class="year">
    <YearFilter bind:year></YearFilter>
  </div>
  <div class="main">
    <h1>Dashboard:</h1>
    <div style="height: 60px; width: 100%; min-width: 341px">
      <ProgressBar data={cumulativeData} />
    </div>
    <div class="tables">
      <div class="category">
        <div style="height: 30px; max-width: width: 100%; min-width: 341px">
          <ProgressBar data={sortByType(type[0], cumulativeData)} />
        </div>
        <Table data={sortByType(type[0], cumulativeData)} type={type[0]}
        ></Table>
      </div>

      <div class="category">
        <div style="height: 30px; width: 100%; min-width: 341px">
          <ProgressBar data={sortByType(type[1], cumulativeData)} />
        </div>
        <Table data={sortByType(type[1], cumulativeData)} type={type[1]}
        ></Table>
      </div>

      <div class="category">
        <div style="height: 30px; width: 100%; min-width: 341px">
          <ProgressBar data={sortByType(type[2], cumulativeData)} />
        </div>
        <Table data={sortByType(type[2], cumulativeData)} type={type[2]}
        ></Table>
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
  .year {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>
