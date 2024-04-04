import "./profileInfo.scss";

const ProfileInfo = ({ username, avatar }) => {
	return (
		<section id="profile-info">
			<img src={avatar} alt="" />
			<h2>{username}</h2>
		</section>
	);
};

export default ProfileInfo;
