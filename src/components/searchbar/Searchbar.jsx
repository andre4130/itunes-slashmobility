import React, { useState, useEffect } from 'react';
import { Navbar, FormControl, Form, Button } from 'react-bootstrap';


const Searchbar = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">iTunes Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Artist Name" className="mr-sm-2" />
                        <Button variant="outline-secondary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Searchbar;