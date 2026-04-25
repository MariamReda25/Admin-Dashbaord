import { HiOutlineLogout } from "react-icons/hi";
import styled from "styled-components";
import useLogout from "./useLogout";

const LogoutButton = styled.button`
  background-color: inherit;
  border: none;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  gap: 0.8rem;
  color: var(--color-red-800);
  padding: 0.8rem;
  border-radius: 5px;

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-red-700);
    color: var(--color-grey-0);
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
function Logout() {
  const { logout } = useLogout();
  return (
    <LogoutButton onClick={logout}>
      <HiOutlineLogout />
      <span>Logout</span>
    </LogoutButton>
  );
}

export default Logout;
