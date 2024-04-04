import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import Loading from "../Loading";
import ComicsListDetail from "../ComicsListDetail";

import "./characterDetail.scss";

const CharacterDetail = ({
	characterId,
	token,
	favCharacters,
	setFavCharacters,
	favComics,
	setFavComics,
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

		for (const favCharacter of favCharacters) {
			characterId === favCharacter._id ? setIsFav(true) : setIsFav(false);
		}
	}, [setData, setIsLoading, characterId, favCharacters, setIsFav]);

	const handleFav = async (command) => {
		if (command === "add") {
			// Add the characters to the fav list
			const temp = [...favCharacters];
			temp.push(data);

			// Replace the characters fav list for user in DDB
			//with the new one
			try {
				const response = await axios.put(
					import.meta.env.VITE_BACK + "/user/fav",
					{
						favCharacters: temp,
						token: token,
					}
				);
				setFavCharacters(temp);
				setIsFav(true);
			} catch (error) {
				console.error(error.response.data.message);
			}
		} else {
			// Remove the characters from the fav list
			const temp = [...favCharacters];
			for (let i = 0; i < temp.length; i++) {
				if (temp[i]._id === characterId) {
					temp.splice(i, 1);
				}
			}

			// Replace the characters fav list for user in DDB
			//with the new one
			try {
				const response = await axios.put(
					import.meta.env.VITE_BACK + "/user/fav",
					{
						favCharacters: temp,
						token: token,
					}
				);
				setFavCharacters(temp);
				setIsFav(false);
			} catch (error) {
				console.error(error.response.data.message);
			}
		}
	};

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
				{isFav ? (
					<button onClick={() => handleFav("remove")}>
						Remove from Favorite
					</button>
				) : (
					<button onClick={() => handleFav("add")}>Add to Favorite</button>
				)}
			</div>
			<aside>
				<p>Apparait dans :</p>
				{data.comics.map((comic) => {
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
			</aside>
		</section>
	);
};

export default CharacterDetail;
