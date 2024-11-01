<script>
  import { Plus } from "lucide-svelte";
  import { pb } from "$lib/pocketbase";
  import MonthFilter from "$lib/MonthFilter.svelte";
  import Table from "$lib/BudgetTable.svelte";
  import Form from "$lib/Form.svelte";
  import { onMount, onDestroy } from "svelte";

  export let data;

  let types = ["Income", "Expense", "Saving"];

  let isOpen = false;

  function sortByType(data, type) {
    return data.filter((item) => item.type === type);
  }

  function openForm() {
    isOpen = true;
  }

  function closeForm() {
    isOpen = false;
  }

  // REALTIME POCKETBASE
  const PB = pb;

  onMount(async () => {
    PB.authStore?.loadFromCookie(document.cookie);
    PB.collection("categories").subscribe("*", async ({ action, record }) => {
      if (action === "create") {
        let newRecord = {
          name: record.name,
          id: record.id,
          type: record.type,
          color: record.color,
        };
        data.categories = [...data.categories, newRecord];
      }
      if (action === "delete") {
        data.categories = data.categories.filter(
          (item) => item.id !== record.id
        );
      }
      if (action == "update") {
        let updateRecord = {
          name: record.name,
          id: record.id,
          type: record.type,
          color: record.color,
        };
        data.categories = data.categories.map((item) =>
          item.id === record.id ? updateRecord : item
        );
      }
    });
    PB.collection("budgets").subscribe("*", async ({ action, record }) => {
      if (action === "create") {
        const getRecord = await PB.collection("budgetSummary").getOne(
          record.id
        );
        let newRecord = {
          category: getRecord.categoryName,
          categoryID: getRecord.category,
          color: getRecord.color,
          type: getRecord.type,
          current: getRecord.amount,
          budget: getRecord.budget,
          startDate: getRecord.startDate,
          endDate: getRecord.endDate,
          month: getRecord.Month,
          year: getRecord.Year,
          id: getRecord.id,
        };
        data.budgets = [...data.budgets, newRecord];
      }
      if (action === "delete") {
        data.budgets = data.budgets.filter((item) => item.id !== record.id);
      }
      if (action == "update") {
        const getRecord = await PB.collection("budgetSummary").getOne(
          record.id
        );
        let updateRecord = {
          category: getRecord.categoryName,
          color: getRecord.color,
          type: getRecord.type,
          current: getRecord.amount,
          budget: getRecord.budget,
          id: getRecord.id,
        };
        data.budgets = data.budgets.map((item) =>
          item.id === record.id ? updateRecord : item
        );
      }
    });
  });

  onDestroy(() => {
    PB.collection("budgets").unsubscribe("*");
    PB.collection("categories").unsubscribe("*");
  });
</script>

<div class="body">
  <MonthFilter bind:selectedMonth={data.month} bind:year={data.year}
  ></MonthFilter>
  <div class="main">
    <div class="header">
      <h1>Budget</h1>
      <button on:click={openForm} class="add"><Plus size={30} /></button>
    </div>
    <Form
      year={data.year}
      month={data.month}
      {isOpen}
      onClose={closeForm}
      categoryOptions={data.categories}
    ></Form>
    <div class="overview">
      <div class="budget-overview">
        {#each types as type}
          <div class="budget">
            <h2>{type}</h2>
            <div class="table">
              <div class="indent"></div>
              <div class="data">
                <Table
                  dataSet={sortByType(data.budgets, type)}
                  {type}
                  categories={data.categories}
                ></Table>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="category-overview"></div>
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
    min-height: 500px;
    background-color: var(--gray);
    color: var(--white);
    border-radius: 22.83px;
    background-clip: padding-box;
    border: 2px solid;
    padding: 3.5%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  h1 {
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
    font-size: 40px;
  }
  h2 {
    letter-spacing: 0.6px;
    font-family: "Iosevka", sans-serif;
    font-size: 30px;
  }
  .overview {
    display: flex;
    justify-content: space-evenly;
  }
  .indent {
    width: 10%;
  }
  .table {
    width: 100%;
    display: flex;
  }
  .data {
    width: 100%;
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
    padding: 1.5%;
  }
  @media (max-width: 860px) {
    .category-overview {
      display: none;
    }
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
    font-family: "Iosevka", sans-serif;
    font-size: 30px;
  }
  .add:hover {
    box-shadow: 0 0 black;
    color: var(--gray);
    background-color: var(--white);
  }
</style>
