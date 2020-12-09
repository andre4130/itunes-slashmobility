import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import {IoIosHeart, IoIosHeartEmpty} from 'react-icons/io'

const Song = (props) => {
    return (
        <Card>
            <Card.Img className="card-img" variant="top" src={props.song.artworkUrl100} />
            <Card.Body>
                <Card.Title>{props.song.trackName}</Card.Title>
                <Card.Text>
                    {props.song.collectionName}
            </Card.Text>
                {props.fav.includes(props.song.trackId) ? 
                <IoIosHeart
                    onClick={() => props.removeFav(props.song.trackId)}
                    style= {{ color: 'red' }}
                />
              :
                <IoIosHeartEmpty
                    onClick={() => props.addFav(props.song.trackId)}
                    style= {{ color: 'red' }}
                />
                     }
            </Card.Body>
        </Card>
    );
};

export default Song;