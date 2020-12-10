import React, { useState, useEffect } from 'react';
import { Navbar, FormControl, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {IoIosHeart, IoIosHeartEmpty} from 'react-icons/io'
import { getMusic } from '../../redux/actions/musicActions';
import { getApi, fetchMusic, musicSaga } from '../../redux/sagas/musicSaga';

//Components
import FavList from '../favourites/FavList'

const Searchbar = () => {
    // const dispatch = useDispatch();
    // const songs = useSelector(state => state.songs.songs);
    // const loading = useSelector(state => state.songs.loading);
    // const error = useSelector(state => state.songs.error);

    
    //useState to change the state of the artist
    const [search, setSearch] = useState('');

    //this function reads the content of the input field
    const handleSearch = e => {
        setSearch(
            e.target.value
        )
    };

    //this state manages if an error is produced in the field form
    const [errorSearch, setError] = useState(false);

    // Search function 
    const searchInput = (e) => {
        e.preventDefault();
  
        if (search.trim() === "") {
            setError(true);
            return;
        }
        // if the function does not trigger an error (artist is fullfiled), then setError is false and the function triggers setArtistSearch
        setError(false);
        console.log("in searchInput", search);
        ; 
        getApi(search)
    }

    //     useEffect(() => {
    //         dispatch(getMusic(search))
    // }, [search])

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
                        value={search}
                        className="mr-sm-2"
                    />
                    <Button type="button" variant="outline-secondary" onClick={(e) => searchInput(e)}>Search</Button>
                </Form>
            </Navbar.Collapse>
            <FavList></FavList>
        </Navbar>
    );
};

export default Searchbar;
