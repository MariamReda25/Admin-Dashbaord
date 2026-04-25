import styled from "styled-components";
import { GridBox } from "./GridContainer";
import FlexContainer from "./FlexContainer";

const StyledGridBox = styled(GridBox)`
  background-color: var(--color-grey-0);
  padding: 0.8rem;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  text-transform: capitalize;
  font-weight: 500;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const Statistics = styled.span`
  font-size: 2.4rem;
  color: var(--color-grey-700);
  font-weight: 700;
  align-self: end;
`;

function StatisticsBox({ title, statistics, children }) {
  return (
    <StyledGridBox>
      <FlexContainer justify="space-between" direction="column">
        <Title>
          {children}
          {title}
        </Title>
        <Statistics>{statistics}</Statistics>
      </FlexContainer>
    </StyledGridBox>
  );
}

export default StatisticsBox;
