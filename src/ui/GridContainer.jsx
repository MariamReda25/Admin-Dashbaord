import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "auto"};
  grid-template-rows: ${(props) => props.rows || "auto"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${(props) => props.gap}rem;
  padding: 2rem;
`;

export const GridBox = styled.div`
  border-radius: var(--border-radius-lg);

  grid-column: ${(props) => props.column || "auto"};
  grid-row: ${(props) => props.row || "auto"};

  justify-self: ${(props) => props.justify || "stretch"};
  align-self: ${(props) => props.align || "stretch"};

  width: ${(props) => props.w || "auto"};
  height: ${(props) => props.h || "auto"};
`;
export default GridContainer;
