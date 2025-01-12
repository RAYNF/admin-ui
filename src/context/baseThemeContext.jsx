import { createContext, useState } from "react";

export const BaseThemeContext = createContext();

export const BaseThemeContextProvider = ({ children }) => {
  const baseThemes = [
    { name: "theme-bright", bgcolor: "bg-[#ffffff]", color: "#ffffff" },
    { name: "theme-dark", bgcolor: "bg-[#000000]", color: "#000000" },
  ];

  const [baseTheme, setBaseTheme] = useState(baseThemes[0]);

  const toggleTheme = () => {
    setBaseTheme((prevTheme) =>
      prevTheme.name === "theme-bright" ? baseThemes[1] : baseThemes[0]
    );
  };

  return (
    <BaseThemeContext.Provider value={{ baseTheme, toggleTheme }}>
      {children}
    </BaseThemeContext.Provider>
  );
};
