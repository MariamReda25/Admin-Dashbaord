import styled from "styled-components";
import Heading from "./Heading";
import User from "../features/authentication/User";
import Logo from "./Logo";

const StyledHeader = styled.header`
  grid-column: 1/-1;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-100);
  padding: 2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <User />
    </StyledHeader>
  );
}

export default Header;
