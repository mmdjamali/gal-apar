import { createContext } from "react";

export interface ThemeContextInterface {
    toggleTheme : () => void
}

export const ThemeContext = createContext<ThemeContextInterface>(
    {} as ThemeContextInterface
)