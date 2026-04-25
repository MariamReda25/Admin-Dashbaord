import styled from "styled-components";

const ColoredSpan = styled.span`
  background-color: var(--color-green-700);
  color: var(--color-grey-0);
  border-radius: 50%;
  padding: 0.8rem;
  font-size: 1.8rem;
  font-weight: 700;
  margin-right: 0.4rem;
`;
const Span = styled.span`
  font-size: 1.8rem;
  color: var(--color-grey-700);
  font-weight: 600;
`;

function Logo() {
  return (
    <div>
      <ColoredSpan>Go</ColoredSpan>
      <Span>Style</Span>
    </div>
  );
}

export default Logo;
