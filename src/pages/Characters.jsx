import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import CharactersList from "../components/CharactersList";
import Footer from "../components/Footer";

const Characters = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	redirect,
	setRedirect,
	favCharacters,
	setFavCharacters,
}) => {
	// retreive the queries and set default value if there is none
	const [queries, setQueries] = useSearchParams();
	const [limit, setLimit] = useState(queries.get("limit") || 100);
	const [skip, setSkip] = useState(queries.get("skip") || 0);
	const [name, setName] = useState(queries.get("name") || "");
	// To navigate with the goog url
	const pageType = "charac";

	const url = `${
		import.meta.env.VITE_BACK
	}/characters?name=${name}&limit=${limit}&skip=${skip}`;

	return (
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
				<Hero
					limit={limit}
					setLimit={setLimit}
					skip={skip}
					setSkip={setSkip}
					search={name}
					setSearch={setName}
					pageType={pageType}
				/>
				<CharactersList
					token={token}
					url={url}
					favCharacters={favCharacters}
					setFavCharacters={setFavCharacters}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Characters;
