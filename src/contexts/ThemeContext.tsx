/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from "react";

export type ITheme = "light" | "dark";

const ThemeContext = createContext<ITheme | null>(null);
const ThemeSetContext = createContext<React.Dispatch<
  React.SetStateAction<ITheme>
> | null>(null);

type IThemeProvider = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<ITheme>("dark");

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSetContext.Provider value={setTheme}>
        {children}
      </ThemeSetContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (theme === null) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return theme;
};

export const useSetTheme = () => {
  const setTheme = useContext(ThemeSetContext);

  if (setTheme === null) {
    throw new Error("useSetTheme must be used within ThemeProvider");
  }
  return setTheme;
};
