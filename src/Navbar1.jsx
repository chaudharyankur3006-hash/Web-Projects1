import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Home from './Home';
import './Navbar.css'

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navbar1'>
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-2">Travel Pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav1">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/destination">Destination</Nav.Link>
            <Nav.Link href="/tour-packages">Tour Packages</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>
          <div className='d-flex gap-3'>
            <Button variant="primary">
              <i class="fa-solid fa-briefcase"></i>
                Book Now
              </Button>
            <Button variant="light" className="border border-1 d-flex  align-items-center">
                <i class="fa-solid fa-user"></i>
                <Nav.Link href="/Login">
                  Login
                </Nav.Link>
              </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbar1;