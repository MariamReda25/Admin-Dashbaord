import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { HiXMark } from "react-icons/hi2";
const StyledDeleteWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--color-grey-0);
  padding: 1.4rem;
  border-radius: var(--border-radius-sm);
`;

const Close = styled.div`
  align-self: end;
`;

const Box = styled.div`
  display: flex;
  gap: 2rem;
`;

function DeleteWindow({ onClose, onDelete }) {
  return (
    <StyledDeleteWindow>
      <Close>
        <Button variation="primary" onClick={onClose}>
          <HiXMark />
        </Button>
      </Close>
      <Heading as="h2">Are You sure you want to delete premenantly ?</Heading>
      <Box>
        <Button variation="primary" onClick={onDelete}>
          YES
        </Button>
        <Button variation="caution" onClick={onClose}>
          NO
        </Button>
      </Box>
    </StyledDeleteWindow>
  );
}

export default DeleteWindow;
