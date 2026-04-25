import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router";
import { ITEMS_PER_PAGE } from "../../utils/configs";

function useProducts() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");
  const sortValue = searchParams.get("sortBy");
  const currentPage = searchParams.get("page") || 1;
  const filter =
    filterValue === "all" || !filterValue
      ? null
      : {
          field: "status",
          value: filterValue,
          method: "eq",
        };
  const sortBy =
    sortValue === "all" || !sortValue
      ? null
      : {
          field: sortValue.split("-").at(0),
          ascending: sortValue.split("-").at(1) === `asc`,
        };

  const page = {
    start: currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
    end: currentPage * ITEMS_PER_PAGE - 1,
  };
  const { isLoading, data: { data: products, count } = {} } = useQuery({
    queryKey: ["products", filter, sortBy, page],
    queryFn: () => getProducts({ filter, sortBy, page }),
  });

  return { products, isLoading, count };
}

export default useProducts;
