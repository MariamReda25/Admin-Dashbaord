import { createContext, useContext } from "react";
import styled from "styled-components";
import Empty from "./Empty";

const StyledTabel = styled.div`
  padding: 3rem;
`;
const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2rem;
  padding: 1rem 2rem;
`;
const StyledHeader = styled(CommonRow)`
  border-radius: 9px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: var(--color-green-700);
  color: var(--color-grey-50);
`;

const StyledBody = styled.div`
  border-radius: 9px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: var(--color-grey-0);
`;

const StyledRow = styled(CommonRow)`
  border-bottom: 1px solid var(--color-grey-100);
  color: var(--color-grey-900);
  text-transform: capitalize;
  font-size: 1.4rem;
`;
const StyledFooter = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TableContext = createContext();
function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTabel role="table">{children}</StyledTabel>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

function Body({ data, render }) {
  return (
    <StyledBody role="body">
      {data.length === 0 ? <Empty data="Data" /> : data.map(render)}
    </StyledBody>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow columns={columns} role="row">
      {children}
    </StyledRow>
  );
}
function Footer({ children }) {
  return <StyledFooter>{children}</StyledFooter>;
}
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;
export default Table;
