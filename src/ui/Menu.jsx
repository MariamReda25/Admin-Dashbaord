import { createContext, useContext, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import styled from "styled-components";

const StyledMenu = styled.span`
  position: relative;
  cursor: pointer;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: var(--color-grey-100);
  position: absolute;
  right: 80%;
  top: 30%;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  margin-bottom: 9rem;
  z-index: 1000;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 1rem;
  background-color: inherit;
  border: none;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;
const MenuContext = createContext();

function Menus({ children }) {
  const [open, setOpen] = useState("");
  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MenuContext.Provider>
  );
}
function Menu({ children, name }) {
  const { open, setOpen } = useContext(MenuContext);

  function handleOpen() {
    setOpen(open === name ? "" : name);
  }

  return (
    <StyledMenu>
      <HiDotsVertical onClick={handleOpen} />
      {children}
    </StyledMenu>
  );
}

function List({ children, name }) {
  const { open } = useContext(MenuContext);
  if (open !== name) return null;
  return <MenuList>{children}</MenuList>;
}
function Item({ children, onClick }) {
  return <MenuItem onClick={onClick}>{children}</MenuItem>;
}

Menu.List = List;
Menu.Item = Item;
export { Menus, Menu };
