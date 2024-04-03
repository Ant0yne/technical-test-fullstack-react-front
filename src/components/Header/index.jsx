import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import marvelLogo from "../../assets/marvel-logo.png";

import "./header.scss";

const Header = ({ token, setToken }) => {
	// the actual width of the screen
	const [width, setWidth] = useState(window.innerWidth);
	const [onMobile, setOnMobile] = useState(true);

	// When the width change, change the state width with the new width
	// Start displaying additionnal button if width no more mobile size
	// Then stop listening to the width change
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		if (width > 520 && onMobile) {
			setOnMobile(false);
		} else if (width <= 520 && !onMobile) {
			setOnMobile(true);
		}

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [width, setWidth, setOnMobile, onMobile]);

	return (
		<header>
			<div>
				<Link to="/">
					<img src={marvelLogo} alt="" />
				</Link>
			</div>
			{token ? (
				<div>
					{onMobile ? (
						<button>Profile</button>
					) : (
						<>
							<button>Profile</button> <button>Log out</button>
						</>
					)}
				</div>
			) : (
				<div>
					{onMobile ? (
						<button>Log In</button>
					) : (
						<>
							<button>Log In</button> <button>Sign Up</button>
						</>
					)}
				</div>
			)}
		</header>
	);
};

export default Header;
