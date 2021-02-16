import React from "react";
import { Link } from "react-router-dom";
import AnMora from "../../img/MORAnew (1).png";
import "../../styles/home.scss";
//import { Col, Row } from "react-bootstrap";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<img className="LOGO" src={AnMora} alt="MORA" />
			</Link>
			<div className="ml-auto">
				<Link to="/planets">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
