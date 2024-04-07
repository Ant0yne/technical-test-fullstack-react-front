import "./profileInfo.scss";

const ProfileInfo = ({ username, avatar }) => {
	return (
		<section id="profile-info">
			<img src={avatar} alt="Your avatar" />
			<h2>Hi {username}!</h2>
		</section>
	);
};

export default ProfileInfo;
