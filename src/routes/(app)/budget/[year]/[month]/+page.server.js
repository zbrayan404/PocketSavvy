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
        type: record.type,
        color: record.color,
      }));
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error; // rethrow the error
    }
  };

  const getBudgets = async () => {
    console.log("Fetching budgets...");
    try {
      const records = await locals.pb.collection("budgetSummary").getFullList({
        filter: `Month = '${params.month}' && Year = ${parseInt(params.year)}`,
      });
      let data = records.map((record) => ({
        category: record.categoryName,
        color: record.color,
        type: record.type,
        current: record.amount,
        budget: record.budget,
        id: record.id,
      }));
      return data;
    } catch (error) {
      console.error("Error fetching budgets:", error);
      throw error; // rethrow the error
    }
  };

  try {
    // Fetch data or perform any necessary operations
    const year = parseInt(params.year);
    const month = parseInt(params.month) - 1;
    const categories = await getCategories();
    const budgets = await getBudgets();

    return {
      year,
      month,
      categories,
      budgets,
    };
  } catch (error) {
    // Handle errors here
    console.error("Error loading data:", error);
    throw error; // rethrow the error
  }
}
