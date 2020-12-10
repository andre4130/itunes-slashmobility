import React, { useState, useEffect } from 'react';
import { Navbar, FormControl, Form, Button } from 'react-bootstrap';

import { getApi } from '../../redux/sagas/musicSaga';


const Searchbar = () => {

    //useState to change the state of the artist
    const [search, setSearch] = useState({
        artist: ''
    });

    //this function reads the content of the input field
    const handleSearch = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };

    //this state manages if an error is produced in the field form
    const [error, setError] = useState(false);
    const { artist } = search;

    // Search function 
    const searchInput = (e) => {
        e.preventDefault();
  
        if (artist.trim() === "") {
            setError(true);
            return;
        }
        // if the function does not trigger an error (artist is fullfiled), then setError is false and the function triggers setArtistSearch
        setError(false);
        console.log("in searchInput", search);
        getApi(search);
    }


    return (
        <Navbar bg="light" expand="lg">
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
                    />
                    <Button variant="outline-secondary" onClick={(e) => searchInput(e)}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Searchbar;
