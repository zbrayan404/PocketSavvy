<script>
    import { MoreHorizontal } from 'lucide-svelte';

    export let dataSet = [];
    export let header = [];

    // Calculate difference between budget and current
    const calculateDifference = (budget, current) => {
        return budget - current;
    };

    // Map the data to include difference
    dataSet = dataSet.map(item => {
        return {
            category: item.category,
            current: item.current,
            budget: item.budget,
            color: item.color,
            difference: calculateDifference(item.budget, item.current)
        };
    });

    // Function to calculate dollar padding
    const dollarPadding = (amount, property) => {
        let maxAmount = Math.max(...dataSet.map(item => item[property]));
        let maxDigits = maxAmount.toFixed(2).length;
        return maxDigits - amount.toFixed(2).length + 1;
    };

</script>

<section class="section">
    <table>
        <thead>
            <tr class="overview-header">
                <th class="title-header">Category</th>
                <th class="budget-header">Budget</th>
                <th class="current-header">{header[0]}</th>
                <th class="differ-header">Difference</th>
                <th class="actions-header"></th>
            </tr>
        </thead>
        <tbody>
            {#each dataSet as { category, current, budget, color, difference }}
            <tr class="category-overview" key={category}>
                <td class="category-title">
                    <div class="category">
                        <div class="category-indicator" style="background-color: {color}"></div>
                        <span class="title">{category}</span>
                    </div>
                </td>
                <td class="budget-summary">$<span style="padding-left: {dollarPadding(budget, "budget") * 6}px">{budget.toFixed(2)}</span></td>
                <td class="current-summary">$<span style="padding-left: {dollarPadding(current, "current") * 6}px">{current.toFixed(2)}</span></td>
                <td class="differ-summary">$<span style="padding-left: {dollarPadding(difference, "difference") * 6}px">{difference.toFixed(2)}</span></td>
                <td class="actions">
                    <span class="action">
                        <button class="edit-button"><MoreHorizontal /></button>
                    </span>
                </td>
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
        min-width: 341px;
        width: 100%;
        overflow: auto;
    }
    table {
        width: 99%;
        border-collapse: separate;
        border-spacing: 0px 3.9px; /* Adjust this value to change the spacing */
        height: 100%;
        overflow: auto;
    }
    .overview-header,
    .category-overview {
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
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
    .differ-summary{
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
    .category{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .action{
        display: flex;
        justify-content: center;
        align-items: center;
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