<script>
    import ProgressBar from "./ProgressBar.svelte";

    export let data = [];
    export let type = '';
    
    let header = tableHeader(type);

    // Calculate total value for scaling
    const calculatePercentage = (current, budget) => {
      return ((current / budget) * 100).toFixed(2);
    };

    // Sort the data array by value (largest to smallest)
    let maxAmount = Math.max(...data.map(item => item.current));
    let maxDigits = maxAmount.toFixed(2).length;

    // Function to calculate dollar padding
    const dollarPadding = (amount) => {
        return maxDigits - amount.toFixed(2).length + 1;
    }; 

    function tableHeader(type){
        if (type === 'Income') {
            return ['incomes', 'earned'];
        } else if (type === 'Expense') {
            return ['expenses', 'spent'];
        } else {
            return ['savings', 'saved'];
        }
    };
    
</script>
  
<section class="section">
    <table>
        <thead>
            <tr class="overview-header">
                <th class="title-header">{header[0]}</th>
                <th class="percentage-header">PERCENTAGE</th>
                <th class="current-header">{header[1]}</th>
            </tr>
        </thead>
        <tbody>
            {#each data as { category, current, budget, color }}
            <tr class="category-overview" key={category}>
                <td class="category-title">{category}</td>
                <td class="progress-bar">
                    <div class="progress">
                        <ProgressBar data={[{ category: category, current: current, color: color }]} budgetTotal={ budget } />
                    </div>
                    <p class="percentage-text">{calculatePercentage(current, budget)}%</p>
                </td>
                <td class="current-summary">$<span style="padding-left: {dollarPadding(current) * 6}px">{current.toFixed(2)}</span></td>
            </tr>
            {/each}
        </tbody>
    </table>
</section>

<style>
    :global(:root) {
      --gray: #17253e;
      --white: #f5f7fa;
      --green: #02cd8c;
    }
    .section {
        display: block;
        width: 389px;
        min-width: 341px;
        overflow: auto;
    }
    table {
        width: 99%;
        border-collapse: separate;
        border-spacing: 0px 3.9px; /* Adjust this value to change the spacing */
        overflow: auto;
    }
    .overview-header,
    .category-overview {
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
        background-color: var(--gray);
        color: var(--white);
        border-radius: 11.42px;
        background-clip: padding-box;
        box-shadow: 1.9px 3.81px 0px var(--white);
    }
    th,
    td {
        height: 30px;
        border-top: 2px solid;
        border-bottom: 2px solid;
    }
    .overview-header, 
    .category-title {
        text-transform: uppercase;
    }
    .overview-header {
        font-size: 13px;
    }
    .category-overview {
        font-size: 10px;
    }
    .current-header,
    .current-summary {
        text-align: right; 
        white-space: nowrap; 
        padding-right: 15px; 
        min-width: 75px;
    }
    .title-header,
    .category-title {
        max-width: 98.7px;
        text-align: left;  
        padding-left: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .percentage-header,
    .progress-bar{
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 198px;
    }
    .progress {
        align-items: center;
        min-width: 100px;
        height: 13px;
    }
    .percentage-text {
        font-size: 10px;
        margin: 0;
        display: inline-block;
        width: 9ch;
        text-align: right;
        overflow: hidden;
        white-space: nowrap;
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
</style>
