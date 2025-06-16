import { createContext } from "react";
import { DefaultTheme } from "styled-components";

export interface ThemeContextProps {
    currentTheme: DefaultTheme['currentTheme']
    setCurrentTheme: (theme: DefaultTheme['currentTheme']) => void
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)