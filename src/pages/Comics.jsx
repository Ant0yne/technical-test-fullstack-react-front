import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";
import ComicsList from "../components/ComicsList";
import Footer from "../components/Footer";

const Comics = ({
	token,
	setToken,
	isModalLog,
	setIsModalLog,
	redirect,
	setRedirect,
	favComics,
	setFavComics,
}) => {
	return (
		<>
			<Header
				token={token}
				setToken={setToken}
				isModalLog={isModalLog}
				setIsModalLog={setIsModalLog}
				redirect={redirect}
				setRedirect={setRedirect}
			/>
			<main>
				<ComicsList
					token={token}
					favComics={favComics}
					setFavComics={setFavComics}
				/>
			</main>
			<Footer />
		</>
	);
};

export default Comics;
