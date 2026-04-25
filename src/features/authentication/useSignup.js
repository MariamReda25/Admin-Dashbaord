import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signup, isPending: isCreating } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => toast.success("User is created successfully"),
    onError: (error) => toast.error(error.message),
  });

  return { signup, isCreating };
}

export default useSignup;
