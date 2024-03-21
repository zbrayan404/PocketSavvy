<script>
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import SelectBox from "$lib/SelectBox.svelte";

  export let selectedMonth = null;
  export let year = null;

  // Arrays for months and years 
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const years = [2014, 2015, 2016, 2017, 2018 ,2019, 2020, 2021, 2022, 2023, 2024]

  // Get current date
  let currentDate = new Date();

  // Set default values
  selectedMonth = selectedMonth !== null ? months[selectedMonth] : months[currentDate.getMonth()];
  year = year !== null ? year : currentDate.getFullYear();

  // Function to change month
  function nextMonth() {
    let newMonth = months.indexOf(selectedMonth);
    let newYear = year;
    newMonth = newMonth + 1;
    if (newMonth > 11) {
      newMonth = 0;
      newYear = newYear + 1;
    }
    if (currentDate.getFullYear() > newYear || (newYear === currentDate.getFullYear() && newMonth <= currentDate.getMonth())) {
      selectedMonth = months[newMonth];
      year = newYear;
    }
  }

  // Function to change month
  function prevMonth() {
    let newMonth = months.indexOf(selectedMonth);
    let newYear = year;
    newMonth = newMonth - 1;
    if (newMonth < 0) {
      newMonth = 11;
      newYear = newYear - 1;
    }
    selectedMonth = months[newMonth];
    year = newYear;
  }

</script>

<div class="filter">
  <button on:click={prevMonth}><ChevronLeft size="{30}" strokeWidth="{3}" /></button>
  <div class="date" >
    <SelectBox items={months} bind:selected={selectedMonth}></SelectBox>
    <SelectBox items={years} bind:selected={year}></SelectBox>
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
