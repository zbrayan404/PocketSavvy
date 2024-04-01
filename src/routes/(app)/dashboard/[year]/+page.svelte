<script>
    import ProgressBar from '$lib/ProgressBar.svelte';
    import Table from '$lib/Table.svelte';
    import YearFilter from '$lib/YearFilter.svelte';

    export let data;

    let year;

    $ : {
        year = data.year;
    }
    
</script>

<div class="body">
    <YearFilter  bind:year={year} ></YearFilter>
    <div class="main">
        <h1>Dashboard:</h1>
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
        height: 100vh;
        width: 100vw;
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
    }
    h1 {
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
        font-size: 40px;
    }
</style>