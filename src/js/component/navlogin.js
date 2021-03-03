import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import AnMora from "../../img/MORAnew (1).png";
import "../../styles/home.scss";
import { Nav, Dropdown, DropdownButton, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navlogin = () => {
	const { store, actions } = useContext(Context);

	return (
		<Nav className="navbar menu">
			<Link to="/">
				<img
					className="LOGO"
					src="https://www.5minutesformom.com/wp-content/uploads/2015/08/Star-Wars-Logo.png"
					alt="MORA"
				/>
			</Link>
			<div className="ml-auto">
				<Button href="#Login" variant="outline-light">
					Login
				</Button>
			</div>
		</Nav>
	);
};
