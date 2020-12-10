import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setMusic } from '../actions/musicActions';
import  store  from '../store'

export function getApi(search) {

   console.log("IN GET API", store)
   // const dispatch = useDispatch();

   // const apiUrl = `https://itunes.apple.com/search?term=${artist}&media=music&entity=song&attribute=artistTerm`;
   const apiUrl = `https://itunes.apple.com/search?term=${search}&media=music&limit=20&entity=song&attribute=artistTerm`;
   console.log(apiUrl)
   return axios.get(apiUrl)
              .then(response => store.dispatch(setMusic(response.data)))
              .catch((error) => {throw error})            
}

function* fetchMusic() {
   try {
      const songs = yield call(getApi );
      yield put({type: 'GET_MUSIC_SUCCESS', songs: songs});
   } catch (e) {
      yield put({type: 'GET_MUSIC_FAILED', message: e.message});
   }
}

export function* musicSaga() {
   yield takeEvery('GET_MUSIC_REQUESTED', fetchMusic);
}

export default musicSaga;