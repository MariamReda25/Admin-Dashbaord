import styled from "styled-components";
import Table from "../../ui/Table";

const Span = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  text-transform: none;
`;

function CustomerRow({ customer }) {
  const {
    customer_name: fullName,
    email,
    phone,
    shipping_address: address,
    country,
    total_orders: totalOrders,
  } = customer;

  return (
    <Table.Row>
      <Span>{fullName}</Span>
      <Span>{email}</Span>
      <Span>+{phone}</Span>
      <Span>{address}</Span>
      <Span>{country}</Span>
      <Span>{totalOrders}</Span>
    </Table.Row>
  );
}

export default CustomerRow;
