import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, ButtonToolbar } from "react-bootstrap";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid>
			<Row>
				{store.vehicles.map((element, index) => (
					<Col key={index} md={3} className="mt-1 mb-1">
						<Card>
							<Card.Img variant="top" src="https://wallpaperaccess.com/full/168208.jpg" />
							<Card.Body>
								<Card.Title>{element.name}</Card.Title>
								<Card.Text>
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
							<Card.Footer>
								<ButtonToolbar className="d-flex justify-content-between">
									<Link to={`/detailsvehicles/${index}`}>
										<Button variant="primary">Read more..</Button>
									</Link>
									<Link onClick={() => actions.addFavorite(vehicles.name, "vehicles")}>
										<Button className="outline-danger">
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
			</Row>
		</Container>
	);
};

Vehicles.propTypes = {
	info: PropTypes.string
};
