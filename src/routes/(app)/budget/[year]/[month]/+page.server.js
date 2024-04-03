import { error } from "@sveltejs/kit";

export async function load({ locals, params }) {
  if (!isMonth(params.month) || !isYear(params.year)) {
    error(404, "Not Found");
  }
  function isMonth(input) {
    const monthRegex = /^(0[1-9]|1[0-2])$/;
    return monthRegex.test(input);
  }
  function isYear(input) {
    const regex = /^\d{4}$/;
    return regex.test(input);
  }

  // Fetch data or perform any necessary operations
  return {
    year: parseInt(params.year),
    month: parseInt(params.month),
  };
}
