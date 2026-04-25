import styled from "styled-components";
import RecentOrders from "./RecentOrders";
import GridContainer, { GridBox } from "../../ui/GridContainer";
import { Link } from "react-router";

const Title = styled.span`
  display: flex;
  justify-content: start;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  text-transform: uppercase;
  font-weight: 500;
`;
const StyledLink = styled(Link)`
  color: var(--color-green-700);
  text-decoration: underline;
`;
function DashboardWidgets() {
  return (
    <GridContainer columns="repeat(auto-fit,minmax(240px,1fr))" gap="0.8">
      <GridBox column="1/-1">
        <Title>recent orders</Title>
      </GridBox>
      <RecentOrders />
      <GridBox justify="end" column="1/-1">
        <StyledLink to="/orders">Show all</StyledLink>
      </GridBox>
    </GridContainer>
  );
}

export default DashboardWidgets;
