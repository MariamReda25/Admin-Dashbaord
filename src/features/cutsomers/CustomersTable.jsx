import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import CustomerRow from "./CustomerRow";
import useCustomers from "./useCustomers";

function CustomersTable() {
  const { customers, isLoading, count } = useCustomers();

  if (isLoading) return <Loader />;
  return (
    <Table columns="repeat(6,1fr)">
      <Table.Header>
        <span>Full Name</span>
        <span>E-mail Address</span>
        <span>Phone Number</span>
        <span>Shipping Address</span>
        <span>Country</span>
        <span>Total orders</span>
      </Table.Header>

      <Table.Body
        data={customers}
        render={(customer) => (
          <CustomerRow customer={customer} key={customer.id} />
        )}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default CustomersTable;
