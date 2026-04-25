import styled from "styled-components";
import defaultUser from "../../assets/default-user.jpg";
import useUser from "./useUser";
import FlexContainer from "../../ui/FlexContainer";
import Theme from "../theme/Theme";

const Img = styled.img`
  border-radius: 50%;
  width: 5%;
  height: 5%;
`;

const StyledSpan = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  font-weight: 700;
`;

function User() {
  const { user } = useUser();
  return (
    <FlexContainer justify="flex-end" align="center" gap="0.8">
      <Img src={user.user_metadata?.avatar || defaultUser} alt="UserImage" />
      <StyledSpan>{user.user_metadata?.username}</StyledSpan>
      <Theme />
    </FlexContainer>
  );
}

export default User;
