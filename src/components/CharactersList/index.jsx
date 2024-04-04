import axios from "axios";
import { useEffect, useState } from "react";

// COMPONENTS
import Loading from "../Loading";
import CharactersListDetail from "../CharactersListDetail";

import "./charactersList.scss";

const CharactersList = ({ token, favCharacters, setFavCharacters, url }) => {
	// data received by the request
	const [data, setData] = useState();
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url);

				// assign the data sent by the request to data
				setData(response.data);
				// remove the loading screen
				setIsLoading(false);
			} catch (error) {
				console.error(error.response.data.message);
			}
		};

		fetchData();
	}, [setData, setIsLoading, url]);

	return isLoading ? (
		<Loading />
	) : (
		<section id="characters-list">
			{data.results.map((character) => {
				return (
					<CharactersListDetail
						key={character._id}
						character={character}
						token={token}
						favCharacters={favCharacters}
						setFavCharacters={setFavCharacters}
					/>
				);
			})}
		</section>
	);
};

export default CharactersList;
