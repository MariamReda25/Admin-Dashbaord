import styled from "styled-components";
import { GridBox } from "../../ui/GridContainer";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { NEW_SALES_YEAR, OLD_SALES_YEAR } from "../../utils/configs";

const Title = styled.span`
  display: flex;
  justify-content: center;
  width: 70%;
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  text-transform: uppercase;
  font-weight: 500;
`;
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function SalesRevenuChart({ orders }) {
  const paidOrders = orders.filter((order) => order.payment_status === "paid");

  const data = MONTHS.map((month) => {
    const newSales = paidOrders.reduce((sales, order) => {
      if (
        MONTHS[new Date(order.created_at).getMonth()] === month &&
        new Date(order.created_at).getFullYear() === NEW_SALES_YEAR
      )
        sales += order.total_cost;
      return sales;
    }, 0);

    const oldSales = paidOrders.reduce((sales, order) => {
      if (
        MONTHS[new Date(order.created_at).getMonth()] === month &&
        new Date(order.created_at).getFullYear() === OLD_SALES_YEAR
      )
        sales += order.total_cost;
      return sales;
    }, 0);
    return {
      month,
      newSales,
      oldSales,
    };
  });

  return (
    <GridBox column="-1/1" align="start">
      <Title>Sales Revenu</Title>
      <LineChart
        style={{
          width: "100%",
          maxHeight: "70%",
          maxWidth: "70%",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        <Line type="monotone" dataKey="newSales" stroke="#52ac75" />
        <Line type="monotone" dataKey="oldSales" stroke="#8782ce" />
      </LineChart>
    </GridBox>
  );
}

export default SalesRevenuChart;
