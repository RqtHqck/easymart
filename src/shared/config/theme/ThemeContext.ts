import { createContext } from "react";

export const Theme = {
  PINK: "pink-theme",
  BLUE: "blue-theme",
} as const;

export type ThemeType = (typeof Theme)[keyof typeof Theme];

export const LOCAL_STORAGE_THEME_KEY = "theme";

interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
