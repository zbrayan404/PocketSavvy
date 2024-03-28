<script lang="ts">
	import debug from "debug";
	import type { ActionData } from "./$types";
    import { EyeOff, Eye } from 'lucide-svelte';

	const log = debug("app:routes:register:page.svelte");

	export let form: ActionData;

	let showPassword = false;
    let showConfirm = false;
    
    let password = '';
    let confirm = '';

    let email;

	$: {if(email && form?.error) email.focus()}
	$: passError = (password?.length && confirm?.length)? (password !== confirm)? true: false : false;

</script>

<div class="body-page">
    <section class="card">
        <div class="prose">
            <h1 class="">Sign Up</h1>
        </div>
        <form
            class="flex flex-col gap-4 my-6"
            method="POST"
			action="?/register">
            {#if passError}<p class="error">Passwords do not match!</p>{/if}
            <div>
                <label for="email">Email</label>
                <input
                    autocomplete="email"
                    autocorrect="off"
                    type="email"
                    name="email"
                    placeholder="Email..."
                    required
                />
            </div>
			<div>
                <label for="name">Name</label>
                <input
                    autocomplete="name"
                    autocorrect="off"
                    type="text"
                    name="name"
                    placeholder="Name..."
                    required
                />
            </div>
            <div>
                <label for="password">Password</label>
                <div class="input-wrapper">
                    {#if !showPassword}
                        <button class="visiblity" type="button" on:click={() => showPassword = true}>
                            <EyeOff size={20} />
                        </button>
                        <input bind:value={password} autocomplete="off" type='password' id="password" name="password"  placeholder="Password..." required />
                    {:else}
                        <button class="visiblity" type="button" on:click={() => showPassword = false}>
                            <Eye size={20} />
                        </button>
                        <input bind:value={password} autocomplete="off" type='text' id="password" name="password"  placeholder="Password..." required />
                    {/if}
                </div>
            </div>
			<div>
                <label for="confirmPassword">Confirm Password</label>
                <div class="input-wrapper">
                    {#if !showConfirm}
                    
                        <button class="visiblity" type="button" on:click={() => showConfirm = true}>
                            <EyeOff size={20} />
                        </button>
                        <input bind:value={confirm} autocomplete="off" type='password' id="confirmPassword" placeholder="Confirm Password..." name="confirmPassword" required />
                        {:else}
                        <button class="visiblity" type="button" on:click={() => showConfirm = false}>
                            <Eye size={20} />
                        </button>
                        <input bind:value={confirm} autocomplete="off" type='text'  id="confirmPassword" placeholder="Confirm Password..." name="confirmPassword" required />
                    {/if}
                </div>
            </div>
            <div class="flex items-center flex-col gap-1 mt-6">
                <button disabled={passError}>Sign Up</button>
                or
                <a href="/login" class="link">Login</a>
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
        height: 700px;
		width: 100%;
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
    .card form .input-wrapper {
        position: relative;
    }
    .card form .visiblity { 		
        height: 32px;
        width: 32px;
        box-shadow: none;
        position: absolute;
        top: 6px;
        right: 6px;
        opacity: 0.33;
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
    .card form label {
		font-family: 'Iosevka', sans-serif;
		font-size: 1.2rem;
		padding-bottom: 1rem;
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

        .card form .visiblity { 		
            top: 10px;
            right: 10px;
        }
	}
</style>