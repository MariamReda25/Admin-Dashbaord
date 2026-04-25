import { useSearchParams } from "react-router";
import DropdownMenu from "./DropdownMenu";

function Filter({ param, title, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(param);
  const selectedValue = currentValue || options[0].value;

  function handleChange(e) {
    searchParams.set(param, e.target.value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <DropdownMenu
      title={title}
      options={options}
      value={selectedValue}
      onChange={handleChange}
    />
  );
}

export default Filter;
