import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import '../css/navbar.css';

function Navgbar() {
  return (
    <Navbar className="navb" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className='brand' href="#home">LawFirm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='link' href="#home">Home</Nav.Link>
            <Nav.Link className='link' href="#link">Link</Nav.Link>
            <NavDropdown title={
            <span className="drop">Dropdown</span>
            } id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navgbar;