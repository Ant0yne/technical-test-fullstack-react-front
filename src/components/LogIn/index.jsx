import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./logIn.scss";

const LogIn = ({
	setToken,
	setIsModalLog,
	setIsModalSign,
	redirect,
	setRedirect,
}) => {
	// state for all the input values
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState("This is a placeholder");

	const navigate = useNavigate();

	/**
	 *
	 * @param {Object} e
	 *
	 *  function when subimitting the form
	 */
	const sendData = async (e) => {
		setIsError("This is a placeholder");
		e.preventDefault();

		try {
			const response = await axios.put(
				import.meta.env.VITE_BACK + "/user/login",
				{
					email: email,
					password: password,
				}
			);

			// Create cookie and assign it to state the close the log modale
			Cookies.set("token", response.data.token, { expires: 10 });
			setToken(response.data.token);
			setIsModalLog(false);

			// If the user was sent to Login another page
			// navigate directly to route after login
			if (redirect === "profile") {
				setRedirect("");
				navigate("/profile");
			}
		} catch (error) {
			setIsError(error.response.data.message);
		}
	};

	return (
		<section id="login" onClick={() => setIsModalLog(false)}>
			<div id="login-modal" onClick={(e) => e.stopPropagation()}>
				<button
					onClick={() => {
						setIsModalLog(false);
						setRedirect("");
					}}
					className="close-modal">
					X
				</button>
				<form onSubmit={(e) => sendData(e)}>
					<h2>Se connecter</h2>

					{/* The error from the request to display */}
					<span
						className={
							isError !== "This is a placeholder"
								? "error-visible"
								: "error-not-visible"
						}>
						{isError}
					</span>

					<input
						className="typing-modal"
						type="email"
						name="emailLogin"
						id="emailLogin"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className="typing-modal"
						type="password"
						name="passwordLogin"
						id="passwordLogin"
						placeholder="Mot de passe"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="submit"
						name="submitLogin"
						id="submitLogin"
						value="Se Connecter"
					/>
				</form>
				{/* switch from login modal to signup modal */}
				<button
					onClick={() => {
						setIsModalLog(false);
						setIsModalSign(true);
					}}>
					Pas encore de compte ? <span>Inscris-toi !</span>
				</button>
			</div>
		</section>
	);
};

export default LogIn;
