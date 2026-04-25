import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import InputFile from "../../ui/InputFile";
import defaultUser from "../../assets/default-user.jpg";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Img = styled.img`
  width: 10%;
  heigh: 10%;
  border-radius: 50%;
`;

function AvatarForm({ userToUpdate, isUpdating, onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <Form
      onSubmit={handleSubmit((data) => onSubmit({ avatar: data.avatar }))}
    >
      <Img src={userToUpdate?.user_metadata?.avatar || defaultUser} />
      <FormRow>
        <InputFile
          type="file"
          accept="image/*"
          alt="user"
          {...register("avatar")}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow justify="end">
        <Button type="submit" variation="primary" disabled={isUpdating}>
          Update Photo
        </Button>
        <Button type="reset" variation="secondary" disabled={isUpdating}>
          Reset
        </Button>
      </FormRow>
    </Form>
  );
}

export default AvatarForm;
