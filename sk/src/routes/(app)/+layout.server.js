import { redirect } from "@sveltejs/kit";

export function load({ locals }) {
  if (!locals.pb.authStore.isValid) throw redirect(303, "/");

  return {
    name: locals.pb.authStore.model.name,
    avatar: locals.pb.files.getUrl(
      locals.pb.authStore.model,
      locals.pb.authStore.model.avatar
    ),
  };
}
