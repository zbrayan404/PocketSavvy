<script>
    import Form from "$lib/AccountForm.svelte";


    function add_account() {
        Form.mode = 'Add'
    }
    function update_account() {
        Form.mode = 'Update'
    }


</script>

<div class="body-page">
    <section class='card'>
        <div class="prose">
            <h1>Accounts</h1>
        </div>
        <div>
            <button on:click={add_account}></button>
            <button on:click={update_account}></button>
        </div>
        <!-- <Form> 
        </Form> -->
    </section>
</div>


<style lang='ts'>
    :global(:root) {
      --gray: #17253e;
      --white: #f5f7fa;
      --green: #02cd8c;
    }
    .body-page {
        position: relative;
		display: flex;
		width: 100%;
        height: 90vh;
		justify-content: center;
		align-items: center;
    }
    .card {
        background-color: var(--gray);
        color: var(--white);
        border-radius: 11.83px;
        border: 2px solid;
        width: 35%;
		position: relative;
		padding: 5%;
        padding-top: 2.5rem;
        padding-bottom: 0;
        min-width: 300px;
        height: 350px;
    }

    .card h1 {
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
        font-size: 2rem;
		margin: 0;
		text-align: center;
    }
    @media (max-width: 1250px) {
		.card {
			width: 60%;
		}
	}
</style>