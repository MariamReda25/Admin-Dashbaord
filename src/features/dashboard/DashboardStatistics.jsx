import GridContainer from "../../ui/GridContainer";
import StatisticsBox from "../../ui/StatisticsBox";
import Loader from "../../ui/Loader";
import useOrders from "../orders/useOrders";
import useCustomers from "../cutsomers/useCustomers";
import { formatCurrency, formatNumber } from "../../utils/helper";
import { HiDatabase, HiShoppingCart, HiUsers } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi2";

function DashboardStatistics() {
  const { count: ordersCount, orders, isLoading } = useOrders();
  const { count: customersCount } = useCustomers();

  if (isLoading) return <Loader />;

  // Compute Total sales
  const paidOrders = orders.filter((order) => order.payment_status === "paid");
  const sales = paidOrders.reduce(
    (accumelator, order) => (accumelator += order.total_cost),
    0,
  );

  // Compute Sold products
  const productsSold = orders
    .filter(
      (order) =>
        order.order_status !== "cancelled" &&
        order.payment_status !== "refunded",
    )
    .reduce(
      (accumelator, order) =>
        accumelator +
        order.products_quantity.reduce((acc, cur) => acc + cur, 0),
      0,
    );

  return (
    <GridContainer columns="repeat(auto-fit,minmax(218px,1fr)) " gap="2">
      <StatisticsBox title="orders" statistics={formatNumber(ordersCount)}>
        <HiDatabase />
      </StatisticsBox>
      
      <StatisticsBox
        title="customers"
        statistics={formatNumber(customersCount)}
      >
        <HiUsers />
      </StatisticsBox>

      <StatisticsBox title="Sales" statistics={formatCurrency(sales)}>
        <HiCurrencyDollar />
      </StatisticsBox>

      <StatisticsBox
        title="Products sold"
        statistics={formatNumber(productsSold)}
      >
        <HiShoppingCart />
      </StatisticsBox>
    </GridContainer>
  );
}

export default DashboardStatistics;
