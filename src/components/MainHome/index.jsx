import { Link } from "react-router-dom";

import "./mainHome.scss";

const MainHome = () => {
	return (
		<main>
			<div className="container">
				<section id="home">
					<div id="comic-home">
						<Link to="/comics">
							<button></button>
						</Link>
					</div>
					<div id="cha-home">
						<Link to="/characters">
							<button></button>
						</Link>
					</div>
				</section>
			</div>
		</main>
	);
};

export default MainHome;
