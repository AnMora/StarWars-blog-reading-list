import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "./store/appContext";
import { Container, Row, Col, Card, CardDeck, InputGroup, FormControl, Button } from "react-bootstrap";
import "../styles/home.scss";

export const Login = () => {
	const { actions, store } = useContext(Context);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);

	const actionRegister = e => {
		if (username === "" || email === "" || password === "") {
			alert("ActionRegister: Faltan datos por llenar!");
		} else {
			alert(username, email);
			actions.validacionRegistro(username, email, password);
		}
	};

	const actionLogin = e => {
		if (email === "" || password === "") {
			alert("Actionlogin: Faltan datos por llenar!");
		} else {
			alert(email);
			actions.validacionLogin(email, password);
		}
	};

	return (
		<Container>
			<Card className="Card text-light mt-2 mb-2">
				<Card.Img
					variant="top"
					src="https://c4.wallpaperflare.com/wallpaper/943/490/543/star-wars-darth-vader-hd-wallpaper-preview.jpg"
				/>
				<Card.Body>
					<Card.Text className="text-light">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
				</Card.Body>
			</Card>
			<Row>
				<Col className="mt-2 mb-2" id="Login">
					<CardDeck>
						{/* Card para Login */}
						<Card className="Card text-light text-center">
							<Card.Img
								variant="top"
								src="https://images.wallpapersden.com/image/download/knights-of-ren-star-wars_a21mZmqUmZqaraWkpJRnamtlrWZlbWU.jpg"
							/>
							<form onSubmit={e => actionLogin(e)}>
								<Card.Body>
									<Card.Title>Log In</Card.Title>
									<Card.Text>
										<p>Aqui podras hacer el Login a la página si ya estas registrado</p>
										{/* <InputGroup size="sm" className="mb-3">
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroup-sizing-sm">Username</InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
									</InputGroup> */}
										<InputGroup size="sm" className="mb-3">
											<InputGroup.Prepend>
												<InputGroup.Text id="inputGroup-sizing-sm">@email</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												id="email"
												onChange={e => setEmail(e.target.value)}
												aria-label="Small"
												aria-describedby="inputGroup-sizing-sm"
											/>
										</InputGroup>
										<InputGroup size="sm" className="mb-3">
											<InputGroup.Prepend>
												<InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												id="password"
												onChange={e => setPassword(e.target.value)}
												type="password"
												aria-label="Small"
												aria-describedby="inputGroup-sizing-sm"
											/>
										</InputGroup>
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button type="submit" variant="outline-danger">
										Log In
									</Button>
								</Card.Footer>
							</form>
						</Card>
						{/* Card para Register */}
						<Card className="Card text-light text-center">
							<Card.Img variant="top" src="https://wallpaperaccess.com/full/3333882.jpg" />
							<form onSubmit={e => actionRegister(e)}>
								<Card.Body>
									<Card.Title>Register</Card.Title>
									<Card.Text>
										<p>Aquí podrás hacer el Registro para poder acceder a la página</p>
										<InputGroup size="sm" className="mb-3">
											<InputGroup.Prepend>
												<InputGroup.Text id="inputGroup-sizing-sm">Username</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												id="username"
												onChange={e => setUsername(e.target.value)}
												aria-label="Small"
												aria-describedby="inputGroup-sizing-sm"
											/>
										</InputGroup>
										<InputGroup size="sm" className="mb-3">
											<InputGroup.Prepend>
												<InputGroup.Text id="inputGroup-sizing-sm">@email</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												onChange={e => setEmail(e.target.value)}
												id="email"
												aria-label="Small"
												aria-describedby="inputGroup-sizing-sm"
											/>
										</InputGroup>
										<InputGroup size="sm" className="mb-3">
											<InputGroup.Prepend>
												<InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
											</InputGroup.Prepend>
											<FormControl
												onChange={e => setPassword(e.target.value)}
												id="password"
												type="password"
												aria-label="Small"
												aria-describedby="inputGroup-sizing-sm"
											/>
										</InputGroup>
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button type="submit" variant="outline-primary">
										Register
									</Button>
								</Card.Footer>
							</form>
							{redirect ? <Redirect to="/home" /> : ""}
						</Card>
					</CardDeck>
				</Col>
			</Row>
		</Container>
	);
};
