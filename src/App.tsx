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
} from 'react-bootstrap';
import logo from './Pub/Media/CityLinkLogo.png';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setPosts(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
