import styled from "styled-components";

const FormRow = styled.div`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  gap: 0.8rem;
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction || "row"};
`;

export default FormRow;
