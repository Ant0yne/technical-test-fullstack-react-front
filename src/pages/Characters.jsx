// COMPONENTS
import Header from "../components/Header";
import CharactersList from "../components/CharactersList";
import Footer from "../components/Footer";

const Characters = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	redirect,
	setRedirect,
	favCharacters,
	setFavCharacters,
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
			<main>
				<div className="container">
					<CharactersList
						token={token}
						favCharacters={favCharacters}
						setFavCharacters={setFavCharacters}
						setIsModalLog={setIsModalLog}
					/>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Characters;
