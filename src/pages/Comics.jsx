// COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import ComicsList from "../components/ComicsList";
import Footer from "../components/Footer";

const Comics = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	redirect,
	setRedirect,
	favComics,
	setFavComics,
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
				<ComicsList
					token={token}
					favComics={favComics}
					setFavComics={setFavComics}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Comics;
