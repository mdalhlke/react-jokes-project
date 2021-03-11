import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import JokeList from './Components/JokeList';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import Blacklisted from './Components/Blacklisted';
import GenerateButton from './Components/GenerateButton';
import SafeMode from './Components/SafeMode';

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({
    Programming: true,
    Miscellaneous: true,
    Dark: true,
    Pun: true,
    Spooky: true,
    Christmas: true,
  });
  const [blacklist, setBlacklist] = useState({
    nsfw: true,
    religious: true,
    political: true,
    racist: true,
    sexist: true,
    explicit: true,
  });
  const [safe, setSafe] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://v2.jokeapi.dev/joke/Any?amount=10&safe-mode')
      .then((response) => response.json())
      .then((json) => {
        setJokes(json.jokes);
        setLoading(false);
      });
  }, [setLoading, setJokes]);

  function updateSearch(searchString) {
    setSearch(searchString);
  }

  function getFilters(filters) {
    setFilter(filters);
  }

  function getBlacklist(blacklists) {
    setBlacklist(blacklists);
  }

  function getSafe(safeMode) {
    setSafe(safeMode);
  }

  function handleClick() {
    getJokes(filter, blacklist, search, safe);
  }

  function getJokes(activeFilters, activeBlacklist, search, safeMode) {
    let filterInput = [];
    let blacklistInput = [];

    for (const key in activeFilters) {
      if (activeFilters[key]) {
        filterInput.push(key);
      }
    }

    for (const key in activeBlacklist) {
      if (activeBlacklist[key]) {
        blacklistInput.push(key);
      }
    }

    fetch(
      `https://v2.jokeapi.dev/joke/${filterInput.join(
        ','
      )}?blacklist=${blacklistInput.join(',')}&contains=${search}&amount=10${
        safeMode ? '&safe-mode' : ''
      }`
    )
      .then((response) => response.json())
      .then((json) => {
        setJokes(json.jokes);
        setLoading(false);
      });
  }

  if (loading) {
    return <Spinner animation='border' style={{ margin: '50%' }} />;
  }

  return (
    <Container>
      <Row className='justify-content-md-center' style={{ marginTop: 60 }}>
        <Col xs lg='10'>
          <h1 style={{ textAlign: 'center' }}>Joke Generator</h1>
        </Col>
      </Row>

      <Row className='justify-content-md-center' style={{ marginTop: 20 }}>
        <Col xs lg='10'>
          <SearchBar updateSearch={updateSearch} />
        </Col>
      </Row>

      <Row className='justify-content-md-center' style={{ marginTop: 20 }}>
        <Col xs lg='20'>
          <h4 style={{ textAlign: 'left' }}>Category Types</h4>
          <Filter getFilters={getFilters} />
          <h4 style={{ textAlign: 'left' }}>Blacklisted Types</h4>
          <Blacklisted getBlacklist={getBlacklist} getSafe={getSafe} />
        </Col>
      </Row>

      <Row className='justify-content-md-center' style={{ marginTop: 20 }}>
        <Col xs lg='20'>
          <h4 style={{ textAlign: 'left' }}>Safe Mode</h4>
          <SafeMode getSafe={getSafe} />
        </Col>
      </Row>

      <Row className='justify-content-md-center'>
        <Col xs lg='10'>
          <div onClick={handleClick}>
            <GenerateButton />
          </div>
        </Col>
      </Row>

      <Row className='justify-content-md-center' style={{ paddingTop: 20 }}>
        <Col xs lg='20'>
          <JokeList jokes={jokes} />
        </Col>
      </Row>
    </Container>
  );
}
