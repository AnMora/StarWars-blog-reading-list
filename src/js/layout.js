import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";
import { Spinner } from "react-bootstrap";

import { Login } from "./login";
import { Navlogin } from "./component/navlogin";
import { Home } from "./views/home";
import { Read } from "./component/readmore";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./component/planets";
import { Character } from "./component/character";
import { Vehicles } from "./component/vehicle";
import injectContext from "./store/appContext";
import { Context } from "./store/appContext";

import { DetailsCharacter } from "./views/detailscharacter";
import { DetailsPlanets } from "./views/detailsplanets";
import { DetailsVehicles } from "./views/detailsvehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		actions.loadCharacters();
		actions.loadPlanets();
		actions.loadVehicles();
	}, []);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Navlogin />
							<Login />
						</Route>
						<Route exact path="/home">
							<Navbar />
							<Home />
						</Route>
						<Route exact path="/character">
							<Navbar />
							<Character />
						</Route>
						<Route exact path="/detailscharacter/:theid">
							<Navbar />
							<DetailsCharacter />
						</Route>
						<Route exact path="/planets">
							<Navbar />
							<Planets />
						</Route>
						<Route exact path="/detailsplanets/:theid">
							<Navbar />
							<DetailsPlanets />
						</Route>
						<Route exact path="/vehicle">
							<Navbar />
							<Vehicles />
						</Route>
						<Route exact path="/detailsvehicles/:theid">
							<Navbar />
							<DetailsVehicles />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
