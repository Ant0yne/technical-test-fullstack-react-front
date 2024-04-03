import Header from "../components/Header";
import Footer from "../components/Footer";

const Comics = ({ token, setToken }) => {
	return (
		<>
			<Header token={token} setToken={setToken} />
			<Footer />
		</>
	);
};

export default Comics;
