import 'styled-components'

declare module 'styled-components' {
    type AppTheme = 'light' | 'dark'
    type Palette = {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
        1000: string
    }
    export interface DefaultTheme {
        Colors: {
            blue: Palette
            red: Palette
            green: Palette
            gray: Palette
            yellow: Palette
            orange: Palette
            white: {
                1000: string
            }
            black: {
                1000: string
            }
        }
        breakpoints: {
            xs: '768px'
            md: '1024px'
            lg: '1366px'
            xl: '1920px'
            xxl: '2560px'
        }
        currentTheme: AppTheme
    }
}