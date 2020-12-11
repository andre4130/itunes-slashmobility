import * as type from '../types';

export function getMusic(artistName) {
    return {
        type: type.GET_MUSIC_REQUESTED,
        artistName
    }
}