import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
//import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Read } from "./component/readmore";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./component/planets";
import { Character } from "./component/character";
import { Vehicles } from "./component/vehicle";

import injectContext from "./store/appContext";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	//const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/character">
							<Character />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/vehicle">
							<Vehicles />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
