import { useParams } from "react-router-dom";

import Header from "../components/Header";
import ComicDetail from "../components/ComicDetail";
import Footer from "../components/Footer";

const Comic = ({ token, setToken }) => {
	// Retreive the id in params
	const { comicId } = useParams();

	return (
		<>
			<Header token={token} setToken={setToken} />
			<main>
				<ComicDetail comicId={comicId} />
			</main>
			<Footer />
		</>
	);
};

export default Comic;
