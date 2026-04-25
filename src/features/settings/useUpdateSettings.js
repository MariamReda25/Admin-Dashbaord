import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings as updateSettingsApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSettings, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess: () => {
      toast.success("Settings is updated sucessfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: () => toast.error("Settings could not be updated"),
  });

  return { updateSettings, isUpdating };
}

export default useUpdateSettings;
