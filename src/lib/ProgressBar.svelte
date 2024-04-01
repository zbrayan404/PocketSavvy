<script>
	import { tweened } from "svelte/motion";
	
	export let data = [];
	export let budgetTotal = null;
  
	// Calculate total value for scaling
	let total = budgetTotal !== null ? budgetTotal : calculateTotal("budget");
  
	function calculateTotal(property) {
		let total = 0;
		data.forEach((item) => {
			total += item[property];
		});
		return total;
	}
  
	// Sort the data array by value (largest to smallest)
	$: sortedData = data.slice().sort((a, b) => b.current - a.current);
  
	// Function to calculate percentage width for each segment
	const getPercentage = (value) => {
	  return (value / total) * 100 + "%";
	};

	// Tweened progress bar
	const progress = tweened(0, {
		delay: 0,
		duration: 500,
	});

	progress.set(100);
  
  </script>
  
  <div class="progress-bar">
	<div class="progress" style="width: {$progress}%">
		{#each sortedData as { category, current, color }}
			<div
			class="progress-segment"
			style="background-color: {color}; width: {getPercentage(current)};"
			role="progressbar"
			aria-valuenow={getPercentage(current)}
			aria-valuemin="0"
			aria-valuemax="100"
			aria-label={`Category: ${category}`}
			></div>
		{/each}
	</div>	
  </div>
  
  <style>
	:global(:root) {
      --gray: #17253e;
      --white: #f5f7fa;
      --green: #02cd8c;
    }
	.progress-bar {
	  display: flex;
	  overflow: hidden;
	  border-radius: 22.833px;
	  background-color: var(--white);
	  border: 2px solid var(--white);
	  height: 100%;
	  position: relative;
	  background-clip: border-box;
	}
	.progress {
	  display: flex;
	  height: 100%;
	  width: 100%;
	  position: relative;
	  background-clip: padding-box;
	}
	.progress-segment {
	  height: 100%;
	  position: relative;
	}
	.progress-segment:last-child {
	  border-radius: 0px 22.833px 22.833px 0px;
	}
  </style>
  