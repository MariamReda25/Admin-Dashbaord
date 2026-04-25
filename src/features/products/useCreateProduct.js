import { useMutation } from "@tanstack/react-query";
import { createProduct as createProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

function useCreateProduct() {
  const { mutate, isPending } = useMutation({
    mutationFn: createProductApi,
    onSuccess: () => toast.success("Product is successfully created"),
    onError: () => toast.error("Product could not be created"),
  });
  return { mutate, isPending };
}

export default useCreateProduct;
