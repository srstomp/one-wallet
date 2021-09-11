import React from 'react'
import { Route } from 'react-router-dom'
import { Create } from '../pages/index'

const useRoutes = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      menuItem: true,
      title: '',
      component: Create,
      icon: null
    },
  ]

  const RouteWithSubRoutes = (route) =>
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        <route.component {...route} {...props} routes={route.routes} />
      )}
    />

  return { routes, RouteWithSubRoutes }
}

export default useRoutes
