import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./charactersListDetail.scss";
import favIcon from "../../assets/fav.png";
import favIconNB from "../../assets/favNB.png";

const CharactersListDetail = ({
	character,
	token,
	favCharacters,
	setFavCharacters,
	setIsModalLog,
	url,
}) => {
	const { _id, thumbnail, comics, name, description } = character;
	// Check if comic is fav for user
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		for (const favCharacter of favCharacters) {
			_id === favCharacter._id ? setIsFav(true) : setIsFav(false);
		}
	}, [setIsFav]);

	const handleFav = async (command) => {
		if (token) {
			if (command === "add") {
				// Add the characters to the fav list
				const temp = [...favCharacters];
				temp.push(character);

				// Replace the characters fav list for user in DDB
				//with the new one
				try {
					const response = await axios.put(
						import.meta.env.VITE_BACK + "/user/fav",
						{
							favCharacters: temp,
						},
						{
							headers: {
								Authorization: "Bearer " + token,
								"Content-Type": "application/json",
							},
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
					if (temp[i]._id === _id) {
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
						},
						{
							headers: {
								Authorization: "Bearer " + token,
								"Content-Type": "application/json",
							},
						}
					);
					setFavCharacters(temp);
					setIsFav(false);
				} catch (error) {
					console.error(error.response.data.message);
				}
			}
		} else {
			setIsModalLog(true);
		}
	};

	const link = "/comics/" + _id;
	return (
		<div className="character-list-detail">
			<Link to={link} state={{ url: url }}>
				<img
					src={thumbnail.path + "/portrait_uncanny." + thumbnail.extension}
					alt={name}
				/>
				<p>{name}</p>
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

export default CharactersListDetail;
