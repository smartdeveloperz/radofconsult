import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { NavbarStyled } from '../styles/Navbar/NavbarStyled.styled'


const NavBar = () => {
  return (
    <>
      {['lg'].map((expand) => (      
          <NavbarStyled key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
              <Navbar.Brand className="brand" href="#">Radof Consult</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="t" id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Radof Consult
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="navlist justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className="link" href="/">Home</Nav.Link>
                    <Nav.Link className="link" href="about-us">About Us</Nav.Link>
                    <Nav.Link className="link" href="services">Services</Nav.Link>
                    <NavDropdown
                      title="Ranges Of House"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className='dropdown-content'
                      href="ranges"
                    >
                      <NavDropdown.Item className='nav-dropdown-item' href="/our-ranges-of-houses">Our Ranges of Houses</NavDropdown.Item>
                      <NavDropdown.Item className='nav-dropdown-item' href="/why-build-with-us">
                        Why Build With Us?
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className='nav-dropdown-item' href="/house-purchase-procedure">
                        House Purchase Procedure
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Form"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      className='dropdown-content'
                    >
                      <NavDropdown.Item className='nav-dropdown-item' href="#action3">Fill Form</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className='nav-dropdown-item' href="#action4">
                      Download Form
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="link" href="contact">Contact</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
        </NavbarStyled>
      ))}
    </>
  )
}

export default NavBar


