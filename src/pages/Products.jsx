import ProductsOperations from "../features/products/ProductsOperations";
import ProductsTable from "../features/products/ProductsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Products() {
  return (
    <>
      <Row>
        <Heading as="h2">Products</Heading>
        <ProductsOperations />
      </Row>
      <ProductsTable />
    </>
  );
}

export default Products;
