<script lang="ts">
	import debug from "debug";
	import type { ActionData } from "./$types";

	const log = debug("app:routes:login:page.svelte");

	export let form: ActionData;

	$: log("form:", form);
</script>

<div class="body-page">
    <section class="card">
        <div class="prose">
            <h1 class="">Login</h1>
        </div>
        <form
            class="flex flex-col gap-6 my-6"
            method="POST"
            action="?/login"
        >
            <div>
                <label for="email">Email</label>
                <input
                    autocomplete="email"
                    autocorrect="off"
                    type="email"
                    name="email"
                    placeholder="Email..."
                    required
                    value={form?.email ?? ""}
                />
            </div>
            <div>
                <label for="password">Password</label>
                <input
                    autocomplete="off"
                    type="password"
                    name="password"
                    placeholder="Password..."
                    required
                />
            </div>
            <div class="flex items-center flex-col gap-1 mt-6">
                <button>Log In</button>
                or
                <a href="/register" class="link">Sign Up</a>
            </div>
        </form>
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
    .card form input {
        background-color: var(--gray);
        color: var(--white);
        border-radius: 11.83px;
		padding: 0.5rem;
		background-clip: padding-box;
        border: 2px solid;
        letter-spacing: 0.6px;
		font-family: 'Iosevka', sans-serif;
        font-size: 1.0rem;
        width: 100%;
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
		height: 65px;
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
    .card form label {
		font-family: 'Iosevka', sans-serif;
		font-size: 1.2rem;
		padding-bottom: 1rem;
		padding-top: 25px;
	}
    .card a {
        color: var(--green);
        letter-spacing: 0.6px;
        font-family: 'Iosevka', sans-serif;
        font-size: 1.2rem;
    }
    @media (max-width: 1250px) {
		.card {
			width: 60%;
		}

		.card form input {
			font-size: 1.25rem;
		}
	}
</style>