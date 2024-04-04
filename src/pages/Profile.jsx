import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	redirect,
	setRedirect,
}) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			setIsModalLog(true);
			setRedirect("/");
			navigate("/");
		}
	}, [token, setIsModalLog, setRedirect, navigate]);
	return (
		<>
			<Header
				token={token}
				setToken={setToken}
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
				redirect={redirect}
				setRedirect={setRedirect}
			/>
			<Footer />
		</>
	);
};

export default Profile;
