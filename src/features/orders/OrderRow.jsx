import styled, { css } from "styled-components";
import Table from "../../ui/Table";
import { formatCurrency, formatDate } from "../../utils/helper";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi";
import { Menu } from "../../ui/Menu";
import { Link } from "react-router";
import { useState } from "react";
import Modal from "../../ui/Modal";
import DeleteWindow from "../../ui/DeleteWindow";
import useDeleteOrder from "./useDeleteOrder";

const Span = styled.span`
  color: var(--color-grey-700);
  display: flex;
  align-items: center;
`;

const CommonStatus = styled.span`
  border-radius: var(--border-radius-lg);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 80%;
  padding: 0.8rem;
`;

const OrderStatus = styled(CommonStatus)`
  ${(props) =>
    props.status === "pending" &&
    css`
      background-color: var(--color-yellow-100);
      color: var(--color-yellow-700);
    `}
  ${(props) =>
    props.status === "processing" &&
    css`
      background-color: var(--color-blue-100);
      color: var(--color-blue-700);
    `}
  ${(props) =>
    props.status === "shipped" &&
    css`
      background-color: var(--color-indigo-100);
      color: var(--color-indigo-700);
    `}
  ${(props) =>
    props.status === "delivered" &&
    css`
      background-color: var(--color-green-100);
      color: var(--color-green-700);
    `}
  ${(props) =>
    props.status === "cancelled" &&
    css`
      background-color: var(--color-red-100);
      color: var(--color-red-700);
    `}
`;
export const Payment = styled(CommonStatus)`
  ${(props) =>
    props.status === "unpaid" &&
    css`
      background-color: var(--color-yellow-100);
      color: var(--color-yellow-700);
    `}

  ${(props) =>
    props.status === "paid" &&
    css`
      background-color: var(--color-green-100);
      color: var(--color-green-700);
    `}
  ${(props) =>
    props.status === "refunded" &&
    css`
      background-color: var(--color-red-100);
      color: var(--color-red-700);
    `}
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

function OrderRow({ order }) {
  const {
    id,
    created_at: createdAt,
    customer_name: customerName,
    order_status: orderStatus,
    total_cost: totalCost,
    payment_status: paymentStaus,
  } = order;

  const [isDeleting, setIsDeleting] = useState(false);
  const { deleteOrder } = useDeleteOrder();

  function handleDelete() {
    setIsDeleting((isDeleting) => !isDeleting);
  }

  return (
    <Table.Row>
      <Span>#{id}</Span>
      <Span>{customerName}</Span>
      <OrderStatus status={orderStatus}>{orderStatus}</OrderStatus>
      <Payment status={paymentStaus}>{paymentStaus}</Payment>
      <Span>{formatCurrency(totalCost)}</Span>
      <Span>{formatDate(createdAt)}</Span>
      <Span>
        <Menu name={id}>
          <Menu.List name={id}>
            <Menu.Item onClick={handleDelete}>
              <HiTrash />
              <span>Delete</span>
            </Menu.Item>
            <Menu.Item>
              <StyledLink to={`/orders/${id}`}>
                <HiEye />
                <span>View</span>
              </StyledLink>
            </Menu.Item>
          </Menu.List>
        </Menu>
      </Span>

      {isDeleting && (
        <Modal>
          <Modal.Window>
            <DeleteWindow
              onClose={handleDelete}
              onDelete={() => deleteOrder(id)}
            />
          </Modal.Window>
        </Modal>
      )}
    </Table.Row>
  );
}

export default OrderRow;
