import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';

export default function JokeList(props) {
  const { jokes } = props;

  return (
    <div>
      <CardColumns>
        {jokes &&
          jokes.map((joke) => (
            <Card border={joke.safe ? 'success' : 'danger'} key={joke.id}>
              <Card.Body>
                <Card.Title>{joke.joke}</Card.Title>

                <Card.Title>{joke.setup}</Card.Title>
                <Card.Text>{joke.delivery}</Card.Text>
              </Card.Body>

              <Card.Footer style={{ textAlign: 'center', padding: 5 }}>
                <Card.Text>{joke.category}</Card.Text>
              </Card.Footer>
            </Card>
          ))}
      </CardColumns>
    </div>
  );
}
