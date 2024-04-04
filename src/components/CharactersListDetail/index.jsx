import { Link } from "react-router-dom";

import "./charactersListDetail.scss";

const CharactersListDetail = ({ character }) => {
	const { _id, thumbnail, comics, name, description } = character;

	const link = "/comics/" + _id;
	return (
		<div className="comic-list-detail">
			<Link to={link}>
				<img
					src={thumbnail.path + "/portrait_small." + thumbnail.extension}
					alt=""
				/>
			</Link>
			<button>Favorite</button>
		</div>
	);
};

export default CharactersListDetail;
