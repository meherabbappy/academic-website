import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
    <Navbar className = "sticky-top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand to="/home"><img className = "logo" src='logo1.png' alt="" /></Navbar.Brand>
    <Nav>
      <Link className ="header-name" to="/home">Home</Link>
      <Link className ="header-name" to="/about">About</Link>
      <Link className ="header-name" to="/services">Services</Link>
      <Link className ="header-name" to="/contact">Contact</Link>
    </Nav>
    </Container>
  </Navbar>



        
    )
};

export default Header;