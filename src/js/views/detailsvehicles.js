import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, ButtonToolbar, Modal } from "react-bootstrap";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
//import Example from "./readmore";

export const DetailsVehicles = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.vehicles[params.theid];

	return (
		<Container fluid>
			<Card className="text-center mt-1 mb-1">
				<Card.Img variant="top" src="https://wallpaperaccess.com/full/168208.jpg" />
				<Card.Body>
					<Card.Title>{element.name}</Card.Title>
					<Card.Text>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar
							facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque
							sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.
							Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
						</p>
						<strong>Modelo del Vehiculo: </strong>
						{element.model}
						<br />
						<strong>Costo en creditos </strong>
						{element.cost_in_credits}
						<br />
						<strong>Maximo de velocidad: </strong>
						{element.max_atmosphering_speed}
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};
