import {
  HiOutlineCog,
  HiOutlineHome,
  HiOutlineLogout,
  HiOutlineShoppingCart,
  HiUserAdd,
  HiUserCircle,
} from "react-icons/hi";
import { HiOutlineDocumentCheck, HiOutlineUserGroup } from "react-icons/hi2";
import { NavLink } from "react-router";
import styled from "styled-components";
import Logout from "../features/authentication/Logout";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: auto;
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--color-grey-800);
    padding: 0.8rem;
    border-radius: 5px;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-green-700);
    color: var(--color-grey-0);
  }
  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
const SecondaryNavList = styled(NavList)`
  margin-bottom: 0;
`;

function MainNav() {
  return (
    <Nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">
            <HiOutlineShoppingCart />
            <span>Products</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/orders">
            <HiOutlineDocumentCheck />
            <span>Orders</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/customers">
            <HiOutlineUserGroup />
            <span>Customers</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/user">
            <HiUserCircle />
            <span>User</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/account">
            <HiUserAdd />
            <span>Accounts</span>
          </StyledNavLink>
        </li>
      </NavList>
      <SecondaryNavList>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog />
            <span>Settings</span>
          </StyledNavLink>
        </li>
        <li>
          <Logout />
        </li>
      </SecondaryNavList>
    </Nav>
  );
}

export default MainNav;
