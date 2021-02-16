import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardDeck, CardGroup, CardImg, Button } from "react-bootstrap";
import "../../styles/home.scss";

export const Information = () => (
	<CardDeck className="m-1">
		<Card>
			<Card.Img variant="top" src="https://i.redd.it/fjsz8h2q8yv41.jpg" />
			<Card.Body>
				<Card.Title>Card title</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary">Go somewhere</Button>
			</Card.Footer>
		</Card>
		<Card>
			<Card.Img variant="top" src="https://i.redd.it/fjsz8h2q8yv41.jpg" />
			<Card.Body>
				<Card.Title>Card title</Card.Title>
				<Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary">Go somewhere</Button>
			</Card.Footer>
		</Card>
		<Card>
			<Card.Img variant="top" src="https://i.redd.it/fjsz8h2q8yv41.jpg" />
			<Card.Body>
				<Card.Title>Card title</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					card has even longer content than the first to show that equal height action.
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary">Go somewhere</Button>
			</Card.Footer>
		</Card>
		<Card>
			<Card.Img variant="top" src="https://i.redd.it/fjsz8h2q8yv41.jpg" />
			<Card.Body>
				<Card.Title>Card title</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					card has even longer content than the first to show that equal height action.
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary">Go somewhere</Button>
			</Card.Footer>
		</Card>
	</CardDeck>
);

{
	/* <Card className="m-1 col-md-3"      >
			<Card.Img variant="top" src="https://i.redd.it/fjsz8h2q8yv41.jpg" />
			<Card.Body>
				<Card.Title>Card title</Card.Title>
				<Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary">Go somewhere</Button>
			</Card.Footer>
		</Card>
		<Card className="m-1 col-md-3"      >
			<Card.Img variant="top" src="https://i.redd.it/fjsz8h2q8yv41.jpg" />
			<Card.Body>
				<Card.Title>Card title</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					card has even longer content than the first to show that equal height action.
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button variant="primary">Go somewhere</Button>
			</Card.Footer>
		</Card> */
}
