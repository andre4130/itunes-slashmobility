import { all } from 'redux-saga/effects'
import userSaga from './artistSaga';
import musicSaga from './musicSaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
    musicSaga()
  ])
}