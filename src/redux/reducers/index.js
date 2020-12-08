import { combineReducers } from 'redux';
import users from './user';
import songs from './music'

const rootReducer = combineReducers({
    users: users,
    songs: songs
});

export default rootReducer;