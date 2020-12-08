import { all } from 'redux-saga/effects'
import userSaga from './artistSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
  ])
}