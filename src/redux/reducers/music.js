import * as type from '../types';

const initialState = {
  songs: [],
  loading: false,
  error: null,
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_MUSIC_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_MUSIC_SUCCESS:
      return {
        ...state,
        loading: false,
        songs: action.songs.results
      }
    case type.GET_MUSIC_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}