import OrdersOperations from "../features/orders/OrdersOperations";
import OrdersTable from "../features/orders/OrdersTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Orders() {
  return (
    <>
      <Row>
        <Heading as="h2">Orders</Heading>
        <OrdersOperations />
      </Row>
      <OrdersTable />
    </>
  );
}

export default Orders;
