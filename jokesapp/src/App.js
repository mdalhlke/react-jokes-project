import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import JokeList from "./Components/JokeList";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/Filter";
import Blacklisted from "./Components/Blacklisted";
import GenerateButton from "./Components/GenerateButton";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://v2.jokeapi.dev/joke/Any?amount=10&safe-mode")
      .then((response) => response.json())
      .then((json) => {
        setJokes(json.jokes);
        setLoading(false);
      });
  }, [setLoading, setJokes]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
        <Col xs lg="10">
          <h1 style={{ textAlign: "center" }}>Joke Generator</h1>
        </Col>
      </Row>

      <Row className="justify-content-md-center" style={{ marginTop: 20 }}>
        <Col xs lg="10">
          <GenerateButton />
        </Col>
      </Row>

      <Row className="justify-content-md-center" style={{ marginTop: 20 }}>
        <Col xs lg="10">
          <SearchBar />
        </Col>
      </Row>

      <Row className="justify-content-md-center" style={{ marginTop: 200 }}>
        <Col xs lg="20">
          <JokeList jokes={jokes} />
        </Col>
      </Row>

      <Row classname="justify-content-md-center" style={{ marginTop: -925 }}>
        <Col xs lg="20">
          <h4 style={{ textAlign: "left" }}>Category Types</h4>
          <Filter />
          <h4 style={{ textAlign: "left" }}>Blacklisted Types</h4>
          <Blacklisted />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
