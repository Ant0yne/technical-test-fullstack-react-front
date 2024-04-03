import Header from "../components/Header";
import Hero from "../components/Hero";
import ComicsList from "../components/ComicsList";
import Footer from "../components/Footer";

const Comics = ({ token, setToken }) => {
	return (
		<>
			<Header token={token} setToken={setToken} />
			<main>
				<Hero />
				<ComicsList />
			</main>
			<Footer />
		</>
	);
};

export default Comics;
