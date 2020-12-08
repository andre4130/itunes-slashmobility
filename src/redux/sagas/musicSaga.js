import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://itunes.apple.com/search?term=wire&media=music&entity=song&attribute=artistTerm`;

// the correct form for api call is 
  // 'https://itunes.apple.com/search?term={artist}&media=music&entity=song&attribute=artistTerm'

function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchMusic(action) {
   try {
      const songs = yield call(getApi);
      yield put({type: 'GET_MUSIC_SUCCESS', songs: songs});
      console.log("in saga", songs)
   } catch (e) {
      yield put({type: 'GET_MUSIC_FAILED', message: e.message});
   }
}

function* musicSaga() {
   yield takeEvery('GET_MUSIC_REQUESTED', fetchMusic);
}

export default musicSaga;