import { useEffect } from "react";
import { HiOutlineLightBulb, HiOutlineMoon } from "react-icons/hi";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";

const StyledTheme = styled.button`
  background-color: transparent;
  border: none;

  svg {
    color: var(--color-grey-900);
    width: 2.4rem;
    height: 2.4rem;
  }

  &:focus {
    outline: none;
  }
`;
function Theme() {
  const { darkTheme, setDarkTheme } = useTheme();

  useEffect(
    function () {
      if (darkTheme) document.documentElement?.classList.add("dark-mode");
      else document.documentElement?.classList.remove("dark-mode");
    },
    [darkTheme],
  );

  return (
    <StyledTheme onClick={() => setDarkTheme((theme) => !theme)}>
      {darkTheme ? <HiOutlineLightBulb /> : <HiOutlineMoon />}
    </StyledTheme>
  );
}

export default Theme;
