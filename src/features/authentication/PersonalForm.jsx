import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

function PersonalForm({ userToUpdate, onSubmit, isUpdating }) {
  const { register, handleSubmit } = useForm();
  const { email } = userToUpdate;
  return (
    <Form
      onSubmit={handleSubmit((data) =>
        onSubmit({
          email: data.email,
          options: {
            data: {
              username: data.username,
            },
          },
        }),
      )}
    >
      <FormRow direction="column" align="start">
        <Label>Username</Label>
        <Input
          type="text"
          {...register("username")}
          defaultValue={userToUpdate.user_metadata?.username}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow direction="column" align="start">
        <Label>Email Address</Label>
        <Input
          type="email"
          defaultValue={email}
          {...register("emai")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow justify="end">
        <Button type="submit" variation="primary" disabled={isUpdating}>
          Save changes
        </Button>
        <Button type="reset" variation="secondary" disabled={isUpdating}>
          Reset
        </Button>
      </FormRow>
    </Form>
  );
}

export default PersonalForm;
