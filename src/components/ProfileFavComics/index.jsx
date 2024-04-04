import { Link } from "react-router-dom";
import "./profileFavComics.scss";

const ProfileFavComics = ({ favComics, setFavComics }) => {
	return (
		<section id="profile-fav-comics">
			<h3>Your favorite comics</h3>
			{favComics.map((fav) => {
				// The path if click on comic with the comic id
				const link = "/comic/" + fav._id;
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

export default ProfileFavComics;
