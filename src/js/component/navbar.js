import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import AnMora from "../../img/MORAnew (1).png";
import "../../styles/home.scss";
import { Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<Nav className="navbar">
			<Link to="/home">
				<img
					className="LOGO"
					src="https://www.5minutesformom.com/wp-content/uploads/2015/08/Star-Wars-Logo.png"
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
				{/* </Link> */}
			</div>
		</Nav>
	);
};
