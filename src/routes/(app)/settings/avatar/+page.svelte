<script>

    export let data;

    function change_avatar(event) {
        user_avatar = event.detail.text
        console.log('Avatar Name: ', user_avatar.name)

    }
    
    function gestures(number) {
        const guestures = ["hand", "handPhone", "ok", "okLongArm", "point", "pointLongArm" ,"waveLongArm" ,"waveLongArms" ,"waveOkLongArms","wavePointLongArms"]
        return guestures[number - 1];
    }

    function formatVariant(number) {
    // Add leading zero for numbers < 10
    return number < 10 ? "0" + number : number;
    }

    function randomAvatar() {
        let avatar = `https://api.dicebear.com/8.x/notionists/svg?backgroundColor=02cd8c`;
        
        let beard = "&beard=variant" + formatVariant(Math.floor(Math.random() * 12 + 1)); // 01 - 12
        let beardProbability = "&beardProbability=" + Math.floor(Math.random() * 101); // 0 - 100
        
        let body = "&body=variant" + formatVariant(Math.floor(Math.random() * 25 + 1)); // 01 - 25
        let brows = "&brows=variant" + formatVariant(Math.floor(Math.random() * 13 + 1)); // 01 - 13
        let eyes = "&eyes=variant" + formatVariant(Math.floor(Math.random() * 5 + 1)); // 01 - 05
        let gesture = "&gesture=" + gestures(Math.floor(Math.random() * 10 + 1)); // 1 - 10 
        let gestureProbability = "&gestureProbability=" + Math.floor(Math.random() * 101); // 0 - 100
        
        let glasses = "&glasses=variant" + formatVariant(Math.floor(Math.random() * 11 + 1)); // 01 - 11
        let glassesProbability = "&glassesProbability=" + Math.floor(Math.random() * 101); // 0 - 100
        
        let hair = "&hair=variant" + formatVariant(Math.floor(Math.random() * 63 + 1)); // 01 - 63
        let lips = "&lips=variant" + formatVariant(Math.floor(Math.random() * 30 + 1)); // 01 - 30
        let nose = "&nose=variant" + formatVariant(Math.floor(Math.random() * 20 + 1)); // 01 - 20
        
        avatar += beard + beardProbability + body + brows + eyes + gesture + gestureProbability + glasses + glassesProbability + hair + lips + nose + "&scale=111";
        
        console.log(avatar);

        return avatar;
    }

    let avatarUrl = randomAvatar();

    function changeAvatar() {
        avatarUrl = randomAvatar();
    }

</script>

<div class="body-page">
    <section class='card'>
        <div class="prose">
            <h1>Avatar</h1>
        </div>
            <div>
                <div class="avatar-grid">
                    <img src="{avatarUrl}" alt="avatar">
                </div>
                <button on:click={changeAvatar}>Change Avatar</button>
                <button >Submit</button>
            </div>
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
    .card button {
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
    .card button:hover {
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
    .card .avatar {
        width: 64px;
        height: 64px;
    }
    .card .avatar-grid {
        width: 64px;
        height: 64px;
    }
    @media (max-width: 1250px) {
		.card {
			width: 60%;
		}
	}
</style>