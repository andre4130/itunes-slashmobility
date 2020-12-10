import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export function getApi(search) {

   // const { artist } = search;

   // console.log("in music saga", artist)
   // const apiUrl = `https://itunes.apple.com/search?term=${artist}&media=music&entity=song&attribute=artistTerm`;
   const apiUrl = `https://itunes.apple.com/search?term=wire&media=music&limit=20&entity=song&attribute=artistTerm`;
   console.log(apiUrl)
   return axios.get(apiUrl)
              .then(response => response.data)
              .catch((error) => {throw error}) 
}

function* fetchMusic(action) {
   try {
      const songs = yield call(getApi, action.artist);
      yield put({type: 'GET_MUSIC_SUCCESS', songs: songs});
   } catch (e) {
      yield put({type: 'GET_MUSIC_FAILED', message: e.message});
   }
}

function* musicSaga() {
   yield takeEvery('GET_MUSIC_REQUESTED', fetchMusic);
}

export default musicSaga;