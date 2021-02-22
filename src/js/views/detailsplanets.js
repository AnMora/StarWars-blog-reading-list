import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, ButtonToolbar, Modal } from "react-bootstrap";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
//import Example from "./readmore";

export const DetailsPlanets = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.planets[params.theid];

	return (
		<Container fluid>
			<Card className="text-center mt-1 mb-1">
				<Card.Img
					variant="top"
					src="https://images.hdqwalls.com/wallpapers/death-star-planet-star-wars-nt.jpg"
				/>
				<Card.Body>
					<Card.Title>{element.name}</Card.Title>
					<Card.Text>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar
							facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque
							sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.
							Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
						</p>
						<strong>Rotacion del Planeta: </strong>
						{element.rotation_period}
						<br />
						<strong>Orbita de Planeta: </strong>
						{element.orbital_period}
						<br />
						<strong>Terreno del Planeta: </strong>
						{element.terrain}
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};
