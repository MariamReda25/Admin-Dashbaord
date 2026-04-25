import styled from "styled-components";
import Heading from "../../ui/Heading";
import Loader from "../../ui/Loader";
import Row from "../../ui/Row";
import Table from "../../ui/Table";
import { formatCurrency, formatDate } from "../../utils/helper";
import OrderDetailsRow from "./OrderDetailsRow";
import useGetOrder from "./useGetOrder";
import GridContainer, { GridBox } from "../../ui/GridContainer";
import DropdownMenu from "../../ui/DropdownMenu";
import FlexContainer from "../../ui/FlexContainer";
import useUpdateOrder from "./useUpdateOrder";

const ContactBox = styled(GridBox)`
  background-color: var(--color-grey-0);
  padding: 1.2rem;
`;

const Title = styled.span`
  color: var(--color-grey-800);
  font-size: 1.4rem;
`;

const Span = styled.span`
  color: var(--color-grey-700);
`;

function OrderDetails() {
  const { order, isLoading } = useGetOrder();
  const { updateOrder, isUpdating } = useUpdateOrder();

  if (isLoading) return <Loader />;

  const {
    id,
    created_at: createdAt,
    customer_name: customer,
    products,
    shipping_address: address,
    order_cost: orderCost,
    order_status: orderStatus,
    products_quantity: productsQuantity,
    ship_mode: shipMode,
    shipping_cost: shippingCost,
    total_cost: total,
    payment_status: paymentStatus,
    products_cost: productsCost,
    customer_phone: phone,
    customer_email: email,
    shipping_country: country,
  } = order[0];

  const orderData = products.map((product, i) => {
    return { product, quantity: productsQuantity[i], cost: productsCost[i] };
  });

  function handlePayment(e) {
    let orderToUpdate = {
      id,
      orderToUpdate: { payment_status: e.target.value },
    };

    if (e.target.value === "refunded") {
      orderToUpdate = {
        id,
        orderToUpdate: {
          payment_status: e.target.value,
          order_status: "cancelled",
        },
      };
    }
    updateOrder(orderToUpdate);
  }
  function handleOrder(e) {
    let orderToUpdate = {
      id,
      orderToUpdate: { order_status: e.target.value },
    };

    if (e.target.value === "cancelled" && paymentStatus === "paid") {
      orderToUpdate = {
        id,
        orderToUpdate: {
          payment_status: "refunded",
          order_status: e.target.value,
        },
      };
    }

    updateOrder(orderToUpdate);
  }
  return (
    <GridContainer columns="1fr 1fr" justify="space-between">
      <GridBox column="1/2" row="1/2">
        <FlexContainer justify="space-between" align="center">
          <Heading as="h4">
            Order #{id} was placed on {formatDate(createdAt)} and is currently{" "}
            {orderStatus}
          </Heading>
          <DropdownMenu
            disabled={isUpdating}
            value={orderStatus}
            options={[
              { value: "pending", name: "Pendig" },
              { value: "processing", name: "Processing" },
              { value: "shipped", name: "Shipped" },
              { value: "delivered", name: "Delivered" },
              { value: "cancelled", name: "Cancelled" },
            ]}
            onChange={(e) => handleOrder(e)}
          />
        </FlexContainer>
        <Table columns="1fr 1fr 1fr">
          <Table.Header>
            <span>Product</span>
            <span>Unit Cost</span>
            <span> Cost</span>
          </Table.Header>
          <Table.Body
            data={orderData}
            render={(order) => <OrderDetailsRow item={order} key={order.id} />}
          />
        </Table>
      </GridBox>

      <GridBox column="1/2" row="2/3">
        <FlexContainer justify="space-between">
          <Heading as="h2">Order Cost</Heading>
          <DropdownMenu
            disabled={isUpdating}
            value={paymentStatus}
            options={[
              { value: "paid", name: "Paid" },
              { value: "unpaid", name: "Unpaid" },
              {
                value: "refunded",
                name: "Refund",
                disabled: paymentStatus === "unpaid",
              },
            ]}
            onChange={(e) => handlePayment(e)}
          />
        </FlexContainer>

        <Row>
          <Title>Products Cost</Title>
          <Span>{formatCurrency(orderCost)}</Span>
        </Row>
        <Row>
          <Title>Shipping Cost ({shipMode})</Title>
          <Span>{formatCurrency(shippingCost)}</Span>
        </Row>
        <Row>
          <Title>Total Cost </Title>
          <Span>{formatCurrency(total)}</Span>
        </Row>
      </GridBox>

      <ContactBox w="70%" justify="center" column="2/4" row="1/2">
        <Heading as="h2">Contact Information</Heading>
        <Row>
          <Title>Customer</Title>
          <Span>{customer}</Span>
        </Row>
        <Row>
          <Title>Phone </Title>
          <Span>+{phone}</Span>
        </Row>
        <Row>
          <Title>Email </Title>
          <Span>{email}</Span>
        </Row>
        <Row>
          <Title>Shipping Address</Title>
          <Span>{address}</Span>
        </Row>
        <Row>
          <Title>Country </Title>
          <Span>{country}</Span>
        </Row>
      </ContactBox>
    </GridContainer>
  );
}

export default OrderDetails;
