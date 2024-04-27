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

  const getTransactions = async () => {
    console.log("Fetching transactions...");
    let startDate = `${params.year}-${params.month
      .toString()
      .padStart(2, "0")}-01`;
    let endDate = `${params.year}-${params.month
      .toString()
      .padStart(2, "0")}-${new Date(params.year, params.month, 0).getDate()}`;
    try {
      const records = await locals.pb.collection("transactions").getFullList({
        filter: `date > '${startDate}' && date < '${endDate}'`,
      });
      let data = records.map((record) => ({
        id: record.id,
        date: record.date,
        user: record.user,
        account: record.account,
        category: record.category,
        payee: record.payee,
        amount: record.amount,
        notes: record.notes,
        verified: record.verify,
      }));
      return data;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      return [];
    }
  };

  const getAccounts = async () => {
    console.log("Fetching accounts...");
    try {
      const records = await locals.pb.collection("accounts").getFullList();
      let data = records.map((record) => ({
        name: record.name,
        id: record.id,
      }));
      return data;
    } catch (error) {
      console.error("Error fetching accounts:", error);
      return [];
    }
  };

  // Fetch data or perform any necessary operations
  return {
    year: parseInt(params.year),
    month: parseInt(params.month),
    categories: await getCategories(),
    transactions: await getTransactions(),
    accounts: await getAccounts(),
  };
}

export const actions = {
  deleteTransaction: async ({ locals, request }) => {
    const form = await request.formData();

    const id = form.get("id") ?? "";

    await locals.pb.collection("transactions").delete(id);
  },
};
