import React from "react";
import { Link } from "react-router-dom";
//import AnMora from "../../img/MORAnew (1).png";
import "../../styles/home.scss";
import {
	Dropdown,
	DropdownButton,
	DropdownButtonProps,
	DropdownProps,
	DropdownType,
	SplitButton,
	ButtonGroup
} from "react-bootstrap";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-light">
			<Link to="/">
				<img
					className="LOGO"
					src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
					alt="MORA"
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<DropdownButton id="dropdown-basic-button" title="Favoritos">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</DropdownButton>
				</Link>
			</div>
		</nav>
	);
};
