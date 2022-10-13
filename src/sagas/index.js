import { takeLatest } from 'redux-saga/effects'
import ACTION_TYPES from '../actions/actionTypes'
import { getUserSaga } from './usersSaga'

function * rootSaga (action) {
  yield takeLatest(ACTION_TYPES.GET_USER_ACTION, getUserSaga)
}

export default rootSaga
