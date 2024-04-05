import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// COMPONENTS
import Loading from "../Loading";
import Hero from "../Hero";
import ComicsListDetail from "../ComicsListDetail";

import "./comicsList.scss";

const ComicsList = ({ token, favComics, setFavComics, setIsModalLog }) => {
	// data received by the request
	const [data, setData] = useState();
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);
	// retreive the queries and set default value if there is none
	const [queries, setQueries] = useSearchParams();
	const [limit, setLimit] = useState(queries.get("limit") || 100);
	const [skip, setSkip] = useState(queries.get("skip") || 0);
	const [title, setTitle] = useState(queries.get("title") || "");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${
						import.meta.env.VITE_BACK
					}/comics?title=${title}&limit=${limit}&skip=${skip}`
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
	}, [setData, setIsLoading, title, skip, limit]);

	return isLoading ? (
		<Loading />
	) : (
		<>
			<Hero
				limit={limit}
				setLimit={setLimit}
				skip={skip}
				setSkip={setSkip}
				search={title}
				setSearch={setTitle}
				count={data.count}
			/>
			<section id="comics-list">
				{data.results.map((comic) => {
					return (
						<ComicsListDetail
							key={comic._id}
							comic={comic}
							token={token}
							favComics={favComics}
							setFavComics={setFavComics}
							setIsModalLog={setIsModalLog}
						/>
					);
				})}
			</section>
		</>
	);
};

export default ComicsList;
