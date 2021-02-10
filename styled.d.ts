import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: IColors
        borderRadius: string
        transition: string
    }
}

interface IColors {
    background: {
        light: {
            color: string
        }
        main: {
            color: string
        }
    }
    borders: {
        main: {
            color: string
        }
    }
    primary: {
        main: {
            color: string
            contrastText: string
        }
    }
    secondary: {
        main: {
            color: string
            contrastText: string
        }
    }
    tertiary: {
        main: {
            color: string
            contrastText: string
        }
        light: {
            color: string
            contrastText: string
        }
    }
    modes: {
        dark: {}
    }
}
