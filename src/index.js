import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import axios from 'axios'
import store from './store'

import App from './App'

axios.interceptors.request.use(config => {
  const auth = JSON.parse(localStorage.getItem('xenUser'))
  if (auth) {
    config.headers.Authorization = `Bearer ${auth.access_token}`
  }
  return config
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
