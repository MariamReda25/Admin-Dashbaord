import {
  Cell,
  Label,
  LabelList,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { GridBox } from "../../ui/GridContainer";
import styled from "styled-components";

const Title = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  text-transform: uppercase;
  font-weight: 500;
`;

function OrdersStatusChart({ orders }) {
  const COLORS = ["#8782ce", "#ffe46bff", "#6eb5db", "#ed6868", "#82ca9d"];

  const ordersStatus = [
    "processing",
    "pending",
    "shipped",
    "cancelled",
    "delivered",
  ];
  const data = ordersStatus.map((status, i) => {
    const value = orders.filter(
      (order) => order.order_status === status,
    ).length;
    return {
      name: status,
      value,
      color: COLORS.at(i),
      percentage: `${((value / orders.length) * 100).toFixed(1)}%`,
    };
  });

  return (
    <GridBox>
      <Title>Orders status</Title>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={300}
        style={{
          backgroundColor: "var(--color-grey-0)",
          borderRadius: "var(--border-radius-md)",
        }}
        responsive
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            label={(entry) => entry.name}
            name="name"
            cursor={"pointer"}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
            <Tooltip contentStyle={{ padding: "0.8rem" }} />
            <LabelList dataKey="percentage" position="middle" fill="white" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </GridBox>
  );
}

export default OrdersStatusChart;
