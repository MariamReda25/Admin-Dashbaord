import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import InputFile from "../../ui/InputFile";
import useCreateProduct from "./useCreateProduct";
import { HiXMark } from "react-icons/hi2";
import useUpdateProduct from "./useUpdateProduct";

const Error = styled.span`
  color: var(--color-red-800);
  font-size: 1.4rem;
`;

function ProductForm({ onClose, productToEdit = {} }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const isEditSession = Boolean(productToEdit.id);

  const { mutate: createProduct, isPending: isCreating } = useCreateProduct();
  const { updateProduct, isUpdating } = useUpdateProduct();

  function onSubmit(data) {
    const product = {
      name: data.name,
      price: +data.price,
      stock_quatity: +data.stock_quantity,
      status: data.status,
      discount: +data.discount || null,
      image: isEditSession
        ? data.image?.length > 0
          ? data.image
          : productToEdit?.image
        : data.image,
    };
    isEditSession
      ? updateProduct({ ...product, id: productToEdit.id })
      : createProduct(product);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow justify="end">
        <Button variation="primary" onClick={onClose}>
          <HiXMark />
        </Button>
      </FormRow>
      <FormRow>
        <Label>Product Name</Label>
        <Input
          disabled={isCreating || isUpdating}
          type="text"
          {...register("name", { required: "This Field is Required" })}
          defaultValue={isEditSession ? productToEdit.name : ""}
        />
        {errors?.name && <Error>{errors.name.message}</Error>}
      </FormRow>
      <FormRow>
        <Label>Product Price</Label>
        <Input
          disabled={isCreating || isUpdating}
          type="number"
          {...register("price", { required: "This Field is Required", min: 1 })}
          defaultValue={isEditSession ? productToEdit.price : ""}
        />
        {errors?.price && <Error>{errors.price.message}</Error>}
      </FormRow>
      <FormRow>
        <Label>Product Stock</Label>
        <Input
          disabled={isCreating || isUpdating}
          type="number"
          {...register("stock_quantity", {
            required: "This Field is Required",
            min: 0,
          })}
          defaultValue={isEditSession ? productToEdit.stock_quatity : ""}
        />
        {errors?.stock_quantity && (
          <Error>{errors.stock_quantity.message}</Error>
        )}
      </FormRow>
      <FormRow>
        <Label>Product Discount</Label>
        <Input
          disabled={isCreating || isUpdating}
          type="number"
          {...register("discount", {
            max: getValues("price"),
            min: 0,
          })}
          defaultValue={isEditSession ? productToEdit.discount : null}
        />
        {errors?.discount && <Error>{errors.discount.message}</Error>}
      </FormRow>
      <FormRow>
        <Label>Product Status</Label>
        <Input
          disabled={isCreating || isUpdating}
          type="text"
          {...register("status", { required: "This Field is Required" })}
          defaultValue={isEditSession ? productToEdit.status : ""}
        />
        {errors?.status && <Error>{errors.status.message}</Error>}
      </FormRow>
      <FormRow>
        <Label>Product Image</Label>
        <InputFile
          type="file"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This Field is required",
          })}
          disabled={isCreating || isUpdating}
        />
        {errors?.image && <Error>{errors.image.message}</Error>}
      </FormRow>

      <FormRow justify="end">
        <Button
          type="submit"
          variation="primary"
          disabled={isCreating || isUpdating}
        >
          {isEditSession ? "Edit" : "Add"}
        </Button>
        <Button
          type="reset"
          variation="secondary"
          disabled={isCreating || isUpdating}
        >
          Cancel
        </Button>
      </FormRow>
    </Form>
  );
}

export default ProductForm;
