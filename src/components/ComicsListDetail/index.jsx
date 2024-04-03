import "./comicsListDetail.scss";

const ComicsListDetail = ({ comic }) => {
	const { thumbnail, _id, title, description } = comic;
	return (
		<div>
			<img
				src={thumbnail.path + "/portrait_small." + thumbnail.extension}
				alt=""
			/>
			<p>{_id}</p>
			<p>{title}</p>
			<p>{description}</p>
		</div>
	);
};

export default ComicsListDetail;
