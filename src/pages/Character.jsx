import { useParams, useLocation } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";
import CharacterDetail from "../components/CharacterDetail";
import Footer from "../components/Footer";

const Character = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	redirect,
	setRedirect,
	favCharacters,
	setFavCharacters,
	favComics,
	setFavComics,
}) => {
	// Retreive the id in params
	const { characterId } = useParams();
	const { state } = useLocation();
	let url = null;

	if (state && "url" in state) {
		url = state.url;
	}

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
				<CharacterDetail
					characterId={characterId}
					token={token}
					favCharacters={favCharacters}
					setFavCharacters={setFavCharacters}
					favComics={favComics}
					setFavComics={setFavComics}
					setIsModalLog={setIsModalLog}
					url={url}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Character;
