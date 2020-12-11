import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Song from './Song';
import { CardColumns } from 'react-bootstrap'

const UsersComponent = () => {

    const songs = useSelector(state => state.songs.songs);
    const loading = useSelector(state => state.songs.loading);
    const error = useSelector(state => state.songs.error);

    const [fav, setFav] = useState([])

    const addFav = (props) => {

        const { artistName, trackName, trackId, artworkUrl30 } = props;
        let tempArray = fav;
        let tempObject = {
            artistName: artistName,
            trackName: trackName,
            trackId: trackId,
            artworkUrl30: artworkUrl30
        }
        tempArray.push(tempObject)
        setFav([...fav], [tempArray])
    }

    const removeFav = (props) => {
        let array = fav;
        array.map((item, i) => {
            if (item.trackId === props.trackId) {
                array.splice(i, 1);
            }
            setFav([...array]);
        })
    }

    return (
        <div className="container-fluid">
            {loading && <p>Loading...</p>}
            {songs.length > 0 &&
                <div className="container-fluid">
                    <CardColumns>
                        {songs.map((song, i) => (
                            <Song className="card" song={song} key={i} item={i} fav={fav} addFav={addFav} removeFav={removeFav} />
                        ))}
                    </CardColumns>
                </div>

            }
            {songs.length === 0 && !loading && <p>No users Available</p>}
            {error && !loading && <p>{error}</p>}
        </div>
    );
};

export default UsersComponent;