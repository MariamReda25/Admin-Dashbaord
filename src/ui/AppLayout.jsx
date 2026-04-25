import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import { Outlet } from "react-router";

const StyledAppLayout = styled.div`
  // max-width: 130rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 auto;
`;

const Main = styled.main`
  grid-column: 2/-1;
  grid-row: 2;
  background-color: var(--color-grey-50);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      {/* <Logo /> */}
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Sidebar />
    </StyledAppLayout>
  );
}

export default AppLayout;
