import Loader from "../../ui/Loader";
import { Menus } from "../../ui/Menu";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import AddProduct from "./AddProduct";
import ProductRow from "./ProductRow";
import useProducts from "./useProducts";

function ProductsTable() {
  const { products, isLoading, count } = useProducts();

  if (isLoading) return <Loader />;
  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 1fr 1fr .25fr">
        <Table.Header role="row">
          <span>Product</span>
          <span>Price</span>
          <span>Stock</span>
          <span>discount</span>
          <span>status</span>
        </Table.Header>
        <Table.Body
          data={products}
          render={(product) => (
            <ProductRow product={product} key={product.id} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
          <AddProduct />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default ProductsTable;
