import { Link } from "react-router-dom";

import "./comicsListDetail.scss";

const ComicsListDetail = ({ comic }) => {
	const { thumbnail, _id, title, description } = comic;

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
			<button>Favorite</button>
		</div>
	);
};

export default ComicsListDetail;
