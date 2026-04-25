import { useMutation } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdateUser() {
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => toast.success("User data is updated successfully"),
    onError: (error) => toast.error(error.message),
  });

  return { updateUser, isUpdating };
}

export default useUpdateUser;
