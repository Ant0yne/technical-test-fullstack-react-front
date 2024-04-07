import { Link } from "react-router-dom";
import axios from "axios";

import "./profileFavCharac.scss";

const ProfileFavCharac = ({ token, favCharacters, setFavCharacters }) => {
	const handleFav = async (id) => {
		// Remove the comic from the fav list
		const temp = [...favCharacters];
		for (let i = 0; i < temp.length; i++) {
			if (temp[i]._id === id) {
				temp.splice(i, 1);
			}
		}

		// Replace the comics fav list for user in DDB
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
		} catch (error) {
			console.error(error.response.data.message);
		}
	};

	return (
		<section id="profile-fav-characters">
			<h3>Your favorite characters</h3>
			<nav>
				{favCharacters.map((fav) => {
					// The path if click on comic with the comic id
					const link = "/comics/" + fav._id;
					return (
						<div key={fav._id} className="profile-fav-charac">
							<Link to={link} state={{ url: "/profile", characterId: fav._id }}>
								<img
									src={
										fav.thumbnail.path +
										"/portrait_uncanny." +
										fav.thumbnail.extension
									}
									alt={fav.name}
								/>
								<p>{fav.name}</p>
							</Link>
							<button onClick={() => handleFav(fav._id)}>
								Remove from Favorite
							</button>
						</div>
					);
				})}
			</nav>
		</section>
	);
};

export default ProfileFavCharac;
