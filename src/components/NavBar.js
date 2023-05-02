import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({ currentPage, handlePageChange}) {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#about" onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>Yassin Abasher</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
            <Nav.Link href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>
            <Nav.Link href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}