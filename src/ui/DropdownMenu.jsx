import styled from "styled-components";
import Heading from "./Heading";
import { useState } from "react";
import Select from "./Select";
import Option from "./Option";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: start;
`;
function DropdownMenu({ onChange, options, title, value, disabled = false }) {
  const [selectedVal, setSelectedVal] = useState(value);
  return (
    <Box>
      <Heading as="h3">{title}</Heading>
      <Select
        value={selectedVal}
        onChange={(e) => {
          setSelectedVal(e.target.value);
          onChange(e);
        }}
        disabled={disabled}
      >
        {options.map((option) => (
          <Option
            value={option.value}
            key={option.value}
            disabled={option?.disabled}
          >
            {option.name}
          </Option>
        ))}
      </Select>
    </Box>
  );
}

export default DropdownMenu;
