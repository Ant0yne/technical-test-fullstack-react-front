import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./comicsListDetail.scss";
import favIcon from "../../assets/fav.png";
import favIconNB from "../../assets/favNB.png";

const ComicsListDetail = ({
	comic,
	token,
	favComics,
	setFavComics,
	setIsModalLog,
	url,
	characterId,
}) => {
	// All the comic info
	const { thumbnail, _id, title, description } = comic;
	// Check if comic is fav for user
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		// console.log(favComics);
		for (let favComic of favComics) {
			console.log("comic", _id);
			console.log("fav", favComic._id);
			if (_id === favComic._id) {
				console.log("test", _id);
				return setIsFav(true);
			}
		}
		return setIsFav(false);
	}, [setIsFav, _id, favComics]);

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
			<Link to={link} state={{ url: url, characterId: characterId }}>
				<img
					src={thumbnail.path + "/portrait_incredible." + thumbnail.extension}
					alt={title}
				/>
				<p>{title.length > 25 ? title.slice(0, 22) + "..." : title}</p>
			</Link>
			{isFav ? (
				<button className="button-fav" onClick={() => handleFav("remove")}>
					<img src={favIcon} alt="remove comic from favorite list" />
				</button>
			) : (
				<button className="button-fav" onClick={() => handleFav("add")}>
					<img src={favIconNB} alt="add comic to favorite list" />
				</button>
			)}
		</div>
	);
};

export default ComicsListDetail;
