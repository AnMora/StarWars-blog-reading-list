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
			<Card className="text-center mt-1 mb-1">
				<Card.Img variant="top" src="https://wallpaperaccess.com/full/3399933.jpg" />
				<Card.Body>
					<Card.Title>{element.name}</Card.Title>
					<Card.Text>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar
							facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque
							sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.
							Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
						</p>
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
		</Container>
	);
};
