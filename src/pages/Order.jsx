import OrderDetails from "../features/orders/OrderDetails";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Order() {
  return (
    <>
      <Row>
        <Heading as="h2">Order Details</Heading>
      </Row>
      <OrderDetails />
    </>
  );
}

export default Order;
