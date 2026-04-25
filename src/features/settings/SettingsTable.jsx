import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import styled from "styled-components";
import useSettings from "./useSettings";
import Loader from "../../ui/Loader";
import Button from "../../ui/Button";
import Error from "../../ui/Error";
import { useForm } from "react-hook-form";
import useUpdateSettings from "./useUpdateSettings";
import { useState } from "react";
import Select from "../../ui/Select";
import Option from "../../ui/Option";

const Box = styled.div`
  padding: 2rem;
  width: 70%;
`;

function SettingsTable() {
  const { settings, isLoading } = useSettings();
  const { updateSettings, isUpdating } = useUpdateSettings();
  const [selectValue, setSelectValue] = useState("");
  const [shipCost, setShipCost] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (isLoading) return <Loader />;

  const { default_currency: currency, max_order_items: maxItems } = settings[0];

  function onSubmit(data) {
    const { max_order_items, default_currency, shipping_mode, shipping_cost } =
      data;
    const dataToUpdate = { max_order_items, default_currency };
    dataToUpdate[shipping_mode] = shipping_cost;
    updateSettings(dataToUpdate);
  }

  return (
    <Box>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow justify="space-between">
          <Label>Default Currency</Label>
          <Input
            type="text"
            defaultValue={currency}
            {...register("default_currency")}
            disabled={isUpdating}
          />
        </FormRow>
        <FormRow justify="space-between">
          <Label>Shipping Cost</Label>
          <Select
            style={{ width: "auto" }}
            defaultValue={selectValue}
            {...register("shipping_mode")}
            onChange={(e) => {
              setSelectValue(e.target.value);
              setShipCost(settings[0]?.[e.target.value] || 0);
            }}
          >
            <Option value="---">--</Option>
            <Option value="pickup">Pickup</Option>
            <Option value="regular">Regular</Option>
            <Option value="standard">Standard</Option>
            <Option value="regular">Express</Option>
          </Select>

          <Input
            type="number"
            value={shipCost}
            {...register("shipping_cost", {
              onChange: (e) => setShipCost(e.target.value),
              max: {
                value: 200,
                message: "Maximum value of shipping cost is 200",
              },
              min: {
                value: 20,
                message: "Minimum value of shipping cost is 20",
              },
            })}
            disabled={isUpdating}
          />
          {errors?.shipping_cost && (
            <Error>{errors.shipping_cost.message}</Error>
          )}
        </FormRow>
        <FormRow justify="space-between">
          <Label>Maximum items per order</Label>
          <Input
            type="number"
            defaultValue={maxItems}
            {...register("max_order_items", {
              min: { value: 10, message: "Min. number of items 10" },
              max: { value: 50, message: "Max. number of items 50" },
            })}
            disabled={isUpdating}
          />
          {errors?.max_order_items && (
            <Error>{errors.max_order_items.message}</Error>
          )}
        </FormRow>
        <FormRow justify="flex-end">
          <Button variation="primary" type="submit" disabled={isUpdating}>
            Edit
          </Button>
          <Button variation="secondary" type="reset" disabled={isUpdating}>
            Cancel
          </Button>
        </FormRow>
      </Form>
    </Box>
  );
}

export default SettingsTable;
