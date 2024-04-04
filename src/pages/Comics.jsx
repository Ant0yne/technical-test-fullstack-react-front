import { useState, useEffect } from "react";
import axios from "axios";

// COMPONENTS
import Loading from "../components/Loading";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ComicsList from "../components/ComicsList";
import Footer from "../components/Footer";

const Comics = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	redirect,
	setRedirect,
}) => {
	// favorites Comics and Characters for user
	const [favComics, setFavComics] = useState([]);
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// const formData = new FormData();

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

				// assign the data sent by the request to data
				setFavComics(response.data.favComics);
				// remove the loading screen
				setIsLoading(false);
			} catch (error) {
				console.error(error.response.data.message);
			}
		};

		fetchData();
	}, [setFavComics, setIsLoading, token]);

	return isLoading ? (
		<Loading />
	) : (
		<>
			<Header
				token={token}
				setToken={setToken}
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
				redirect={redirect}
				setRedirect={setRedirect}
			/>
			<main>
				<Hero />
				<ComicsList favComics={favComics} />
			</main>
			<Footer />
		</>
	);
};

export default Comics;
