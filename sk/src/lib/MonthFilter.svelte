<script>
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import SelectBox from "$lib/SelectBox.svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  export let selectedMonth;
  export let year;

  // Arrays for months and years 
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let years = [2014, 2015, 2016, 2017, 2018 ,2019, 2020, 2021, 2022, 2023, 2024];

  let month = months[selectedMonth];

  // Get current date
  let currentDate = new Date();

  // Function to change month
  function nextMonth() {
    let newMonth = (selectedMonth + 1) % 12;
    let newYear = year;
    if (newMonth === 0) {
      newYear++;
    }
    selectedMonth = newMonth;
    year = newYear;
    updateSearchParams((selectedMonth + 1).toString(), year.toString());
  }

  // Function to change month
  function prevMonth() {
    let newMonth = (selectedMonth - 1 + 12) % 12;
    let newYear = year;
    if (newMonth === 11) {
      newYear--;
    }
    selectedMonth = newMonth;
    year = newYear;
    updateSearchParams((selectedMonth + 1).toString(), year.toString());
  }

  $ : {
    if (!years.includes(year)) {
      if (year < years[0]) {
        let newYear = [year];
        years = newYear.concat(years);
      } else {
        years.push(year);
      }
    } 
  } 

  $ : {
    month = months[selectedMonth]
  }

  const updateSearchParams = (newMonth, newYear) => {
    const url = new URL($page.url.pathname, location.href);
    let monthParams = parseInt(newMonth) < 10 ? "0" + newMonth : "" + newMonth;
    let yearParams = newYear.toString();

    // Update the search parameters in the URL
    const parts = url.pathname.split('/');
    const yearIndex = parts.findIndex(item => item.length === 4);
    const monthIndex = parts.findIndex(item => item.length === 2);
    
    if (yearIndex !== -1 && monthIndex !== -1) {
      // If year and month params already exist in the URL, update them
      parts.splice(yearIndex, 2, yearParams, monthParams);
    } else {
      // If year and month params don't exist, add them
      parts.push(yearParams, monthParams);
    }

    url.pathname = parts.join('/');
    goto(url.pathname);
  };

  function handleUpdateMonth(event) {
    selectedMonth = months.indexOf(event.detail.select);
    updateSearchParams((selectedMonth + 1).toString(), year.toString());
  }   

  function handleUpdateYear(event) {
    updateSearchParams((selectedMonth + 1).toString(), (event.detail.select).toString());
  }  

</script>

<div class="filter">
  <button on:click={prevMonth}><ChevronLeft size="{30}" strokeWidth="{3}" /></button>
  <div class="date" >
    <SelectBox on:update={handleUpdateMonth} items={months} bind:selected={month}></SelectBox>
    <SelectBox  on:update={handleUpdateYear} items={years} bind:selected={year}></SelectBox>
  </div>
  <button on:click={nextMonth}><ChevronRight size="{30}" strokeWidth="{3}" /></button>
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
      width: 250px;
    }
  }

</style>
