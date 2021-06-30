import React from 'react'

const TestDisplay = () => <h1>Hello World</h1>

const authProtectedRoutes = [
// routes that need to be protected
]

const publicRoutes = [
  { path: '/', exact: true, component: TestDisplay }
]

export { authProtectedRoutes, publicRoutes }
