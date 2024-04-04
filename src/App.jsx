import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// ROUTES
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import NotFound from "./pages/NotFound";

import "./App.scss";

function App() {
	const [token, setToken] = useState(Cookies.get("token") || "");

	return (
		<Router>
			<Routes>
				{/* route by default */}
				<Route path="/" element={<Home token={token} setToken={setToken} />} />
				{/* All the Comics (default 100 first alphabetic title order*/}
				<Route
					path="/comics"
					element={<Comics token={token} setToken={setToken} />}
				/>
				{/* A specific Comic by id*/}
				<Route
					path="/comic/:comicId"
					element={<Comic token={token} setToken={setToken} />}
				/>
				{/* All the Characters (default 100 first alphabetic title order*/}
				<Route
					path="/characters"
					element={<Characters token={token} setToken={setToken} />}
				/>
				{/* A specific Character by id (with all comics related to them)*/}
				<Route
					path="/comics/:characterId"
					element={<Character token={token} setToken={setToken} />}
				/>

				{/* route 404 not found */}
				<Route
					path="*"
					element={<NotFound token={token} setToken={setToken} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
