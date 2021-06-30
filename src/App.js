import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { publicRoutes } from './routes'

import NonAuthLayout from './layouts/NonAuthLayout'
import AppRoute from './routes/route'

const App = () => {
  return (
    <Router>
      <Switch>
        {
            publicRoutes.map((route, idx) => (
                <AppRoute
                    path={route.path}
                    layout={NonAuthLayout}
                    component={route.component}
                    key={idx}
                    isAuthProtected={false}
                />
            ))
        }
      </Switch>
    </Router>
  )
}

export default App
