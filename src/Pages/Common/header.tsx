import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import './styles.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/expired">Expired Page</Nav.Link>
                        <Nav.Link href="/left">Left Page</Nav.Link>
                        <Nav.Link href="/room">Room Page</Nav.Link>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;