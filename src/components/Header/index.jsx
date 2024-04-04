import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// COMPONENTS
import SignUp from "../SignUp";
import LogIn from "../LogIn";

// ASSETS
import marvelLogo from "../../assets/marvel-logo.png";

import "./header.scss";

const Header = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	redirect,
	setRedirect,
}) => {
	// display the modal to sign
	const [isModalSign, setIsModalSign] = useState(false);

	const navigate = useNavigate();

	/**
	 *  When click on "Se déconnecter" button
	 */
	const handleLogOut = () => {
		Cookies.remove("token");
		const tokenTemp = "";
		return setToken(tokenTemp);
	};

	/**
	 *
	 * @param {String} type
	 *
	 * return to the top of screen
	 *
	 * display Sign up modal or Login modal regarding wich button is click
	 */
	const handleSignLog = (type) => {
		if (type === "sign") {
			setIsModalLog(false);
			setIsModalSign(true);
		} else {
			setIsModalSign(false);
			setIsModalLog(true);
		}
	};

	return (
		<>
			<header>
				<div className="container">
					<div>
						<Link to="/">
							<img src={marvelLogo} alt="" />
						</Link>
					</div>
					{token ? (
						<div>
							<button onClick={() => navigate("/profile")}>Profile</button>
							<button onClick={handleLogOut}>Log out</button>
						</div>
					) : (
						<div>
							<button onClick={() => handleSignLog("log")}>Log In</button>{" "}
							<button onClick={() => handleSignLog("sign")}>Sign Up</button>
						</div>
					)}
				</div>
			</header>
			{isModalSign && (
				<SignUp
					setIsModalSign={setIsModalSign}
					setIsModalLog={setIsModalLog}
					setToken={setToken}
				/>
			)}
			{isModalLog && (
				<LogIn
					setIsModalLog={setIsModalLog}
					setIsModalSign={setIsModalSign}
					setToken={setToken}
					redirect={redirect}
					setRedirect={setRedirect}
				/>
			)}
		</>
	);
};

export default Header;
