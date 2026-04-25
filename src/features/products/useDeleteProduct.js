import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
    mutationFn: deleteProductApi,
    onSuccess: () => {
      toast.success("Product is deleted permanently");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: () => toast.error("Product could not deleted permanently"),
  });

  return { deleteProduct, isDeleting };
}

export default useDeleteProduct;
