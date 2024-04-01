import { redirect } from "@sveltejs/kit";

export function load({}) {
  let currentDate = new Date();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  month = parseInt(month) < 10 ? "0" + month : "" + month;
  redirect(303, "/dashboard/" + year + "/" + month);
}
