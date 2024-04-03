import { error } from "@sveltejs/kit";

export async function load({ params }) {
  error(404, "Not Found");
}
