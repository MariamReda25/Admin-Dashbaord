import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import Heading from "./Heading";

const StyledEmpty = styled.div`
  padding: 1.2rem;
`;
function Empty({ data }) {
  return (
    <StyledEmpty>
      <FlexContainer justify="center" align="center">
        <Heading as="h3">No {data} to show</Heading>
      </FlexContainer>
    </StyledEmpty>
  );
}

export default Empty;
