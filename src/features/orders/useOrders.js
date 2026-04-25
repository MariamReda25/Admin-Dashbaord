import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router";

function useOrders() {
  const [searchParam] = useSearchParams();

  // Payment Status Filter
  const paymentParam = searchParam.get("payment");
  const paymentFilter =
    !paymentParam || paymentParam === "all" ? null : paymentParam;

  // Order Status Filter
  const orderParam = searchParam.get("order");
  const orderFilter = !orderParam || orderParam === "all" ? null : orderParam;

  // Sort
  const sortParam = searchParam.get("sortBy");
  const sortBy =
    !sortParam || sortParam === "none" ? null : sortParam.split("-");

  const { data: { data: orders, count } = {}, isPending: isLoading } = useQuery(
    {
      queryKey: ["orders", paymentFilter, orderFilter, sortBy],
      queryFn: () =>
        getOrders({
          paymentFilter,
          orderFilter,
          sortBy,
        }),
    },
  );

  return { orders, isLoading, count };
}

export default useOrders;
