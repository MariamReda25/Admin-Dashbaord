import styled from "styled-components";

const Option = styled.option`
  background-color: var(--color-grey-100);
  border-radius: 19px;
  border: none;
  font-size: 1.4rem;

  &:checked {
    background-color: var(--color-grey-200);
  }
`;

export default Option;
