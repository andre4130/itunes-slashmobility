import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Song from './Song';
import { getMusic } from '../../redux/actions/artists';
import { CardColumns } from 'react-bootstrap'

const UsersComponent = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs.songs);
    const loading = useSelector(state => state.songs.loading);
    const error = useSelector(state => state.songs.error);

    useEffect(() => {
        dispatch(getMusic())
    }, [])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {songs.length > 0 &&
                <CardColumns>
                    {songs.map((song) => (
                        <Song song={song} key={song.id} />
                    ))}
                </CardColumns>
            }
            {songs.length === 0 && !loading && <p>No users Available</p>}
            {error && !loading && <p>{error}</p>}
        </div>
    );
};

export default UsersComponent;