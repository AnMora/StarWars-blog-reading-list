import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, ButtonToolbar, Modal } from "react-bootstrap";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
//import Example from "./readmore";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	return (
		<Container fluid>
			<Row>
				{store.planets.map((arrayplanets, index) => (
					<Col key={index} md={3} className="mt-1 mb-1">
						<Card>
							<Card.Img
								variant="top"
								src="https://images.hdqwalls.com/wallpapers/death-star-planet-star-wars-nt.jpg"
							/>
							<Card.Body>
								<Card.Title>{arrayplanets.name}</Card.Title>
								<Card.Text>
									<strong>Rotacion del Planeta: </strong>
									{arrayplanets.rotation_period}
									<br />
									<strong>Orbita de Planeta: </strong>
									{arrayplanets.orbital_period}
									<br />
									<strong>Terreno del Planeta: </strong>
									{arrayplanets.terrain}
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
												Custom Modal Styling
											</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<p>
												Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
												commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
												atque a dolores quisquam quisquam adipisci possimus laboriosam.
												Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod.
												Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni
												incidunt dolore amet atque facilis ipsum deleniti rem!
											</p>
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
