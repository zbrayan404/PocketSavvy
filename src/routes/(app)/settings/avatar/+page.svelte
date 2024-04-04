<script>
    let user_avatar;

    if (user_avatar) {
        console.log(user_avatar)
        console.log('${user_avatar.name}: ${user_avatar.size} bytes')
    }
    function change_avatar() {

    }
</script>

<div class="body-page">
    <section class='card'>
        <div class="prose">
            <h1>Avatar</h1>
        </div>
        <form
            class="flex flex-col gap-4 my-6"
            method="POST"
            action="?/login"
        >
            <div>
                <button onclick="">Change Avatar</button>
            </div>
    </section>
</div>

<style>
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
    }
    .card form button {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
        letter-spacing: 0.6px;
		font-family: 'Iosevka', sans-serif;
		align-items: center;
		justify-content: center;
		line-height: 1;
		color: var(--white);
		font-size: 18px;
		width: 100%;
		height: 55px;
		font-weight: bold;
		border: 2px solid;
		transition: 0.3s;
		box-shadow: 5px 5px 0px 0px var(--white);
		background-color: var(--gray);
		border-radius: 11.83px;
	}
    .card form button:hover {
		box-shadow: 0 0 black;
		color: var(--gray);
		background-color: var(--white);
	}
    .card h1 {
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
        font-size: 2rem;
		margin: 0;
		text-align: center;
    }
    .card form {
		display: flex;
		flex-direction: column;
		font-family: 'Iosevka', sans-serif;
	}
    @media (max-width: 1250px) {
		.card {
			width: 60%;
		}
	}
</style>