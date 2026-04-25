import DropdownMenu from "../../ui/DropdownMenu";
import Filter from "../../ui/Filter";
import FlexContainer from "../../ui/FlexContainer";

function CustomersOperations() {
  return (
    <FlexContainer>
      <Filter
        title="SortBy"
        param="sortBy"
        options={[
          { value: "all", name: "All" },
          { value: "customer_name-asc", name: "name-asc" },
          { value: "customer_name-des", name: "name-des" },
          { value: "total_orders-asc", name: "orders-asc" },
          { value: "total_orders-des", name: "orders-des" },
        ]}
      />
    </FlexContainer>
  );
}

export default CustomersOperations;
