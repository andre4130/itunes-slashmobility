import * as type from '../types';

export function getMusic() {
    return{
        type: type.GET_MUSIC_REQUESTED,
    }
}