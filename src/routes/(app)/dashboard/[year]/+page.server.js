import { error } from "@sveltejs/kit";

export async function load({ locals, params }) {
  if (!isYear(params.year)) {
    error(404, "Not found");
  }

  function isYear(input) {
    const regex = /^\d{4}$/;
    return regex.test(input);
  }

  const getBudgets = async () => {
    console.log("Fetching budgets...");
    try {
      const records = await locals.pb.collection("budgetSummary").getFullList({
        filter: `Year = ${parseInt(params.year)}`,
      });
      let data = records.map((record) => ({
        category: record.categoryName,
        color: record.color,
        type: record.type,
        current: record.amount,
        budget: record.budget,
        id: record.id,
      }));
      console.log("Processed data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching budgets:", error);
      return [];
    }
  };

  return {
    year: parseInt(params.year),
    budgets: getBudgets(),
  };
}
