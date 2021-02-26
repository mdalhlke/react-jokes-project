import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import JokeList from './Components/JokeList';

import './App.css';
import SearchBar from './Components/SearchBar';

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setJokes(json);
        setLoading(false);
      });
  }, [setLoading, setJokes]);

  if (loading) {
    return <Spinner animation='border' />;
  }

  return (
    <Container>
      <Row className='justify-content-md-center' style={{ marginTop: 60 }}>
        <Col xs lg='2'>
          <h1 style={{ textAlign: 'center' }}>Joke Generator</h1>
        </Col>
      </Row>

      <Row className='justify-content-md-center' style={{ marginTop: 20 }}>
        <Col xs lg='2'>
          <SearchBar />
        </Col>
      </Row>

      <Row className='justify-content-md-center' style={{ marginTop: 20 }}>
        <Col xs lg='2'>
          <JokeList jokes={jokes} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
