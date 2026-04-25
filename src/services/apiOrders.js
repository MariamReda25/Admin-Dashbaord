import supabase from "./supabase";

export const getOrders = async function (options) {
  const { paymentFilter, orderFilter, sortBy } = options;

  let query = supabase.from("orders").select("*", { count: "exact" });

  if (paymentFilter) query = query.eq("payment_status", paymentFilter);

  if (orderFilter) query = query.eq("order_status", orderFilter);

  if (sortBy) {
    query = query.order(sortBy[0], { ascending: sortBy[1] === "asc" });
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }
  return { data, count };
};

export const deleteOrder = async function (id) {
  const { data, error } = await supabase.from("orders").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }
  return { data };
};

export const getOrder = async function (id) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }
  return { data };
};

export const updateOrder = async function ({ id, orderToUpdate }) {
  const { data, error } = await supabase
    .from("orders")
    .update(orderToUpdate)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }
  return { data };
};
