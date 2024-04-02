<script lang="ts">
	import debug from "debug";
	import type { ActionData } from "./$types";
    import { EyeOff, Eye } from 'lucide-svelte';

	const log = debug("app:routes:login:page.svelte");

	export let form: ActionData;

    let showPassword = false;
    let showNewPassword = false;
    let showConfirmPassword = false;
    let password = '';
    let newPassword = '';
    let confirmPassword = '';

</script>

<div class="body-page">
    <section class="card">
        <div class="prose">
            <h1 class="">Change Password</h1>
        </div>
        <form
            class="flex flex-col gap-4 my-6"
            method="POST"
            action="?/login"
        >
            {#if form?.error}<p class="error">Invalid credentials!</p>{/if}
            <div>
                <label for="old password">Old Password</label>
                <input
                    autocomplete="old password"
                    autocorrect="off"
                    type="text"
                    name="old password"
                    placeholder="Old Password..."
                    required
                    value={form?.oldPassword ?? ""}
                />
            </div>
            <div>
                <label for="newPassword">New Password</label>
                <div class="input-wrapper">
                    {#if !showNewPassword}
                        <button class="visiblity" type="button" on:click={() => showNewPassword = true}>
                            <EyeOff size={20} />
                        </button>
                        <input bind:value={newPassword} autocomplete="off" type='newPassword' id="newPassword" name="newPassword"  placeholder="New Password..." required />
                    {:else}
                        <button class="visiblity" type="button" on:click={() => showNewPassword = false}>
                            <Eye size={20} />
                        </button>
                        <input bind:value={newPassword} autocomplete="off" type='text' id="newPassword" name="newPassword"  placeholder="New Password..." required />
                    {/if}
                </div>
            </div>
            <div>
                <label for="confirmPassword">Confirm Password</label>
                <div class="input-wrapper">
                    {#if !showConfirmPassword}
                        <button class="visiblity" type="button" on:click={() => showConfirmPassword = true}>
                            <EyeOff size={20} />
                        </button>
                        <input bind:value={confirmPassword} autocomplete="off" type='confirmPassword' id="confirmPassword" name="confirmPassword"  placeholder="Confirm Password..." required />
                    {:else}
                        <button class="visiblity" type="button" on:click={() => showConfirmPassword = false}>
                            <Eye size={20} />
                        </button>
                        <input bind:value={confirmPassword} autocomplete="off" type='text' id="confirmPassword" name="confirmPassword"  placeholder="Confirm Password..." required />
                    {/if}
                </div>
            </div>
            <div class="flex items-center flex-col gap-1 mt-6">
                <button>Confirm Change</button>
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
	}
</style>