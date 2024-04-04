import { Link } from "react-router-dom";
import "./profileFavCharac.scss";

const ProfileFavCharac = ({ favCharacters, setFavCharacters }) => {
	return (
		<section id="profile-fav-comics">
			<h3>Your favorite characters</h3>
			{favCharacters.map((fav) => {
				// The path if click on comic with the comic id
				const link = "/comics/" + fav._id;
				return (
					<div key={fav._id}>
						<Link to={link}>
							<img
								src={
									fav.thumbnail.path +
									"/portrait_small." +
									fav.thumbnail.extension
								}
								alt=""
							/>
							{/* <p>{_id}</p>
				<p>{title}</p>
			<p>{description}</p> */}
						</Link>
					</div>
				);
			})}
		</section>
	);
};

export default ProfileFavCharac;
