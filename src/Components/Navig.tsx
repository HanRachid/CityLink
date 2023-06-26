import {useEffect, useState} from 'react';
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

function Navig() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = {
      user: {
        email: email,
        password: password,
      },
    };

    fetch('http://localhost:3000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or error response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const handleSign = (e: any) => {
    e.preventDefault();

    const formData = {
      user: {
        email: email,
        password: password,
      },
    };

    fetch('http://localhost:3000/users/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
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

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>

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
                  <Form onSubmit={handleSign}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
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

export default Navig;
