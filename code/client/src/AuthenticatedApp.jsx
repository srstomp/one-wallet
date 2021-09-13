import React from 'react'
import styled from 'styled-components'
import useRoutes from './config/useRoutes'
import { Switch } from 'react-router-dom'
import Header from './components/header/Header'

const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 60px auto;
    grid-template-areas:
        "header"
        "main";
    height: 100%;
`

// const Main = styled.div`
//     overflow: hidden;
//     width: 100%;
// `

/*
        <ConnectedRouter history={history}>
            <Routes/>
        </ConnectedRouter>
 */

const AuthenticatedApp = () => {
  const { routes, RouteWithSubRoutes } = useRoutes()

  return (
    <Container>
      <Header />
      <Switch>
        {
          routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
        }
      </Switch>
    </Container>
  )
}

export default AuthenticatedApp
