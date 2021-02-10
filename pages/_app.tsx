import { theme } from '../src/theme'
import { GlobalStyle } from '../src/theme/GlobalStyle'

import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
