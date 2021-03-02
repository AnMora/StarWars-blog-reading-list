import React from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Row, Col, Card, CardDeck, InputGroup, FormControl, Button } from "react-bootstrap";
import "../styles/login.scss";

export const Login = () => (
	<Container>
		<Card className="mt-2 mb-2">
			<Card.Img
				variant="top"
				src="https://c4.wallpaperflare.com/wallpaper/943/490/543/star-wars-darth-vader-hd-wallpaper-preview.jpg"
			/>
			<Card.Body>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
			</Card.Body>
		</Card>
		<Row>
			<Col className="mt-2 mb-2" id="Login">
				<CardDeck>
					{/* Card para Login */}
					<Card className="text-center">
						<Card.Img
							variant="top"
							src="https://images.wallpapersden.com/image/download/knights-of-ren-star-wars_a21mZmqUmZqaraWkpJRnamtlrWZlbWU.jpg"
						/>
						<Card.Body>
							<Card.Title>Log In</Card.Title>
							<Card.Text>
								<p>Aqui podras hacer el Login a la página si ya estas registrado</p>
								<InputGroup size="sm" className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
								</InputGroup>
								<InputGroup size="sm" className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroup-sizing-sm">@email</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
								</InputGroup>
								<InputGroup size="sm" className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl
										type="password"
										aria-label="Small"
										aria-describedby="inputGroup-sizing-sm"
									/>
								</InputGroup>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Link to={`/home`}>
								<Button variant="outline-danger">Log In</Button>
							</Link>
						</Card.Footer>
					</Card>
					{/* Card para Register */}
					<Card className="text-center">
						<Card.Img variant="top" src="https://wallpaperaccess.com/full/3333882.jpg" />
						<Card.Body>
							<Card.Title>Register</Card.Title>
							<Card.Text>
								<p>Aquí podrás hacer el Registro para poder acceder a la página</p>
								<InputGroup size="sm" className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
								</InputGroup>
								<InputGroup size="sm" className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroup-sizing-sm">@email</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
								</InputGroup>
								<InputGroup size="sm" className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
									</InputGroup.Prepend>
									<FormControl
										type="password"
										aria-label="Small"
										aria-describedby="inputGroup-sizing-sm"
									/>
								</InputGroup>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Link to={`/home`}>
								<Button variant="outline-primary">Register</Button>
							</Link>
						</Card.Footer>
					</Card>
				</CardDeck>
			</Col>
		</Row>
	</Container>
);
