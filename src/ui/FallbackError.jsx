import styled from "styled-components";
import GloabalStyles from "../style/GlobalStyles";
import FlexContainer from "./FlexContainer";
import Heading from "./Heading";
import Button from "./Button";

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function FallbackError({ error, resetErrorBoundary }) {
  return (
    <>
      <GloabalStyles />
      <Box>
        <FlexContainer align="center" gap="0.8" direction="column">
          <Heading as="h2">Something went wrong ⛔</Heading>
          <p>{error.message}</p>
          <Button variation="primary" onClick={resetErrorBoundary}>
            Try again
          </Button>
        </FlexContainer>
      </Box>
    </>
  );
}

export default FallbackError;
