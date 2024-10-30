import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {

  const getCategories = async () => {
    console.log("Fetching categories...");
    try {
      const records = await locals.pb.collection("categories").getFullList();
      let data = records.map((record) => ({
        name: record.name,
        id: record.id,
        type: record.type,
      }));
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  };

  const getTransactions = async () => {
    console.log("Fetching transactions...");
    try {
      const records = await locals.pb.collection("transactions").getFullList();
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
        type: record.type,
      }));
      return data;
    } catch (error) {
      console.error("Error fetching accounts:", error);
      return [];
    }
  };

  // Fetch data or perform any necessary operations
  return {
    categories: await getCategories(),
    transactions: await getTransactions(),
    accounts: await getAccounts(),
  };
}

