import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
    <Route
        {...rest}
        render={props => {
          if (isAuthProtected && !localStorage.getItem('xenUser')) {
            return (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
          }

          if (!isAuthProtected && localStorage.getItem('xenUser')) {
            return (
                  <Redirect to={{ pathname: '/store', state: { from: props.location } }} />
            )
          }

          return (
                <Layout>
                    <Component {...props} />
                </Layout>
          )
        }}
    />
)

export default AppRoute
