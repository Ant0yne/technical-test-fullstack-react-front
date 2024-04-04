import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./comicsListDetail.scss";

const ComicsListDetail = ({ comic, favComics, setFavComics }) => {
	// All the comic info
	const { thumbnail, _id, title, description } = comic;
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		for (const favComic of favComics) {
			_id === favComic._id ? setIsFav(true) : setIsFav(false);
		}
	}, [setIsFav]);

	const handleFav = () => {};

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
				<button onClick={handleFav}>Remove from Favorite</button>
			) : (
				<button onClick={handleFav}>Add to Favorite</button>
			)}
		</div>
	);
};

export default ComicsListDetail;
