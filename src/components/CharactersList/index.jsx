import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// COMPONENTS
import Loading from "../Loading";
import Hero from "../Hero";
import CharactersListDetail from "../CharactersListDetail";

import "./charactersList.scss";

const CharactersList = ({ token, favCharacters, setFavCharacters, url }) => {
	// data received by the request
	const [data, setData] = useState();
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);

	// retreive the queries and set default value if there is none
	const [queries, setQueries] = useSearchParams();
	const [limit, setLimit] = useState(queries.get("limit") || 100);
	const [skip, setSkip] = useState(queries.get("skip") || 0);
	const [name, setName] = useState(queries.get("name") || "");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${
						import.meta.env.VITE_BACK
					}/characters?name=${name}&limit=${limit}&skip=${skip}`
				);

				// assign the data sent by the request to data
				setData(response.data);
				// remove the loading screen
				setIsLoading(false);
			} catch (error) {
				console.error(error.response.data.message);
			}
		};

		fetchData();
	}, [setData, setIsLoading, name, skip, limit]);

	return isLoading ? (
		<Loading />
	) : (
		<>
			<Hero
				limit={limit}
				setLimit={setLimit}
				skip={skip}
				setSkip={setSkip}
				search={name}
				setSearch={setName}
				count={data.count}
			/>
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
		</>
	);
};

export default CharactersList;
