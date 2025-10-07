import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

export const Header = () => {
  return (
    <Navbar  expand="lg" variant="dark" className="custom-navbar shadow-sm">
      <Container className="Container">
        
        {/* Brand Logo */}
      
    <Navbar.Brand as={NavLink} to="/" className="brand-logo">
      <img src="/worldImagebgRemover.png" alt="" />
    </Navbar.Brand>

        {/* Hamburger Toggle (auto shows on small screens) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>

        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="ms-auto nav-links" >
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item">
              About
            </NavLink>
            <NavLink to="/country" className="nav-item">
              Countries
            </NavLink>
            <NavLink to="/contact" className="nav-item">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
