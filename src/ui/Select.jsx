import styled from "styled-components";

const Select = styled.select`
  background-color: var(--color-grey-200);
  border: none;
  padding: 0.6rem 0.8rem;
  border-radius: 19px;
  font-size: 1.4rem;
  color: var(--color-grey-900);
  border: 2px solid transparent;
  width: 90%;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 2px solid var(--color-green-700);
  }
`;
export default Select;
