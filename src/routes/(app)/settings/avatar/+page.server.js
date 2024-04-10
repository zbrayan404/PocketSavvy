import { error } from "@sveltejs/kit";

export async function load({ locals }) {

  const getAvatars = async () => {
    console.log("Fetching avatars...");
    try {
      const records = await locals.pb.collection("avatars").getFullList();
      let data = records.map((record) => ({
        url: record.url,
        id: record.id,
        name: record.name
      }));
      return data;
    } catch (error) {
      console.error("Error fetching:", error);
      return [];
    }
  };

  // Fetch data or perform any necessary operations
  return {
    avatars: await getAvatars()
  };
}
