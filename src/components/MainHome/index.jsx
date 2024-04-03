import { Link } from "react-router-dom";

import "./mainHome.scss";

const MainHome = () => {
	return (
		<main>
			<section id="home">
				<div id="comic-home">
					<Link to="/comics">
						<button></button>
					</Link>
				</div>
				<div id="cha-home">
					<Link to="/characters"></Link>
				</div>
			</section>
		</main>
	);
};

export default MainHome;
