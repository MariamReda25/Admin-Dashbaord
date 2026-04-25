import styled from "styled-components";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helper";
import { HiOutlineX } from "react-icons/hi";
import Container from "../../ui/FlexContainer";

const Span = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-600);

  svg {
    width: 1.2rem;
    heigh: 1.2rem;
    color: var(--color-green-700);
  }
`;
const Quantity = styled.span`
  color: var(--color-green-700);
  font-size: 1.2rem;
`;

function OrderDetailsRow({ item }) {
  const { product, quantity, cost } = item;
  return (
    <Table.Row>
      <Span>
        {product}
        <Container>
          <HiOutlineX />
          <Quantity>{quantity}</Quantity>
        </Container>
      </Span>
      <Span>{formatCurrency(cost)}</Span>
      <Span>{formatCurrency(cost * quantity)}</Span>
    </Table.Row>
  );
}

export default OrderDetailsRow;
