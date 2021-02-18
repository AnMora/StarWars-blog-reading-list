import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, ButtonToolbar, Modal } from "react-bootstrap";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
//import Example from "./readmore";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	return (
		<Container fluid>
			<Row>
				{store.vehicles.map((arrayvehicles, index) => (
					<Col key={index} md={3} className="mt-1 mb-1">
						<Card>
							<Card.Img variant="top" src="https://wallpaperaccess.com/full/168208.jpg" />
							<Card.Body>
								<Card.Title>{arrayvehicles.name}</Card.Title>
								<Card.Text>
									<strong>Modelo del Vehiculo: </strong>
									{arrayvehicles.model}
									<br />
									<strong>Costo en creditos </strong>
									{arrayvehicles.cost_in_credits}
									<br />
									<strong>Maximo de velocidad: </strong>
									{arrayvehicles.max_atmosphering_speed}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<ButtonToolbar className="d-flex justify-content-between">
									<Button variant="primary" onClick={() => setShow(true)}>
										{/* <Button variant="primary" onClick={handleShow}> */}
										Read more..
									</Button>
									{/* <Link onClick={() => actions.addFavorite(info.name, "planets")}> */}
									<Button variant="link">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24">
											<path d="M17.867 3.493l4.133 3.444v5.127l-10 8.333-10-8.334v-5.126l4.133-3.444 5.867 3.911 5.867-3.911zm.133-2.493l-6 4-6-4-6 5v7l12 10 12-10v-7l-6-5z" />
										</svg>
									</Button>
									{/* </Link> */}
									<Modal
										show={show}
										onHide={() => setShow(false)}
										dialogClassName="modal-90w"
										aria-labelledby="example-custom-modal-styling-title">
										<Modal.Header closeButton>
											<Modal.Title id="example-custom-modal-styling-title">
												{arrayvehicles.name}
											</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<p>{arrayvehicles.max_atmosphering_speed}</p>
										</Modal.Body>
										<Modal.Footer>
											<Button variant="secondary" onClick={handleClose}>
												Close
											</Button>
										</Modal.Footer>
									</Modal>
								</ButtonToolbar>
							</Card.Footer>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

//Codigo para anadir a favoritos
// addFavorite: (name, type) => {
// 				const store = getStore();
// 				let count = 0;
// 				store.favorites.map(each => {
// 					if (each.name == name) {
// 						count = 1;
// 					}
// 				});
// 				if (count == 0) {
// 					setStore({
// 						favorites: [
// 							...store.favorites,
// 							{
// 								name: name,
// 								type: type
// 							}
// 						]
// 					});
// 				}
// 			},

// 			deleteFavorite: id => {
// 				const store = getStore();

// 				const newFavorites = store.favorites.filter((item, i) => i !== id);
// 				setStore({ favorites: newFavorites });
// 			}
