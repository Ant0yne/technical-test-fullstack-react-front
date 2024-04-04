import Header from "../components/Header";
import Hero from "../components/Hero";
import CharactersList from "../components/CharactersList";
import Footer from "../components/Footer";

const Characters = ({ token, setToken }) => {
	return (
		<>
			<Header token={token} setToken={setToken} />
			<main>
				<Hero />
				<CharactersList />
			</main>
			<Footer />
		</>
	);
};

export default Characters;
