import React from 'react'
import styled from 'styled-components'
import useRoutes from './config/useRoutes'
import { Switch } from 'react-router-dom'
import TopBar from './components/TopBar'

const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 90px auto;
    grid-template-areas:
        "menu"
        "main";
    height: 100%;
`

// const Main = styled.div`
//     overflow: hidden;
//     width: 100%;
// `

const AuthenticatedApp = () => {
  const { routes, RouteWithSubRoutes } = useRoutes()

  return (
    <Container>
      <TopBar />
      <Switch>
        {
          routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
        }
      </Switch>
    </Container>
  )
}

export default AuthenticatedApp
