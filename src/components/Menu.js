import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Nav, Navbar,} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/user-register">UserRegisterPage</NavLink>
                        <NavLink to='/users'>UsersListPage</NavLink>
                        <NavLink to='/'>MainPage</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Menu;