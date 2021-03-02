import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";
import { Spinner } from "react-bootstrap";

import { Login } from "./login";
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
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Login />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/character">
							<Character />
						</Route>
						<Route exact path="/detailscharacter/:theid">
							<DetailsCharacter />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/detailsplanets/:theid">
							<DetailsPlanets />
						</Route>
						<Route exact path="/vehicle">
							<Vehicles />
						</Route>
						<Route exact path="/detailsvehicles/:theid">
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
