<script>
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import SelectBox from "$lib/SelectBox.svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  export let year;

  // Arrays for months and years
  let years = [
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
  ];

  // Function to change month
  function nextYear() {
    year = year + 1;
    updateSearchParams(year.toString());
  }

  // Function to change month
  function prevYear() {
    year = year - 1;
    updateSearchParams(year.toString());
  }

  $: {
    if (!years.includes(year)) {
      if (year < years[0]) {
        let newYear = [year];
        years = newYear.concat(years);
      } else {
        years.push(year);
      }
    }
  }

  const updateSearchParams = (newYear) => {
    const url = new URL($page.url.pathname, location.href);
    let yearParams = newYear.toString();

    // Update the search parameters in the URL
    const parts = url.pathname.split("/");
    const yearIndex = parts.findIndex((item) => item.length === 4);

    if (yearIndex !== -1) {
      // If year and month params already exist in the URL, update them
      parts.splice(yearIndex, 2, yearParams);
    } else {
      // If year and month params don't exist, add them
      parts.push(yearParams);
    }

    url.pathname = parts.join("/");
    goto(url.pathname);
  };

  function handleUpdateYear(event) {
    updateSearchParams(event.detail.select.toString());
  }
</script>

<div class="filter">
  <button on:click={prevYear}><ChevronLeft size={30} strokeWidth={3} /></button>
  <div class="date">
    <SelectBox on:update={handleUpdateYear} items={years} bind:selected={year}
    ></SelectBox>
  </div>
  <button on:click={nextYear}><ChevronRight size={30} strokeWidth={3} /></button
  >
</div>

<style>
  :global(:root) {
    --gray: #17253e;
    --white: #f5f7fa;
    --green: #02cd8c;
    --black: #152032;
  }
  .filter {
    display: flex;
    width: 100%;
    height: 90px;
    background-color: var(--black);
    color: var(--white);
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  button {
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
  }
  button:hover {
    box-shadow: 0 0 black;
    color: var(--gray);
    background-color: var(--white);
  }

  .date {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 320px;
  }
  @media (max-width: 814px) {
    .date {
      width: 150px;
    }
  }
</style>
