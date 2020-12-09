import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Song from './Song';
import { getMusic } from '../../redux/actions/artists';
import { CardColumns, CardDeck, CardGroup } from 'react-bootstrap'

const UsersComponent = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs.songs);
    const loading = useSelector(state => state.songs.loading);
    const error = useSelector(state => state.songs.error);

    useEffect(() => {
        dispatch(getMusic())
    }, [])

    const [fav, setFav] = useState([])

    const addFav = (props) => {
        console.log("add", props)
        let tempArray = fav;
        tempArray.push(props)
        setFav([...fav], [tempArray])
        console.log("end of add", fav)
    }

    const removeFav = (props) => {
        console.log("remove props", props)
        let array = fav;
        array.map((item, i) => {
            console.log("remove", item, i)
            if (item === props) {
                array.splice(i, 1);
                console.log("inside if", item)
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