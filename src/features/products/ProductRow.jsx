import styled, { css } from "styled-components";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helper";
import { Menu } from "../../ui/Menu";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useState } from "react";
import ProductForm from "./ProductForm";
import Modal from "../../ui/Modal";
import DeleteWindow from "../../ui/DeleteWindow";
import useDeleteProduct from "./useDeleteProduct";

const Product = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
`;

const Img = styled.img`
  width: 20%;
  height: 50%;
  border-radius: 50%;
`;

const Status = styled.span`
  ${(props) =>
    props.status === "in_stock" &&
    css`
      background-color: var(--color-green-100);
      color: var(--color-green-700);
    `}
  ${(props) =>
    props.status === "out_of_stock" &&
    css`
      background-color: var(--color-red-100);
      color: var(--color-red-700);
    `} 
  ${(props) =>
    props.status === "limited_stock" &&
    css`
      background-color: var(--color-yellow-100);
      color: var(--color-yellow-700);
    `} 
  ${(props) =>
    props.status === "discontinued" &&
    css`
      background-color: var(--color-grey-100);
      color: var(--color-grey-700);
    `} 
  ${(props) =>
    props.status === "pre_order" &&
    css`
      background-color: var(--color-blue-100);
      color: var(--color-blue-700);
    `} 
  ${(props) =>
    props.status === "backorder" &&
    css`
      background-color: var(--color-indigo-100);
      color: var(--color-indigo-700);
    `} 
  display:flex;
  justify-content: center;
  padding: 0.4rem;
  border-radius: var(--border-radius-lg);
  width: 60%;
  align-self: center;
`;
const Span = styled.span`
  align-self: center;
`;

const Box = styled.div`
  align-self: center;
`;
function ProductRow({ product }) {
  const {
    name,
    price,
    stock_quatity: stock,
    discount,
    status,
    image,
    id,
  } = product;

  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { deleteProduct } = useDeleteProduct();

  function handleDelete() {
    setIsDeleting((isDeleting) => !isDeleting);
  }
  function handleUpdate() {
    setIsUpdating((isUpdating) => !isUpdating);
  }
  return (
    <Table.Row>
      <Product>
        <Img src={image} />
        <span>{name}</span>
      </Product>
      <Span>{formatCurrency(price)}</Span>
      <Span>{stock}</Span>
      <Span>{formatCurrency(discount)}</Span>
      <Status status={status}>{status}</Status>
      <Box>
        <Menu name={id}>
          <Menu.List name={id}>
            <Menu.Item onClick={handleDelete}>
              <HiTrash />
              <span>Delete</span>
            </Menu.Item>
            <Menu.Item onClick={handleUpdate}>
              <HiPencil />
              <span>Update</span>
            </Menu.Item>
          </Menu.List>
        </Menu>
      </Box>
      {isUpdating && (
        <Modal>
          <Modal.Window>
            <ProductForm onClose={handleUpdate} productToEdit={product} />
          </Modal.Window>
        </Modal>
      )}
      {isDeleting && (
        <Modal>
          <Modal.Window>
            <DeleteWindow
              onClose={handleDelete}
              onDelete={() => deleteProduct(id)}
            />
          </Modal.Window>
        </Modal>
      )}
    </Table.Row>
  );
}

export default ProductRow;
