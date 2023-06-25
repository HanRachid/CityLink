import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Row,
  Col,
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Image,
} from 'react-bootstrap';
import logo from './Pub/Media/CityLinkLogo.png';
function App() {
  return (
    <>
      <Container fluid className='gx-0'>
        <Navbar data-bs-theme='dark' className='bg-body-tertiary'>
          <Container className='a'>
            <Navbar.Brand href='#home'>
              {' '}
              <Image src={logo}></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto gap-3 '>
                <Nav.Link className='w-25 text-center fw-bold' href='#home'>
                  Signup
                </Nav.Link>
                <Nav.Link
                  className='w-25 text-center fw-bold mr-5'
                  href='#link'
                  onClick={() => {
                    console.log('acacazfjoziaez');
                  }}
                >
                  Login
                </Nav.Link>
                <NavDropdown
                  className='w-25 text-center fw-bolder'
                  title='Dropdown'
                  id='basic-nav-dropdown'
                >
                  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Container>
        <Row>
          <Col>hey</Col>
          <Col>how</Col>
          <Col>Are</Col>
          <Col>You</Col>
          <Col>Are</Col>
        </Row>
        <Row>
          <Col>hey</Col>
          <Col>how</Col>
          <Col>Are</Col>
          <Col>You</Col>
          <Col>Are</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
