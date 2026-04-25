import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import InputFile from "../../ui/InputFile";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import Error from "../../ui/Error";
import useSignup from "./useSignup";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  width: 70%;
  `;
function AccountsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isCreating } = useSignup();
  function onSubmit(data) {
    signup(data);
  }
  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow direction="column" align="start">
          <Label>Username</Label>
          <Input
            type="text"
            {...register("username", {
              required: "This Field is required",
            })}
            disabled={isCreating}
          />
          {errors?.username && <Error>{errors?.username?.message}</Error>}
        </FormRow>
        <FormRow direction="column" align="start">
          <Label>Email address </Label>
          <Input
            type="email"
            {...register("email", {
              required: "This Field is required",
            })}
            disabled={isCreating}
          />
          {errors?.email && <Error>{errors?.email?.message}</Error>}
        </FormRow>
        <FormRow direction="column" align="start">
          <Label>Password </Label>
          <Input
            type="password"
            {...register("password", {
              required: "This Field is required",
              minLength: {
                value: 8,
                message: "Password length must be at least 8 characters",
              },
            })}
            disabled={isCreating}
          />
          {errors?.password && <Error>{errors?.password?.message}</Error>}
        </FormRow>
        <FormRow direction="column" align="start">
          <Label>Profile Photo </Label>
          <InputFile
            type="file"
            accept="image/*"
            {...register("avatar")}
            disabled={isCreating}
          />
          {errors?.avatar && <Error>{errors?.avatar?.message}</Error>}
        </FormRow>
        <FormRow justify="end">
          <Button type="submit" variation="primary" disabled={isCreating}>
            Create new account
          </Button>
          <Button type="reset" variation="caution" disabled={isCreating}>
            Cancel
          </Button>
        </FormRow>
      </Form>
    </MainContainer>
  );
}

export default AccountsForm;
