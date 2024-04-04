import { useParams } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";
import ComicDetail from "../components/ComicDetail";
import Footer from "../components/Footer";

const Comic = ({ token, setToken, isModalLog, setIsModalLog }) => {
	// Retreive the id in params
	const { comicId } = useParams();

	return (
		<>
			<Header
				token={token}
				setToken={setToken}
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
			/>
			<main>
				<ComicDetail comicId={comicId} />
			</main>
			<Footer />
		</>
	);
};

export default Comic;
