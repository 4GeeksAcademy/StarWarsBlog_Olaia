import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import DetailCard from "./views/detailCard.jsx";
import DetailPlanets from "./views/detailPlanets.jsx";
import DetailVehicles  from "./views/detailVehicles.jsx";
import { Favorites } from "./views/favorites.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/detail-people/:people_id" element={<DetailCard />} />
						<Route path="/detail-planet/:planet_id" element={<DetailPlanets />} />
						<Route path="/detail-vehicle/:vehicle_id" element={<DetailVehicles />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);