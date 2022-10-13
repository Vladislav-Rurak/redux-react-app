import { put } from 'redux-saga/effects'
import {
  getUserError,
  getUserRequest,
  getUserSuccess
} from '../actions/actionCreator'

export function * getUserSaga (action) {
  // Сейчас будем грузить
  yield put(getUserRequest()) // dispatch
  try {
    // Грузить
    const data = yield fetch('https://randomuser.me/api/').then(response =>
      response.json()
    )

    yield put(getUserSuccess(data.results[0]))
    // Обновить инфу о юзере
  } catch (e) {
    // Обновить информацию или ошибке
    yield put(getUserError(e))
  }
}
