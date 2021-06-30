import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { publicRoutes, privateRoutes } from './routes'

import AppRoute from './routes/route'
import EcommerceLayout from './layouts/Ecommerce'
import NonAuthLayout from './layouts/NonAuthLayout'

import './theme.scss'

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
        {
          privateRoutes.map((route, idx) => (
              <AppRoute
                  path={route.path}
                  layout={EcommerceLayout}
                  component={route.component}
                  key={idx}
                  isAuthProtected={true}
              />
          ))
        }
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    layout: state.Layout
  }
}

export default connect(mapStateToProps, null)(App)
