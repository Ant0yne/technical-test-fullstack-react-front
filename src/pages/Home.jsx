// COMPONENTS
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";

const Home = ({ token, setToken, isModalLog, setIsModalLog }) => {
	return (
		<>
			<Header
				token={token}
				setToken={setToken}
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
			/>
			<MainHome />
			<Footer />
		</>
	);
};

export default Home;
