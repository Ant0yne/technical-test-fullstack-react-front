import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// COMPONENTS
import Loading from "../Loading";
import Hero from "../Hero";
import CharactersListDetail from "../CharactersListDetail";

import "./charactersList.scss";

const CharactersList = ({
	token,
	favCharacters,
	setFavCharacters,
	setIsModalLog,
}) => {
	// data received by the request
	const [data, setData] = useState();
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);

	// retreive the queries and set default value if there is none
	const [queries, setQueries] = useSearchParams();
	const [limit, setLimit] = useState(queries.get("limit") || 100);
	const [skip, setSkip] = useState(queries.get("skip") || 0);
	const [name, setName] = useState(queries.get("name") || "");
	// To save all the queries when changing pages
	const [url, setUrl] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			setUrl(`/characters?name=${name}&limit=${limit}&skip=${skip}`);
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
	}, [setData, setIsLoading, name, skip, limit, setUrl]);

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
							setIsModalLog={setIsModalLog}
							url={url}
						/>
					);
				})}
			</section>
		</>
	);
};

export default CharactersList;
