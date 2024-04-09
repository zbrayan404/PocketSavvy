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

  const getCategories = async () => {
    console.log("Fetching categories...");
    try {
      const records = await locals.pb.collection("categories").getFullList();
      let data = records.map((record) => ({
        name: record.name,
        id: record.id,
      }));
      return data;
    } catch (error) {
      console.error("Error fetching:", error);
      return [];
    }
  };

  // Fetch data or perform any necessary operations
  return {
    year: parseInt(params.year),
    month: parseInt(params.month),
    categories: await getCategories(),
    userID: locals.pb.authStore.model.id
  };
}
