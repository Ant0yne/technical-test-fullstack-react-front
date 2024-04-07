import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	redirect,
	setRedirect,
}) => {
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
			<main id="not-found">
				<div>
					<h2>This page doesn't exist!</h2>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default NotFound;
