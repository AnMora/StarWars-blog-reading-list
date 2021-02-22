import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, ButtonToolbar } from "react-bootstrap";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Character = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid>
			<Row>
				{store.characters.map((element, index) => (
					<Col key={index} md={3} className="mt-1 mb-1">
						<Card>
							<Card.Img variant="top" src="https://wallpaperaccess.com/full/3399933.jpg" />
							<Card.Body>
								<Card.Title>{element.name}</Card.Title>
								<Card.Text>
									<strong>Genero: </strong>
									{element.gender}
									<br />
									<strong>Color de Pelo: </strong>
									{element.hair_color}
									<br />
									<strong>Color de Piel: </strong>
									{element.skin_color}
									<br />
									<strong>Color de Ojos: </strong>
									{element.eye_color}
									<br />
									<strong>Nacimiento: </strong>
									{element.birth_year}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<ButtonToolbar className="d-flex justify-content-between">
									<Link to={`/detailscharacter/${index}`}>
										<Button variant="primary">Read more..</Button>
									</Link>
									<Button
										className="outline-danger"
										onClick={() => actions.addFavorite(element.name, "characters")}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24">
											<path d="M17.867 3.493l4.133 3.444v5.127l-10 8.333-10-8.334v-5.126l4.133-3.444 5.867 3.911 5.867-3.911zm.133-2.493l-6 4-6-4-6 5v7l12 10 12-10v-7l-6-5z" />
										</svg>
									</Button>
								</ButtonToolbar>
							</Card.Footer>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

// Character.propTypes = {
// 	info: PropTypes.string
// };
