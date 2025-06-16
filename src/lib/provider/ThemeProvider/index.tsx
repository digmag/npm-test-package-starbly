import { PropsWithChildren, useContext, useState } from "react";
import { ThemeContext } from "./context";
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./styledTheme";


export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [currentTheme, setTheme] = useState<DefaultTheme['currentTheme']>('light')
    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme: setTheme }}>
            <StyledThemeProvider theme={{ ...theme, currentTheme }}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useThemeProvider = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useThemeProvider isn't using in ThemeProvider")
    }
    return context
}