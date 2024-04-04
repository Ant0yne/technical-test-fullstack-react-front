import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// COMPONENTS
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
	favComics,
	setFavComics,
}) => {
	// retreive the queries and set default value if there is none
	const [queries, setQueries] = useSearchParams();
	const [limit, setLimit] = useState(queries.get("limit") || 100);
	const [skip, setSkip] = useState(queries.get("skip") || 0);
	const [title, setTitle] = useState(queries.get("title") || "");
	// To navigate with the goog url
	const pageType = "comics";

	const url = `${
		import.meta.env.VITE_BACK
	}/comics?title=${title}&limit=${limit}&skip=${skip}`;

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
					search={title}
					setSearch={setTitle}
					pageType={pageType}
				/>
				<ComicsList
					token={token}
					url={url}
					favComics={favComics}
					setFavComics={setFavComics}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Comics;
