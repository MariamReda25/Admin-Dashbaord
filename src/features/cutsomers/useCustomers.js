import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../services/apiCustomers";
import { useSearchParams } from "react-router";
import { ITEMS_PER_PAGE } from "../../utils/configs";

function useCustomers() {
  const [searchParam] = useSearchParams();
  // Pagination
  const page = +searchParam.get("page") || 1;

  const range = {
    start: page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
    end: page * ITEMS_PER_PAGE - 1,
  };

  // Sort
  const sort = searchParam.get("sortBy");
  const sortBy = !sort || sort === "all" ? null : sort.split("-");
  
  const { data: { data: customers, count } = {}, isPending: isLoading } =
    useQuery({
      queryKey: ["customers", range, sortBy],
      queryFn: () => getCustomers({ range, sortBy }),
    });

  return { customers, isLoading, count };
}

export default useCustomers;
