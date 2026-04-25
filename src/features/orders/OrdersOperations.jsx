import FlexContainer from "../../ui/FlexContainer";
import DropdownMenu from "../../ui/DropdownMenu";
import Filter from "../../ui/Filter";
function OrdersOperations() {
  return (
    <FlexContainer gap="0.4">
      <Filter
        param="order"
        options={[
          { value: "all", name: "All" },
          { value: "pending", name: "Pending" },
          { value: "processing", name: "Processing" },
          { value: "shipped", name: "Shipped" },
          { value: "delivered", name: "Delivered" },
          { value: "cancelled", name: "Cancelled" },
        ]}
        title="Order Status:"
      />
      <Filter
        param="payment"
        options={[
          { value: "all", name: "All" },
          { value: "paid", name: "Paid" },
          { value: "unpaid", name: "Unpaid" },
          { value: "refunded", name: "Refunded" },
        ]}
        title="Payment Status:"
      />
      <Filter
        param="sortBy"
        options={[
          { value: "none", name: "None" },
          { value: "total_cost-asc", name: "Price-Asc" },
          { value: "total_cost-des", name: "Price-Des" },
          { value: "created_at-asc", name: "Date-Asc" },
          { value: "created_at-des", name: "Date-Des" },
        ]}
        title="Sort By:"
      />
    </FlexContainer>
  );
}

export default OrdersOperations;
