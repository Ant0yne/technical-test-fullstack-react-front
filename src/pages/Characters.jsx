// COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import CharactersList from "../components/CharactersList";
import Footer from "../components/Footer";

const Characters = ({ token, setToken, isModalLog, setIsModalLog }) => {
	return (
		<>
			<Header
				token={token}
				setToken={setToken}
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
			/>
			<main>
				<Hero />
				<CharactersList />
			</main>
			<Footer />
		</>
	);
};

export default Characters;
