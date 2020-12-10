import * as type from '../actionTypes';

export function getMusic() {
    return{
        type: type.GET_MUSIC_REQUESTED
    }
}

export function setMusic(songs) {
    return{
        type: type.SET_MUSIC,
        songs
    }
}