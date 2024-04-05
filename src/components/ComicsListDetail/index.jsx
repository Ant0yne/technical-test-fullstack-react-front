import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./comicsListDetail.scss";

const ComicsListDetail = ({
	comic,
	token,
	favComics,
	setFavComics,
	setIsModalLog,
}) => {
	// All the comic info
	const { thumbnail, _id, title, description } = comic;
	// Check if comic is fav for user
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		for (const favComic of favComics) {
			_id === favComic._id ? setIsFav(true) : setIsFav(false);
		}
	}, [setIsFav]);

	const handleFav = async (command) => {
		if (token) {
			if (command === "add") {
				// Add the comic to the fav list
				const temp = [...favComics];
				temp.push(comic);

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
				// Remove the comic from the fav list
				const temp = [...favComics];
				for (let i = 0; i < temp.length; i++) {
					if (temp[i]._id === _id) {
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

	// The path if click on comic with the comic id
	const link = "/comic/" + _id;

	return (
		<div className="comic-list-detail">
			<Link to={link}>
				<img
					src={thumbnail.path + "/portrait_small." + thumbnail.extension}
					alt=""
				/>
				{/* <p>{_id}</p>
				<p>{title}</p>
			<p>{description}</p> */}
			</Link>
			{isFav ? (
				<button onClick={() => handleFav("remove")}>
					Remove from Favorite
				</button>
			) : (
				<button onClick={() => handleFav("add")}>Add to Favorite</button>
			)}
		</div>
	);
};

export default ComicsListDetail;
