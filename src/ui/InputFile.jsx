import styled from "styled-components";

const InputFile = styled.input`
  &::file-selector-button {
    cursor: pointer;
    background-color: var(--color-green-700);
    color: var(--color-grey-0);
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 3px;

    &:hover {
      background-color: var(--color-green-100);
    }
  }
`;

export default InputFile;
