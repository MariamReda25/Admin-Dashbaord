import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-100);
  padding: 2rem;
  min-height: 70rem;
`;
function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
