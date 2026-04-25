import styled from "styled-components";
import FlexContainer from "../ui/FlexContainer";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

const StyledFlexContainer = styled(FlexContainer)`
  background-color: var(--color-grey-100);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: var(--border-radius-md);
  min-width: 30rem;
  box-shadow: var(--shadow-lg);
`;

function Login() {
  return (
    <StyledFlexContainer direction="column" gap="4" align="center">
      <Logo />
      <Heading as="h2">Welcome Back 👋</Heading>
      <LoginForm />
    </StyledFlexContainer>
  );
}

export default Login;
