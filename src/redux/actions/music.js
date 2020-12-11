import * as type from '../types';

export function getMusic(artistName) {
    console.log('in actions', artistName)
    return{
        type: type.GET_MUSIC_REQUESTED,
        artistName
    }
}