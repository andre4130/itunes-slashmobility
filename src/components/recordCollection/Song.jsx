import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import {IoIosHeart, IoIosHeartEmpty} from 'react-icons/io'

const Song = (props) => {
    let isFav = false;
    const check = () => {
        for (let i = 0; i < props.fav.length; i++) {
            if (props.fav[i].trackId === props.song.trackId) {
                    return isFav = true;
            } else {
                    isFav = false;
            }
        }
    }
    check()
    
    return (
        <Card>
            <Card.Img className="card-img" variant="top" src={props.song.artworkUrl100} />
            <Card.Body>
                <Card.Title>{props.song.trackName}</Card.Title>
                <Card.Text>
                    {props.song.collectionName}
            </Card.Text>
                {/* {props.fav.includes(props.song.trackId) ?  */}
                {isFav ? 
                <IoIosHeart
                    onClick={() => props.removeFav(props.song)}
                    style= {{ color: 'red' }}
                />
              :
                <IoIosHeartEmpty
                    onClick={() => props.addFav(props.song)}
                    style= {{ color: 'red' }}
                />
                     }
            </Card.Body>
        </Card>
    );
};

export default Song;