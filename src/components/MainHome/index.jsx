import { Link } from "react-router-dom";

import "./mainHome.scss";

const MainHome = () => {
	return (
		<main id="main-home">
			<div className="container">
				<section id="home">
					<Link to="/comics">
						<div id="comic-home"></div>
					</Link>
					<Link to="/characters">
						<div id="cha-home"></div>
					</Link>
				</section>
			</div>
		</main>
	);
};

export default MainHome;
