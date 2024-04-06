import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

// ROUTES
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import "./App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEye as faEyeR } from "@fortawesome/free-regular-svg-icons";
library.add(faEye, faEyeR);

function App() {
	// Check if there is a cookie "token"
	// if not, init token with ""
	const [token, setToken] = useState(Cookies.get("token") || "");
	// favorites Comics and Characters and Profile for user
	const [favComics, setFavComics] = useState([]);
	const [favCharacters, setFavCharacters] = useState([]);
	const [user, setUser] = useState();

	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);

	// display the modal to login
	const [isModalLog, setIsModalLog] = useState(false);
	// If the user needs to be redirect after sign/log
	const [redirect, setRedirect] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					import.meta.env.VITE_BACK + "/user/fav",
					{
						headers: {
							Authorization: "Bearer " + token,
							"Content-Type": "multipart/form-data",
						},
					}
				);

				const username = response.data.account.username;
				const avatar = response.data.account.avatar.secure_url;

				// assign the data sent by the request
				setFavComics(response.data.favComics);
				setFavCharacters(response.data.favCharacters);
				setUser({
					username,
					avatar,
				});
			} catch (error) {
				console.error(error.response.data.message);
			}
		};

		if (token) {
			fetchData();
		}
		// remove the loading screen
		setIsLoading(false);
	}, [setFavComics, setIsLoading, setUser, token]);

	return isLoading ? (
		<Loading />
	) : (
		<Router>
			<Routes>
				<>
					{/* route by default */}
					<Route
						path="/"
						element={
							<Home
								token={token}
								setToken={setToken}
								isModalLog={isModalLog}
								setIsModalLog={setIsModalLog}
								redirect={redirect}
								setRedirect={setRedirect}
							/>
						}
					/>
					{/* All the Comics (default 100 first alphabetic title order*/}
					<Route
						path="/comics"
						element={
							<Comics
								token={token}
								setToken={setToken}
								isModalLog={isModalLog}
								setIsModalLog={setIsModalLog}
								redirect={redirect}
								setRedirect={setRedirect}
								favComics={favComics}
								setFavComics={setFavComics}
							/>
						}
					/>
					{/* A specific Comic by id*/}
					<Route
						path="/comic/:comicId"
						element={
							<Comic
								token={token}
								setToken={setToken}
								isModalLog={isModalLog}
								setIsModalLog={setIsModalLog}
								redirect={redirect}
								setRedirect={setRedirect}
								favComics={favComics}
								setFavComics={setFavComics}
							/>
						}
					/>
					{/* All the Characters (default 100 first alphabetic title order*/}
					<Route
						path="/characters"
						element={
							<Characters
								token={token}
								setToken={setToken}
								isModalLog={isModalLog}
								setIsModalLog={setIsModalLog}
								redirect={redirect}
								setRedirect={setRedirect}
								favCharacters={favCharacters}
								setFavCharacters={setFavCharacters}
							/>
						}
					/>
					{/* A specific Character by id (with all comics related to them)*/}
					<Route
						path="/comics/:characterId"
						element={
							<Character
								token={token}
								setToken={setToken}
								isModalLog={isModalLog}
								setIsModalLog={setIsModalLog}
								redirect={redirect}
								setRedirect={setRedirect}
								favCharacters={favCharacters}
								setFavCharacters={setFavCharacters}
								favComics={favComics}
								setFavComics={setFavComics}
							/>
						}
					/>
					{/* A specific Character by id (with all comics related to them)*/}
					<Route
						path="/profile"
						element={
							<Profile
								token={token}
								setToken={setToken}
								isModalLog={isModalLog}
								setIsModalLog={setIsModalLog}
								redirect={redirect}
								setRedirect={setRedirect}
								user={user}
								favComics={favComics}
								setFavComics={setFavComics}
								favCharacters={favCharacters}
								setFavCharacters={setFavCharacters}
							/>
						}
					/>

					{/* route 404 not found */}
					<Route
						path="*"
						element={
							<NotFound
								token={token}
								setToken={setToken}
								isModalLog={isModalLog}
								setIsModalLog={setIsModalLog}
							/>
						}
					/>
				</>
			</Routes>
		</Router>
	);
}

export default App;
