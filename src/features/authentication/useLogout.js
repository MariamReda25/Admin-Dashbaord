import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function useLogout() {
  const navigate = useNavigate();
  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Logout Successfully");
      navigate("/login");
    },
    onError: () => toast.error("Something went wrong"),
  });

  return { logout, isLoading };
}

export default useLogout;
