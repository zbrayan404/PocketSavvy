<script>
  export let items = []; 
  export let selected = null; 
  export let fix_size = null; 

  // Computed width style for the select element
  let widthStyle = "";

  // Reactive statement to update widthStyle when 'selected' changes
  $: {
    widthStyle = `width: ${selected ? (typeof selected === 'string' ? selected.length : 4) * 20 + 20 : 0}px`;
  }

  // Function to handle item selection
  function handleSelect(event) {
    const value = event.target.value;
    selected = isNaN(value) ? value : parseInt(value);
    this.blur(); 
  }

  // Function to handle focus on the select element
  function handleFocus() {
    widthStyle = `width: ${fix_size}px`; 
    this.size = 2; 
  }

  // Function to handle blur (loss of focus) on the select element
  function handleBlur() {
    widthStyle = `width: ${selected ? (typeof selected === 'string' ? selected.length : 4) * 20 + 20 : 0}px`;
    this.size = 1; 
    this.blur(); 
  }

</script>

<div class="dropdown">
  <select on:change={handleSelect} bind:value={selected} style={widthStyle} on:focus={handleFocus} on:blur={handleBlur} >
    {#each items as item}
      <option value={item} selected={selected === item}>{item}</option>
    {/each}
  </select>
</div>

<style>
  select {
    color: #f5f7fa;
    background-color: transparent;
    font-family: "Iosevka", sans-serif;
    font-size: 38px;
    text-align: center;
    height: 50px;
    transition: width 0.3s ease-in-out;
  }
</style>
