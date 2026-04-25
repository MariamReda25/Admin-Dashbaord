import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrder as deleteOrderApi } from "../../services/apiOrders";
import toast from "react-hot-toast";

function useDeleteOrder() {
  const queryClient = useQueryClient();
  
  const { mutate: deleteOrder, isPending: isDeleting } = useMutation({
    mutationFn: deleteOrderApi,
    onSuccess: () => {
      toast.success("Order is deleted permenantely");
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
    onError: () => toast.error("Order could not deleted "),
  });

  return { deleteOrder, isDeleting };
}

export default useDeleteOrder;
