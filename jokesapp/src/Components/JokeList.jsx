import React from "react"
import {Card, CardColumns} from "react-bootstrap"

export default function JokeList(props) {
    const {jokes} = props

    return (
        <div>
            <CardColumns>
                {jokes && jokes.map((joke) =>
                    <Card key={joke.id}>
                        <Card.Body>
                            <Card.Title>{joke.title.toUpperCase()}</Card.Title>
                            <Card.Text>{`${joke.body.slice(0, 20)} ...`}</Card.Text>
                        </Card.Body>

                        <Card.Footer style={{textAlign: "right", padding: 5}}>
                        </Card.Footer>
                    </Card>
                )}
            </CardColumns>
        </div>
    )
}