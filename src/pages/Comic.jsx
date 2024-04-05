import { useParams } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";
import ComicDetail from "../components/ComicDetail";
import Footer from "../components/Footer";

const Comic = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	redirect,
	setRedirect,
	favComics,
	setFavComics,
}) => {
	// Retreive the id in params
	const { comicId } = useParams();

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
				<ComicDetail
					comicId={comicId}
					token={token}
					favComics={favComics}
					setFavComics={setFavComics}
					setIsModalLog={setIsModalLog}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Comic;
