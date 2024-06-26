import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

//COMPONENTS
import DropFiles from "../DropFiles";

import "./signUp.scss";

const SignUp = ({ setIsModalSign, setIsModalLog, setToken }) => {
	// state for all the input values
	const [file, setFile] = useState();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState("This is a placeholder");
	// To make the password visible
	const [isPwVisible, setIsPwVisible] = useState(false);

	/**
	 *
	 * @param {Object} e
	 *
	 * function when subimitting the form
	 *
	 */
	const sendData = async (e) => {
		setIsError("This is a placeholder");
		e.preventDefault();

		// Create the FormData to send
		const formData = new FormData();
		// Create an array with the pictures in the key "picture" in the formData

		formData.append("avatar", file);
		formData.append("username", username);
		formData.append("email", email);
		formData.append("password", password);

		try {
			const response = await axios.post(
				import.meta.env.VITE_BACK + "/user/signup",
				formData
			);

			// Create cookie "token" with server's response -> expires arbitrary for now
			Cookies.set("token", response.data.token, { expires: 10 });
			setToken(response.data.token);
			setIsModalSign(false);
		} catch (error) {
			setIsError(error.response.data.message);
		}
	};

	const handleClose = () => {
		setIsError("This is a placeholder");
		setIsModalSign(false);
	};

	return (
		<section id="signup" onClick={handleClose}>
			<div id="signup-modal" onClick={(e) => e.stopPropagation()}>
				<button onClick={handleClose} className="close-modal">
					X
				</button>
				<form onSubmit={(e) => sendData(e)}>
					<h2>S'inscrire</h2>

					<DropFiles file={file} setFile={setFile} />

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
						type="text"
						name="signupInput"
						id="signupInput"
						placeholder="Nom d'utilisateur-ice"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						className="typing-modal"
						type="email"
						name="emailSignup"
						id="emailSignup"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div className="password-div">
						<input
							className="typing-modal"
							type={isPwVisible ? "text" : "password"}
							name="passwordSignup"
							id="passwordSignup"
							placeholder="Mot de passe"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						{isPwVisible ? (
							<FontAwesomeIcon
								onClick={() => setIsPwVisible(!isPwVisible)}
								className="eye-password"
								icon="fa-regular fa-eye"
							/>
						) : (
							<FontAwesomeIcon
								onClick={() => setIsPwVisible(!isPwVisible)}
								className="eye-password"
								icon="fa-solid fa-eye"
							/>
						)}
					</div>
					<input
						type="submit"
						name="submitSignup"
						id="submitSignup"
						value="S'inscrire"
					/>
				</form>
				{/* switch from signup modal to login modal */}
				<button
					onClick={() => {
						setIsModalSign(false);
						setIsModalLog(true);
					}}>
					Tu as déjà un compte ? <span>Connecte-toi !</span>
				</button>
			</div>
		</section>
	);
};

export default SignUp;
