import { Link } from "react-router-dom";
import axios from "axios";

import "./profileFavComics.scss";

const ProfileFavComics = ({ token, favComics, setFavComics }) => {
	const handleFav = async (id) => {
		// Remove the comic from the fav list
		const temp = [...favComics];
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
					favComics: temp,
				},
				{
					headers: {
						Authorization: "Bearer " + token,
						"Content-Type": "application/json",
					},
				}
			);
			setFavComics(temp);
		} catch (error) {
			console.error(error.response.data.message);
		}
	};

	return (
		<section id="profile-fav-comics">
			<h3>Your favorite comics :</h3>
			<nav>
				{favComics.map((fav) => {
					// The path if click on comic with the comic id
					const link = "/comic/" + fav._id;
					return (
						<div key={fav._id} className="profile-fav-comic">
							<Link to={link} state={{ url: "/profile", characterId: null }}>
								<img
									src={
										fav.thumbnail.path +
										"/portrait_uncanny." +
										fav.thumbnail.extension
									}
									alt={fav.title}
								/>

								<p>{fav.title}</p>
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

export default ProfileFavComics;
