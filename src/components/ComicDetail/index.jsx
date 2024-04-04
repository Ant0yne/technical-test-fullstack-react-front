import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "../Loading";

import "./comicDetail.scss";

const ComicDetail = ({ comicId }) => {
	// data received by the request
	const [data, setData] = useState();
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					import.meta.env.VITE_BACK + "/comic/" + comicId
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
	}, [setData, setIsLoading, comicId]);

	return isLoading ? (
		<Loading />
	) : (
		<section id="comic-detail">
			<Link to="/comics">
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

export default ComicDetail;
