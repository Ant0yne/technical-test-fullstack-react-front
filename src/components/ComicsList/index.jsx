import axios from "axios";
import { useEffect, useState } from "react";

// COMPONENTS
import Loading from "../Loading";
import ComicsListDetail from "../ComicsListDetail";

import "./comicsList.scss";

const ComicsList = ({ token, favComics, setFavComics, url }) => {
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
		<section id="comics-list">
			{data.results.map((comic) => {
				return (
					<ComicsListDetail
						key={comic._id}
						comic={comic}
						token={token}
						favComics={favComics}
						setFavComics={setFavComics}
					/>
				);
			})}
		</section>
	);
};

export default ComicsList;
