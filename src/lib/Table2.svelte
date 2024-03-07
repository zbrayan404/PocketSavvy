<script>
    import { MoreHorizontal } from 'lucide-svelte';

    export let dataSet = [];
    export let categoryList = [];
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
            difference: calculateDifference(item.budget, item.current)
        };
    });

    // Function to calculate dollar padding
    const dollarPadding = (amount, property) => {
        let maxAmount = Math.max(...dataSet.map(item => item[property]));
        let maxDigits = maxAmount.toFixed(2).length;
        return maxDigits - amount.toFixed(2).length + 1;
    };

    // Function to get color for category: Ongoing
    const getColorForCategory = (categoryName) => {
        const foundCategory = categoryList.find(item => item.category === categoryName);
        return foundCategory ? foundCategory.color : 'black';
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
            {#each dataSet as { category, current, budget, difference}}
            <tr class="category-overview" key={category}>
                <td class="category-title">
                    {category}
                </td>
                <td class="budget-summary">$<span style="padding-left: {dollarPadding(budget, "budget") * 6}px">{budget.toFixed(2)}</span></td>
                <td class="current-summary">$<span style="padding-left: {dollarPadding(current, "current") * 6}px">{current.toFixed(2)}</span></td>
                <td class="differ-summary">$<span style="padding-left: {dollarPadding(difference, "difference") * 6}px">{difference.toFixed(2)}</span></td>
                <td class="actions">
                    <button class="edit-button"><MoreHorizontal /></button>
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
    .title-header,
    .category-title {
        min-width: 80px;
        text-align: left; 
        white-space: nowrap; 
        padding-left: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .differ-header {
        min-width: 75.41px;
        text-overflow: ellipsis;
    }

    @media (max-width: 764px) {
        .overview-header {
            font-size: 13px;
            text-transform: uppercase;
        }
        .category-overview {
            font-size: 10px;
        }
    }

</style>