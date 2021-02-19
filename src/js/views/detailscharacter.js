import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, ButtonToolbar, Modal } from "react-bootstrap";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
//import Example from "./readmore";

export const DetailsCharacter = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.characters[params.theid];

	return (
		<Container fluid>
			<Row>
				<Col md={3} className="mt-1 mb-1">
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
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
