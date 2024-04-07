import Header from "../Header";
import Footer from "../Footer";

import "./loading.scss";

const Loading = () => {
	return (
		<section id="loading">
			<h2>
				Chargement <span id="dot-1">.</span>
				<span id="dot-2">.</span>
				<span id="dot-3">.</span>
			</h2>
		</section>
	);
};

export default Loading;
