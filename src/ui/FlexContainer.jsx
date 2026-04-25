import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap}rem;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`;

export default FlexContainer;
