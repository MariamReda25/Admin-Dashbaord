import styled from "styled-components";
import FlexContainer from "../../ui/FlexContainer";
import Heading from "../../ui/Heading";
import useUser from "./useUser";
import Loader from "../../ui/Loader";
import PersonalForm from "./PersonalForm";
import useUpdateUser from "./useUpdateUser";
import PasswordForm from "./PasswordForm";
import AvatarForm from "./AvatarForm";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;
const StyledFlexContainer = styled(FlexContainer)`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  border: 2px solid var(--color-grey-100);
  padding: 2rem;
`;

function UserProfile() {
  const { isLoading, user } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  if (isLoading) return <Loader />;

  function onSubmit(data) {
    updateUser(data);
  }
  return (
    <MainContainer>
      <StyledFlexContainer direction="column" gap="2">
        <Heading as="h3">Profile Photo</Heading>
        <AvatarForm
          userToUpdate={user}
          isUpdating={isUpdating}
          onSubmit={onSubmit}
        />
      </StyledFlexContainer>
      <StyledFlexContainer direction="column">
        <Heading as="h3">Personal information</Heading>
        <PersonalForm
          userToUpdate={user}
          onSubmit={onSubmit}
          isUpdating={isUpdating}
        />
      </StyledFlexContainer>
      <StyledFlexContainer direction="column">
        <Heading as="h3">Change Passowrd</Heading>
        <PasswordForm onSubmit={onSubmit} isUpdating={isUpdating} />
      </StyledFlexContainer>
    </MainContainer>
  );
}

export default UserProfile;
