import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
const Header = () => {
    const [ user ] = useAuthState(auth);
    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">The Bike House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link href="#categories">Categories</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        
                        {
                            user?
                                <>
                                    <Nav.Link as={Link} to='/inventory' >Inventory</Nav.Link>
                                    <Nav.Link as={Link} to='/my-items' >My Item</Nav.Link>
                                    <a onClick={handleLogout} className="btn btn-info text-danger">Logout</a>
                                </>
                            :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {/* <Nav.Link as={Link} to='/login' >Login</Nav.Link> */}
                        
                    
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;