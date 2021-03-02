import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardDeck, Button } from "react-bootstrap";
import "../styles/home.scss";

export const Login = () => (
	<Container>
		<Row>
			<Col className="mt-5 mb-5">
				<CardDeck>
					<Card>
						<Card.Img
							variant="top"
							src="https://www.xtrafondos.com/descargar.php?id=3654&resolucion=1920x1080"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Link to={`/home`}>
								<Button variant="primary">Log In</Button>
							</Link>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src="https://www.xtrafondos.com/descargar.php?id=3654&resolucion=1920x1080"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This card has supporting text below as a natural lead-in to additional content.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Link to={`/home`}>
								<Button variant="primary">Register</Button>
							</Link>
						</Card.Footer>
					</Card>
				</CardDeck>
			</Col>
		</Row>
	</Container>
);
