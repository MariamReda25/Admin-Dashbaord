import DropdownMenu from "../../ui/DropdownMenu";
import Filter from "../../ui/Filter";
import FlexContainer from "../../ui/FlexContainer";

function ProductsOperations() {
  return (
    <FlexContainer gap="0.4">
      <Filter
        title="Filter By:"
        param="status"
        options={[
          { value: "all", name: "All" },
          { value: "in_stock", name: "In Stock" },
          { value: "out_of_stock", name: "Out of Stock" },
          { value: "limited_stock", name: "Limited Stock" },
          { value: "pre_order", name: "Pre-Order" },
          { value: "backorder", name: "Back-Order" },
          { value: "discontinued", name: "Discontinued" },
        ]}
      />
      <Filter
        title="Sort By:"
        param="sortBy"
        options={[
          { value: "all", name: "All" },
          { value: "price-asc", name: "Price asc" },
          { value: "price-des", name: "Price des" },
          {
            value: "discount-asc",
            name: "Discount asc",
          },
          {
            value: "discount-des",
            name: "Discount des",
          },
        ]}
      />
    </FlexContainer>
  );
}

export default ProductsOperations;
