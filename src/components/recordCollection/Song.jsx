import React from 'react';
import { Card } from 'react-bootstrap'

const Song = (props) => {
    return (
        <Card>
            <Card.Img className="card-img" variant="top" src={props.song.artworkUrl100} />
            <Card.Body>
                <Card.Title>{props.song.trackName}</Card.Title>
                <Card.Text>
                    {props.song.collectionName}
            </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Song;