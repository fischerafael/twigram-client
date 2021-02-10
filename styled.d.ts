import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            ligth: string
            main: string
        }
        borderRadius: string
        transition: string
    }
}
