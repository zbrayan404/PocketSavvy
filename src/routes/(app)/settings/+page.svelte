<script>
    function changeAvatar() {
        console.log("This has to be made still")
    }

    function changePassword() {
        console.log("This also has to be made")
    }

    function changeAccount() {
        console.log("Guess What, Not Here Yet")
    }
</script>

<div class="body">
    <div class="main">
        <h1>Settings</h1>
        <div style="height: 45px; max-width: 389px; min-width: 341px">
        <button on:click = '{changeAccount}'>
            Change Account
        </button>
        </div>

        <div style="height: 45px; max-width: 389px; min-width: 341px">
        <button on:click='{changeAvatar}'>
            Change Avatar
        </button>
        </div>

        <div style="height: 45px; max-width: 389px; min-width: 341px">
        <button on:click= '{changePassword}'>
            Change Password
        </button>
        </div>
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