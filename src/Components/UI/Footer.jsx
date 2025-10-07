import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Footer.css"


export const Footer =()=> {
  return (
    <footer className="footer  text-light py-4 mt-5">
      <Container>
        <Row>
          {/* Brand / About */}
          <Col md={4} className="mb-3">
          <img src="/worldImagebgRemover.png" alt="" />
            <p>
             Here you can Know About the Countries.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="footer-link">Home</NavLink></li>
              <li><NavLink to="/about" className="footer-link">About</NavLink></li>
              <li><NavLink to="/country" className="footer-link">Countries</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">Contacts</NavLink></li>
            </ul>
          </Col>

          {/* Contact & Social */}
          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p>Email: support@mywebsite.com</p>
            <p>Phone: +92-300-1234567</p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="footer-icon"><FaFacebook /></a>
              <a href="https://twitter.com" className="footer-icon"><FaTwitter /></a>
              <a href="https://instagram.com" className="footer-icon"><FaInstagram /></a>
              <a href="https://linkedin.com" className="footer-icon"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} MyMovies. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}


