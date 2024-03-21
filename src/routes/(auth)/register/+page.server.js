import { redirect } from "@sveltejs/kit";

export const load = ({ locals }) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, "/");
  }
};

export const actions = {
  register: async ({ locals, request }) => {
    const formData = await request.formData();

    const email = formData.get("email") ?? "";
    const password = formData.get("password") ?? "";
    const name = formData.get("name") ?? "";

    const data = {
      email,
      password: "",
      passwordConfirm: "",
      name,
    };

    try {
      data.password = password;
      data.passwordConfirm = password;
      const newUser = await locals.pb.collection("users").create(data);
    } catch (err) {
      console.log("Error:", err);
      return {
        error: true,
        message: err,
      };
    }

    throw redirect(303, "/login");
  },
};
