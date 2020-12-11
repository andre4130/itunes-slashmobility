import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { IoIosHeart } from 'react-icons/io'

const FavList = () => {

    const [show, setShow] = useState(false);
    const [favourites, setFavourites] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        var storage = JSON.parse(localStorage.getItem('favourites'));
        setFavourites(storage);
    }, [show])

    return (
        <div>
            <IoIosHeart style={{ color: 'red', height: "30px", width: "30px", marginLeft: "10px" }} onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Favourites List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!favourites.length
                        ?
                        <p>No Favourites added</p>
                        :
                        <div>
                            <ul>
                                {favourites.map(fav => (
                                    <div className="inline" key={fav.artistId}><img src={fav.artworkUrl30} alt={fav.trackName} /> <span><b>{fav.artistName}</b></span> - <span>{fav.trackName}</span><hr /></div>
                                ))
                                }
                            </ul>
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </div >
    );
};

export default FavList;



