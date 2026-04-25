import styled from "styled-components";

const StyeldModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background-color: rgba(var(--color-grey-100), 0.9);
  backdrop-filter: blur(20px);
`;

const StyledWidnow = styled.div`
  position: fixed;
  width: 60%;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;
function Modal({ children }) {
  return <StyeldModal>{children}</StyeldModal>;
}

function Window({ children }) {
  return <StyledWidnow>{children}</StyledWidnow>;
}

Modal.Window = Window;

export default Modal;
