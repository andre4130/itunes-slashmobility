import { combineReducers } from 'redux';
import songs from './music'

const rootReducer = combineReducers({
    songs: songs
});

export default rootReducer;