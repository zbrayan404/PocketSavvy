import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

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
      return [];
    }
  };

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
      console.error("Error fetching categories:", error);
      return [];
    }
  };

  // Fetch data or perform any necessary operations
  return {
    year: parseInt(params.year),
    month: parseInt(params.month),
    budgets: await getBudgets(),
    categories: await getCategories(),
  };
}

export const actions = {
  deleteTransaction: async ({ locals, request }) => {
    const form = await request.formData();

    const id = form.get("id") ?? "";

    throw redirect(303, "/dashboard");
  },
};
