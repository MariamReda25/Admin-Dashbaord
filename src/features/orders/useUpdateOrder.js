import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder as updateOrderApi } from "../../services/apiOrders";
import toast from "react-hot-toast";

function useUpdateOrder() {
  const queryClient = useQueryClient();
  const { mutate: updateOrder, isPending: isUpdating } = useMutation({
    mutationFn: updateOrderApi,
    onSuccess: () => {
      toast.success("Order is updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["order"],
      });
    },
    onError: () => toast.error("Order could not be updated "),
  });

  return { updateOrder, isUpdating };
}

export default useUpdateOrder;
