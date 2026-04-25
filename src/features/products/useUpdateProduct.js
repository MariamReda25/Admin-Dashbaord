import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct as updateProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

function useUpdateProduct() {
  const queryClient = useQueryClient();

  const { mutate: updateProduct, isPending: isUpdating } = useMutation({
    mutationFn: updateProductApi,
    onSuccess: () => {
      toast.success("Product is updated successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => toast.error("Product could not updated successfully"),
  });

  return { updateProduct, isUpdating };
}

export default useUpdateProduct;
