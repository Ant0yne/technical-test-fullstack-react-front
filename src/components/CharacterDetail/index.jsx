import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Loading from "../Loading";

import "./characterDetail.scss";

const CharacterDetail = ({ characterId }) => {
	// data received by the request
	const [data, setData] = useState();
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					import.meta.env.VITE_BACK + "/comics/" + characterId
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
	}, [setData, setIsLoading, characterId]);

	return isLoading ? (
		<Loading />
	) : (
		<section id="character-detail">
			{/* Return to search with queries conserved */}
			<Link to="/characters">
				<button>Return to Search</button>
			</Link>
			<div>
				<img
					src={
						data.thumbnail.path +
						"/portrait_uncanny." +
						data.thumbnail.extension
					}
					alt=""
				/>
			</div>
			<button>Favorite</button>
		</section>
	);
};

export default CharacterDetail;
