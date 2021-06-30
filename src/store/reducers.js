import { combineReducers } from 'redux'

import Layout from './layout/reducer'
import Login from './login/reducer'

const rootReducer = combineReducers({
  Layout,
  Login
})

export default rootReducer
