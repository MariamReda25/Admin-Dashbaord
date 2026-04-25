import styled, { css } from "styled-components";

const StyledButton = styled.button`
  ${(props) =>
    props.variation === "primary" &&
    css`
      background-color: var(--color-green-700);
      color: var(--color-grey-0);

      &:hover {
        background-color: var(--color-green-100);
      }
    `}
  ${(props) =>
    props.variation === "secondary" &&
    css`
      background-color: var(--color-grey-400);
      color: var(--color-grey-0);

      &:hover {
        background-color: var(--color-grey-500);
      }
    `}
  ${(props) =>
    props.variation === "caution" &&
    css`
      background-color: var(--color-red-700);
      color: var(--color-grey-0);

      &:hover {
        background-color: var(--color-red-800);
      }
    `}
  border: none;
  padding: 0.4rem 1.2rem;
  border-radius: 3px;
`;

function Button({ children, variation, onClick, type = "", disabled = false }) {
  return (
    <StyledButton
      type={type}
      variation={variation}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
