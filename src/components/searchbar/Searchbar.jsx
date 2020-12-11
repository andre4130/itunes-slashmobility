import React, { useState } from 'react';
import { Navbar, FormControl, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

//Redux Import
import { getMusic } from '../../redux/actions/music';

//Components
import FavList from '../favourites/FavList'

const Searchbar = () => {

    const [search, setSearch] = useState({
        artist: ''
    });

    const handleSearch = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            dispatch(getMusic(artist));
        }
    }

    const { artist } = search;

    const dispatch = useDispatch();
    const handleCall = (e) => {
        e.preventDefault();
        dispatch(getMusic(artist))
    }
    return (
        <Navbar expand="lg" sticky="top">
            <Navbar.Brand href="#home">iTunes Search</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Artist Name"
                        name="artist"
                        onChange={handleSearch}
                        value={artist}
                        className="mr-sm-2"
                        onKeyPress={handleKeyPress}
                    />
                    <Button type="button" variant="light" onClick={(e) => handleCall(e)}>Api Call</Button>
                </Form>
            </Navbar.Collapse>
            <FavList></FavList>
        </Navbar>
    );
};

export default Searchbar;
