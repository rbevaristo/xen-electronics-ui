import React from 'react'

import { Redirect } from 'react-router-dom'

import Store from 'pages/Store/Store'
import Login from 'pages/Authentication/Login'
import Logout from 'pages/Authentication/Logout'

const Page = () => <Redirect to="/" />

const privateRoutes = [
  { path: '/store', exact: true, component: Store },
  { path: '/logout', exact: true, component: Logout },
  { path: '/', exact: true, component: Page }
]

const publicRoutes = [
  { path: '/login', exact: true, component: Login }
]

export { privateRoutes, publicRoutes }
