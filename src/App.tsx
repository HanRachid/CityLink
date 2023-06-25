import {useEffect, useState} from 'react';
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
  Card,
  Form,
} from 'react-bootstrap';
import logo from './Pub/Media/CityLinkLogo.png';
function App() {
  return (
    <Navbar data-bs-theme='dark' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>CityLink</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavDropdown title='Signup' id='basic-nav-dropdown'>
              <Card style={{width: '22rem'}}>
                <Card.Body>
                  <Card.Title>Signup</Card.Title>

                  <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type='email' placeholder='Enter email' />
                      <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type='password' placeholder='Password' />
                    </Form.Group>
                    <Form.Group
                      className='mb-3'
                      controlId='formBasicCheckbox'
                    ></Form.Group>
                    <Button variant='primary' type='submit'>
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </NavDropdown>
            <NavDropdown title='Sign in' id='basic-nav-dropdown'>
              <Card style={{width: '22rem'}}>
                <Card.Body>
                  <Card.Title>Sign in</Card.Title>

                  <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type='email' placeholder='Enter email' />
                      <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type='password' placeholder='Password' />
                    </Form.Group>
                    <Form.Group
                      className='mb-3'
                      controlId='formBasicCheckbox'
                    ></Form.Group>
                    <Button variant='primary' type='submit'>
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
