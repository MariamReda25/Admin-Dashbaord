import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

function PasswordForm({ onSubmit, isUpdating }) {
  const { register, handleSubmit } = useForm();
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow direction="column" align="start">
        <Label>New Password</Label>
        <Input
          type="password"
          {...register("password")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow justify="end">
        <Button type="submit" variation="primary" disabled={isUpdating}>
          Update password
        </Button>
        <Button type="submit" variation="secondary" disabled={isUpdating}>
          Reset
        </Button>
      </FormRow>
    </Form>
  );
}

export default PasswordForm;
