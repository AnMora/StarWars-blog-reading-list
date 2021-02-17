import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, ButtonToolbar } from "react-bootstrap";
import "../../styles/home.scss";

export const Information = () => (
	<Container fluid>
		<Row>
			{Array.from({ length: 12 }).map((_, index) => (
				<Col key={index} md={3} className="mt-1 mb-1">
					<Card>
						<Card.Img variant="top" src="https://i.redd.it/fjsz8h2q8yv41.jpg" />
						{/* {info.image} */}
						<Card.Body>
							<Card.Title>Hola</Card.Title>
							{/* {info.name} */}
							<Card.Text>
								{/* {info.gender}
								{info.homeworld}
								{info.vehicles} */}
								Hola
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<ButtonToolbar className="d-flex justify-content-between">
								<Link to="/readmore">
									<Button variant="outline-info">read more..</Button>
								</Link>
								<Link onClick={() => actions.addFavorite(info.name, "planets")}>
									<Button variant="link">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24">
											<path d="M17.867 3.493l4.133 3.444v5.127l-10 8.333-10-8.334v-5.126l4.133-3.444 5.867 3.911 5.867-3.911zm.133-2.493l-6 4-6-4-6 5v7l12 10 12-10v-7l-6-5z" />
										</svg>
									</Button>
								</Link>
							</ButtonToolbar>
						</Card.Footer>
					</Card>
				</Col>
			))}
			;
		</Row>
	</Container>
);
