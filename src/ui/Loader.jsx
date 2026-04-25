import { HiRefresh } from "react-icons/hi";
import styled, { keyframes } from "styled-components";

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }

`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & svg {
    width: 8.4rem;
    height: 8.4rem;
    animation: ${spinner} 1s linear infinite;
  }
`;

function Loader() {
  return (
    <Container>
      <HiRefresh style={{ color: "var(--color-grey-900)" }} />
    </Container>
  );
}

export default Loader;
