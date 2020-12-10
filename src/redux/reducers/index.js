import { combineReducers } from 'redux';
import songs from './musicReducers'

const rootReducer = combineReducers({
    songs: songs
});

export default rootReducer;