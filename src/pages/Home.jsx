import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";

const Home = ({ token, setToken }) => {
	return (
		<>
			<Header token={token} setToken={setToken} />
			<MainHome />
			<Footer />
		</>
	);
};

export default Home;
