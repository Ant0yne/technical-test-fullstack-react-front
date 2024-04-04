import { useParams } from "react-router-dom";

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
}) => {
	// Retreive the id in params
	const { characterId } = useParams();

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
				<CharacterDetail characterId={characterId} />
			</main>
			<Footer />
		</>
	);
};

export default Character;
