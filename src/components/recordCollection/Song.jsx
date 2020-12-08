import React, {setState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import heart from '../../assets/svg/heart.svg';

const Song = (props) => {

// const [fav, setFav] = ({
//     isFav: false
// })

// onClick={() => setFav(!fav.isFav)}
    return (
        <Card>
            <Card.Img className="card-img" variant="top" src={props.song.artworkUrl100} />
            <Card.Body>
                <Card.Title>{props.song.trackName}</Card.Title>
                <Card.Text>
                    {props.song.collectionName}
            </Card.Text>
                <img src={heart}  alt=""/>
            </Card.Body>
        </Card>
    );
};

export default Song;