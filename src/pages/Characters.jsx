// COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
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
				<Hero />
				<CharactersList
					token={token}
					favCharacters={favCharacters}
					setFavCharacters={setFavCharacters}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Characters;
