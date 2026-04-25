import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiOrders";
import { useParams } from "react-router";

function useGetOrder() {
  const params = useParams();
  const id = !params.id ? null : params.id;

  const { data: { data: order } = {}, isPending: isLoading } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrder(id),
  });

  return { order, isLoading };
}

export default useGetOrder;
