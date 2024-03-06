<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Check if the current path is the root path
      if (window.location.pathname === '/') {
        // Redirect to the dashboard
        window.location.pathname = '/dashboard';
      }
    });
  </script>
  