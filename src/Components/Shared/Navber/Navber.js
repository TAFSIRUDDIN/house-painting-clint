import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navber = () => {
    const [user, setUser] = useContext(UserContext);
    
    return (
        <Container>
            <Navbar className="bg-white" expand="lg">
            <Link to="/home"><Navbar.Brand as="h1" href="#home">House painting</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Commercial</Nav.Link>
                        <Nav.Link href="#home">About us</Nav.Link>
                        <Nav.Link href="#home">Contact</Nav.Link>
                        <Nav.Link href="#link"><Link to="/dashboard">Dashboard</Link></Nav.Link>
                        <Nav.Link href="#link">{user.name}</Nav.Link>
                    </Nav>
                    <Link to="/login"><Button variant="outline-success">Login <FontAwesomeIcon icon={faSignInAlt} /></Button></Link>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navber;