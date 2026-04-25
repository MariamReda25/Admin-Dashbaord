import GridContainer, { GridBox } from "../../ui/GridContainer";
import Loader from "../../ui/Loader";
import useOrders from "../orders/useOrders";
import OrdersStatusChart from "./OrdersStatusChart";
import ProductsBarChart from "./ProductsBarChart";
import SalesRevenuChart from "./SalesRevenuChart";

function DashboardCharts() {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <Loader />;
  return (
    <GridContainer columns="repeat(auto-fit,minmax(380px,1fr))" gap="4">
      <ProductsBarChart orders={orders} />
      <OrdersStatusChart orders={orders} />
      <SalesRevenuChart orders={orders} />
    </GridContainer>
  );
}

export default DashboardCharts;
