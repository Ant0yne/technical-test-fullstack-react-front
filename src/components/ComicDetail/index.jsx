import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// COMPONENTS
import Loading from "../Loading";

import "./comicDetail.scss";

const ComicDetail = ({
	comicId,
	token,
	favComics,
	setFavComics,
	setIsModalLog,
	url,
	characterId,
}) => {
	// data received by the request
	const [data, setData] = useState();
	// display a loading screen until data is received
	const [isLoading, setIsLoading] = useState(true);
	// Check if comic is fav for user
	const [isFav, setIsFav] = useState(false);

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

		for (const favComic of favComics) {
			if (comicId === favComic._id) {
				setIsFav(true);
			}
		}
	}, [setData, setIsLoading, comicId, favComics, setIsFav]);

	const handleFav = async (command) => {
		if (token) {
			if (command === "add") {
				// Add the comic to the fav list
				const temp = [...favComics];
				temp.push(data);

				// Replace the comics fav list for user in DDB
				//with the new one
				try {
					const response = await axios.put(
						import.meta.env.VITE_BACK + "/user/fav",
						{
							favComics: temp,
							token: token,
						}
					);
					setFavComics(temp);
					setIsFav(true);
				} catch (error) {
					console.error(error.response.data.message);
				}
			} else {
				// Remove the comic to the fav list
				const temp = [...favComics];
				for (let i = 0; i < temp.length; i++) {
					if (temp[i]._id === comicId) {
						temp.splice(i, 1);
					}
				}

				// Replace the comics fav list for user in DDB
				//with the new one
				try {
					const response = await axios.put(
						import.meta.env.VITE_BACK + "/user/fav",
						{
							favComics: temp,
							token: token,
						}
					);

					setFavComics(temp);
					setIsFav(false);
				} catch (error) {
					console.error(error.response.data.message);
				}
			}
		} else {
			setIsModalLog(true);
		}
	};

	return isLoading ? (
		<Loading />
	) : (
		<section id="comic-detail">
			<div className="container">
				{/* Return to search with queries conserved */}
				<Link
					state={{ url: url }}
					to={characterId ? "/comics/" + characterId : url}>
					<button>
						<FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Return to Search
					</button>
				</Link>
				<div>
					<img
						src={
							data.thumbnail.path +
							"/portrait_uncanny." +
							data.thumbnail.extension
						}
						alt={data.title}
					/>
					<h3>{data.title}</h3>
					<p>{data.description}</p>
				</div>
				<aside>
					{isFav ? (
						<button
							onClick={() => handleFav("remove")}
							className="remove-button-fav">
							Remove from Favorite
						</button>
					) : (
						<button onClick={() => handleFav("add")} className="add-button-fav">
							Add to Favorite
						</button>
					)}
				</aside>
			</div>
		</section>
	);
};

export default ComicDetail;
