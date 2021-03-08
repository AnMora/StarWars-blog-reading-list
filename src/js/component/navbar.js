import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import AnMora from "../../img/MORAnew (1).png";
import "../../styles/home.scss";
import { Nav, Dropdown, DropdownButton, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<Nav className="navbar">
			<Link to="/home">
				<img
					className="LOGO"
					src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG14.png"
					alt="MORA"
				/>
			</Link>
			<div className="ml-auto">
				{/* <Link to="/"> */}
				<DropdownButton
					id="dropdown-basic-button"
					variant="outline-light"
					title={"Favorites " + store.favorites.length}>
					{store.favorites.length == 0 ? (
						<Dropdown.Item>Empty</Dropdown.Item>
					) : (
						store.favorites.map((favorite, i) => {
							return (
								<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
									{favorite.type == "people" ? (
										<div>
											<i className="fas fa-id-card">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									) : (
										<div>
											<i className="fas fa-globe-americas">
												&nbsp;
												{favorite.name}
											</i>
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</div>
									)}
								</Dropdown.Item>
							);
						})
					)}
				</DropdownButton>
				<Button href="#Logout" variant="outline-light" onClick={actions.logout}>
					Log Out
				</Button>
				{store.boolean ? "" : <Redirect to="/" />}
			</div>
		</Nav>
	);
};
