import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import JokeList from './Components/JokeList';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import Blacklisted from './Components/Blacklisted';
import GenerateButton from './Components/GenerateButton';

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);
  const [blacklist, setBlacklist] = useState([]);

  // const filters = [
  //   'Programming',
  //   'Miscellaneous',
  //   'Dark',
  //   'Pun',
  //   'Spooky',
  //   'Christmas',
  // ];
  // const blacklists = [
  //   'nsfw',
  //   'religious',
  //   'political',
  //   'racist',
  //   'sexist',
  //   'explicit',
  // ];

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

  function handleClick() {
    getJokes(filter, blacklist, search);
    //console.log(search);
    //console.log(filter);
    //console.log(blacklist);
  }

  function getJokes(activeFilters, activeBlacklist, search) {
    let filterInput = [];
    let blacklistInput = [];

    // for (let i = 0; i < activeFilters.length; i++) {
    //   activeFilters[i] ? filterInput.push(filters[i]) : (i = i);
    //   activeBlacklist[i] ? blacklistInput.push(blacklists[i]) : (i = i);
    // }

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
      )}?blacklist=${blacklistInput.join(',')}&contains=${search}&amount=10`
    )
      .then((response) => response.json())
      .then((json) => {
        setJokes(json.jokes);
        console.log(jokes);
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
          <Blacklisted getBlacklist={getBlacklist} />
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
