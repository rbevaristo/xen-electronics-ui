import { all } from 'redux-saga/effects'

import LayoutSaga from './layout/saga'
import LoginSaga from './login/saga'

export default function * rootSaga () {
  yield all([
    LayoutSaga(),
    LoginSaga()
  ])
}
