import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles'
import { theme } from './styles/theme'
import AuthenticatedApp from './AuthenticatedApp'
import Background from './components/Background'

const Content = styled.div`
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
`

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <BrowserRouter>
                <Background/>
                <Content>
                    <AuthenticatedApp/>
                </Content>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
