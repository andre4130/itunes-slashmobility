import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { IoIosHeart } from 'react-icons/io'

const FavList = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <IoIosHeart style= {{ color: 'red', height: "30px", width: "30px", marginLeft: "10px"}} onClick={handleShow}/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Favourites List</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal>

        </div >
    );
};

export default FavList;



