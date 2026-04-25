import styled from "styled-components";
import FlexContainer from "../../ui/FlexContainer";
import useOrders from "../orders/useOrders";
import Loader from "../../ui/Loader";
import { formatCurrency, formatDate } from "../../utils/helper";

const MainContainer = styled(FlexContainer)`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  padding: 1.4rem;
  border-radius: var(--border-radius-sm);
  flex: 1;
`;

const ID = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-500);
  text-transform: uppercase;
`;

const StyledDate = styled.span`
  font-size: 1.2rem;
  color: var(--color-grey-400);
`;

const Product = styled.span`
  font-size: 1.6rem;
  color: var(--color-grey-700);
  text-transform: capitalize;
`;

const Cost = styled.span`
  color: var(--color-green-700);
`;

function RecentOrders() {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <Loader />;
  const recentOrders = orders
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 4);

  return (
    <>
      {recentOrders.map((order) => (
        <MainContainer direction="column" gap="0.8" key={order.id}>
          <FlexContainer
            justify="space-between"
            align="center"
            style={{
              flex: 1,
            }}
          >
            <ID>#ord{order.id}</ID>
            <StyledDate>{formatDate(order.created_at)}</StyledDate>
          </FlexContainer>
          <FlexContainer gap="0.8">
            {order.products.map((product) => (
              <Product key={product}>{product}</Product>
            ))}
          </FlexContainer>
          <FlexContainer justify="flex-end">
            <Cost>{formatCurrency(order.total_cost)}</Cost>
          </FlexContainer>
        </MainContainer>
      ))}
    </>
  );
}

export default RecentOrders;
