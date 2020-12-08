import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const apiUrl = `https://itunes.apple.com/search?term=wire&media=music&entity=song&attribute=artistTerm`;

function getApi() {
  return axios.get(apiUrl)
              .then(response => response.data)
              .catch((error) => {throw error})
}

function* fetchMusic(action) {
   try {
      const songs = yield call(getApi);
      yield put({type: 'GET_MUSIC_SUCCESS', songs: songs});
   } catch (e) {
      yield put({type: 'GET_MUSIC_FAILED', message: e.message});
   }
}

function* musicSaga() {
   yield takeEvery('GET_MUSIC_REQUESTED', fetchMusic);
}

export default musicSaga;