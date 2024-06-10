// Todo: Create & manage context in this file
import React from "react";

export const ThemeContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  // Todo: Add the component code (incl. dynamic context value)
  const [theme, setTheme] = React.useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const ctxValue = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
