import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const { state: darkTheme, setState: setDarkTheme } =
    useLocalStorage("darkTheme");

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("You consumed ThemeContext outside ThemeProvider");

  return context;
}

export { ThemeProvider, useTheme };
