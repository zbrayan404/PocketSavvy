import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import { User } from "lucide-svelte";

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

async function blob(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
}

export const actions = {
  updateAvatar: async ({ locals, request }) => {
    const formData = await request.formData();

    const userID = locals.pb.authStore.model.id;
    const name = formData.get("name") ?? "";
    const newAvatar = formData.get("avatar") ?? "";

    const avatarBlob = await blob(newAvatar);

    const data = new FormData();
    data.set("name", name);
    data.set("avatar", avatarBlob, name + ".svg");
    
    try {
      const newAvatar = await locals.pb.collection("users").update(userID, {"avatar":avatarBlob});
    } catch(err) {
      console.log('Error: ', err);
    }

    throw redirect(303, "/settings/avatar");
  },
};
