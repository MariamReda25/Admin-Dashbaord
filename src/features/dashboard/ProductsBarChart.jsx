import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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

function ProductsBarChart({ orders }) {
  const filteredOrders = orders.filter(
    (order) =>
      order.order_statues !== "cancelled" &&
      order.payment_status !== "refunded",
  );

  const productsSold = [
    ...new Set(filteredOrders.map((order) => order.products).flat()),
  ];
  
  const products = filteredOrders.map((order) => {
    return { products: order.products, quantity: order.products_quantity };
  });

  const data = productsSold.map((product) => {
    const value = products.reduce((acc, cur) => {
      if (cur.products.includes(product)) {
        acc += cur.quantity[cur.products.indexOf(product)];
      }
      return acc;
    }, 0);
    return {
      name: product,
      value,
    };
  });

  return (
    <GridBox>
      <Title> Products Sold</Title>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={300}
        style={{
          backgroundColor: "var(--color-grey-0)",
          borderRadius: "var(--border-radius-md)",
          padding: "0.8rem",
        }}
      >
        <BarChart data={data} width="100%" height="100%" responsive>
          <XAxis dataKey="name" style={{ fontSize: "1.2rem" }} />
          <YAxis dataKey="value" />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d" label={(entry) => entry.name}>
            <LabelList
              dataKey="value"
              position={"top"}
              style={{ fontSize: "1.2rem" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </GridBox>
  );
}

export default ProductsBarChart;
