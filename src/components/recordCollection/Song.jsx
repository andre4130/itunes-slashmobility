import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import {IoIosHeart, IoIosHeartEmpty} from 'react-icons/io'

const Song = (props) => {

// const [fav, setFav] = ({
//     isFav: false
// })

// onClick={() => setFav(!fav.isFav)}

// const [fav, setFav] = useState([0,1])



    return (
        <Card>
            <Card.Img className="card-img" variant="top" src={props.song.artworkUrl100} />
            <Card.Body>
                <Card.Title>{props.song.trackName}</Card.Title>
                <Card.Text>
                    {props.song.collectionName}
            </Card.Text>
                {props.fav.includes(props.item) ? 
                <IoIosHeart
                    onClick={() => props.removeFav(props.item)}
                    style= {{ color: 'red' }}
                />
              :
                <IoIosHeartEmpty
                    onClick={() => props.addFav(props.item)}
                    style= {{ color: 'red' }}
                />
                     }
            </Card.Body>
        </Card>
    );
};

export default Song;