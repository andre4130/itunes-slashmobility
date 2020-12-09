import React, { useState, useEffect } from 'react';
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

    const [fav, setFav] = useState([])

    const addFav = ( props ) => {
        let tempArray = fav;
        tempArray.push(props)
        console.log(tempArray)
        setFav([...fav], [tempArray])
        // setFav(...fav, props)
        }

    const removeFav = ( props ) => {
        console.log('i am remove', props)
    }

    return (
        <div className="container-fluid">
            {loading && <p>Loading...</p>}
            {songs.length > 0 &&
                <CardColumns>
                    {songs.map((song, i) => (
                        <Song className="card" song={song} key={song.id} item={i} fav={fav} addFav={addFav} removeFav={removeFav}/>
                    ))}
                </CardColumns>
            }
            {songs.length === 0 && !loading && <p>No users Available</p>}
            {error && !loading && <p>{error}</p>}
        </div>
    );
};

export default UsersComponent;