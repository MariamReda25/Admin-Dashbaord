import { useSearchParams } from "react-router";
import Loader from "../../ui/Loader";
import { Menus } from "../../ui/Menu";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import OrderRow from "./OrderRow";
import useOrders from "./useOrders";
import { ITEMS_PER_PAGE } from "../../utils/configs";

function OrdersTable() {
  const { orders, isLoading, count } = useOrders();
  const [searchParam] = useSearchParams();

  // Pagination
  const currentPage = +searchParam.get("page") || 1;
  const page = {
    start: (currentPage - 1) * ITEMS_PER_PAGE,
    end: currentPage * ITEMS_PER_PAGE,
  };

  if (isLoading) return <Loader />;
  return (
    <Menus>
      <Table columns="repeat(6,1fr) .25fr">
        <Table.Header>
          <span>OrderId</span>
          <span>Customer</span>
          <span>Order Status</span>
          <span>Payment Status</span>
          <span>Total</span>
          <span>Created at</span>
        </Table.Header>

        <Table.Body
          data={orders.slice(page.start, page.end)}
          render={(order) => <OrderRow order={order} key={order.id} />}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default OrdersTable;
