import { takeEvery, fork, put, all, call } from 'redux-saga/effects'

// Login Redux States
import { CHECK_LOGIN, LOGOUT_USER } from './actionTypes'
import { loginUserSuccessful } from './actions'

// AUTH related methods
import { postRequest } from 'api/api'

// If user is login then dispatch redux action's are directly from here.
function * loginUser ({ payload: { user, history } }) {
  try {
    const response = yield call(postRequest, '/api/login', { username: user.username, password: user.password })
    localStorage.setItem('xenUser', JSON.stringify(response.result))
    yield put(loginUserSuccessful(response))
    history.push('/store')
  } catch (error) {
    console.log(error)
  }
}

function * logoutUser ({ payload: { history } }) {
  try {
    const data = JSON.parse(localStorage.getItem('xenUser'))
    yield call(postRequest, '/api/logout', {
      token: data.access_token
    })
  } catch (error) {
    console.log(error)
  }
  localStorage.removeItem('xenUser')
  history.push('/login')
}

export function * watchUserLogin () {
  yield takeEvery(CHECK_LOGIN, loginUser)
}

export function * watchUserLogout () {
  yield takeEvery(LOGOUT_USER, logoutUser)
}

function * loginSaga () {
  yield all([
    fork(watchUserLogin),
    fork(watchUserLogout)
  ])
}

export default loginSaga
