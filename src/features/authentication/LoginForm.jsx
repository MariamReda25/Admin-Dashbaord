import styled from "styled-components";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Error from "../../ui/Error";
import useLogin from "./useLogin";

const StyledForm = styled(Form)`
  background-color: inherit;
`;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, isLogin } = useLogin();

  function onSubmit(data) {
    login(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Input
          type="email"
          placeholder=" ✉ email address"
          {...register("email", {
            required: "please enter your email",
          })}
          disabled={isLogin}
        />
      </FormRow>
      <FormRow>
        {errors?.email && <Error>{errors.email.message}</Error>}
      </FormRow>
      <FormRow>
        <Input
          type="text"
          placeholder=" ⚙ password"
          {...register("password", {
            required: "please enter your password",
          })}
          disabled={isLogin}
        />
      </FormRow>
      <FormRow>
        {errors?.password && <Error>{errors.password.message}</Error>}
      </FormRow>
      <FormRow justify="center">
        <Button variation="primary" type="submit" disabled={isLogin}>
          Login
        </Button>
      </FormRow>
    </StyledForm>
  );
}

export default LoginForm;
