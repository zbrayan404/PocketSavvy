<script>
    import ProgressBar from "$lib/ProgressBar.svelte";
    export let dataSet = [];
    export let categoryList = [];

    // Filter dataSet based on categoryList
    const filteredData = dataSet.filter(item => {
        return categoryList.some(category => category.category === item.category);
    });

</script>

<div class="body">
    <h1>Month Overview</h1>
    <div class="display">
        <div class="type-overview">
            <h2>Income (Earned)</h2>
            <div class="category-overview">
                {#each filteredData as { category, current, budget }}
                    <div class="category">
                        <h3>{category}:</h3>
                        <div class="progress-bar">
                            <ProgressBar dataSet={[{ category: category, current: current }]} categoryList={ categoryList } budgetTotal={ budget } />
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="type-overview">
            <h2>Expenses (Budget)</h2>
            <div class="category-overview">
                <div class="category">
                    <h3>Employment:</h3>
                    <div class="progress-bar">
                        <ProgressBar></ProgressBar>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .body {
        width: 100%;
        background-color: var(--gray);
        color: var(--white);
        border-radius: 11.83px;
        background-clip: padding-box;
        border: 2px solid;
        padding: 3.5%;
        font-family: 'Iosevka', sans-serif;
    }
    .display {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    h1 {
        letter-spacing: 0.6px;
        font-size: 22px;
        text-align: center;
    }
    h2 {
        letter-spacing: 0.6px;
        font-size: 16px;
        text-align: center;
    }
    h3 {
        letter-spacing: 0.6px;
        font-size: 13px;
    }
    .progress-bar{
        width: 100%;
        height: 16px;
    }
    .category-overview {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    .category{
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
</style>