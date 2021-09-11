import React from 'react'
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
/*
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
 */
const App = () =>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Background />
      <Content>
        <AuthenticatedApp />
      </Content>
    </BrowserRouter>
  </ThemeProvider>

export default App
