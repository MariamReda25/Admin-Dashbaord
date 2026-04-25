import supabase from "./supabase";

export const getCustomers = async function (options) {
  const {
    range: { start, end },
    sortBy,
  } = options;

  let query = supabase
    .from("customers")
    .select("*", { count: "exact" })
    .range(start, end);

  if (sortBy) query.order(sortBy[0], { ascending: sortBy[1] === "asc" });

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Customers could not be loaded");
  }

  return { data, count };
};
