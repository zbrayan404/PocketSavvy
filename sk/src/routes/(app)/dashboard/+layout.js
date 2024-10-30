export async function load({ params }) {
  function NavActive() {
    if (params.month == undefined) {
      return "Yearly";
    } else {
      return "Monthly";
    }
  }
  // Fetch data or perform any necessary operations
  return {
    active: NavActive(),
  };
}
