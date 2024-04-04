<script>
    function add_account() {
        console.log('This button is at least clicking')
    }
    function change_account() {
        console.log('Change Account')
    }
</script>

<div class="body">
    <div class="main">
        <h1>Accounts</h1>
        <div>
            <button on:click={add_account}>Add Account</button>
            <button on:click={change_account}>Change Account</button>
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
    button {
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
		width: 30%;
		height: 55px;
		font-weight: bold;
		border: 2px solid;
		transition: 0.3s;
		box-shadow: 5px 5px 0px 0px var(--white);
		background-color: var(--gray);
		border-radius: 11.83px;
	}
    button:hover {
		box-shadow: 0 0 black;
		color: var(--gray);
		background-color: var(--white);
	}
 </style>