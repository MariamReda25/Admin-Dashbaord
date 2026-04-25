import CustomersOperations from "../features/cutsomers/CustomersOperations";
import CustomersTable from "../features/cutsomers/CustomersTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Customers() {
  return (
    <>
      <Row>
        <Heading as="h2">Customers</Heading>
        <CustomersOperations />
      </Row>
      <CustomersTable />
    </>
  );
}

export default Customers;
